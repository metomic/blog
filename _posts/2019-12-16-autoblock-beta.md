---
layout: post
title:  "New feature: Autoblock (beta)"
description: "A quick overview on how we changed the onboarding to our Cookie Widget, and what we learned in the process"
categories: "Product"
author: "Ben, Josh, and Joel"
author_description: 'From the product team'
author_image: /images/ben-profile.png
socialImage: /images/autoblock.png
themeColor: "#EB4967"
date:   2019-12-16 13:16:00
---

## We've automated the blocking of third-party scripts for you with Autoblock

🛠 Autoblock is in early beta stages at the moment, but we're excited for everyone to try. If you have feedback, [visit our homepage](https://metomic.io) and chat to us on Intercom :)

With Autoblock, Metomic will find all third-party scripts on your site that send requests, and block them. You users then have the control to unblock them the usual way, with the cookie widget. What Autoblock does:

- Finds third-party scripts on your site that send requests
- Puts them in a neat list for you to look at
- Will automatically block whatever you want from this list
- Yes, it works with Google Tag Manager 👍

Essentially, this feature helps you set up, and maintain, Metomic faster. Whether you've just signed up, or already use us, you can find Autoblock under 'third-parties' in the dashboard.

![screenshot of metomic dashboard](/images/autoblock.png)
*The Autoblock screen in the Metomic dashboard — all you do is check which third-party scripts you want to be blocked.*

So from now on you can leave all the blocking to us — no need to manually modify scripts on your website. You can of course still do this using the integration helper if you like.

### ☝️ Autoblock helps you get closer to compliance, and transparency with your users

[The law](https://metomic.io/blog/main/2019/07/31/share-buttons-illegal.html) requires you to ensure that [non-essential cookies](https://metomic.io/blog/main/2019/08/14/essential-cookies.html) are not used without the consent of your users. Until now the solution to this has entailed diving into your code, and making modifications yourself. With Autoblock, all you have to is tell us to block requests, and we will — automatically.

This way your Google Analytics script will not run **until your users say it's okay** via your cookie widget. All the control and transparency is there, and all you did was check a box on a list — pretty straightforward, right? 🎊

### **What problem is Autoblock solving?**

At the moment the internet is in a place where regulation sets high standards that are hard to achieve. There are two prongs to the problem that Autoblock solves:

1. When a user visits a page, third-party requests get made to either set cookies or send cookies that have already been set — and this is beyond most user's control.
2. Website owners cannot know, or control, the requests that make other requests. E.g. as [we outlined here](https://metomic.io/blog/main/2019/08/22/nested-cookies.html), Intercom makes a request to its own servers, but also to Google — because Intercom uses Google Analytics on its chat widget.

Autoblock helps you manage this without having to manually block scripts yourself. Metomic recognises a wide range of third-party providers because of the scanning technology we've developed and used over the last year — it's what we use to power [TrackerTracker](https://trackertracker.io).

**✨ Autoblock is in beta. Please give it a go and if you have any feedback, let us know via [Intercom on the homepage.](https://metomic.io) ✨**

---

## [Get Metomic on your site now, for free](https://landing.metomic.io/) 👉