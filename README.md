# Velvet Kade

A Cyberpunk 2077 character series about the difference between being wanted and being known. Seven jobs grow from a stolen quickhack into a friendship or romance.

| Code | Quest | Authored content |
| --- | --- | --- |
| [VK001](quests/vk001/quest.json) | Love, Actually.exe | Quest, scenes, world and dialogue |
| [VK002](quests/vk002/README.md) | Second Date.exe | Planned quest, dialogue, scene and website authoring |
| [VK003](quests/vk003/README.md) | Love Is a Glitch | Story and dialogue draft |
| [VK004](quests/vk004/README.md) | Heartbeat Protocol | Story and dialogue draft |
| [VK005](quests/vk005/README.md) | Crash Test Sweetheart | Story and dialogue draft |
| [VK006](quests/vk006/README.md) | Ghosts in the Heartware | Story and dialogue draft |
| [VK007](quests/vk007/README.md) | Home Is Where the Hack Is | Story and dialogue draft |

Read the [series bible](series-bible.md) for continuity, relationships and cast. Specialist race and advanced braindance implementations belong to their separate tools; their series plans remain here.

`series.json` selects quests and plans and defines shared character projects. Each quest requests character names in `resources.characters`; the series build exports each required character once and packaging includes its resources and TweakXL automatically. Each compiler entry point is `quests/<id>/quest.json`; its `resources` section references `scenes/`, `world/`, `computer/` and dialogue under `script/` directly within the quest. Runtime behavior belongs in the quest spec. The compiler generates supporting phases automatically.

`characters/` holds projects for the standalone character builder. Each quest owns its `voice/source/` WAVs, `voice/wem/` game audio and `lipsync/` animation sets. VK001 owns its FX textures and UI artwork; VK002 owns its computer textures, fonts and font license. The quest's asset mappings select game depot paths independently of these source folders. `tweaks/` holds authored TweakXL records and `packaging/` holds package profiles. Builds and diagnostic evidence belong in ignored `work/`.

## Build and edit

Follow [the authoring guide](docs/authoring.md) for setup, scoped builds and
package creation. Run from this repository with the quest builder on PATH:

```powershell
ghostline-quest-builder series . --out work/builds --game 'path/to/Cyberpunk 2077'
ghostline-quest-builder package packaging/love-actually.json --out work/packages/love-actually --plan
```

The series command generates ready quests and reports planned entries separately. VK001 uses the `vk001` runtime namespace throughout. Its `lipsync/love-actually.anims` maps to `mod\vk001\localization\en-us\lipsync\love-actually.anims`; generated scene references and the registered lipmap select that asset. Character exports own `mod\velvet-kade\characters\<character>\`. The quest compiler generates custom FX from `quests/vk001/fx/velvet-crash.fx.json` and its texture frames. Package dependency checks report missing resources.

No Python/WolvenKit generator, copied template or donor resource is required by the quest compiler. Native readback does not establish in-game behavior.
