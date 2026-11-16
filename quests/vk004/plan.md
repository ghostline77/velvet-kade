# VK004 implementation plan

First route: invitation → physical diagnostic → read signatures → Sable → isolated June conversation → isolated-host disposition → permissions removed → payment and completion. No actual emotional/brain simulation is required: authored symptoms, readable logs and scene reactions tell the story.

Use `interact_device` for diagnostic/disconnect, `read_shard` or `read_terminal_document` for findings, `meet_contact` for Sable, `choice_gate` for disposition and `reward_commit` for the clinic settlement. June is an explicitly staged scene speaker, not a second actor secretly spawned inside Velvet. Prototype a native remote/offscreen speaker with readiness gating; readable transcript can be used in the early no-audio proof, while preserving the full authored conversation.

Proposed facts: `vk004_diagnostic_isolated`, `vk004_signature_read`, `vk004_service_read`, `vk004_export_lead_read`, `vk004_june` (series outcome), `vk004_transfer_verified`, `vk004_permissions_revoked`, `vk004_reward_verified`, `vk004_complete`. Completion requires implant removal in every disposition. Local deletion cannot mean all copies everywhere are destroyed; the reseller queue is explicit.

No disposition is committed on entering a choice. For isolation: create target → verify target state → retire source → revoke input permissions → persist result. For archive: create inert snapshot → verify seal and no active local process → retire source/permissions. For deletion: explicit confirmation → retire both local states/permissions → verify absent. If interrupted, inspect the transaction checkpoint and available state before resuming; never duplicate June or delete the only accepted preservation target by replaying an unfinished action.

Scout a small clinic and workroom with seating, isolated terminal prop and public exit. Ensure no camera/holocall state survives the June conversation. The hub later derives June presence solely from the finalized outcome; sealed archive is silent and deletion remains final locally.

Review tests: defer with process isolated; no deck; read ordering; interruption at each transfer boundary; back out of deletion; repeated interaction; reload before/after permissions revoked; relationship route independent of disposition; settlement once. All process-transfer representation, native scene binding and runtime behavior remain unverified.
