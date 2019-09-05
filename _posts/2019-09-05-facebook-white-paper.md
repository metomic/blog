---
layout: post
title:  "Facebook just released a white paper on data portability"
description: "Facebook have released a white paper about data portability. This explains what data portability means, and how Facebook have approached it"
categories: "Opinion"
author: "Georgia Iacovou"
socialImage: /images/socialnetwork.png
themeColor: "#F5BB5F"
date:   2019-09-05 13:19:00
---

## Are they serious, or is this just more privacy posturing?

Data portability is where you can take any data you produce for one service, and move it to another. E.g. taking all data away from Facebook, and putting it into a Facebook alternative so you don't have to 'start again'. Data portability is just like an idea that's been buzzing around for a while now, but no one major [really engages in it](https://blog.metomic.io/main/2019/04/02/How-To-Make-A-Data-Request.html).

**The white paper makes some very good points:**

- **Who's allowed to transfer what data?** E.g. photos of you may also contain other people — that's their data too.
- A hint at understanding that the **data should be standardised**: they currently put data in JSON format, which is very commonly used across many platforms (but cannot really be called a standard).
- **They question what data should be portable**. It's obvious that the data you, the user, produces by using the service should be what you can transfer. But, more data about you will exist, and what does it mean to 'produce' data anyway?

These are fair questions and observations — we should all be thinking about how to solve these problems, of course. 

`The very point of data portability is to afford more control to the user: 'imposing additional controls' is just another way for Facebook to maintain influence.`

The most interesting part of the paper is the fifth question they ask, which has the longest answer. The question is: who is responsible if the data is misused after transfer? They then speculate for many words on how this should be addressed. Here are some of the words:

> Apart from these basic steps, the Working Party does not offer guidance on how **service providers should protect against misuse by third parties**. In conversations with stakeholders, we often hear that transferring service providers should consider imposing additional controls to ensure that recipients process user data with privacy and security in mind.

Pay special attention to the bolded text, because data portability aside, how much do Facebook (who are service provider) protect against misuse of data by third-parties at the moment?

## Third-party responsibility **is not a data portability problem**

If a user wants to transfer their data from Facebook to another Facebook type service, the responsibility flows as so:

1. Facebook — once the request is made, Facebook's responsibility is to deliver it to the user and **remove all requested data from their servers**.
2. The user now has the data — they can do what they want with it including not even advance to the next step
3. User puts data into Facebook alternative — this service is now responsible for handling the data appropriately

What the Facebook alternative do with the data is none of Facebook's concern at all; what Facebook seem to be doing here is over-complicating one of the simplest parts of data portability. 

'Imposing additional controls' is not necessary, and just another way for Facebook to maintain influence. **The very point of data portability is to afford more control to the user** so if a service provider starts to have a big say on how and where data is transferred, user control will quickly dissolve.

**Why Facebook care so much about who data is transferred to:**

- If data portability was suddenly made easy, there could very well be a flurry of users moving their data away from Facebook
- Tech giants don't stay giant without data
- Facebook wants to have [their data sundaes](https://blog.metomic.io/main/2019/05/21/what-is-a-data-trust.html) and eat them too: this white paper signals that they care about portability, as long as it's on their own terms

This quote from Mark Zuckerberg himself indicates that he has a profound misunderstanding of what data portability really is — whether that misunderstanding is wilful or not is impossible to know.

> True data portability should look more like the way people use our platform to sign into an app than the existing ways you can download an archive of your information.

*Mark Zuckerberg, in a recent [opinion piece](https://www.washingtonpost.com/opinions/mark-zuckerberg-the-internet-needs-new-rules-lets-start-in-these-four-areas/2019/03/29/9e6f0504-521a-11e9-a3f7-78b7525a8d5f_story.html)*

Then the white paper follows this quote with: "In other words, people should be able to transfer their information directly to a provider of their choosing, in a way similar to how people use Facebook Login today."

**They are suggesting that there should be no middle man:** Facebook transfers your data to the Facebook alternative, on your request. Moves like that ensure power remains centralised to Facebook, [as usual](https://blog.metomic.io/main/2019/05/09/black-holes.html).

True data portability means that there should always be a middle-man: either the user, or some trusted transfer service. But **never** the service you are making the transfer from.

This [white paper](/images/data-portability-privacy-white-paper.pdf) follows the [Data Transfer Project](https://blog.metomic.io/main/2019/08/02/data-transfer-proj.html) which Google, Apple and Microsoft are also part of.