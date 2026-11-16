# Series bible — first story and dialogue draft

## Promise

Give V time with Velvet: ordinary conversation, jokes with room to land, disagreements that survive the end of a job, and a place to return. Each episode has a concrete local problem and a relationship beat. Velvet has work, friends and convictions outside V. The player can be her friend through the entire series.

The governing question develops: Who owns your work? Who speaks as you? Who predicts what you want? Who gets to feel inside your head? Who matters when winning becomes expensive? Who owns your memories? Where can you live without performing for someone?

## Velvet

Velvet Kade is a skilled netrunner with conspicuously romantic branding and a precise objection to coercion. Black bows and pink hearts are deliberate taste, never shorthand for incompetence. Her jokes test the temperature of a room; when a subject matters she drops the performance. She dislikes having a painful history converted into an explanation of everything she does.

Published foundation: Heartbreaker was made to break a coercive mood-regulation loop. Her friend left under her own power. Velvet supplied a tool. Do not bring that friend back as a disposable hostage or contradict her right to decline contact. Heartbreaker Protocol is the rewarded item; Velvet Crash is its quickhack menu name. Temporary combat disruption does not create love.

Flaw: Velvet confuses controlling access with being safe. She withholds uncertainty, writes escape plans before invitations, and initially asks V to trust a conclusion she has not explained. Her growth is toward asking, showing evidence and accepting an answer she dislikes. V does not cure her, and romance does not resolve her cyberware.

Speech: playful specifics, short sideways observations, occasional deliberately bad technical jokes. Avoid incessant pet names, heart metaphors in every sentence, or a speech about consent in every scene. She can simply ask whether V wants another drink.

V is observant and economical. Offer warmth, dry humor and reasonable caution. Skepticism is not automatically cruelty. Gender-neutral written lines work for both V voice variants; no voice production in this pass.

## Continuity and recurring cast

The six new episodes retain the user's order. A minimum six in-game-hour cooldown after each completed job is a proposed invitation gate, not a hard deadline; invitations wait until V is out of combat and free of conflicting scenes. Accepting later never penalizes the relationship. Critical-path durations below exclude player wandering and optional reading.

| Episode | Standalone problem | Connection carried forward |
| --- | --- | --- |
| VK001 | Recover code and revoke stolen distribution | Velvet knows V can finish a job without rewriting her motives |
| VK002 | A local identity broker uses a forged V to obtain Velvet's signing credential | A customer export names the Aster club; V and Velvet establish a verification phrase |
| VK003 | Aster sells behavioral forecasts and keeps vulnerable patrons spending | Its repair-vendor list identifies a clinic maintenance bundle installed on Velvet's implant |
| VK004 | That bundle carries an archived person's affective model | A separate archive-export queue supplies a lead for VK006; a clinic courier needs transport in VK005 |
| VK005 | A courier race is sabotaged to recover a settlement ledger | The race pays for an isolated archive reader; the ledger identifies the memory reseller |
| VK006 | A reseller constructs custom romantic recordings | Archive access logs show Velvet's existing safehouse address was sold; she chooses to move |
| VK007 | Reclaim a home without displacing residents | The hub remembers outcomes; the story ends with a place, not a sequel threat |

These are overlapping markets with different perpetrators, not one omnipotent mastermind. Aster did not manufacture every feeling, the clinic did not invent every memory, and V's published meeting with Velvet remains real. Each episode resolves its own antagonist and pays its promised reward before the next lead appears.

New supporting cast, all provisional and quest-owned:

- **Mara Quill**, rooftop bartender: impatient with elaborate customers, discreet with actual danger. Recurs at the housewarming.
- **Iona “Io” Bell**, Aster floor technician: maintains the system to pay rent, becomes a source when offered a practical exit.
- **Sable Rhee**, former netrunner and implant repair technician: embedded their late partner June's archived affective model in a diagnostic bundle. Grief explains the act without excusing implantation without permission.
- **June**, a self-reporting digital process derived from a limited archive. Can express preferences; continuity with the dead original remains uncertain. Never presented as a clinically or scientifically established resurrection.
- **Niko Vale**, courier and amateur racer: transported clinic equipment without knowing its contents. The endangered driver in VK005; can survive without becoming V's romantic rival.
- **Cress**, memory reseller: sells modular intimacy because it is profitable, not because secretly in love with Velvet.
- **Mrs. Osei**, shopkeeper beneath the prospective apartment: knows its access and ownership history; a neighbor with agency, not a quest vending machine.

## Relationship contract

Do not implement an invisible affection score. Use explicit mutually exclusive relationship state plus specific remembered decisions. `vk_relationship`: 0 unspecified, 1 friends, 2 mutually interested, 3 dating. Changes require an explicit player choice and Velvet's matching response. A friendly decline closes that invitation without closing jobs. Later interest can be discussed directly; flirting with a cover identity never commits romance. Existing VK001 banter proves neither dating nor sex.

No gender/body/voice restriction is proposed. Actual implementation must review animation/rig compatibility separately; it must not infer relationship preferences from the selected rig.

Proposed series facts are integers, default 0. `vk002_complete` through `vk007_complete` mean journal and reward commit have finished. Each quest owns its local facts. Store decisions as outcomes, not moral rankings: `vk002_resolution` (1 jointly verified, 2 separate verification then reconciled, 3 professional distance); `vk003_resolution` (1 destroy, 2 publish redacted evidence); `vk004_june` (1 isolated process, 2 sealed inert archive, 3 deletion); `vk005_rescue` (1 stopped to help, 2 continued); `vk006_archive` (1 purge intimate recordings, 2 encrypted survivor-controlled escrow); `vk007_home_open` (1 ready). Exact fact allocation awaits compiler integration.

VK002 trust outcome is about whether V includes Velvet in an evidence-based plan. Asking to verify the forged message is supported. Betrayal means acting against an agreed plan, not pressing the skeptical dialogue option. A cool ending alters callback language and invitations, never silently locks the series. Reconciling uses an explicit future conversation.

June's body-access permission is always absent. All VK004 endings remove the process from Velvet's implant. Preserving June requires an isolated host and does not mean retaining unwanted neural access. V offers an opinion; Velvet controls her hardware; June is asked about the available disposition. Record disagreements in dialogue instead of pretending every choice is unanimously accepted.

## Persistent consequences

VK002 verification phrase: **“Terrible weather for a rooftop.”** Reply: **“Then stop inviting lightning.”** Establish it in person after the spoof is exposed; do not use it as retroactive proof of an earlier message.

VK003 published redacted evidence leads to a public notice and Io's note at the hub. Destruction leads to an offline manual circuit-board trophy. Do not retain patron identities as a trophy.

VK004 can yield an isolated terminal for June, a sealed archive drawer, or a memorial card. No ending later resurrects a deleted process. VK005 rescue yields Niko's repaired race token; continuing yields the winner's ribbon but a cooler message from Velvet. Niko's survival after continuing is uncertain until explicitly reported; do not claim an off-screen death to punish the player.

VK006 keeps only consented personal artifacts. Neither ending makes a romance scene proof of “true” feelings. VK007 supports friendship, dating, disagreements and no surviving June process. A home key grants agreed access, not ownership of Velvet's bed, belongings or schedule.

## Review boundaries

This is a seven-episode first draft, with VK001's published dialogue preserved. New content needs player dialogue review, site scouting, native proofs, localization allocation and playtesting. No claim is made that draft blocks are runtime-proven. No audio, new installed content or Nexus upload is authorized by these documents.
