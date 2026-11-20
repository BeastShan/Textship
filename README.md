# Textship

Textship is a 30-day public experiment. It starts with an empty app. People propose features over iMessage and vote on what should ship. Each night, Devin builds the highest-voted eligible request. Shipped features credit their requesters by their chosen public display names.

This repository is the Day 0 baseline, built with the Next.js App Router and React as a static export. The rules below describe the planned experiment. The iMessage number, voting, and nightly automation are pending.

## Experiment rules

- Each verified phone number gets one vote per round. Verification stays separate from the app, and phone numbers stay private.
- The app runs in a sandbox with synthetic data only. Devin's build sessions have no access to production infrastructure or credentials.
- Requests involving wallets, payments, authentication, deletion, or external network calls are rejected before they reach the ballot.
- Nightly builds and redacted summaries of blocked requests are shared as “rejected by the bot” on [@megatron1509 on X](https://x.com/megatron1509).

## Nightly release

1. **Lock.** Voting closes at midnight and the top eligible request is selected.
2. **Spec.** Devin turns the request into a ticket with scope, acceptance criteria, and a list of files it may edit inside the app sandbox.
3. **Build.** A fresh Devin session implements the feature on a new branch, adds tests, and puts the requester’s public credit in the UI.
4. **Check.** CI runs tests, lint, and screenshot diffs. Devin Review checks the PR for security issues. Devin gets up to three attempts before the runner-up is selected.
5. **Stage.** A second agent uses the preview build to verify the feature against the ticket.
6. **Merge.** After the checks pass, the maintainer has one hour to veto the release. Otherwise, the release pipeline merges and ships it. The veto remains in place for all 30 days.
7. **Report.** After the feature goes live, the bot texts the requester, posts a before-and-after clip on X, and opens the next vote.

Daily snapshots support one-command rollback to the last good build. A rollback is followed by a public postmortem.

[Experiment announcement](https://x.com/megatron1509/status/2123677963451609321)

## Run the starter

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` to generate the static site in `out/`.
