# Afterglow visual reference

Local, buildless HTML/CSS/JS reference for VK002's native computer pages. This
is a mockup of the game's browser, not an externally hosted website or an ink
resource. Use a local static server rooted at the parent `computer` directory
and open `/design/`.

`../content.json` supplies the existing page copy. Routes are `#home`,
and `#profile`. The service log and courier receipt belong to the native
computer's Files tab. The ordered investigation is described in
`../../WEBSITE-RESEARCH.md`.

## Native design handoff

- Canvas: 1,240 px wide reference at desktop; the native computer's actual
  content bounds must be measured before converting these proportions.
- Afterglow: plum `#291c2e`, cream `#f0e8d6`, coral `#f49a89`, muted rose
  `#b9a8b3`. Serif headline/wordmark; plain sans-serif body; mono utility labels.
  CSS fonts are local substitutes. The native build uses owned Libre Caslon Text
  regular/italic serif resources and the game's Arial for body/evidence text.
- Home: wordmark/navigation, left headline and booking CTA, right orbital-heart
  emblem, lower booking summary, disclaimer. The headline is the authored
  subtitle; the introduction is the authored body. The CTA maps to the profile's
  journal `linkAddress`.
- Profile: anonymous silhouette rather than a gender-specific V portrait;
  title/subtitle, separated hobbies/looking-for rows, high-contrast meeting-code
  panel, footer. These subdivisions require additional named ink text slots
  instead of forcing the whole body into one donor slot.
- Maintenance: neutral light grey-green `#e4e6de`, dark ink `#273c38`, ruled
  numbered rows, highlighted booking reference and boxed intrusion trace.
  This is venue-owned local evidence, visually separate from the dating site.
- Inline vector artwork is a design reference. Recreate with native shapes or
  export owned atlas assets during ink production; do not depend on HTML/SVG
  rendering inside the game.
- Native journal text bindings, localization keys and link actions derive
  from `../content.json`. The standalone quest compiler generates the owned
  `.inkwidget` resources through the quest's `resources.websites` input; see
  `../../WEBSITE-RESEARCH.md` for integration and pending game checks.

No native read facts are simulated or written by this mockup. Reading order,
browser registration, ink clipping, text fit, keyboard/controller navigation and
save/reload behavior still require an in-game proof.
