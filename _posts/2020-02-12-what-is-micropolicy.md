---
layout: post
title:  "What is a Micropolicy?"
description: "An introduction to what a Micropolicy is -- an important piece of technology built and used by Metomic"
categories: "Product"
author: "Ben van Enckevort"
author_description: 'CTO'
author_image: /images/ben-profile.png
socialImage: /images/mp-diagram.jpg
themeColor: "#EB4967"
date:   2020-02-12 13:16:00
---

## Essentially, a Micropolicy is an "atomic unit" of a privacy policy

It's an agreement between you and your users as to how your organisation uses their data. Based on what permissions your users give you, you can easily control the flow of their data through your products or services.

The basic building blocks of a Micropolicy are three questions about any feature of your product that collects data. Those questions are:

1. **What** data are you collecting?
2. **Where** will the data go?
3. **Why** do you need it?

![diagram showing what is contained within a Micropolicy](/images/mp-diagram.jpg)
*A Micropolicy — the what, where, and why*

So Micropolicies allow you to store this information, and easily retrieve it. This is extremely useful. Why?

## Consider this problem...

You use Intercom to talk to your customers. If someone opens up a chat with you, their email address will be associated with that conversation. This is so that you, as an organisation, can automatically see which user you're talking to. It also means that they, the customer, will get a transcript emailed to them when the chat is over.

This is all fine, but you [need to get permission](https://metomic.io/blog/main/2019/08/07/cookie-consent-guide.html) to share their email with Intercom. What if you just used a check box with an if statement behind it? That would only work up to a point, because it's not a simple yes or no question. There are actually all of these questions too:

- What if they're happy to share their email but **only** to receive chat transcripts, and would rather the chats stay anonymous?
- How do you know which of your users have said it's okay to share their email address with Intercom?
- How do you revoke permission, in case your users want to opt-out of this?
- How does the code run for the first time? If a user never clicks the check box, the if statement won't run.
- ...etc. There are more questions, but you're probably upset enough by these as it is

## 🥳 The solution lies in Micropolicies

As you look at the above questions, it starts to become apparent that the best way to look at this is not "who's give us permission to do xyz" but more like, "currently, we have permission to use **this data** for **this purpose**".

So, for the Intercom example above, the Micropolicy would be made up of this information:

1. **What** data are you collecting? Email address.
2. **Where** will the data go? Intercom. 
3. **Why** do you need it? To conduct live chats, non-anonymously. 

![screenshot of some example code of permissions granted to Intercom](/images/code-permissions.png)

If they grant permission for their email to be shared with Intercom, your code will make it so. If they deny permission, they can still chat to you on Intercom — but their email address won't be shared. And if they haven't yet given/denied permission, you will know to ask.

**Micropolicies also leave an audit trail:** if a user revokes consent, that will be recorded. Equally, if you make a change, that will be recorded too, and most importantly:

- The relevant users will be notified of this change
- But only when necessary, which is when they next go to use Intercom, in this case.
- If you are ever audited, you will have a history of the what, where, and why of your consents

You are also able to query this permission: you know that if a user is okay with their email address being shared with Intercom, it's okay for you to capture that information both via your website and desktop app (because the purpose is the same).

![diagram showing how a Metomic privacy layer is wrapped around your database](/images/privacy-layer.png)
*Metomic essentially provides a 'privacy layer' between you and your database.*

Without Micropolicies, this information was previously irretrievable, because it was not recorded anywhere. But now, it's machine-readable, which makes your life much easier 🏄‍♀️

## We use Micropolicies to power our [Cookie Widget](https://landing.metomic.io/)

At the moment, the dominant manifestation of Micropolicies is within the Cookie Widget — so this is only cookies and script blocking. They surface as a list of website features which collect data, that your users can easily turn on or off.

![screenshot of the list of features in the cookie widget](/images/example-micropolicy.png)
*This is what you see if you click 'No, customize' on our Cookie Widget*

This article just scrapes the surface of what you can do with Micropolicies. Later they will also be used for things like modular privacy policies, and dynamic feature-walling. Stay tuned for more on this 👩‍💻. In the meantime, you can join our [community slack channel](https://join.slack.com/t/metomiccommunity/shared_invite/enQtOTMyNjQzMTk3NDEwLTgxMzU4NjE3MTZiN2QyMzgwZGZiNDA4MWJjZjUwMDBmNzYyZmNiYjIxNjU0YzFkOWRlNGJlYWExMzc2ZjFjOTg) 💬 to discuss all things relating to data privacy.

We now also have a [Kampsite](http://metomic.kampsite.co/) for product feature requests 📣