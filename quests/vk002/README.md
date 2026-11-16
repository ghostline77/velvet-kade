# VK002 — Second Date.exe

Romance / comedy / investigation at Dark Matter: rooftop bar and dinner sofas, downstairs balcony investigation, and lift-panel relay. [Dialogue](script/dialogue.md) · [Implementation](plan.md).

## Story and player route

Velvet invites V to a small rooftop bar to celebrate the recovered Heartbreaker code. “Second date” is her provocative description of their second meeting, not an established romantic relationship. V can correct it without souring the evening. The place has a faulty awning, reasonable noodles and a bartender who knows Velvet orders two drinks before someone agrees to stay.

Let the opening breathe. V can ask what Velvet does when nobody is buying a hack, why she picked this roof, and whether her friend is all right. She draws a boundary around the last question; V can accept it. Optional flirting explicitly establishes interest. The friendship route has equally long conversation about terrible apartments and small pleasures.

Halfway through dinner, Velvet receives a message from V: “Need you downstairs. Come alone. Bring the signing key.” V is sitting opposite her. The message includes a phrase from their published job, convincing enough to disturb her. A broker called **Latch** netran the booking terminal through an expired contractor account, copying a cached contact-thread fragment and venue contact list, and wants the credential that could sell a supposedly authentic Heartbreaker update. Velvet refuses to bring the actual key.

V and Velvet check two independent clues: Mara's service-camera log shows a courier placing a relay beneath the lift panel; a deliberately terrible fake V dating profile contains the relay's booking code. The forged message header supplies its booking URL; V follows it on a quest-owned computer unlocked by Mara. A native website is preferred, with the same content prepared as computer documents. Optional third clue: the courier receipt reveals Latch is renting identities to Aster, a nightclub. Nobody needs a cyberdeck: Mara can unlock the maintenance console after V explains the immediate threat.

Velvet proposes sending a decoy credential and catching its destination. V can agree after seeing the evidence, request an independent check, or refuse any joint operation. The first two lead to a short service-landing encounter; the independent route changes staging and the closing conversation. A false emergency text can be ignored because both characters already know to distrust the channel. The final verification phrase is established only afterward.

Latch can be talked into surrendering the relay and client receipt; combat is an optional response to his drawn weapon. His death never destroys the evidence: the physical relay has the same receipt. No civilians become enemies. The broker's local credential cache is destroyed regardless of resolution; redacted client details become the Aster lead.

Return to the roof for a proper ending. Cooperative verification lets the dinner resume. Separate verification yields an honest conversation about why V needed space; it can reconcile without pretending no disagreement happened. Refusing the operation allows Velvet to revoke the exposed contact credential herself; there is no fee, and the relationship can remain professional. All three endings resolve the immediate threat and complete the quest. The refusal route retains the redacted Aster client audit from the local pairing record without visiting Latch. The next invitation never requires a kiss or an apology for asking sensible questions.

## Endings and continuity

1. **Same table:** jointly verify and use the decoy; dinner resumes with explicit friend or romantic closing.
2. **Separate checks:** V independently verifies the relay, then either agrees to share future plans or chooses professional distance.
3. **Check, please:** decline the trap; Velvet revokes the credential, Mara calls venue security, and V leaves with the resolved investigation. No fake claim that Latch was arrested if his encounter was skipped.

No cash or item reward. Velvet still covers dinner; the resumed evening, relationship outcome and next lead are the payoff. Non-inventory keepsake: a consensually exchanged photo of the terrible profile with contact details removed. Aster's name appears as a next lead after completion, not a second objective extending dinner indefinitely.


## Authoring

[quest.json](quest.json) owns the native flow. `script/*_manifest.json` owns dialogue, choices, IDs and audio timings; `scenes/` owns branching and choreography. `world/` owns surveyed placements, existing-furniture anchors and device transforms. Afterglow's page text and native widget layout are authored together in [computer/content.json](computer/content.json).

The prerequisite is `vk001_completed`, followed by six game hours. Mara, Latch and Velvet use the series character projects. Generated WAVs, WEMs and lipsync belong to this quest. In-game checks cover elevator access, companion travel, sofa fit, device interaction, combat restoration, dialogue branches and save/load.

Use `validate quests/vk002/quest.json` to check authoring, then compile or use the normal series build. Accepting the invitation enables both stops of the street lift. Follow the map pins between the rooftop bar, dinner sofas, downstairs computer and lift-panel relay.

`packaging/second-date.json` packages VK001 and VK002 together from the normal
`work/builds/` series output. It retains the existing archive name and includes
shared character resources automatically. Both quests must be ready before packaging.
