---
layout: post
title:  "Cookie management: how to get closer to GDPR compliance"
description: "Three questions a small business can ask themselves about their website to ensure they are exercising good data and cookie practices."
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/buzzfeed-trackertracker.png
themeColor: "#466993"
date:   2019-11-06 13:16:00
---

Cookie management is tough — it's very likely that you need to use cookies, but you don't want to upset your users or risk a fine. Achieving 100% compliance is an unrealistic goal. As a start, ask yourself these three questions:

### Are unessential cookies being set before you get user consent?

You can check this on your own domain(s) really easily using [TrackerTracker](https://trackertracker.io/) — a Metomic tool which shows you which cookies are dropped when a page loads (and therefore surfacing cookies that are not blocked by a cookie banner). 

It's important to check this, because lots of cookie solutions out there don't block any scripts or cookies, making them purely cosmetic. 

![Screenshot of TrackerTracker showing cookies from Buzzfeed](/images/buzzfeed-trackertracker.png)
*TrackerTracker showing it's results from scanning [Buzzfeed](https://trackertracker.io/?domain=https://www.buzzfeed.com/). Try it on any site, [including yours.](https://trackertracker.io/)*

We scanned [Buzzfeed](https://www.buzzfeed.com/), whose cookie banner is powered by Quantcast. If you visit Buzzfeed's homepage, it more or less forces you to interact with a banner that fails to block cookies from Google, Facebook and more.

Yes, you want to gather site stats with Google Analytics, but this is not necessary to deliver your site/service to the user. It's important to remember what counts as an [unessential cookie](https://blog.metomic.io/main/2019/08/14/essential-cookies.html). 

The GDPR says that cookies relating to marketing and statistics - the unessential cookies - require **user consent first**. Just be transparent; it doesn't hurt to ask.

### Does your cookie solution ensure user gives informed and active consent?

It doesn't count as consent if a user has no idea what they're 'consenting' to. Passively browsing a page also does not count as consent.

**Informed consent** is where you give the user clear, accessible information on what they're consenting to. [Leave Me Alone](https://leavemealone.app/) does this perfectly using our cookie widget. They've clearly explained what the 'analytics' Micropolicy is, and what data is shared and why. 

![](/images/informed-consent.png)
*When you hover over each data point, a tooltip will appear telling what that data point is used for. E.g. if they know what kinds of devices their users access their app on, they can optimise for that in the future.*

Giving informed consent like this actually empowers your users to make the decision that is right for them. Directing users to lengthy privacy policies is not helpful, and almost the same as saying nothing — no one has the time or energy to trawl through an entire privacy policy every time they visit a new site.

**Active consent** is where the user has performed a very clear action (or set of actions) to say yes or no, like checking some boxes, and clicking a button to save preferences. 

☝️ It's important to remember that there was a [recent pivotal ruling](https://blog.metomic.io/main/2019/10/01/eu-cookie-consent-ruling.html) by the EU Court of Justice about just this. The ruling says that using **pre-checked boxes does not count as consent.** So, opening up some preferences and seeing a bunch of items defaulted to 'on', as the below, is unlawful.

![](/images/buzzfeed-banner.png)
*In this Quantcast banner, it takes several clicks to even surface this information, and much of it is set to 'on' as default.*

Use informed and active consent in tandem: surface key information, and don't make decisions on behalf of your user — check boxes for non-essential cookies (if you use these) should be set to 'off' as default. 

### Can your users change their minds after giving consent?

We are all humans, and humans change their minds all the time. On first visit a user may be just fine with Google Analytics. By the next visit they may have decided they'd rather not share any data with Google.

Somewhere on your site, you need a way for your users to modify consent. On the Metomic homepage we put it in the footer with the privacy policy and other legal things. Click the link, and the widget reappears.

![a gif of the metomic cookie widget reapparing](/images/widget-reraise.gif)

Humans are also busy, so it's likely they wouldn't even think to do this. It's also possible that they may think that there's no way of changing their mind — it's a good idea to send a short email (provided you have permission) once or twice a year to remind them how.

**To summarise:** being compliant with GDPR is not a one-time exercise; it's something you have to continuously maintain. Being transparent and empowering your users to make their own decisions about what cookies they get is key.

---

## 💡Get Metomic's cookie widget on your site now, [for free →](http://landing.metomic.io)