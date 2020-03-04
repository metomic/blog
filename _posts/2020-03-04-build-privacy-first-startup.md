---
layout: post
title:  "How to build a ‘Privacy-First’ Startup"
categories: "Explainer"
author: "Richard Vibert"
author_description: 'Cofounder & CEO, Metomic'
author_image: /images/rich-profile.jpg
socialImage: /images/team.jpg
themeColor: "#466993"
date:   2020-03-04 13:00:00

---

## The ten obstacles you could be faced with, and how to overcome them.

In today’s privacy-first world, the stakes have never been higher for handling user data. Increasing GDPR fines, new regulations like the CCPA, and elevating consumer expectations — missing basic privacy controls could kill your business.

But with a product to build, a team to manage, and a burning cash balance, how are we supposed to do this without draining all of our resources and time?

Two years ago, Ben and I cofounded Metomic to solve exactly these problems. We’re also going through them ourselves — from building a privacy policy through to managing data deletion requests. In this post I’ll walk through the ten tactics we’ve used to overcome them.

![illustration of how a privacy-centric business is a happy one](/images/team.jpg)

## **Cookie notice**

In the beginning, we decided to throw up a landing page to test out several ideas. But which cookie notice to use?

All the options out there made the page, frankly, a bit shit.

![screenshot of a trustarc cookie banner](/images/trustarc-banner.png)
*A cookie banner provided by TrustArc*

So we decided to build our own.

![screenshot of the Metomic Cookie Widget](/images/cw-new-view.png)

After getting some traffic to the landing page, we ended up with more requests for the cookie widget itself than anything else. So, we made it into a product, tested it for a while, and launched it on [Product Hunt](https://www.producthunt.com/posts/the-end-of-cookie-banners-by-metomic). Less than twelve months later and it’s being used across thousands of websites.

## **Privacy policy**

Then came our Privacy Policy. Using a lawyer seemed excessively expensive while off-the-shelf options like GetTerms were too generic. When speaking to customers, we found that all they cared about — if they cared at all — was what data we took from them and which third parties we shared it with. It became clear that the rest of a privacy policy’s details are in service of lawyers more so than customers.

After a lot of research, we wrote our own Privacy Policy and then wrapped it up into a more attractive [Privacy Centre](https://privacy.metomic.io/) so customers can easily understand what we do with their data, and what we don’t.

![screenshot of our privacy centre](/images/privacy-centre-2.png)

## **Website and app analytics**

We quickly realised that we needed to understand how our customers were using our cookie widget.

The default option when it comes to customer insights is Google Analytics, and popular additions to it include Hotjar, Mixpanel, Heap, Crazy Egg, among others. But, even behind a consent screen, there’s a question mark over how data-ethical these tools are.

We decided to use analytics tools that put privacy first. Since then, we’ve been using [Simple Analytics](https://simpleanalytics.com/websites?from=/) ([Fathom](https://usefathom.com/) is another option) for our marketing websites and [Matomo](https://matomo.org/) on our app. We still ask customers for consent before kicking off these scripts, but we ask politely and always give users an easy way to change their mind.

![screenshot of our share statistics button in dashboard](/images/share-stats-button.png)

## **Customer chat**

By this point, we were handling a deluge of customer questions by email. We needed to make it easier for them to ask questions and get answers directly on the website or app.

Real-time customer chat is nothing new — it’s been around for over 10 years. There are a plethora of chat widgets, like Intercom, Crisp, and Drift. But they all drop cookies like crazy, even before someone uses them. They also process such data as email addresses and names when a website visitor interacts with them, which means our customers’ data is in the hands of yet another third party.

This time, we decided not to build our own chat widget because we had other things to focus on. We would use Intercom but wanted permission from our customers before loading the script. This posed a problem: before granting permission, customers didn’t even know the chat widget existed! How could we make it clear to customers that they could chat with us but also ask them for permission to run the script only when they wanted to?

Enter Metomic [Contextual Consent](http://contextual.metomic.io/):

![showing Contextual Consent in action](/images/contextual-consent.gif)

It’s a simple way of replacing third-party embedded content with an equivalent-looking ‘placeholder’, only loading the actual content when a user consents. We’ve created template placeholders for the most popular third parties — chat widgets, YouTube videos, Facebook Like buttons, and so on. But you can also create your own (a Google Analytics button asking customers to donate statistics, say). Our documentation is [here](https://docs.metomic.io/docs/placeholders).

## **Customer email marketing**

We still weren’t verifying email addresses. Still not sending ‘Welcome’ emails. Still not notifying our customers of product updates. It was time we stepped it up.

At first we disregarded the popular tools, like Mailchimp, HubSpot, Drip, etc., because we wanted to reduce the number of third parties to which we were sending customer email addresses.

Instead, we used the open-source tool [Mautic](https://www.mautic.org/). It worked well for ad-hoc emails, like product updates, newsletters, and investor updates. But for event-based emails, it wasn’t so easy and it drained our resources and time.

So we made the decision to use [SendGrid](https://sendgrid.com/) for event-based emails. We wanted to make sure we were very transparent with users, had the appropriate consents, and accepted the fact that some customers would opt-out.

## Surveys

When emailing customers, we sometimes asked them to complete surveys for feedback. We would always minimise the amount of personal data we collect through them, so we used the easiest option out there — Typeform. In the future, if we ever need surveys that require more data, we’ll seek an open-source version or alternative — so if you know of any, let us know.

## **Internal tools**

As our customer base grew, so did our employee headcount. Our internal tools — mostly Slack and Notion — started to buzz with activity.

We agreed that customer data would seldom be used in Slack, and when it was, it would be tagged with 🕵️ so we can later recover it. Not the best implementation, but it works.

We use Notion on a daily basis. We did our due diligence and concluded that they take privacy and security more seriously than a lot of other note apps (or even companies as a whole). And we don’t see any part of their business model tied to their access to data. Even this intro to [their privacy policy](https://www.notion.so/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac) is reassuring:

> TLDR: Notion does not own your data, nor do we sell it to others or use it for advertising. It’s your data, period 👌

There are more privacy-focused options of Slack and Notion brewing. [Riot](https://about.riot.im/) is an open-source chat application with end-to-end encryption of messages — so no one else can read, monetise or compromise your data.

For notes, we recently trialled the beta version of [Anytype](https://anytype.io/). It’s a (soon to be) open-source version of Notion, so it remediates the risk of any employees outside of your company having access to personal data. The beta app was pretty buggy, but we’re still looking forward to its release.

## **Advertising**

We’ve grown entirely organically up to this point, but recently we’re looking for ways to accelerate our growth — and advertising is the first thing that comes to mind.

But the question is: can we advertise while maintaining a high bar of data ethics?

Facebook is out of the question for us, until Zuckerberg delivers on some of his improved data privacy promises. Simple pay-per-click (PPC) with Google AdWords is better, but the greater Google advertising engine is questionable. So, what other options do we have?

There are a few. We’ve recently been running some experiments with our friends at [Brave](https://brave.com/), though it’s too soon to report on results. And we’re about to try [CodeFund](https://codefund.io/). [ContextCue](https://contextcue.com/) also looks promising as a contextual advertising network.

## **Recruiting**

For the last twelve months, we’ve listed jobs on our website. When a candidate clicks ‘apply’, it simply opens a pre-filled email to the founders.

That’s become unscalable, so we’ve moved hiring onto Workable. It makes the hiring process much more efficient but we’ve recently noticed some serious privacy warning signs. Firstly, the additional candidate information they grab behind the scenes is scary — things like photos and social media profiles. And their privacy policy is very vague, and even says, ‘We haven’t sold your Personal Data over the last twelve months’ . . . which makes us wonder what they were doing before that.

We’re actively on the lookout for an alternative and we’d love any suggestions.

## **Data deletion requests**

Finally, we get more data requests than a typical startup gets. A lot more. Understandable, considering the nature of our business.

For the first twelve months, we were able to manage these requests manually. But as we got more customers, the volume of data requests became overwhelming. So one of our engineers decided to spend their weekend automating it.

The result was these two buttons, available in the [Metomic dashboard](https://app.metomic.io/).

![how you request data from Metomic](/images/data-controls-dashboard.png)

Overnight the number of requests via Intercom and email fell almost to zero, taking a huge amount of work off our customer support team and developers.

If there are any other tech companies out there who think they’d benefit from something similar in their app, we’d love to hear from you.

It hasn’t been easy getting here. Most startups optimise for speed over anything else — despite regulations like the GDPR and CCPA.

But for us, it’s important to our brand that we maintain this high bar. It has undoubtedly added to our workload, but it has also proven incredibly valuable. We now understand the obstacles we face . . . which means we can help other startups overcome them too.

If you have any suggestions on what privacy-first tools we could be using, please join our [community Slack channel](https://join.slack.com/t/metomiccommunity/shared_invite/enQtOTY4MzMyODQwOTEyLTk0MmFjNGExMTRhZjA4ZWY2NTBkYjQ3YTJkMzFiMDU2NmIwMThlN2Y1NTAzNDEwYzZiNTc0NDAwODMyODM0MGI) 🙋. Also, if you have any suggestions about what Metomic should be building, drop them in our [Kampsite](https://metomic.kampsite.co/) 🏕