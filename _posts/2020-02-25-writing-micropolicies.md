---
layout: post
title:  "Writing good Micropolicies for your users"
description: "Writing clear, readable text for your cookie notice iss really important -- it doesn't count as transparency, or informed consent, if your user don't understand what the notice is saying"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/example-micropolicy.png
themeColor: "#466993"
date:   2020-02-25 13:16:00
---

## If you're striving to build trust with transparency, you most definitely need to be understood first

It will be hard for users to trust you if they don't understand what your Micropolicies are even saying 🤫. A [Micropolicy](https://metomic.io/blog/main/2020/02/12/what-is-micropolicy.html) tells your users:

- What data you are collecting
- Why you are collecting it
- Where that data will go

For the user, they see a simple list of features with descriptions, and more detail when they click through. 

![gif of how our cookie widget looks](/images/metomic_widget_v2.gif)

You have a lot of control over this customer-facing text from the dashboard. The challenge is to communicate the above three points (the what, why, and where) as succinctly as possible, without alienating users with technical/legal jargon, or being too vague.

It's easier than it sounds. 🤓

## Write your description like you're talking to your users

So in your dashboard, click on a Micropolicy from your Micropolicy list, and here you can edit the description. Let's say you use Google Analytics to gather statistics on various site interactions. **Do not assume that your users know what Google Analytics is for, or that they care about your need to gather analytics.**

Your users don't technically need to know what Google Analytics does, but they do need to know *why* you're using it. You may just need to measure traffic so you can know how many users are using your product at peak times — and ensure that nothing crashes. That's a perfectly good reason, so that's all you need to say.

![comparing two good and bad widgets](/images/goodvbad-policies-details.png)
*The tooltips come up when a user hovers over a specific data point (like device type). These are useful to tell users more about why you need that data point.*

😬 **The less ideal Micropolicy description is like this:**

- It's pretty vague — language like 'some parts of the web app' is not helpful to users. Which parts? This just keeps people guessing.
- It does not explain the value-add for users. Looking at how users interact with your site can truly help you understand why people might not be finding their way to a certain page — fixing issues like this is mutually beneficial.
- The language is not very friendly: 'To see how customers...' sounds like you could be talking to someone else in your organisation, not your actual customers.

🤠 **The more ideal one is like this:**

- The language is conversational: it actually speaks to users. 'Customers' becomes 'you' — because you are talking to individuals, after all.
- Explains that analytics are for making improvements — the average user may not understand why you'd ever need to analyse user interactions, so this description explains that a little.

## More data points = good

Clicking on the 'data' tab within the settings of a Micropolicy will allow you to add data points, and purposes for those points. The description alone is not enough — filling out the data points allows your users to understand what data you're even collecting. The purpose is revealed when a user hovers over a specific data point.

The **good Micropolicy** has more data points in it, because these describe each 'type' of data that is processed. Stuff like time spent on the page, and screen resolution. This gives a nice, easy to digest, idea of what is collected. The purposes (surfaced in tool tips) give more detail about why you need that piece of data.

The **bad Micropolicy** has two data points: 'site interactions' which should be broken into many data points, and 'Traffic' does not mean anything to the average user. 

## General tips

When writing these Micropolicies, try and remember these two key things:

☝️ Maintaining the privacy of your users is not a special feature of your product — [it is a necessity](https://metomic.io/blog/main/2019/12/18/privacy-is-necessity.html).

✌️ Saying things like 'we **may** collect xyz...' is vague and confusing. Try not to leave users guessing.

Otherwise, here are some other pointers:

- You can see a log of all your changes on a single Micropolicy under 'History'
- Cookies relating to marketing and advertising are **not essential** **to delivering your service to your users.** [Read more about essential cookies here](https://metomic.io/blog/main/2019/08/14/essential-cookies.html). Users have every right to ignore all of your marketing and advertising efforts as **default**.
- Using language such as 'for record keeping purposes' is not recommended: keeping a record is an activity, not a purpose — and the user will have no idea what this is for.

🎉 That's all. Have fun being transparent with your users. If you ever want to ask more questions about Micropolicies, or just chat about data privacy in general, join our [community Slack](https://join.slack.com/t/metomiccommunity/shared_invite/enQtOTMyNjQzMTk3NDEwLTgxMzU4NjE3MTZiN2QyMzgwZGZiNDA4MWJjZjUwMDBmNzYyZmNiYjIxNjU0YzFkOWRlNGJlYWExMzc2ZjFjOTg) 🙋🏻‍♀️

And if you have any feature or product requests, stick them in our [Kampsite](https://metomic.kampsite.co/).