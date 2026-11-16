# VK002 — Second Date.exe

Approved dialogue rewrite, 11 November 2026. Scene specifications own gates and movement; manifests own stable line IDs. New audio remains subject to listening review.

## 01 — Invitation and arrival

**Velvet, text:** Still owe you dinner. Dark Matter. Good noodles, and the bartender lets me complain. Come by after six?

**V:** Send the address.

**Velvet, text:** Sent. Rooftop table. Come hungry.

*Invitation remains available. Meet between 18:00 and midnight; Wait until 18:00 is available at the street entrance.*

**Mara:** You're V? She's been watching the lift.

**V:** Been waiting long?

**Velvet:** Not long. Got us a table.

**Mara:** Then use it. Kitchen's still open.

**Velvet:** Second date. Thought we could try eating this time.

**Interested**

**V:** First one came with a pretty good gift.

**Velvet:** Glad you liked it. Tonight you get dinner, too. Staying?

**V:** Yeah.

**Friends**

**V:** Dinner between friends, yeah?

**Velvet:** Yeah. Glad you came.

**Cautious**

**V:** This dinner come with a job?

**Velvet:** No. I wanted to see you. That's all.

**Defer**

**V:** Need to take care of something. I'll come back.

**Velvet:** All right. Find me here.

*Arrival choices happen at the bar. Acceptance sends Velvet to her seat; V chooses [Sit]. Explicit defer waits for departure before allowing another arrival.*

## 02 — Dinner

**Velvet:** Try the noodles before they go cold. I got distracted ordering the drinks.

*Optional topics are available once and return to the dinner choices. Flirt requires mutual interest; Company is the friendship alternative.*

**Outside work**

**V:** What do you do when you're not working?

**Velvet:** Got a little radio in pieces on my desk.

**V:** Fixing it?

**Velvet:** Trying. Replaced the tuner twice. Still only gets one station.

**V:** Any good?

**Velvet:** Hate it. That's why I'm fixing the radio.

**Why this roof?**

**V:** Why this place?

**Velvet:** Used to live somewhere with a window painted on the wall. Wanted a real one for a change.

**V:** Must've saved on the rent.

**Velvet:** No. Had curtains, too. Charged extra for those.

**Her friend**

**V:** Your friend. How's she doing?

**Velvet:** Sent me a picture of a lamp she bought. Big orange thing. Looked half melted.

**V:** She like it?

**Velvet:** Enough to send me three pictures.

**V:** Sounds good.

**Velvet:** Yeah. It does. Rather leave it there, though.

**V:** Sure.

**The bows**

**V:** Get much shit about the bows?

**Velvet:** Had a client tell me I'd look more professional without them.

**V:** What'd you say?

**Velvet:** Nothing. Finished his job, sent the invoice.

**V:** He pay?

**Velvet:** Every eddie.

**Flirt**

**V:** Picked a good view.

**Velvet:** Could look at the city, too.

**V:** Later.

**Velvet:** All right.

**Company**

**V:** Been a while since I sat down for a meal like this.

**Velvet:** Nobody paying you to be here?

**V:** Nobody trying to hurry me out.

**Velvet:** Stay a while, then. I wasn't planning on leaving early.

**Continue choice:** Come on. Worst customer. Gotta have one.

**Velvet:** Guy wanted Heartbreaker to make his ex call him.

**V:** Didn't read the description?

**Velvet:** Read enough to argue. Said he was offering good money.

**V:** What'd you tell him?

**Velvet:** She could already call him.

**Step away**

**V:** Need to step out. Be back.

**Velvet:** All right. I'll keep your seat.

*Returning and sitting resumes the choices without repeating the dinner introduction.*

## 03 — The message

*The notification arrives after the final customer line. Velvet has forwarded the message to V.*

**Velvet, forwarded text**

```text
You send this?

"Need you downstairs. Come alone. Bring the signing key. The bows are non-negotiable."

NETdir://ncity.afterglow.pub/booking/sunset-2
```

**Velvet:** V. Did you send me that?

**V:** No. Been sitting right here.

**Velvet:** It used something from our messages. About the bows.

**Examine it**

**V:** Show me the whole thing.

**Velvet:** Here. Sender, time, the link. Everything I got.

**Identify the motive**

**V:** Wants your signing key.

**Velvet:** Yeah. That part's clear.

**Question the source**

**V:** Could be something in your implant.

**Velvet:** Could be. Let's check what came through before I start pulling things apart.

*All responses reveal the same evidence. V and Velvet get up before the conversation with Mara.*

**Mara:** If you're heading downstairs, service stairs are shut.

**V:** Something happen?

**Mara:** Courier had the lift panel open. Claimed he was maintenance. Couldn't tell me who sent him.

**Velvet:** Need to find out where that message came from. What else they copied.

**V:** Mara. Need a look at your booking system.

**Mara:** Maintenance computer. Lounge floor, by the street lift. I'll unlock it. Leave the shift records alone.

**Velvet:** Start with the service log. Then we'll check that link.

## 04 — Investigation

*V and Velvet take the rooftop lift to the lounge. Reads and page visits are retained if V arrives first. Reactions require Velvet to arrive and V to leave the computer interface.*

**Check the service log — Files / Venue maintenance / 21:14**

```text
SERVICE LIFT / ACCESS REVIEW

21:14  Temporary relay registered.
       Booking reference: SUNSET-2

Contractor account: EXPIRED
Guest-contact export: COMPLETED
Reservation message cache: COPIED
Contact-thread excerpt: INCLUDED

No corresponding service ticket.

Camera review:
Courier secured an external unit beneath the call panel.
Still attached to this record.

Camera clock checked against till receipt.
Offset: +00:00

Account requires removal from booking-system access list.
```

**Velvet:** Message cache. That's where they got it.

**V:** Expired contractor account. Still let them in.

**Velvet:** Terminal kept part of our thread with the reservation. They copied it, put your name on the sender. Sent it through that relay.

**Check the fake profile — NET / Afterglow home**

```text
AFTERGLOW

An evening worth keeping private.

Your introduction is ready.
Booking reference: SUNSET-2

[View your companion]

Profile supplied by our booking partner.
Verification status is shown on the individual profile.
```

**NET / Companion profile**

```text
V

Discreet mercenary.
Private introductions available.

INTERESTS
Night City sunsets
Netrunning
Exclusive access

LOOKING FOR
One independent netrunner.

MEETING REFERENCE
SUNSET-2

Premium verification pending.

[Back to Afterglow]
```

**V:** Discreet mercenary. They leave out the shooting?

**Velvet:** Trying to get a booking, V.

**V:** Seems pretty personal for an advert.

**Velvet:** They knew where I'd be tonight. That's the part I'm worried about.

**Velvet:** Check SUNSET-2 against the courier receipt.

**Check the receipt — Files / Courier receipt**

```text
RELAY HIRE / SUNSET-2

Operator: LATCH
Client account: ASTER
Cost centre: RETENTION / OUTREACH

Hire fee: PAID
Credential collection: PENDING

On completion:
Revoke venue token.
Clear local message cache.

Equipment remains billable until returned.
```

**V:** Same reference. Latch rented it. Aster paid.

**Velvet:** Aster's a club. Expensive one. I'd like to know what they think they're buying.

*Return upstairs together. Velvet takes her bar position before the plan conversation, without a second positioning command.*

## 05 — Plan and confrontation

**Velvet:** I can send a dummy credential. Nothing attached. When they try to use it, we get the request. Real key stays with me.

**Joint plan**

**V:** Show me what you're sending. Then we go together.

**Velvet:** I'll send you a preview. Check it before I do anything.

**Independent**

**V:** I'll check the relay. You stay here with Mara until I call.

**Velvet:** All right. Call me when you've got it. I'll check my end.

**Refuse**

**V:** No bait. Kill the stolen token. Give security the rest.

**Velvet:** Don't like leaving him down there. But... all right. Send Mara the log. I'll revoke it.

**Joint route — Decoy preview**

```text
DECOY / SUNSET-2

Signing key: NONE
Venue access: NONE
Contact token: NONE

First-request logging: ENABLED

Not sent. Waiting for your go-ahead.
```

**V, confirm:** Checked it. Let's go together.

**Velvet, text:** Sent. Got a request from the service landing. Let's go.

*After confirmation, Confront Latch activates with his actor marker. Joint: take the lift together. Independent: Velvet remains with Mara.*

**V → Mara, refusal text:** Forwarding the service log and courier receipt. Booking reference SUNSET-2. Expired contractor account's still getting into your system. Velvet's revoked the stolen token.

**Mara → V:** Got it. Security has the report. I've flagged the account. Keep your copies.

*Refusal skips the confrontation and recovery, then proceeds to the refusal closing.*

**Latch — joint or independent**

**Latch:** You're not supposed to be here.

**V:** You put my name on the invitation.

**Latch:** Look. Relay's rented. Her signing key's worth more than the fucking box.

*Latch draws his pistol before the response choices. Peaceful responses holster it; threat starts combat.*

**Negotiate**

**V:** Keep your fee. Give me the relay audit and we're done.

**Latch:** Client paid already. Fine. Take it. I'm not refunding them.

**Expose**

**V:** Got you on camera. Give me the client and the audit. I'll leave the rest with venue security.

**Latch:** Aster. Account said retention outreach. That's all I got.

**Threat**

**V:** Put the gun down.

**Latch:** Come take it.

**Peaceful recovery — Recover the relay audit / relay computer**

```text
AUDIT EXPORT / SUNSET-2

Client account: ASTER
Cost centre: RETENTION / OUTREACH
Hire fee: SETTLED

Credential request received.
Payload contains no signing key.

On audit collection:
Invalidate venue token.
Purge cached sender credentials.

Billing record retained.
```

*Verification waits until V exits the computer.*

**Combat recovery — Defeat Latch, loot and read Latch's relay receipt**

```text
RELAY HIRE / SUNSET-2
OPERATOR COPY

Client account: ASTER
Cost centre: RETENTION / OUTREACH
Hire fee: PAID

Credential requested.
No signing key supplied.

Local cache revocation token attached.

Retain this receipt for equipment return.
Loss or damage remains the operator's responsibility.
```

*Combat never uses or enables the relay computer. Joint verification is at the encounter; independent recovery offers [Call Velvet] at the encounter. Peaceful independent recovery offers the call by the relay.*

**Verification — in person or on the phone**

**Velvet:** They tried the dummy. Got nothing. Real key's safe, and the stolen token's dead.

**V:** What about the profile?

**Velvet:** Gone. Kept a copy with the contact details stripped out. Might need it.

*Joint: return upstairs together. Independent: end the call and return upstairs to Velvet.*

## 06 — Closing variants

*Finish the evening with Velvet remains active through reflection and goodbye. Reflection takes place at the seats.*

**Joint**

**Velvet:** Should've shown you the decoy before asking you to come down with me.

**V:** Asked. You showed me.

**Velvet:** Yeah. Next time I'll start there.

**Independent**

**Velvet:** Glad you came back up. Wasn't sure how much evening we had left.

**V:** Wanted my own look at the relay. Wasn't accusing you of setting me up.

**Velvet:** I know. Took me a minute.

**Reconcile — warm goodbye**

**V:** Next time, we compare notes before we move.

**Professional distance — professional goodbye**

**V:** Think we should keep this to work for now.

**Velvet:** All right. If I find anything else, you'll get the details before I ask you to do a thing.

**Refusal — professional goodbye**

**Velvet:** Token's dead. Mara's got the report. Security can deal with Latch.

**V:** Good enough for tonight.

**Velvet:** Yeah. Thanks for staying long enough to find the hole.

*V and Velvet get up before the warm goodbye.*

**Warm goodbye — joint or reconciled**

**Velvet:** If another message comes through like that, call me. We should have something to check it against.

**V:** Terrible weather for a rooftop.

**Velvet:** Then stop inviting lightning.

**Velvet:** That'll do. Dinner's still on me, by the way. Including whatever Mara charges for keeping it warm.

**Friends**

**V:** Like to do this again. As friends.

**Velvet:** Yeah. I'd like that. Somewhere with a working awning?

**Interested**

**V:** Next time, I want it to be a date.

**Velvet:** Good. I was hoping you'd say that.

**Leave it open**

**V:** Let's get through one dinner first.

**Velvet:** Fair. You want anything else? I could still eat.

**Optional hand-touch — offer a hand**

**V:** Can I?

**Velvet:** Yeah.

*[Leave it there] completes the interested ending without touching. [Can I?] plays the consent exchange, then a brief synchronized hand hold and release. Interruption releases both actors and restores control.*

**Professional goodbye**

**Velvet:** I've covered dinner. If Aster turns into a job, I'll send the details and a rate.

**V:** All right. Get home safe.

**Velvet:** You too, V.

*The closing conversation completes the quest. There is no payment or reward item.*

## 07 — Optional follow-up

*One game hour after completion. Replying is optional and does not delay actor cleanup.*

**Velvet, warm text:** checked. profile's still gone. apparently you had six matches.

**V:** Anyone real?

**Velvet:** four investment accounts and a boat dealer. you'll survive.

**V:** Keep digging on Aster.

**Velvet:** tomorrow. just got home. going to eat something while it's hot.

**Velvet, professional text:** Aster's account is on the invoice. I'll check it. If there's a job, I'll send the details and a rate.

**V:** Send it when you've got something.

**Velvet:** Will do.
