---
layout: post
title:  "Do other cookies have more cookies nested inside?"
description: "a short explanation of how third-party cookies have their own third-parties. That makes them fourth-parties, which creates a complex problem easily solved by correctly managing consent"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/consent-manager-example.png
themeColor: "#466993"
date:   2019-08-22 13:16:00
---

## Good question, with an answer that you may not like: yes.

As you may already know, if you run a site, you are responsible for getting consent for any cookies that are dropped by third-parties. So, if you use Intercom for live chat, you need to ask your users if they are okay with the Intercom cookies. So here is the chain of events:

User visits **your site** → user consents to cookies relating to **Intercom** → user is happy, you are happy, everyone has a happy party.

Exactly, except... Intercom have **their own third-parties** at play here too. So it actually looks more like this:

User visits **your site** → user consents to cookies relating to **Intercom** → user receives the **Intercom** cookies, but also **Google Analytics** cookies, because Intercom uses Google Analytics on their product → no happy party for you.

What a mess. Did the user technically consent to receiving cookies relating to Google Analytics? No, they only said yes to Intercom. As the publisher of this site using Intercom, is it your responsibility to get consent on Intercom's third parties? Nope, that's up to Intercom. Confused yet? In this case, Google Analytics is not **your** third-party. It's Intercom's. Making it... your **fourth-party😱**

![screenshot of Disqus used in how to geek](/images/disqus.png)

This is a screenshot of the comments section under an article on How To Geek. They use [Disqus](https://disqus.com/) to power their comments. That would make Disqus their third-party. Disqus have their own third-parties, of course. And they've managed to fit a link to their privacy policy here. This is exactly how it should be done 👌

If you use Metomic, you'll see how we take this into account. We use Intercom on our site, which is why the Consent Manager provides a link to their privacy policy so you can read about their third parties.

![screenshot of the Metomic consent manager with Intercom](/images/consent-manager-example.png)
*The Consent Manager at work. Just look at it go...*

So there you are, internet users: the chain of third-parties across the internet is basically endless. As a publisher, it's not your fault and you don't have much control over it. That's why it's as important as ever to allow your users with as much control as possible over the flow of data; do this by [asking for consent in the correct way](https://blog.metomic.io/main/2019/08/07/cookie-consent-guide.html). Otherwise you'll only be contributing more to the increasing lack of data hygiene across the web.