---
layout: post
title:  "Google has been using a workaround for GDPR"
description: "Brave find that Google have been using a workaround for GDPR, specifically with real-time bidding, so that they can gather more data and ad revenue. They could get a full gdpr fine"
categories: "Opinion"
author: "Georgia Iacovou"
socialImage: /images/google-pushed-pages.jpg
themeColor: "#F5BB5F"
date:   2019-09-05 13:18:00
---

## [Johnny Ryan from Brave](https://brave.com/google-gdpr-workaround/) has found a data-gathering workaround Google have been implementing on 8.4 million sites

In the wake of GDPR, Google made (some) effort to stop publishers from using Google's tools to engage in real-time bidding ([RTB](https://blog.metomic.io/main/2019/03/29/RTB-fast-secret-auctions-with-your-data/html)), which is a method of broadcasting as much user information as possible to as many advertisers as possible (hundreds at once), upon visiting a single website — all in a matter of milliseconds. 

**Just so we're clear:** the information Google have and will share during RTB is not just 'likes riding bikes'. It's a complex web of data points which helps them understand who you are, ranging from religion to sexual orientation. Just look at this [handy list of codes they use](https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals).

> Real-time bidding in its current form is toxic. The speed and scale of the broadcast is incapable of complying with the GDPR’s security principle
*Ravi Naik, data rights solicitor*

Under GDPR (and under common sense), RTB isn't exactly a stellar example of ethical data practices, which is why **Google stopped sharing unique user IDs with advertisers** — these would help advertisers more easily know who is who, and therefore what ads to serve. In their 'cookie matching' [documentation](https://developers.google.com/authorized-buyers/rtb/cookie-guide) they even say this: "Google does not accept any user information provided by the buyer (such as the cookie, user demographics, etc.)" 

**Translation:** "you, the publisher, can engage in RTB if you want, but we will not be matching the user data *we* have with the data that *you* have."

Making such a match would obviously be extremely useful if what you want is even more data and even more ad revenue. So here's how they got around their own 'rules' and the GDPR:

## The workaround is called Push Pages

What Push Pages does is, upon a user visiting a site, load another hidden HTML page that the user cannot see. How this secret invisible web page acts as a workaround

1. The page is nothing, but the NAME of the page is always "cookie_push.html" followed by nearly 2000 other characters
2. This very long file name that Google generate is unique, and it's one per user
3. *Ding ding ding*: there's your new, workaround version of a user ID — the information you are now sharing is not actually anonymous.

**A mastery of de-anonymisation:** advertisers can now look at these IDs and the associated data, match it with data they have, and continue to do real-time bidding on you, the unsuspecting user.

**How is this even allowed?**

- It's not — it's very secret and smart
- Your ad-blocker or cookie prevention tactics are ineffective against this because a HTML page **is technically not a cookie.**

**Get your fining boots on**: the Irish Data Protection Commission is going to [start an investigation.](https://brave.com/dpc-google/) If they don't like what they find, they'll likely fine the full amount, which in this case is $27 billion. That would massively over-shadow any fine we've seen so far. 

This fine sort of really needs to happen; so far businesses have been very choosy about how they handle their GDPR compliance, including coming up with clever workarounds like this one. There are [many others out there](https://blog.metomic.io/main/2019/04/23/cookies-are-a-perfect-and-irresistible-distraction-from-other-bad-things.html), but the thing that sets this one apart is that Google did it, and the regulators know about it.