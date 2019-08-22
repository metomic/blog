---
layout: post
title:  "What are tag managers?"
description: "a short explanation of what tag managers are, and how to handle consent for the user. E.g. putting many third-party tools inside a tag manager means you cannot get consent for the tag manager alone, but everything inside it."
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/what-is-in-tag-manger.jpg
themeColor: "#466993"
date:   2019-08-22 13:16:00
---

## In short, they are something that turns multiple tasks for developers into a single task for marketers

Let's say you run a website that sells shoes. As well as making sure your customers get their shoes, you will probably also want to gather some information such as what shoes they've bought, what shoes they almost bought, what else they may have looked at, etc. You need multiple tools to measure these things. Tag managers are exactly what help you manage these. Tools such as:

- [Google Analytics](https://analytics.google.com/analytics/web/) to track visitors and page hits
- [Hotjar](https://www.hotjar.com/) for heat maps: tracks user behaviour, where their mouse is going and where it's not going, and maybe even when people click places that they think are buttons...
- [Google Adwords](https://adwords.google.co.uk/cm/CampaignMgmt) for [ClickMeter](https://www.clickmeter.com/) to track how well your ads convert: whether a user buys something or drops off at some point before that, after clicking on an ad.

All these tools work together to paint a picture of how your customers navigate your shop and buy (or not buy) things. That is why they are used for marketing, and this is why tag managers are useful for marketers: to implement each tool, you need to copy a snippet of code — ie the tag — into the relevant place on your site. A **tag manager** makes this task relatively painless by merging each tag into one single snippet of code.

![screenshot of the Metomic dashboard showing what is inside a tag manager](/images/nestedcookies.png)
*The integration helper in the Metomic dashboard — this is what I found from scanning gousto.co.uk*

So with a tag manager, all your tags are safely together in one neat little bucket. Good. But also: bad. As you can see from this screen on the Metomic dashboard, Google Tag Manager will set a cookie, and nested inside are many other cookies. In this case if you click through enough times you get to the Facebook pixel, which here is called "_fbp". This isn't at all surprising... that little pixel is [everywhere](https://blog.metomic.io/main/2019/04/05/the-most-devastating-pixel-on-the-internet.html).

![diagram showing what is inside a tag manager](/images/what-is-in-tag-manger.jpg)
*Clearer view of what a tag manager could contain... it's a lot*

So tag managers make all that marketing that you need to do much easier. But we know that you need to [get consent for all non-essential cookies](https://blog.metomic.io/main/2019/08/07/cookie-consent-guide.html) (which is [exactly what marketing cookies are](https://blog.metomic.io/main/2019/08/14/essential-cookies.html)). So how do you handle consent for cookies set by tag managers? Well, what you definitely *shouldn't do* is treat the tag manager like one cookie and ask for consent that way.

A much better idea is to ignore the tag manager completely and treat everything inside of it as it's own thing. E.g. ask the user if they are okay with Google Analytics and the Facebook pixel separately so that they don't have to say a blanket yes or no to both.

Remember: you can put any third-party into a tag manager if you wanted. If you nest the Facebook pixel and Intercom in the same tag manager, it's not realistic to ask for consent for both of those things at once. Getting granular consent for what you've implemented with your tag manager is important so that your users can opt-in to Intercom without also saying yes to the Facebook pixel.

What we've learned here is that a tag manager is essentially one giant master cookie that contains other cookies. The good thing about that is, you as the publisher control the tag manager. But... this nested cookie phenomenon could be a pattern prevalent among any of the third parties that you use. Read here to find out more.