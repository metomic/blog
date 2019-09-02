---
layout: post
title:  "Is data consent anonymous?"
description: "explains the difference between cookie consent and consent for other kinds of data sharing"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/consent-manager-example.png
themeColor: "#466993"
date:   2019-09-02 13:16:00
---
## Some of it is and some of it isn't. Time to explore, internet users.

Everyday you browse the web and (theoretically) manage consent relating to how your data is processed. What many of us are forgetting is that this can be both anonymous and not anonymous.

But first, it's important to get one thing straight: 'anonymous' in the digital sphere does not necessarily mean the same thing as what it means in the real world. Sure, your username has no relation to your real name but powers of the internet don't care about that. What they do care about is stuff like your device ID, what browser you're using, your IP, your location, and more stuff like that.

This information does not technically identify you, but when used together (which it routinely is) it's enough to stray away from what we have, until now, considered true anonymity. [There are lots of ways](https://blog.metomic.io/main/2019/04/23/cookies-are-a-perfect-and-irresistible-distraction-from-other-bad-things.html) 'anonymous' information can be used to paint a sort of abstract picture of who you are online. So when reading this article, please remember that digital anonymity is not the same as IRL anonymity.

## Anonymous consent

Okay, so you are a user of the internet — you use social media, you watch funny Youtube videos, and you read news. Your hunger for balanced news has reached a peak so you finally look at [newsagent.io](http://newsagent.io), which right now is the best news site this side of the inter-webs. On your first visit to the site, unsurprisingly, you are confronted with a notice asking if you consent to receiving some cookies. You say **yes** to most but **no** to marketing cookies.

From the point of view of newsagent.io, what they've seen is that a user (without knowing who it is) has set their cookie preferences now. What they need to do is somehow remember that so they don't ask you again next time you visit. They do this by either...

🍪 **Dropping a cookie.** Oh yes, the irony. But the fact is storing a cookie in your browser is how they remember that **that browser** does not want any marketing cookies from them. This would count as an [essential cookie](https://blog.metomic.io/main/2019/08/14/essential-cookies.html) and therefore no consent is required. Otherwise we'd just be getting into a stupid consent loop.

OR

🗃 **Using local storage**. Which is similar but different. It's a piece of information that is stored in the browser, but it is not a cookie. This is just another method for saving preferences at  browser level. 

So essentially what [newsagent.io](http://newsagent.io) know is that **your browser** does not want marketing cookies. Not you — your browser. If you visit newsagent.io again on another device, it will ask you for your cookie preferences again. And that is why this type of consent is **anonymous.**

## Non-anonymous consent

So far we've only covered consent relating to cookies. What about stuff like a terms of service or email newsletters? Let's say you love [newsagent.io](http://newsagent.io) so much that you create an account. Boom, anonymity gone.

You've signed up, and you've accepted the terms of service and checked a box that says you  **don't** want to receive the newsletter. Those preferences are saved and associated with your login. That is why whenever you log in on a different device, [newsagent.io](http://newagent.io) don't ask you to accept the terms or service again and again.

BUT: what if [newsagent.io](http://newsagent.io) change their terms of service, or changed how their newsletters work, or change anything that requires your input? That is another reason why keeping track of consent related to a person (or a specific log in) and not a browser, is important. Practically, it means newsagent.io can:

1. Know which version of their terms of service each of their users have accepted
2. Which in turn, means they can update people with the **actual new bits** of their policies and terms, instead of the whole thing all over again
3. Eventually understand how preferences change over time and across different devices.

**Long story short:** no one likes being asked what their preferences are over and over again. Therefore, business will want a legitimate way of keeping track of these. Tracking cookie consent *has* to be anonymous because cookies are stored in your browser — they are not a user preference. And that is where the key difference lies.