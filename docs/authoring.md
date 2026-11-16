# Build and edit the series

Edit the authored quest, scene and world inputs, then compile them with the sibling Quest Builder. The series manifest selects quests and shared character projects.

## Setup

Keep the sibling `quest-builder`, `ghostline-red` and the other crates declared
by Quest Builder available. Character and building inputs use their respective
builders. Install the parent `ghostline77` JavaScript workspace with `npm ci`
before a fresh tool build.

Run from this repository:

```powershell
cargo build --release --locked --manifest-path ../quest-builder/Cargo.toml
```

Use an installed game for native resource resolution. Reflection metadata loads
automatically. Keep generated outputs outside the game installation.

## Edit source inputs

| Input | Purpose |
| --- | --- |
| [series.json](../series.json) | Quest selection and shared character projects |
| [project.json](../project.json) | Depot ownership and dependencies |
| `quests/<id>/quest.json` | Quest behaviour and resource composition |
| `quests/<id>/scenes/` | Scene specs |
| `quests/<id>/world/` | World and building specs |
| `quests/<id>/script/` | Dialogue authoring |
| `packaging/` | Package profiles |

Keep native IDs and depot paths stable when changing display text or moving
authoring files. Change the owning source spec rather than editing generated
`.questphase`, `.scene` or streaming resources.

Audio and lipsync are published inputs. Generating new speech or facial curves is
a separate workflow; compiling a quest does not synthesize missing performances.

## Compile a quest

```powershell
../quest-builder/target/release/ghostline-quest-builder.exe series . --quest vk001 --out work/builds --game 'path/to/Cyberpunk 2077'
```

Use a fresh destination. For another build, choose a new directory and update the
package profile's `builds` paths to match. Omit `--quest` to process the series;
the report distinguishes generated quests from planned entries.

Review missing resources and native verification results before packaging.
Character exports are selected through the quest's `resources.characters`
entries and the series character map.

## Review and create a package

Inspect [the love-actually profile](../packaging/love-actually.json). Its `builds`
paths select generated output directories, not authored quest folders.

```powershell
../quest-builder/target/release/ghostline-quest-builder.exe package packaging/love-actually.json --plan
../quest-builder/target/release/ghostline-quest-builder.exe package packaging/love-actually.json --out work/packages/love-actually
```

The first command reviews the package plan. The second creates the package at a
new destination. Follow the package's installation instructions and dependencies.
A normal PC package's ArchiveXL registration is distinct from integration into
Ghostline Quest Core for cross-platform mods. A successful PC package build does
not establish mod.io or PS5 compatibility.

## In-game checks

Load a separate test save and check startup, dialogue choices, objectives, world
placements and completion. Save and reload during progression, then verify
cleanup. Native serialization and package hashes validate resource structure;
they do not prove game behaviour.

Keep build outputs and local diagnostics in ignored `work/`. Reviewed dialogue,
voice media and authored manifests remain source inputs.
