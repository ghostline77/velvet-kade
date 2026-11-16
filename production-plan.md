# Production and building-block plan

## Work order

1. Review each readable dialogue flow and outcomes, beginning with VK002. Existing VK001 is the published baseline; do not reopen its audio or replace its native behavior to make the sequel possible.
2. Scout the rooftop, club, clinic, surveyed race route, archive room and apartment independently. Record approach, existing activities, collision, navmesh, streaming ownership, scene origins, device mounts, entry/exit and save/load behavior. No coordinates in these drafts are production coordinates.
3. Bind one complete provisional route per episode, from invitation through action, resolution, verified reward and journal completion. Use existing native templates where appropriate. Dialogue review precedes VO; VK002 candidate audio is now authorized; other new episodes remain deferred.
4. Exercise alternate paths and transitions on a named package/save before presentation polish. Keep authoring checks, packed/readback checks and observed game results separate.
5. Add reviewed character workspots, braindance performance and FX after the route works. VK002 candidate VO may be generated earlier under the user's 2026-11-02 instruction; select and integrate it after listening review. Deliver named package and save-state handoff for each episode.

## Capability map

Block names below are actual entries in the [block catalog](../../docs/authoring/quest-block-catalog.md); selecting a block does not establish runtime feasibility for these bindings. “Composition” means quest-owned graph/scenes assembled from supported pieces. “Extension” means a missing contract requiring a separate proof, not an existing compiler stage.

| Episode | Existing candidates | Quest-owned composition | Proof or extension required |
| --- | --- | --- | --- |
| VK001 | `phone_job_offer`, `meet_contact`, `reach_area`, `hack_access_point`, `read_shard`, `leave_area`, `phone_conversation` | Published personal-link/reward lifecycle | Migration/package equivalence only; do not retest a changed story under the old receipt |
| VK002 | `meet_contact`, `read_terminal_document`, `choice_gate`; quest-owned completion | Dinner scene, forged message, profile terminal, bartender clue, negotiated decoy | Seated conversation interruption; camera timestamp presentation and evidence-order reactions |
| VK003 | `access_routes`, `stealth_monitor`, `read_terminal_document`, `hack_access_point`, `choice_gate` | Cover dialogue, Io route, patron rescue, destructive or redacted publish exits | Native dance workspot with both rigs; patron privacy filter; alert-to-negotiation route |
| VK004 | `investigate_clues`, `interact_device`, `read_shard`, `choice_gate`, `reward_commit` | Offline diagnosis, Sable/June dialogue, isolate/export/delete transaction | Isolated-process persistence and no-copy deletion acknowledgment; no real brain/emotion simulation needed |
| VK005 | `enter_vehicle`, `vehicle_cleanup`, `choice_gate`, `reward_commit`; separate native race builder | Passenger banter, sabotage investigation, rescue branch and results | Velvet replaces current passenger scene; story result handoff; interrupt/retire race for rescue; no claim these are builder options |
| VK006 | `braindance_analysis`, `investigate_reactions`, `read_terminal_document`, `choice_gate` | Three clue layers, synthetic-scene reveal, archive ownership decision | Female Velvet performance/rig handoff, recording vs present-scene state restoration, clue replay stability |
| VK007 | `reach_area`, `access_routes`, `interact_device`, `meet_contact`, `entitlement_reconcile` | Retrofit, power/door repair, neighbor agreement, housewarming and repeat visits | Persistent hub lifecycle, conditional furnishings, safe streaming/navmesh, save-safe repeatable job dispatcher |

Reference workflows: [native quest lifecycle](../../docs/authoring/native-quest-template.md), [scenes](../../docs/authoring/scenes.md), [races](../../docs/authoring/races.md), [braindance](../../docs/authoring/braindance.md), [building retrofit](../../docs/authoring/buildings-and-interiors.md), [building navigation](../../docs/authoring/building-navigation.md), [workspots](../../docs/authoring/workspots.md). Use local modding docs and reviewed vanilla precedent before adding runtime frameworks.

The race builder currently documents a single ordered course/lap and one attempt, a supplied player vehicle, native result/cleanup behavior and an existing Johnny passenger sequence. VK005 needs a story-specific wrapper and rescue retirement contract. It must not grant a win by writing the builder's private fact or turn checkpoint geometry into an assumed multi-lap race.

Braindance tools can produce performance handoffs and `.scenerid` from reviewed templates; that alone does not implement a playable analysis quest. Building geometry alone does not provide collision, navigation, acoustics, room lighting, access ownership or a persistent home.

## Shared scene and reward contract

Invitation acceptance is distinct from arrival. Arrival supports already-inside gates. Scene start waits for actors to spawn. Narrow engagement and distance interruption belong to the running scene; the outer quest owns community lifetime. A conversation can defer and re-enter without replaying a received clue or invitation.

An acquired file is not a read file. Read-dependent responses wait for the journal entry's visited state. Investigation reveals only what the player has observed; the final conclusion needs sufficient independent evidence, not every optional curiosity.

Every major choice has a named scene exit handled by a quest graph. Persist the outcome once before starting the next stage. Transfers cancel on disconnect and expose a retry; departure during a line cannot miss the outside gate. Reward delivery is inventory-confirmed before completion. Proposed new money rewards: VK002 no cash/item payout; VK003 6,000; VK004 5,000; VK005 8,000, with an additional 4,000 only for a recorded race win; VK006 7,000. VK007's guaranteed reward is home access and a visible key notification; physical stash/bed services need separate native proofs. Values are balancing drafts, not promised shipped economy.

Optional follow-up texts never hold completion open. Cleanup cannot delete an actor speaking, strand V in a locked chair/vehicle, or erase an owned clue needed after reload. No compulsory romance, combat build, cyberdeck or failed skill check blocks the critical route.

## First playable milestones and named scenarios

| Quest | Complete first route | Alternate-path proof before polish |
| --- | --- | --- |
| VK002 | Dinner → forged message → two clues → decoy → verify → closing → completion | Defer dinner; skeptical but cooperative route; independent check; walk away then return; save after spoof |
| VK003 | Cover entry → Io → server → redacted publication → outside debrief | Friends cover; decline dance; detected entry; destroy outcome; no patron data leak; save before commit |
| VK004 | Diagnose → meet Sable → speak to June → isolate → debrief | Pause diagnosis; no cyberdeck; seal/delete outcomes; interrupted export; June absent from Velvet after reload |
| VK005 | Stage → drive valid course → result → trace relay → debrief | Rescue retires active race; continue route; normal loss; timeout; vehicle destroyed; Velvet unmount; no duplicate bonus |
| VK006 | Enter recording → find three clues → exit → confront Cress → purge → reward | Layer ordering; replay; optional clue skipped; emergency exit; escrow; save on both sides of BD |
| VK007 | Neighbor agreement → access → power → secure → housewarming → leave/return | No romance; all June outcomes; interrupted repairs; streamed-out hub; post-completion reload; repeated jobs remain bounded |

## Persistent hub backlog

Deliver a revisit-able home and three small deterministic jobs before considering procedural content: an opted-in security audit, a delivery of an isolated spare terminal, and finding a neighbor's misrouted parcel. Each job has one active instance, a per-job completion fact, a cooldown and a reward commit. Conversations and furnishings derive from saved outcomes and never respawn lost rewards. Velvet has an unavailable response when absent rather than being teleported into an active scene.

These jobs are scoped in VK007's dialogue and plan; they are follow-up content, not prerequisites to the seven-quest ending. Do not add a recurring automation or external service to implement them.
