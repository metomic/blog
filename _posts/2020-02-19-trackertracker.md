---
layout: post
title:  "Why we made TrackerTracker"
description: "We made a tool that shows you how many cookies a website will set when you visit it -- this article explores why we made it, and why it took us so long to launch it."
categories: ["Company"]
socialImage: /images/tracktracker-home.png
themeColor: "#EB4967"
author: "Georgia Iacovou"
date:   2020-02-19 13:17:00
---

## [TrackerTracker](https://trackertracker.io/) is a tool anyone can use to see how many cookies a website will set when you visit it.

So essentially it tracks trackers — get it? That's the name out of the way. More importantly: why did we decide to build this, and why did it take us so long?

![screenshot of the homepage of trackertracker](/images/tracktracker-home.png)
*Here's where we landed with [TrackerTracker](https://trackertracker.io/) — there were many iterations before this that no one else saw*

**Rewind to March 2019:** the team is half the size it is now, and we are thinking about the value of a tool that would show a list of all the cookies which are being set in the background when you visit a website — in a way that anyone could understand. Nothing like this really existed yet. The questions we found ourselves asking were:

- Who would use a tool like this? Do we shout about it publicly or just circulate to people we think would find it interesting?
- Is it for website owners trying to fix problems, or end-users who are just curious?
- Does anyone even care about it?

Trying to answer these questions while also building a cookie widget was hard. We danced around some ideas, but never actually launched anything. What was TrackerTracker even for? More questions started being thrown around the office...

- Is this just a horrible shock-tactic?
- Do we frame it as a general tool that anyone can use, or is it a way to point people to our cookie widget?
- How much detail do we give? Is it just a number, or do we list every cookie and put them in categories?

☝️ **Do not be mistaken**: we had TrackerTracker at 95% ready state, but were paralysed for months. These questions were creating a cloud of doubt in the office, stopping us from hitting the big fat button that said 'ship' on it.

## But then, the EU Court of Justice made a [ruling](https://metomic.io/blog/main/2019/10/01/eu-cookie-consent-ruling.html) that changed everything

On the 1st of October 2019, the highest EU court officially deemed it unlawful to use 'pre-checked tick boxes' as a means of valid consent. This ruling told website owners their default privacy settings should not have things like cookies relating to marketing set to 'on' as default. That **does not count** as valid, [active consent](https://metomic.io/blog/main/2019/10/22/five-common-cookie-myths.html). 

As this news spread through the data privacy community, we knew that people — website owners, privacy geeks, DPOs — may suddenly be very curious about what was going on behind the scenes. At this point, we had no choice: TrackerTracker was up and ready to go by the 2nd of following day:

![screenshot of tweet announcing trackertracker](/images/trackertracker-announce.png)

All the questions we were asking over the last few months suddenly didn't matter anymore — it was like this new ruling validated the need for TrackerTracker to exist. The version we put out there is a somewhat simplified version of what we had discussed. But, it's an accessible way to get some quick information:

![using tracker tracker](/images/trackertracker.gif)

In the end — even if it did take over six months to push out something this simple — having TrackerTracker out there as something we can point to has been incredibly useful. We also use the scanning tech for other things such as the integration helper in the Metomic dashboard, and other internal tools.

If you ever want to talk more about data privacy tools, or get updates of what we're working on at Metomic, join our [community Slack channel](https://join.slack.com/t/metomiccommunity/shared_invite/enQtOTMyNjQzMTk3NDEwLTgxMzU4NjE3MTZiN2QyMzgwZGZiNDA4MWJjZjUwMDBmNzYyZmNiYjIxNjU0YzFkOWRlNGJlYWExMzc2ZjFjOTg) 🙋💬