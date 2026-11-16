# Native computer and website integration

The Afterglow pages are authored in `computer/content.json`. Its page copy,
layout, links and read-fact names feed the standalone quest builder's native
website generator. The generator constructs widgets, website journal,
localization, atlas and font-family resources directly.

`computer/design/` is a visual reference using HTML/CSS. The game consumes the
generated native resources, textures from `computer/textures/` and fonts from
`computer/fonts/`.
It does not render this HTML.

The computer opens Files first. Reading the service log gates its dialogue,
then the NET tab opens the fake booking profile. Only that page visit sets
`vk002_profile_read`. After the profile dialogue, reading the courier receipt
gates the Aster reaction. The profile has no duplicate file entry, and the
service log is not a public website page. The physical computer and its browser
binding are authored in the world specification.

The intended visual language is plum/cream/coral for Afterglow and pale
grey-green with dark ink for venue records. Owned Libre Caslon Text provides
serif headings; the game's Arial provides body and evidence text. Native
layouts include explicit navigation, artwork, rows and text bindings.

Native serialization/readback verifies the generated widget trees, page
addresses, journal text references, atlas slots and font links. In-game checks
are still required for browser entry, page-read timing, text fit, clipping,
keyboard/controller navigation, save/load and reaction ordering. The normal
quest build leaves VK002 planned until its placements and in-game route checks
are complete; this document is not a separate build contract.
