# Characters

The `.character.json` files are projects for the standalone character builder.
They contain creator choices, clothing, face shapes, native parts and identity.
The shared `items` catalogue supplies their asset identities.

`series.json` declares each project once. Quest specs request character names;
the series build exports each required project once and automatically collects
its native resources and TweakXL records for packaging.

For an independent character export, set `GHOSTLINE_ITEMS_CATALOGUE` to the unpacked item catalogue and `GAME_ROOT` to your game installation. Choose the character by name:

```powershell
cargo install --locked --git https://github.com/ghostline77/character-builder
$character = "velvet"
ghostline-character-builder build "characters/$character.character.json" --catalogue $env:GHOSTLINE_ITEMS_CATALOGUE --game $env:GAME_ROOT --out "work/characters/$character" --export
```

Character resources live under `mod/velvet-kade/characters/<character>/` in the
game archive.
