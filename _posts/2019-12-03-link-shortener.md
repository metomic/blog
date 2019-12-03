---
layout: post
title:  "How AWS nearly shut us down over our link-shortener"
description: "We made a privacy-first link shortener, and it almost got us into trouble because it was used for phishing."
categories: ["Company"]
socialImage: /images/trackinglink.png
themeColor: "#EB4967"
author: "Georgia Iacovou"
date:   2019-12-03 13:17:00
---

## We made a privacy-first link shortener that ended up being more trouble than it was worth.

In the very early days of Metomic, we got this reply to one of our tweets.

![screenshot of tweet that gave us the idea](/images/trackinglink.png)

Several things are wrong here:

- We failed to realise that Buffer (a social media management platform) automatically shortens links
- This shortened link tracks whoever clicks on it (because a request is made through whoever does the shortening, before finally landing on what is behind the link)
- In that moment, we were unable to find a link shortener that *did not* create a tracking link

The solution staring us right in the face was to build our own, privacy-first, link shortener. [priv.](http://priv.gh)sh has since been taken down, and it's now purely an internal tool; but when it was up, all it did was shorten links and nothing else.

## So why did we take it down?

This is a classic privacy conundrum: making something as private as possible is great, but it means people can do whatever they want without being discovered. In other words, you are left open to abuse.

Very recently we began receiving emails from AWS informing us of reports they'd received: [priv.sh](http://priv.sh) had been used for phishing. If this continued, AWS would of course be forced to pull our hosting — and therefore shut us down completely.

![screenshot of email from AWS warning us of phishing](/images/aws-phishing.png)

*This is just one of many emails we received about phishing — all within the same 24 hours.*

If AWS took away our hosting, all installed cookie widgets would cease to work effectively, and our customers would probably have no idea.

Our link-shortener is now for internal use at Metomic only. We learned these two key things from this:

**Thing one:** easier said than done, but don't put all your eggs in one basket. Issues with a tiny side-project should not have the power to close down your entire operation.

**Thing two:** concerns the role that technology should play in problems like this — even though we had the best intentions, the thing that we made enabled people to engage in criminal activity. By virtue of our link shortener being private we could never stop anyone from misusing it, so where does our responsibility lie?

Questions like this have been explored further in [this article](https://metomic.io/blog/main/2019/12/02/making-business-ethical.html) by [Alice Thwaite](https://twitter.com/alicelthwaite), about establishing ethical frameworks for your organisation. Technology can enable a lot of good, but also a lot of bad — the responsibility of managing how people interact with your products falls on you: the maker of that product.