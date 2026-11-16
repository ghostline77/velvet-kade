# Characters

The `.character.json` files are projects for the standalone character builder.
They contain creator choices, clothing, face shapes, native parts and identity.
The shared `items` catalogue supplies their asset identities.

`series.json` declares each project once. Quest specs request character names;
the series build exports each required project once and automatically collects
its native resources and TweakXL records for packaging.

For an independent character export, replace `<character>` with `velvet`, `mara`
or `latch`:

```powershell
../character-builder/target/release/ghostline-character-builder.exe build characters/<character>.character.json --catalogue ../items/dist/catalogue --game <game-directory> --out work/characters/<character> --export
```

Character resources live under `mod/velvet-kade/characters/<character>/` in the
game archive.
