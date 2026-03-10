---
title: Why live coding is a poor way to evaluate engineers
date: 2026-03-10T12:00
tags: [management, hiring]
---

Live coding interviews are a lottery dressed up as evaluation.

The core problem is that it's largely a random check: the candidate is typically unprepared for this specific moment. They might be sleep-deprived, hungry, needing a bathroom break, or simply stressed by the environment. These basic physiological and psychological states directly affect performance.

The synchronous nature of the format — one hour, an observer, a timer — creates artificially high stress compared to other evaluation methods: a take-home assignment, code review, or discussing past experience. It's a stress test, not a competency test.

<!-- truncate -->

## Live coding doesn't reflect real engineering work

A typical live coding task involves low-level data processing: writing a filter, aggregation, or sort from scratch. But in practice, engineers don't do this. That kind of work is CPU-intensive and belongs at the database level — through SQL, indexes, or server-side aggregations. Writing it by hand in production is an anti-pattern.

The candidate might simply not know the specific algorithm or data structure the interviewer happened to pick. That doesn't make them a bad engineer — it means the task landed outside their zone.

## Failing live coding closes every other door

Live coding typically sits at the top of the funnel. Fail it, and you never reach system design, architecture discussions, or experience review.

This is especially unfair for T-shaped engineers who work broadly: databases, observability, API endpoints, refactoring, code review. Such an engineer might be genuinely valuable, but they get thrown out after a single algorithmic test that has nothing to do with their actual work.

A narrow filter eliminates broad specialists.

## Interviews as a pipeline without a coherent picture

In most companies, the interview process is a filtering conveyor, not an assessment. Each interviewer owns their stage and sees only their slice. HR sees only the beginning. The person running live coding evaluates five candidates relative to each other — not against any absolute bar. The system design interviewer receives whoever survived the previous filter and compares two people against each other. None of them see the full process, and none of them can improve it as a whole.

The result: there is no single person who looks at hiring as one end-to-end process. It's like microservices with hard context boundaries — each service handles its own request efficiently, but the cross-system transaction is opaque and suboptimal.

The concrete consequence: nobody re-routes candidates. Say a strong mid-level engineer applies to a junior role. Formally, they move through all the stages for that specific position. But since nobody is watching the whole picture, nobody says: "Wait — there's another opening, this person fits that better." The process continues bureaucratically on its rails, even when the optimal outcome is right there beside it.

The multi-stage process isn't a coherent evaluation of a person — it's a collection of independent slices. Each stage is specialized, but together they don't add up to an understanding of who this engineer actually is.

## The environment and time constraints problem

Live coding assumes you have a working environment: an IDE, a test framework, the ability to run code and immediately see results. Without that, you're trapped.

Without running tests, you can't demonstrate your code works across all cases. Running manually from the CLI is awkward and doesn't cover all expectations. To pass a live coding interview, you need to **prepare a sandbox in advance** — set up the project, wire up the test framework, know how to run everything in one click.

That's pre-interview work with no relation to engineering competence. It's preparation for the ritual, not for the job.

## Banning AI is a test inside a vacuum

Most companies prohibit AI assistance during live coding. The logic is understandable: if AI writes the code, the interviewer can't see how you think. But this logic ignores the reality of the profession.

AI assistants have become so integral to engineering workflows that working without them is like switching from a tractor back to a plow to prove you can farm the old way. The ability to work with AI, delegate to agents, review and steer generated code — that *is* the modern engineering competency. But it's never tested.

Worse, the ban often extends beyond full solution generation to any kind of help: you can't write a small snippet with AI assistance, can't clarify syntax. Some companies ban even Google, even though Google itself now responds with AI. This means you can't even check documentation — like which methods `Array` exposes in JavaScript, or how a specific `Map` function works.

The engineer ends up in isolation: no docs, no AI, no colleagues. Just the task and the timer.

## Memorization is not a measure of professionalism

If Google and AI are banned, an absurd question arises: can you print out an RFC or language spec and keep it on paper? That's not a joke — it's the logical consequence of a format that demands syntax memorization.

The reality: many experienced engineers work in multiple languages interchangeably. But memorizing the full API — switch syntax, mutexes, quicksort, binary trees — isn't necessary, because in real work you look it up or generate it with AI in seconds. Rarely-used constructs simply don't stay in memory, and that's fine.

Live coding ignores this. The result: an engineer who knows five languages is forced to pick the one they know best by heart — not because they solve problems better in it, but because it's the only one they can write without documentation. Breadth of expertise becomes a liability instead of an asset.

## The psychological dishonesty of the format

A person works for months in normal conditions: with AI, with search, with colleagues, with time to think. Then suddenly they're placed in an olympiad and expected to perform like a champion.

That's psychologically dishonest. You weren't training for a competition — you were doing a job. Now you're asked not to show how you work, but to prove you can perform in a completely different format that requires separate preparation. Live coding is its own skill, and it doesn't correlate with engineering quality.

## Tasks disconnected from the candidate's real domain

The choice of live coding task has no relation to what the candidate has actually been doing for years. A backend engineer from fintech gets a graph problem. A distributed systems specialist gets array sorting. Someone who built high-throughput data pipelines gets a binary tree question.

No correlation with real experience. The task is random relative to the candidate, which makes the result even more random.

## No second chance

In real work, you can put a problem down, come back tomorrow with fresh eyes, sleep on it, and suddenly see the solution. That's a normal part of the engineering process.

In live coding, there's none of that. One moment, one chance. If your brain doesn't produce the solution right now — you've failed, even though tomorrow morning you'd write it in 10 minutes.

## Asymmetry: the interviewer already knows the answer

The interviewer is looking at a problem they've already solved or know by heart. These are fundamentally different cognitive states. It's very easy to think "well, that's obvious" about a solution you've already seen. This creates a false sense that the problem is simple and reduces empathy for the candidate solving it for the first time under pressure.

## Soft skills aren't tested at all

Live coding doesn't evaluate what matters more than algorithms for most roles:
- ability to explain a solution to teammates
- quality of code reviews
- writing clear PR descriptions
- working with a team under uncertainty
- making architectural decisions with trade-offs

All of this is left untested if the candidate didn't pass the sorting problem in 45 minutes.

## Homework assignments: a good idea killed by AI

The historical alternative to live coding was the take-home assignment. It was a fair format: candidates received a realistic problem — set up a microservice with a database, implement stream processing, handle async vs. sync trade-offs, process a huge file under memory constraints. The task tested how a person thinks, researches, and makes decisions — not whether they know syntax by heart.

The one downside was time. I remember spending five days on a homework assignment for Pipedrive: I had to figure out multiprocessing in PHP, which I hadn't done before. That's a real investment, and many engineers (especially those already employed) aren't willing to do that for every company in the pipeline.

Now AI has killed the format from the other side: any homework assignment can be solved by an agent in an hour. Companies can no longer tell what the candidate wrote themselves versus what was generated. So take-home assignments have largely disappeared from hiring pipelines.

This is a dead end: live coding is stressful and dishonest, homework assignments are time-expensive and AI-vulnerable. The industry hasn't figured out what to do instead.

## Survivor bias and the illusion of a working process

Companies using live coding are convinced it works — because the people they hired through it do fine on the job. But that's classic survivor bias: they don't see the strong engineers they filtered out.

In reality, live coding is a game of aligned stars. A candidate passes when everything lines up simultaneously:
- they slept well and ate
- they had no personal stress that day
- the task happened to land in their domain — or they solved something similar in a previous interview
- the syntax of the needed functions happened to be in memory right now

When it all clicks, the interviewer thinks: "Wow, so fast, so smart." But that's not a signal of competence — it's luck. Instead of systematic evaluation, the company is sampling and mistaking it for filtering.

## What to do instead

There's no single perfect method. Better to think in combinations — where each stage is cheap on time and tests a specific competency: one that the person will actually use on the job.

### Code review of existing code

Give the candidate a real PR with intentional problems: a bug, a poor abstraction, a performance issue, missing error handling. Ask them to comment on it — in writing or out loud.

This checks many things at once: how someone reads unfamiliar code, what they notice first, how they frame feedback. You can see whether they care about naming, code organization, layering — too many abstractions or too few. Whether they recognize patterns, and whether they over-apply them. This is what engineers do every day. And AI barely helps here: you need to *understand* the code, not write your own.

### Deep-dive into real past experience

Not "tell me about yourself" — but "pick any project you've worked on, explain the architecture, what trade-offs you made and why." If the candidate maintains open source, even better: open their actual code and ask about specific decisions.

Time is genuinely limited here, but 15 minutes of good depth on someone's real project tells you more than an hour of algorithms. Hard to fake: if the person didn't write it, that becomes clear after 2-3 follow-up questions.

### System design as tool selection, not just high-scale architecture

Classic system design ("design Twitter") is its own genre that people memorize for. More interesting: pragmatic tool selection for a concrete, small-scale problem.

"You need a forum for your product's users — how do you choose an engine? Do you build it yourself or use something off the shelf? Why?" Or: "You need to log events — which library do you pick, which server, why that over the alternatives?" This tests architectural thinking at a realistic scale, not the ability to draw a distributed system diagram for a million users.

### Theory as a knowledge map, not an exam

Theory questions are useful — but not as an encyclopedia test. Use them to understand how a person's knowledge is distributed: what they know deeply, what's superficial, where the blind spots are.

Ask directly: which languages do you prefer and why? Which databases have you worked with — how did they differ in practice? What do you like about your current stack, what frustrates you? Companies often silently assume candidates chose them for the stack — but the person might have worked with a more efficient language or a more specialized database, and you'd never know how good they actually are without asking.

### Pair programming with shared ignorance

The most honest format of all: the candidate and interviewer tackle a problem that **neither of them knows in advance**. It could be a task from an open source project, a small bug, or even a leetcode problem — as long as the interviewer is also seeing it for the first time.

This eliminates the knowledge asymmetry. It's no longer an exam — it's collaborative work. Google, AI, and documentation are all fair game. What's interesting to observe is the process: how someone decomposes a problem, how they communicate, how they handle a dead end, how they use their tools. That's what real engineering looks like.
