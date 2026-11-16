# VK002 implementation plan

The quest manifest owns invitation, dinner, the ordered computer investigation, joint/separate/refusal branches, relay recovery, closing, completion and cleanup. Scene specifications own couch entry/exit, speaker gaze, persistent dinner topics and the separate-route phone performance. World placements use the surveyed Dark Matter venue.

| Stage | Native flow | Persistent output |
| --- | --- | --- |
| Offer | `phone_job_offer` with VK001 completion prerequisite | accepted |
| Dinner | Seated scene, resumable topic hub and interruption cleanup | intro played; topics heard; explicit relationship choice |
| Spoof | Scene-owned notification + journal message | spoof seen |
| Evidence | Service log in Files, fake profile through NET, then courier receipt in Files; each read/visit gates its reaction | service log read; profile visited; receipt read |
| Plan | Explicit joint/separate/refuse scene exits | approach locked once |
| Landing | Joint or independent arrival, negotiated scene or optional combat, independent relay | cache revoked; client receipt acquired |
| Close | Rooftop/call alternatives; journal/fact commit, no payout | resolution, debrief done, complete |

The published prerequisite is `vk001_completed == 1`; do not wait for the
optional epilogue reply, invent a `vk001_complete` runtime fact, or replay the
released quest. Integrate through a new series adapter with its own invitation
ownership. Existing saves with completed VK001 should be eligible.

The profile is discovered from the forged message's booking URL on a quest-owned computer. Files contains the service log and courier receipt; the fake profile exists only on the native Afterglow website. File-read conditions gate the log and receipt reactions. The profile page's visit fact gates its reaction. All three steps are required before agreeing on a plan. Real surveillance-camera interaction is a later presentation enhancement.

Location contract: rooftop bar and opposing sofa workspots, wall computer and Latch encounter on the lower lounge balcony, and a relay beneath the lounge lift call panel. Shared travel uses Velvet's follower role and native rooftop-lift attachment. Combat disables the lounge Tier 2 area and restores it after victory or leaving the encounter boundary. Existing furniture remains in place.

On dinner exit before spoof, resume topic hub. After spoof, leaving pauses investigation without replaying the reveal. Joint route waits for both actors ready at the landing; independent route retains Velvet at the roof until phone contact ends. Refusal consumes the exposed contact credential and completes without spawning a needless combat actor. Aggressive exit may spawn/arm only Latch; evidence survives actor death. Cleanup follows outside checks and cannot remove Mara or modify base venue civilians.

Proposed local facts: `vk002_spoof_seen`, `vk002_log_read`, `vk002_profile_read`, `vk002_approach` (1 joint, 2 separate, 3 refuse), `vk002_cache_revoked`, `vk002_debrief_done`, `vk002_complete`. Series outcome/relationship meanings are in the bible. Spoken IDs now follow the voice tool's stable FNV-1a line-key convention; choice IDs remain distinct. Cash/item reward is zero.

Checks: already seated after load; leave during message; log read before log dialogue; profile page visited before profile dialogue; receipt read before receipt dialogue; separate verification without romance penalty; Latch dead before evidence interaction; refusal closes mappins; no payout expected; completion does not wait for optional texts.


## Build and authoring

The standalone quest compiler consumes `quest.json`, `scenes/`, `world/` and `computer/content.json`. Complete routing belongs in the quest stages and scene exit bindings. No per-quest Python generator or separate runtime-flow declaration is required. The normal series build includes this quest and shares character exports with VK001.

The native website generator creates the home/profile widgets, journal, text, atlas and font family. `world/placements.json` records the surveyed surfaces and fitted device/workspot transforms.

Audio generation belongs to separate tooling. Keep reviewed source recordings and published media in this repository, preserving their line identifiers when completing timing and lipsync.

## Planned routing

Require `vk001_completed == 1` and a six-game-hour delay before the invitation. There is no cash or item reward. Completion requires both `vk002_cache_revoked` and `vk002_debrief_done`, then sets `vk002_complete`. Optional texts do not hold completion.

| Phase | Authored behavior and routing |
| --- | --- |
| `offer` | next: arrival; defer: offer; source: native phone thread |
| `arrival` | scene: vk002_01_arrival; exits: dinner: dinner; defer: arrival; actors: velvet; mara; wait_spawn: true |
| `dinner` | scene: vk002_02_dinner; exits: spoof: spoof; defer: dinner; resume: topic hub; do not replay arrival; persist topic read flags |
| `spoof` | scene: vk002_03_spoof; before: Display forged message only after dinner scene returns spoof; exits: investigate: console |
| `console` | scene: vk002_04_console; exits: console_ready: evidence; effects: enable quest-owned computer; activate only VK002 website/documents |
| `evidence` | Read service log → vk002_05_log_first → visit profile → vk002_06_profile_second → read courier receipt → vk002_07_receipt → return for plan. Reactions are serialized and gated on the corresponding read or visit. |
| `plan` | scene: vk002_08_plan; exits: joint: landing_joint; separate: landing_separate; refuse: revoke_without_trap; effects: joint: vk002_approach: 1; vk002_plan_joint: 1; separate: vk002_approach: 2; vk002_plan_separate: 1; refuse: vk002_approach: 3; vk002_plan_refuse: 1 |
| `landing_joint` | scene: vk002_09_latch; actors: latch; v; velvet: native joint-route arrival and non-overlapping listening performance; not extra spoken lines; exits: surrender: recover_relay; combat: combat |
| `landing_separate` | scene: vk002_09_latch; actors: latch; v; velvet: remains with Mara; following verification delivered via native remote speaker readiness; exits: surrender: recover_relay; combat: combat |
| `combat` | targets: latch; exclude: mara; velvet; base civilians; exit: Latch dead or surrendered; persistent physical relay survives; next: recover_relay |
| `recover_relay` | action: local native relay interaction; effects: recover redacted Aster receipt; verify decoy request; revoke stolen venue token; remove local credential cache; next: verified |
| `verified` | scene: vk002_10_verified; exits: resolved: closing_by_approach; requires: relay transaction verified before speech |
| `revoke_without_trap` | action: local console revocation; notify Mara/security; no Latch spawn required; effects: vk002_cache_revoked; retain redacted Aster client audit from local relay pairing record; next: close_refuse |
| `closing_by_approach` | branches: 1: close_joint; 2: close_separate |
| `close_joint` | scene: vk002_11_close_joint; exits: warm_close: goodnight; resolution: 1 |
| `close_separate` | scene: vk002_11_close_separate; exits: warm_close: goodnight; professional_close: professional; resolution: 2 |
| `close_refuse` | scene: vk002_11_close_refuse; exits: professional_close: professional; resolution: 3 |
| `goodnight` | scene: vk002_12_goodnight; exits: friends: complete; interested: complete; open: complete; effects: friends: vk_relationship: 1; interested: vk_relationship: 2; open: ; verification_phrase_known: true |
| `professional` | scene: vk002_12_professional; exits: complete: complete; relationship: do not overwrite existing saved relationship implicitly; mark professional invitation preference |
| `complete` | effects: verify cache revoked; set vk002_debrief_done; journal succeeded; set vk002_complete once; cleanup: wait outside rooftop retention volume; never remove speaking actor; optional_epilogue: own delayed thread, no completion dependency |

## In-game checks

- Seated V/Velvet performance and safe interruption.
- Quest-owned computer browser binding.
- Website page-display signal timing.
- Full native root orchestration and named exits.
- Local relay commit and combat retirement.
- Actor casting/records for Mara and Latch.
- Placement and navigation.
