# The Self-Checkout Is Judging You

[![make.fun](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/cholick0/self-checkout-judging/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/cholick0/self-checkout-judging/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)

One funny line in the voice of a smug self-checkout machine — a [make.fun](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6) bounty entry.

## Entry

> Twelve yoghurts and one banana, for balance. Beep — your basket has the nutritional range of a vending machine.

## How it works

`main.ts` (Node 22) validates the line against the gate — 1–200 characters, not only whitespace, a single line — writes it to `/output/entry.txt`, then reads the file back byte-for-byte to prove what the grader will see.

```sh
node main.ts
```
