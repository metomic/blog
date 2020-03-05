---
layout: post
title:  "What are SDKs doing behind the scenes?"
description: "A look at the bad data practices that happen behind the scenes with SDKs"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/sdk.png
themeColor: "#466993"
date:   2020-03-05 13:16:00
---

## Yes, SDKs are useful, but think twice about what you're using to build your apps

Here are some facts for your brain (taken from [a study](https://published-prd.lanyonevents.com/published/rsaus18/sessionsFiles/8161/ASEC-T08-Leaking-Ads-Is-User-Data-Truly-Secure.pdf) by Kaspersky Labs):

- 4 million Android apps are sending unencrypted user data to advertisers, over HTTP
- 90% of apps are **still** using HTTP instead of HTTPS to make requests to third-party servers
- As an example: Period Tracker, which is an app that collects potentially sensitive information, has 26 SDKs in it, some from Facebook and Google.

It seems there's one big downside of using SDKs in this way staring at us in the face: it's hard for users to know what data about them is being broadcast to which third-parties when they use an app. It's safe to say that developers may not be aware either, if the aim is to simply speed up development time without paying *too* close attention to documentation. This has created a kind of unregulated wild-west of data sharing, because there is no restriction what data can be shared, and with who.

🏠 **Look at it this way:** imagine instead that you were building a house but with the same methodology. You don't know how to: put insulation in the walls, tile a floor correctly, build a staircase, etc. So, you hire some sub-contractors do this work for you. **Except:** you do not vet them in any way shape or form. They get the house built quicker, but they do a sloppy job. You try and live in the house, and everything breaks 😱.

![playful diagram of SDKs piling into a phone](/images/sdk.png)
*A very accurate diagram of how SDKs work...*

👆You wouldn't let strangers with no skills build a house, because the repercussions are obvious. This same level of caution does not seem to apply to building apps even though, unlike houses, an infinite number of apps are available to millions of people, at little or no cost. It's obvious when your roof caves in. It is **not obvious** when your preferred dating app is sharing your profile with advertisers. 

To illustrate the breadth of this issue, let's look at a [report conducted by Mobilsicher](https://mobilsicher.de/ratgeber/how-facebook-knows-which-apps-you-use-and-why-this-matters) (a German mobile security initiative). It found that:

> Approximately 30 percent of all apps in Google’s Playstore contact Facebook at startup and transmit user data. This way, the company knows which apps you use and when you use them – including apps related to religion, sexuality or health. For users, this data-transmission is entirely invisible.

The report goes on to say that most developers assumed the information Facebook received was anonymous. This is the classic privacy VS convenience toss-up: Facebook's SDKs provide useful analytics for your apps, but 'in exchange' they will take data from your users and match it with their Facebook profiles. 

## Many SDKs may not be built user privacy in mind, so at the moment it's up to developers to think about this

Sure, okay: you need stuff like crash reporting and authentication, but you don't want to build it yourself. That stuff makes sense. However, ask yourself: do you really need Pinterest's SDK? (I'm looking at you, Tinder...)

![screenshot of MightySignal results](/images/mightysignal-tinder.png)
*Results from a [MightySignal](https://mightysignal.com) scan*

Of course, this gets difficult when thinking about things like monetisation, and personalisation — and by that I mean, understanding more about your users to make your products better for them. There *are* alternatives out there, such as [Canopy](https://canopy.cr/sdk) which is an on-device SDK which learns about your users without broadcasting personal information.

Then there are also integrations that help with actual functionality, such as a map API. Before you default to Google, have a look at what else is out there. [Open Street Map](https://www.openstreetmap.org/about) provides open map data — so you can use a map in your app without exposing your users to the largest ad network in the world. 

It's safe to say that the internet is currently in the middle of a large shift in privacy attitudes; unfortunately, however, the status quo remains of messy ad tech remains. If, as a developer, you have the power to challenge the status quo, please do 🤓.

If you want to chat with us about what we're building, or just generally about the world of data privacy, please join our **[community Slack](https://join.slack.com/t/metomiccommunity/shared_invite/enQtOTY4MzMyODQwOTEyLTk0MmFjNGExMTRhZjA4ZWY2NTBkYjQ3YTJkMzFiMDU2NmIwMThlN2Y1NTAzNDEwYzZiNTc0NDAwODMyODM0MGI)** 💬