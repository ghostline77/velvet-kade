# VK001 mod.io FX and device routes

Research date: 2026-11-08. These sources are outside the shipping package profiles. Nothing was installed, uploaded or tested in the running game.

## Findings

There is a substantially better route than replacing hundreds of NPC/player entities: **native mod.io scripting**. CDPR's [cross-platform creation guide](https://mod.io/g/cyberpunk-2077/r/how-to-create-mods-for-cross-platform-mod-support) explicitly supports script patches, documents the local console-function blacklist check, and specifies `RedMod.exe validate-mod-scripts -root="<game>" -compile -directory="<mod>"`. Sources live in the mod's `r6/scripts`; compiled patches and their hash file are produced under its `r6/cache`. The guide's local installation steps were not performed.

The wiki-linked `ModdingReference.script` also documents native prefix/postfix annotations. The reference was downloaded to `work/modio-research` for inspection, not included in our module.

`r6/scripts/NativeCompatibilityProbe.script` passes the **official REDmod `validate-mod-scripts -compile` command**, exit code 0. Its native APIs cover:

- A postfix on `ScriptedPuppet.OnStatusEffectApplied`, restricted to `BaseStatusEffect.GhostlineVelvetCrashShortBlind`.
- `FxSystem.SpawnEffect` and `FxInstance.AttachToSlot`, taking an editable native `FxResource` from one shared helper object.
- Native ink image creation and atlas/part selection.
- A postfix on the existing `ScriptableDeviceComponentPS.SetPersonalLinkStatus` method.
- Selection of only the two configured access points using editable `NodeRef` fields. No extender-only `CreateNodeRef` constructor is used.
- Reading a live device's actual controller with `Device.GetDevicePS`.
- Dispatching `ForceON`, `ForceDisabled`, `QuestForceDisconnectPersonalLink` and `QuestForcePersonalLinkUnderStrictQuestControl` through `GetQuestActionByName` and `QueuePSEvent`, using the live controller's real persistent identity and class.

The ordinary SCC module also compiled and passed a blob/RTTI check when supplied its base script bundle. An addon blob cannot be checked as a standalone base-game script bundle. The official REDmod validation of the final source is the relevant local platform check.

## Custom quickhack FX

Keep the existing status-effect and quickhack records. Replace the current attachment/resource pipeline:

1. Put the effect resource binding in one always-loaded, quest-owned FX helper using a reserved entity replacement path.
2. On the custom status effect, obtain that resource from the helper and spawn/attach an effect instance to the target. This removes the need for ArchiveXL Resource Patch entries on 14 player and 245 NPC templates.
3. For V, use an ink overlay for the existing hearts/bows artwork, with native UI animation and a defined HUD/camera policy.
4. For NPCs, investigate timed mesh cards using `effectTrackItemForwardDecal`. Its native fields include a mesh, appearance, scale, attachment, atlas dimensions/frame and fades. This offers a route to reuse the authored frame sequence without shipping `CParticleSystem` resources.

`forward-decal.effect.json` is a structural probe using a vanilla FX plane. It serialized to native CR2W and decoded with the expected six-second attached forward-decal track and no `.particle` dependency. **It is not a finished heart/bow visual and has not been rendered in the game.** Camera facing, material compatibility, alpha blending, depth, fades and attachment placement remain to be checked. Native serialization alone proves none of those visual properties.

An alternative is to reference existing, unchanged vanilla particle systems from an effect, for example confetti or holographic petals. This avoids shipping a new particle resource, but does not by itself reproduce our artwork. Replacing a shared vanilla particle texture would affect its other callers. ArchiveXL scopes are target groups, not per-effect private resource substitutions, so they do not make that side effect disappear.

The recommended custom visual prototype is therefore ink for V and mesh-card FX for NPCs. Reserve the `.effect`, mesh, texture and atlas replacement paths separately where replacement-only rules apply. Keep effect instances per target; prevent duplicate instances, break/kill them on status removal or target detach, and release them on helper shutdown. The current source proves the entry-point/API route; it does not implement that complete lifecycle or the UI controller integration.

## Access points and devices

VK001's two boxes deliberately skip the breach minigame. The quest uses a personal-link workspot, a five-second transfer, interruption/retry, strict quest control and final forced disconnect/disable. The source builders are `world/nodes.rs::device`, `compiler/blocks/shared/personal_link.rs` and `lifecycle/attempt.rs` in the quest builder.

The access-point controller settings are already embedded in sector instance data. The global `.devices` resource is emitted separately by `world::compile`. This separation gives two useful experiments:

1. **Smallest experiment:** generate the same access points in a resident sector, with embedded controller state and explicit controller class, but omit the `.devices` resource and Resource Patch registration. Gate all quest operations until the live entities/controllers exist. Determine whether the original quest device nodes work once their targets are loaded.
2. **Live bridge:** if the quest's NodeRef/class controller lookups still depend on the static map, replace those query/command edges with a native script bridge. The validated probe reads/commands the actual live component rather than resolving a new persistent object through the global map. Connection state becomes ordinary quest facts; control requests invoke the same native quest actions through the live PS identity.

The second route preserves the existing transfer graph's semantics: start on actual connection, cancel immediately on disconnect, retry, complete after the timer, terminate the disconnect listener, then force disconnect and disable. It must also forward strict quest control. Replacing only the success condition would be incomplete.

Before shipping, the bridge needs readiness/acknowledgment, fresh state sampling on load and attachment, clearing facts on unload/disconnect, and replay of outstanding control requests after save/load. A saved `connected=1` must never be treated as proof that the reloaded player remains plugged in. Persist quest outcomes in quest facts, not global ModdingSystem configuration variables.

The important unresolved engine question is **initial controller creation for a newly streamed device without the global map**. A successful script compilation cannot answer it. If that fails, investigate a reserved existing device identity already registered in the vanilla map, with ownership/reference checks before reusing it. `.devices` omission from published lists is not proof that every possible replacement of that resource is rejected, but a global replacement would conflict across independently distributed mods and is not the preferred design.

## Required implementation and runtime proof

- Add a generic resident/live-device backend to the world/quest builders; the probe does not add a new supported authoring option.
- Generate the helper entity, editable effect/NodeRef bindings and corresponding script metadata/schema. The script currently has no helper resource or world node, so its optional hooks have no bound host.
- Add native script validation/output handling to packaging; the current exporter does not yet cover this complete script project.
- Validate a resident access point without the static registry on first load, stream-out/back, save before connection, save during transfer, cancellation, retry and completion.
- Check the custom FX on V and at least two NPC rigs, including simultaneous targets, status removal, death, camera changes and HUD teardown.
- Run the actual cloud/console cooking and target-platform tests. Local REDmod validation is meaningful evidence, not a substitute for that final proof.

Scratch outputs and logs: `work/modio-research/proof.json`, `modio-validation.stdout.log`, `compile.stdout.log`, `blob-check.stdout.log`, `forward-decal.effect`, its native readback, sampled vanilla effects and particle systems. Generated script caches are ignored. Existing VK001 production sources and packages are unchanged.
