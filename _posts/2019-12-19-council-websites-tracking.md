---
layout: post
title:  "Why do so many websites use tracking tools?"
description: "A look at why website builders put trackers in their backend. Some do it because they think they have to."
categories: "Opinion"
author: "Georgia Iacovou"
socialImage: /images/enfiled-trackertracker.png
themeColor: "#F5BB5F"
date:   2019-12-19 13:16:00
---

## Put down your coffee and look at this scan result from [TrackerTracker](https://trackertracker.io/):

![screenshot of tracketracker results](/images/enfiled-trackertracker.png)
*This result is just from the homepage of Enfield Council's website — subpages may contain additional cookies*

These are [scan results](https://trackertracker.io/?domain=https://new.enfield.gov.uk/) from the Enfield Council's website — they set quite a lot of cookies without asking first, and many of them are for marketing and advertising. 

The council site for [Ealing](https://trackertracker.io/?domain=https://www.ealing.gov.uk/site/) has pretty similar results. As does [Wokingham](https://trackertracker.io/?domain=https://www.wokingham.gov.uk/). All of these use Google's advertising cookies. Enfield use both Facebook *and* Google.

🤔 **Why am I telling you this?** Because recently there was a study that [found 96% of councils](https://eandt.theiet.org/content/articles/2019/11/96-of-councils-found-to-hand-over-users-data-to-marketing-firms/) in England and Wales serve their site visitors tracking cookies. Why do they need to do this? Well, before I answer that, let us first consider [why any website needs to do this](https://metomic.io/blog/main/2019/11/05/web-monetisation.html). 

[Dictionary.com](http://dictionary.com) drops 118 cookies without consent, and is entirely free to use. So the quick answer is: **money** 💵. Publishing sites like [dictionary.com](http://dictionary.com) generate income by using tracking technologies, and participating in [targeted behavioural advertising](https://metomic.io/blog/main/2019/09/13/what-is-behavioural-ads.html). Not ideal, but you can see how the system made this happen 🤷🏻‍♀️.

But why are council websites doing this if they get government funding? [This advertising policy](https://www.wokingham.gov.uk/website-advertising/) suggests it's for the same reasons as publishing sites: for money. This of course raises questions about whether or not it's right for a public service to exploit user data for money. But it's also more complicated than that...

## Pro tip: you don't need to track your users for your site to work.

Here's a typical scenario that you can apply to more than just council websites:

🏢**Step 1:** Organisation X needs a website for their business or service, but they don't know how to build it themselves so they get a web developer to do it for them. The web developer does a fine job, and everything works great.

📈**Step 2:** But then, Organisation X say, "it would be even better if we could see which bits of our site people like the most, and which they don't seem to like."

🛠**Step 3:** So the developer installs Google Analytics to gain insight on how people interact with the website, and Facebook to understand what kinds of audiences Organisation X are dealing with.

`It's as if tracking your visitors around the web is standard.`

This is broadly how we got to where we are now: nearly every website you go on will have some level of tracking technology in its back end, as well as an annoying cookie banner. This issue is compounded by the fact that website owners seem to skip step two all together — as if tracking your visitors around the web is standard.

## Here's a thought: why not just ask first?

There's nothing wrong with using tools to understand how your users interact with your site, or what kinds of people are interested in your products — that's just marketing; marketing has been happening way before we all got online.

The part which is wrong is not being transparent. If I were trying to use my local council website to get something important done, and they asked me if they could gather usage statistics from me to help them improve how they're site works, I'd be happy to oblige. But take without asking, and trust goes out of the window.

This is exactly why everything we build at Metomic enables organisations to be more transparent with their users. We aren't making tools that discourage you from using the Facebook pixel — we are making tools that let you be transparent about it. 🤸🏼‍♀️

![screenshot of tweet](/images/cookie-stats.png)
*Some results from our scanning research, tweeted by our CEO Rich*

**But it's also more than just asking:** unfortunately Google and Facebook are the most widely used ad networks out there, and they don't exactly have the best track records for ethical data practices. Luckily there are [tools out there](https://metomic.io/blog/main/2019/10/29/privacy-toolss-for-devs.html) that offer very similar services while also striving to keep the web clean of intrusive tracking technology.

As a special bonus, there are even neat tools such as [Coil](https://coil.com/) which help publishers make money from their content, and not from ads — who knew you could do that on the internet. New tools like this are popping up all the time, suggesting that there is appetite for a new norm; maybe we can build amazing things **without** propping them up with ad tech  👏.