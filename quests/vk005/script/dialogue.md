# VK005 dialogue flow — review draft

## 01 — Offer and staging

**Velvet, text:** Good news: found a way to afford the archive reader. Bad news: it has wheels. Niko's got a race entry and a ledger token. Want to drive?

- **V:** I'll hear him out. **Velvet:** Meet at staging. Nothing starts until you say so. → Accept.
- **V:** Park it for now. **Velvet:** It does have a handbrake. Allegedly. → Defer.

**Niko:** Before you ask: I carried sealed equipment. Should've asked. Didn't. This isn't me claiming otherwise.

**V:** Start with the car.

**Niko:** Spare compact. Organizer holds my settlement until the race closes. Your entry token can read the same ledger. Winning pays better. Losing still closes it.

**Velvet:** I've removed the autonomous route authority. V steers. I watch the electronics. The car's opinion is now advisory.

Question hub:

- **V:** Why not steal the ledger? **Niko:** Token's paired to an actual staged entry. Once we're on the grid it gets a settlement receipt. Try an empty token, they see us coming. **Velvet:** We race, read the receipt, then follow its signature.
- **V:** Since when do you like racing? **Velvet:** Since I wanted a problem outside my skull. Ask again after the first corner.
- **V:** If we lose? **Velvet:** We still get the record. I buy a cheaper reader. We suffer the indignity of a loading screen together.
- **V:** Any rules? **Niko:** Ordered checkpoints. One course. No weapons on the grid. Don't cut through the spectators. **V:** Refreshingly specific.
- **V, flirt if interested:** Trust me with your life, but not your playlists? **Velvet:** Lives are replaceable in theory. That playlist took years. **V:** Theory's bad. **Velvet:** Then drive carefully.
- **V, friends:** I'll try not to make you regret the passenger seat. **Velvet:** Set a smaller goal. Keep all the doors attached.
- **V:** Ready. → Vehicle entry/seat readiness, then countdown.
- **V:** Need more time. → Staging stays available; no entry fee consumed twice.

## 02 — Grid and early course

**Velvet:** Belt's on. Manual override's green. If I say stop, I mean the car, not your personality.

**V:** Both have poor brakes.

**Starter:** Three. Two. One. Go.

Event-limited banter; at most one noncritical line per checkpoint and never over safety instructions:

- First valid checkpoint: **Velvet:** Gate one. We have successfully traveled somewhere. **V:** Save the praise for a corner.
- Clean surveyed bend, only if measurable: **Velvet:** Okay. That was good. Don't make it weird. **V:** You said it.
- Collision, cooldown and available telemetry only: **Velvet:** That part was a wall. **V:** Saw it. **Velvet:** Eventually.
- Low position at midpoint: **Velvet:** Still in it. Race first, self-criticism later.
- Leading at midpoint: **Velvet:** Don't tell Niko, but I understand the appeal. **V:** Little late for the dignified exit.

Mandatory sabotage discovery after fixed checkpoint:

**Velvet:** Hold steady. Somebody's sending brake commands to the other cars. Not race control. Collection access.

**V:** Can you stop it?

**Velvet:** Blocked our receiver before the start. Need the sender for theirs.

## 03 — Niko at the fork

Warning delivered before junction, with objective markers for both supported outcomes:

**Niko, radio:** Brakes locked! Can't release—I'm pulling right!

**Velvet:** Niko's down at the service pull-off. Rescue lane on the right. Race gate ahead. If we stop, we're out.

- **V, by taking rescue lane:** We're stopping. **Velvet:** I'll retire the entry. Pull past the smoke; leave us an exit. → Cancel race watchers/timers, then safe unmount and rescue scene.
- **V, by continuing through next race gate:** Send his position. Keep us moving. **Velvet:** Emergency call's out. I wanted us to stop. **V:** Heard you. → Continue race; disagreement saved.

No dialogue wheel while driving. If V misses both markers: off-course recovery pauses result commitment and gives clear return/rescue instructions; no silent rescue success.

## 04A — Rescue

**Niko:** Door won't open. Before you make the obvious joke, I know. Cheap car.

**V:** Can you move your legs?

**Niko:** Yeah. Can you move the door?

Native interaction opens the accessible side; no optional Body attribute requirement on critical path. V helps Niko to the safe marker; Velvet verifies relay log after readiness.

**Velvet:** Race entry's retired. No purse. Niko's token still has the settlement signature.

**Niko:** I can pay you back.

**V:** Start by standing up.

**Velvet:** Relay's behind the paddock. We finish that part after he gets a ride.

## 04B — Race result

Win:

**Velvet:** First. Actually first. I had an entire speech prepared about participation.

**V:** Save it. Night's young.

**Velvet:** Prize registered. Niko's call has a responder. We still need the sender.

Loss:

**Velvet:** Finished. Ledger token unlocked. We didn't need the ribbon.

**V:** You say that now.

**Velvet:** I'll complain later. Relay first.

Timeout/destroyed vehicle:

**Velvet:** Entry's closed. You're alive. That's the only result I need right now. Token registered at staging; we still have the receipt.

**V:** Niko?

**Velvet:** Responders have his location. I don't have his condition yet.

All normal results wait for safe stop, release passenger and unmount before relay objective. Aborted results use safe recovery, not a forced exit from a burning vehicle.

## 05 — Relay

**Guard:** Collection equipment. Walk away.

- **V, show signed command:** Your employer locked a driver's brakes. Receipt has the signer. Hand me the box. **Guard:** I'm not on that receipt. Take it. → Noncombat disable.
- **V, bypass:** Velvet, local disconnect. **Velvet:** Keep him busy. → Device access route with guard confrontation; no compulsory cyberdeck.
- **V, fight:** Move away from the relay. → Combat; persistent relay interaction survives guard death.

**Relay document, readable:** Collection authority: overdue participant assets. Remote stop command issued to Niko Vale / race token NV-6. Signed dispatch points to organizer collection account. Settlement transfer history includes archive lot H-17, purchased by Cress / Heartware Exchange. No race participant authorization for remote brake command attached.

**Velvet, after read:** Signed brake command. Ledger purchase. And the reseller's name. That's enough to stop guessing.

Disable transaction commits; collection credentials retired; optional public evidence report strips unrelated entrants' account IDs.

## 06 — Debrief

Rescue variant:

**Niko:** Medical ride's here. You gave up a real purse for me.

**V:** Try not to make it a bad investment.

**Velvet:** Keep the token. It can remind him to check what's inside the boxes.

Continue variant, before condition known:

**Velvet:** We got the record. I wanted to stop for him.

- **V:** I thought the emergency call would be enough. **Velvet:** Maybe it was. We didn't know when we passed him.
- **V:** We had a job. **Velvet:** So did he. I'm not asking you to rewrite it. I'm telling you what I saw.
- **V:** Next time I stop. **Velvet:** Next time, tell me before the fork. → Remember acknowledgment, no automatic moral reset.

Later condition text, after responder event/explicit authored outcome: **Niko:** Alive. Leg's splinted. Your call got through. We'll talk about the car when I can stand looking at it. → No false claim V rescued him.

Shared:

**Velvet:** Job fee sent. Reader's covered.

Win only: **Velvet:** And the prize. I checked twice. Once because of the organizer, once because winning looks suspicious on us.

Verified fee plus eligible one-time bonus → journal complete.

- **V, friends:** Next outing, we walk. **Velvet:** At a competitive pace?
- **V, interested, rescue or reconciled:** Still owe you an evening where we aren't almost dying. **Velvet:** Yes. Make a reservation somewhere without a starting grid.
- **V, cool:** Send me the reseller's address. **Velvet:** When it's checked. Not before.

## 07 — Follow-up

**Velvet, text:** Reader arrived. No wireless, no mystery firmware, ugly as sin. Cress is next.

- **V:** Sounds like your type. **Velvet:** I contain multitudes. Most have better casing.
- **V:** Check the hardware twice. **Velvet:** Already on three.
