# VK002 voice authoring

The dialogue manifests under `../script/` own lines, choices, stable line IDs and
female/male V audio paths. Scene specifications under `../scenes/` own branching
and performance.

`recipes.json` records character direction. The series voice library supplies
Velvet's full reference and the candidate references for Mara and Latch; the
sibling audio library supplies both V references. Mara and Latch require
listening approval before their performances are published.

Generated WAVs in `source/` require listening review before publication. Keep game voiceovers in `wem/` and facial animation
sets in `../lipsync/`. The quest's asset mappings select their game depot paths.
The compiler generates localization, voiceover maps and lipmaps from those inputs.
