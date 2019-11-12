---
layout: post
title:  "How third party cookies could be putting your company at risk"
description: "A short explainer on third-party management. Slapping some analytics on your site may seem harmless, but what are those platforms doing with the data afterwards?"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/map-example.png
themeColor: "#466993"
date:   2019-11-12 13:16:00
---

## If you run a site or web app, third-parties can be helpful solutions to problems you don't want to solve.

But, because of the somewhat incongruous way the internet works with regulation, the way you handle third-party cookies could be putting your business at risk. Here are three ways in which your third-parties could cause some problems (as well as ways to avoid these problems)

**Before we dive in, let me clarify what I mean by thrid-party cookies:** these are cookies dropped by websites other than yours. So if you use Intercom for live chat, they will set a cookie — that is a third-party cookie.

## ☝️ The first way is failing to get appropriate consent for your third-party cookies.

Regulation dictates that you get consent for [non-essential cookies](https://blog.metomic.io/main/2019/08/14/essential-cookies.html). These include anything relating to marketing, advertising, and site statistics.

This is one of the most common mistakes websites make — we scanned over 800 of the top websites using the tech that powers [TrackerTracker](http://trackertracker.io), and found that on average, websites drop **21 third-party cookies without consent**. 

![screenshot of a tweet showing some stats about cookies](/images/cookie-stats.png)
*Our CEO, Rich, throwing out some stats*

The most common third-party cookies are dropped by:

1. **Google**:
    - Advertising: As an ad network, they tap into all user data they have on you (the site visitor) already, and suggest what kinds of ads to target you with.
    - Marketing: Google Analytics collects site statistics to help marketers understand how users interact with the web app or site.
2. **Facebook**
    - Advertising: just like Google, Facebook are an ad network too. Arguably an even better one, because they've spent the last 15 years learning everything they can about humans via their social media platforms.
3. **Comscore**
    - Who? Yep, once you get further down the list you start to notice a lot of companies who you've never heard of, but have most certainly heard of you. [Comscore](https://www.comscore.com/) provide analytics, like Google.

Don't be one of those companies that sends data to Big Tech without asking first — you should be dropping 0 non-essential cookies before consent.

## ✌️ The second way is not being fully aware of what your third-parties do with your users' data.

So let's say you run an e-commerce store and use Stripe to process payments, Intercom to handle customer service, and Typeform to get feedback. Have you read each of their privacy policies? 

The answer is no. Of course you haven't. Who has time for that? The person who has time for that is one of those people who wakes up at 4am everyday (those people don't exist). 

I'm afraid you're going to have to make time — all three of those providers could easily have a line in their privacy policy saying 'we send user data to data brokers for money'. Our cookie widget provides links to third-party policies.

![preview of Metomic's cookie widget](/images/consent-manager-example.png)
*On our site we use Intercom — a user has a chance to see what Intercom do with data before opting-in.*

If you are not aware of these kinds of details, **you can't get consent from your users**, and you risk getting fined. You are the first point of entry for your users — they give *you* their data; if you don't handle it appropriately (which includes how it flows around the web), you are liable. 

## 🤟 The third way is forgetting that your third-parties... also have third parties.

In our scan of the top 800 websites, we found that the average number of third-party providers was just over seven per site. So, while your e-commerce site only uses three third-parties, each of those could use seven. 

That means your user's data is potentially accessible not just by those three companies that you picked yourself, but 21 — and you don't actually know who they are. You may know that [Intercom uses Google Analytics](https://blog.metomic.io/main/2019/08/22/nested-cookies.html), but who comes after that?

![screenshot of a tweet showing some stats about cookies](/images/map-example.png)
*Notice how messy it gets at the end there... just vague puffs of anything — could even be data brokers*

And if you don't just have a site, but a web app, the risk is higher because the data you process will be a lot more detailed, and possibly identifying (such as email addresses). 

The difficult part here is the incongruence between regulation, and how data currently flows around the web. So if one of your users asked you to delete their email address from your database, under regulation you would also have to ensure that it's deleted from the databases of all the providers in the above tree.

Fulfilling a subject access request like that would be a tough job — but the way you can avoid this is knowing who your third parties are, and staying up to date with any changes **they make** to how they process data. 

![screenshot of Metomic dashboard](/images/nestedcookies.png)
*Results from re-scanning a domain in the Metomic Dashboard — as you can see the [Facebook pixel](https://blog.metomic.io/main/2019/04/05/the-most-devastating-pixel-on-the-internet.html) is hidden behind [Google Tag Manager](https://blog.metomic.io/main/2019/08/22/what-is-tag-manager.html)*

👉 **Truly understanding data flow as a whole is tough**. As a site owner, you can quite easily control the entry of user data into your platform. But controlling it after entry — in the current way the internet operates — is challenging. At Metomic we are building tools to help you manage this. After all, user data should flow as much as it needs to, but that flow should be both ethical, and equitable. Watch this space ✨

---

## 💡Get Metomic's cookie widget on your site now, [for free →](http://landing.metomic.io)