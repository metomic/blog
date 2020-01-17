---
layout: post
title:  "Why cookie banners won't exist in two years"
description: "Recent trends suggest we are moving away from using cookie banners as our standard way of "
categories: "Opinion"
author: "Georgia Iacovou"
socialImage: /images/enfiled-trackertracker.png
themeColor: "#F5BB5F"
date:   2020-01-17 12:16:00
---

## Aren't you sick of seeing these every time you visit a new website?

Quite right, you should be sick of them — sick of interacting with them, ignoring them, or even implementing them yourself because the onus is on you to do so as a website owner.

![gif of cookie banners](/images/banners.gif)

New regulations such as the GDPR are extremely important, because they are the beginning of a new wave of ideas surrounding data privacy. But right now, we are experiencing some growing pains, and one manifestation of those is the undeniable and ubiquitous use of cookie banners across the web.

🚄 **The end of cookie banners is coming** and there are a few reasons for this. For one, they are grossly unpopular. But (much more importantly) they simply **do not work**. TechCrunch just covered a recent study that shows how cookie consent tools [completely undermine](https://techcrunch.com/2020/01/10/cookie-consent-tools-are-being-used-to-undermine-eu-privacy-rules-study-suggests/) privacy laws. Finally new regulations, such as the ePrivacy Regulation, will make it harder for them to exist.

## You don't even need to use a banner to block and manage cookies

Even if you 'fix' cookie banners, in their current ugly and intrusive state, so that they are more than cosmetic compliance signifiers, they would still be problematic. First of all, they have a massive [negative effect on user experience](https://metomic.io/blog/main/2019/04/30/downgrade-ux.html) because they hijack our attention and screen real-estate. This sets a bad precedent: that you can't have good privacy controls in place *without* disrupting user experience.

One of Metomic's newest features is [Contextual Consent](https://metomic.io/blog/main/2020/01/13/contextual-consent.html), which paves a road towards bannerless web experiences. Contextual Consent allows users to consent to cookies only when they decide to use features which rely on those cookies to work. No banner necessary — because consent is managed throughout the experiences and features of a site, not all at once upon initial visit.

You can see this in action on our [homepage](https://metomic.io/) right now... this is what happens when you go to chat with us via our Intercom widget

![gif of contextual consent at work](/images/intercom-placeholder.gif)

Furthermore, [cookie banners are not really up to the GDPR standard](https://metomic.io/blog/main/2019/10/22/five-common-cookie-myths.html); in order to provide valid, express consent, your users need to be properly informed of what they are even consenting to. Stuffing all that information into a cookie banner does very little to keep users informed, because it's mostly irrelevant to the average user, and not very accessible. 

![a Quantcast cookie banner](/images/buzzfeed-banner.png)
*Perfect example of confusing and irrelevant information, contained many clicks deep into a Quantcast cookie banner.*

Essentially, it's pretty important that when building for the web, you start to think about **alternative ways** of implementing privacy controls for your users. Cookie banners are ineffective, and do not comply to regulations.

## But wait, why is all of this up to you?

And why is it on your users? At the moment, [standard practice for large platforms](https://metomic.io/blog/main/2019/12/18/privacy-is-necessity.html) is to implement privacy controls that the user has to hunt for, and 'switch on'. This puts too much weight of responsibility on users. 

It also puts too much weight on makers and businesses — why should each individual site owner have to implement their own cookie controls? What about if more responsibility was on the software we use to actually look at web pages: browsers. 

![screenshot of the privacy centre in Firefox](/images/firefox-privacy.png)
*The new privacy centre inside Firefox browsers*

2019 saw a rising trend of more nuanced and powerful privacy settings embedded at a browser level. In September, Firefox [announced](https://blog.mozilla.org/blog/2019/09/03/todays-firefox-blocks-third-party-tracking-cookies-and-cryptomining-by-default/) that it would start blocking third-party tracking cookies by default. This makes sense, considering that when you set a cookie, the browser is where it is stored.

Google Chrome, which massively dominates the browser market, has also started implementing third-party cookie blocking, but to a lesser extent.

**Why this trend?** [The ePrivacy Regulation](https://metomic.io/blog/main/2019/11/27/eprivacy-regulation-explained.html), still in draft mode, strongly advises against the use of cookie banners, and stipulates that cookie consent should remain as per the GDPR standard. The latest draft explains how the use of cookie banners is necessary because of the prevalent use of tracking technologies across the web, but they end up not working because...

> "...end-users are may be overloaded with requests to provide consent. This can lead to a situation where consent request information is no longer read and the protection offered by consent is undermined." *Taken from the latest draft of the ePrivacy Regulation*

So even the ePrivacy Regulation has identified this problem that the GDPR accidentally (and unintentionally) created. What we're experiencing right now is "consent fatigue". The latest draft  suggests that browsers take on the responsibility of cookie consent management, to create a more user-friendly, centralised system of cookie and tracker controls. 

> "[browsers] are encouraged to include settings in their software which allows end-users, in a user friendly and transparent manner, to manage consent to the storage and access to stored data in their terminal equipment by easily setting up and amending whitelists and withdrawing consent at any moment" *Taken from the latest draft of the ePrivacy Regulation*

The fact that an upcoming regulation is suggesting that cookie banners should go away, and such controls should be managed at a browser-level, is very promising. Just think: it could allow for a 'standardisation' of certain types of controls, because there are only a handful of internet browsers (as opposed to the hundreds of different kinds of cookie banners, privacy notices, and content walls out there right now).

So everyone, get ready to wave goodbye to cookie banners, because regulations, user fatigue, and new solutions such as Firefox's privacy centre and Metomic's Contextual Consent are making them harder and harder to exist. Bye bye banners  👋

If you want to join us in the data privacy conversation, please feel free to join our [community Slack channel](https://join.slack.com/t/metomiccommunity/shared_invite/enQtODk1NTE3ODY0NDIwLWNlYzIxYTdkZjgyYmExZjUzNzYyMDdjZThiNjhiYWU4ZTI4YTk4MDVhM2Y5ODI1NTdjNjMzN2I2YTE5YjYwNGE)  💬