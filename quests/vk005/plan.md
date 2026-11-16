# VK005 implementation plan

The native race builder is a subsystem, not a registry block named `race`. Use a reviewed Game Scout survey, explicit entrants, supplied player car and a unique `vk005_race` namespace/depot subtree owned by Velvet Kade. Read current races documentation before binding; it contains concurrent user edits which this task does not change.

Required proofs before claiming this quest buildable: replace the current Johnny passenger sequence with Velvet and preserve spawn/seat/unmount ownership; expose completed/failed/aborted results to the story; retire all race checkpoint/timer/result watchers for rescue; preserve normal loss, timeout and vehicle cleanup. Native driver sabotage is quest-owned, with an authored wreck/pull-off as early presentation. Do not interfere with V's steering or brakes until a specific native control and recovery contract passes playtest.

Compose invitation/meet, `enter_vehicle`, native race build, branch handoff, optional `release_or_rescue_npc`/`escort_npc`, relay `interact_device`/`read_terminal_document`, `vehicle_cleanup`, `reward_commit`. Race builder must not autonomously complete the parent story or pay a second job reward. Proposed bonus only after actual recorded win; rescue irrevocably retires the current entry. First milestone can prove an ordinary full race result through relay, payment and parent completion, but release readiness also requires the rescue branch.

Proposed facts: `vk005_entry_registered`, `vk005_attempt_state` (1 staging, 2 racing, 3 rescue retired, 4 finished, 5 aborted), `vk005_rescue` (series outcome), `vk005_race_result` (1 win, 2 loss, 3 timeout/abort), `vk005_relay_disabled`, `vk005_ledger_read`, `vk005_fee_verified`, `vk005_bonus_verified`, `vk005_complete`. Exactly one branch consumes the fork. Spatial markers are evaluated once in course order; driving backward cannot award both rescue and race win. Keep builder-private facts separate.

Survey contract: one course/lap, valid grid and activation workspot, collision-clear V car, passenger-compatible vehicle, safe spectator bounds, announced fork with adequate sight distance, separate Niko pull-off outside active opponent path, finish braking area and accessible relay. No placeholder route coordinates. NPC competitor records need actual AI compatibility review.

Banter queue prioritizes navigation and emergency lines. Drop stale jokes at branch transitions. Collision/position jokes require actual telemetry; checkpoint-only provisional lines work without it. Do not fire a late collision joke over Niko's call. No in-car dialogue choices that steal driving input.

Completion requires relay disable/read, guaranteed fee verification and any eligible bonus verification; a retired race is not a failed story. Reader access comes from Velvet's fallback funds after loss/rescue. Retry after vehicle destruction needs staging ownership and an explicit policy, not an assumed replay feature. Initial release design allows story recovery with the already-issued ledger token, not repeated purses.

Handoff matrix: normal win/loss; rescue; continue; missed fork/off-course; timeout; destroyed V car; death/load; passenger not mounted; leave staging; relay guard dead; first reward then load; no duplicate bonus or supplied car. The race wrapper and rescue lifecycle remain unverified extensions.
