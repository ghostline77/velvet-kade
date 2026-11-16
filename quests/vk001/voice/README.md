# VK001 voice assets

`source/` contains the 60 reviewed WAV performances: 26 Velvet lines and 17 for
each V. `wem/` contains the game voiceovers. Dialogue manifests under `../script/`
own the spoken text, gender paths and stable line IDs.

Velvet uses the series library's `voices/velvet/selected/reference.json`.
Female and male V use their full references from the sibling audio library.

`../lipsync/love-actually.anims` supplies the facial clips. Quest asset mappings
select its game depot path; the compiler generates subtitle/VO maps and lipmaps.
Preserve line IDs and clip names when replacing an animation-set file.
