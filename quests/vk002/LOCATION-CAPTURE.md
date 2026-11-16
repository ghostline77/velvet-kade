# VK002 location capture

The rooftop, stairs/service landing and approach are not selected.
`world/placements.json` has null poses until surveyed. Seventeen named targets
cover player/NPC roots, quest furniture, computer, relay and evidence.
Separate `preview_pose` values describe the provisional relative layout; they
are not captured game coordinates.

Use the separate Game Scout tooling for saved locations, viewpoints, inspected
surface hits and observed access connections. Preserve its image IDs and
inspection provenance beside each reviewed placement. Character roots need
floor hits and explicit facing; props need their actual mounting surface.
An active camera origin is not a player-foot or workspot root, and a guessed
eye-height subtraction is not a valid conversion.

The site must support walkable public access, collision, NPC navigation,
workspot entry/exit space, scene sight lines and streaming. Check conflicts
with vanilla activities and civilians. Furniture, seats, relay and computer
may be quest-owned additions; a camera viewpoint alone proves none of these
conditions.

Review every target individually, including both chair roots. Keep unreviewed
captures separate from the authored placements. Apply approved transforms to
the normal world specification, then verify navigation, seating, interaction,
combat containment and cleanup in game. Capture helpers and session logs belong
to the scouting tool and ignored working directories.
