---
layout: post
title:  "I can identify you with a dot on a piece of paper"
description: "Anonymous data cannot really exist if connected two pieces of data together identifies someone straight away. Therefore, the definitions we use for 'personal identifying information' should be changed in some way"
categories: "Longform"
author: "Ben Van Enckevort"
author_description: 'Cofounder & CTO, Metomic'
author_image: /images/ben-profile.png
socialImage: /images/anonymous-dot.png
themeColor: "#2ECA88"
date:   2020-03-11 13:00:00

---

## Is there truly such a thing as anonymised data?

*Disclaimer: this post is about GDPR. If you're looking for the latest in paper-based fingerprinting techniques to accelerate your retro print marketing startup, you're in the wrong place.*

You probably already know what GDPR is (unless you've been living under a rock). For some it's been a clear and huge step forwards for society — for others, it's the worst thing to happen to the internet since TikTok. Ironic, perhaps.

Personally, I think GDPR **absolutely** has its heart in the right place — and I thoroughly support its existence — but I think it's *fundamentally undermined by its lack of clear definitions.* It is **too difficult** to genuinely comply with the regulation, because it's incongruous with how businesses operate at any scale. The spirit of the law can more or less be paraphrased as "be responsible, don't be a dick, don't trick people".

But the actuality of the law is very different. If you want to comply with the regulation, much of your attention will revolve around the definition of "Personal Data" — and herein lies the problem.

![pieces of paper flying into the air](/images/anonymous-dot.png)

## "Personal Data" is a broken concept

Here's the definition of personal data, lifted straight from [Article 4:](https://gdpr.eu/article-4-definitions/) (emphasis mine)

> *‘personal data’ means **any information relating to an identified or identifiable natural person** (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;*

I'm just going to repeat that — because you can pretty much lose the qualifier at the end of the emboldened text: "personal data means **any information...**"

Any. Information. "Any information" what? Relating to an individual.

Okay, I can grok this. "Any information" is broad, yes ... but it's not like it means anything right?

Except when talking about the **rights of the individual**. It's *their* data, after all. What are those rights you ask? (you didn't, but humour me)

- The right to be informed
- The right of access
- The right to rectification
- The right to erasure
- The right to restrict processing
- The right to data portability
- The right to object
- Rights in relation to automated decision making and profiling.

**What does this mean?** If I'm holding onto *your* information — you get all the rights listed above. This sounds like a good thing!

Except the definition of *your data* is completely batshit insane: **"Any information relating to an identifiable person".** Why's this insane? Because unless we get more specific, this includes *all data*. Here, let's play a game.

## I can identify you with a dot on a piece of paper

We're gonna make an anonymous piece of "data". As anonymous as can be. A single bit, no more. A one or a zero. 

I tear off a teeny corner of a piece of paper, and give you a pen. I ask you, "either make a dot, or do not". You press the pen down into the paper and make a dot. 

**Is this personally identifiable information (PII)?** No. 

**Why not?** Because there's *no way* that it can be traced back to you. 

Imagine, for the sake of argument, that you wanted to "anonymise" this dot. How much further could you go? How much further *should* you go? Imagine you asked every single human on the planet: "Do you know who made this dot?". Nobody knows. It's meaningless

As far as any sane person would argue, this dot on a piece of paper is not PII. If we lose it, we haven't suffered a data breach. If it gets photocopied, or left on a desk — we aren't going to have an all hands meeting to redress our lax internal security policies. 

Okay, so if this dot is not PII, let's use it everywhere. Stick it on some flyers, why not? It's not like it identifies anyone. Let's show it to the entire world. Let's make it our new corporate logo. Maybe not that — but we're gonna go wild regardless. 

![a dot drawn on a piece of paper](/images/paper-dot.jpg)

3 years go by. We've never used any personal data; just this one dot. Then something bad happens. We foolishly go on TV together and talk about the dot. I say, "I gave you a piece of paper" and you say, "and I made a dot on it".

And with that one single slip of the tongue, this dot is now *completely* identifiable. It's the one dot that we have, and *you* made it. All it needed was to be combined with one other piece of data — namely you saying that you made the dot. Nobody else is saying this. You are the *only person* saying this. In fact, if we ask anyone who made the dot, they'll all say *you did.* This dot is PII.

How's this possible? If something can be *not PII* and then *actually PII* by the simple addition of another piece of data ... well then how can we trust **anything** is not PII? How can *anything* be truly anonymised?

Taken to its logical extreme, it can't. At least not categorically. 

The most confusing part of the scenario above is: **we've now *retroactively* made this dot PII**. What about all of the frivolous nonsense we engaged in with the flyers and the photocopying and the whatnot — is this all a breach of regulation? Quick! Hire some lawyers!

Actually wait. Maybe we can just talk about this a bit first. Maybe we can just ... please ... get some clarification on definitions? Because right now, they're completely paralysing.

## The organisations doing their best still aren't doing enough

This is my biggest gripe with this issue; the impracticability of compliance. Companies who are *trying* to do better than they've done in the past are easy targets for "you're not actually GDPR compliant". No. Of course you're not. Nobody is!

This shouldn't stop companies from trying though. We should (and can) still strive to be more responsible with data, and using safer technology. [The company I work for](https://metomic.io) is active in trying to solve various parts of the privacy puzzle — but I cannot count the number of times we've looked for a compliant alternative to some tool only to conclude that "it's not good enough because it's not *actually* GDPR compliant".

This is backward. We're at risk of letting perfect be the death of better.

**So here's my plea:** let's figure out some definitions. Let's get some *concrete* guidance. Let's work out whether IP addresses, or obfuscated nicknames, or boolean values in cookies, or dots on pieces of paper *actually* count as PII. Let's have some real examples. ICO? DPC? LDI? Let's stop guessing. Maybe then I can finally post a picture of this dot I found on a torn off piece of paper at a coffee shop, because it's really, really neat.