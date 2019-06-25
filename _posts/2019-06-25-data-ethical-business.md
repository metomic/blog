---
layout: post
title:  "Making your business ethical with data: harder than you think"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/buffer.jpg
themeColor: "#466993"
date:   2019-06-25 12:16:00

---

## Listen, try doing a startup that's completely ethical with data — I dare you.

Because it's hard, okay. Even for us at Metomic. If you want to achieve true data privacy for your customers or users, the space you can exist in on the internet is very small indeed.

At Metomic, because we are 'with it', we schedule our tweets via [Buffer](http://buffer.com/). Without even thinking about it, we routinely used Buffer's built-in link shortener when tweeting; shorter links make for longer tweet content... I read that in a special marketing book once 😉. But then one day, someone from the privacy sphere [responded like this](https://twitter.com/safepress/status/1121025278266966016).

![](/images/trackinglink.png)

Please appreciate how crippling the irony is: the article we were sharing was written by me (Georgia, Metomic's main word person) and was about the many different sorts of tracking technologies that exist.

The collective mood in the office after seeing this tweet was sort of like, "god, we're dumb 🙄". Because, *of course* Buffer use tracking technologies on their shortened links. *Of course* we didn't notice until someone pointed it out. And, the best part, *of course* this conversation happened on Twitter, via a link to an article about tracking technologies. 

###### Everything is filthy with the thick, dark, muck of bad data practices

We responded with an unshortened link, in it's purest form, as link-god always intended, so that @safepress could read the article. That day we learned that you can always depend on the help of Twitter strangers. We also learned that **everything is filthy** with the thick, dark, muck of bad data practices. 

A link shortener is such a basic, every day thing — we searched around for any that don't track you when you click and struggled finding anything (if anyone knows of a clean link shortener out there, please tell us on Twitter @metomic_). So, what do we do? Well for a while we just didn't shorten links. But, luckily we're a company full of **cool software developers** who love hacking around with side projects, so we went and made our own link shortener at [priv.sh](http://priv.sh) 😏

![](/images/buffer.jpg)
*The tracking journey after clicking on a shortened link*

Now, link shorteners are just the beginning. Think about how many small tools and third-party services that business and individuals use every day — I expect they are not exercising awfully high levels of data hygiene. Strapping trackers onto everything doesn't look like it's going out of fashion at all, and this makes it really hard to focus on data privacy in a meaningful way.

## Third-parties are important — it's about using them correctly

Unless you want to spend time and resources building your own secure payment system, I suggest you invest in third-parties. While the term 'third-parties' is now riddled with the mess of a thousand ad agencies, in the rational world (where we are trying to live), third-parties are there to make your life easier. What about [Stripe](https://stripe.com/gb)? Yeah, exactly. A GOOD third-party.

The way I see it, there are four approaches to using third-parties. These are good and bad. Try and stick to the good ones like a happy cowboy:

😬 **Knowing that a tool you use might be unethical and using it anyway:** being aware of problems and hiding these from your users is a bad place to start. Find a way to solve the problem instead of deceiving your users

🤠 **Knowing that a tool might be unethical and finding an alternative:** using alternative tools to the usual ones is good for two reasons: it sets you apart from other businesses, and you're probably helping out another startup at the same time.

😬 **Having no idea about what your tool(s) are doing:** I do not recommend going in blind; just do some research and make an informed decision about whether or not a tool or service is good — it's worth the extra bit of effort from the beginning... even though this means reading through a few privacy policies. 

🤠 **Knowing that a tool might be not be the best, but being transparent about it:** sometimes, there seems to be absolutely no alternative. Not everyone has the luxury of being able to build their own internal tooling, so you may have to rely on a third party that you aren't massively happy about. Being transparent is key. If your users understand why you've made the choices that you have, they will be more open to trusting you.

## Staying clean in this climate is difficult, but it doesn't mean we shouldn't try

Monetary value is just the start. If you have all the data, you also have influence. For example, Amazon have built up a [database of suspicious persons](https://securitybaron.com/news/amazon-security-patent/) via Rekognition, their facial recognition software. The database is receiving a patent, and the software is [used by the police](https://www.cnet.com/news/what-is-amazon-rekognition-facial-recognition-software/) in some jurisdictions.

How did Amazon even build up this database? Via Ring, their range of smart doorbells. In other words, consumers produced this data on behalf of Amazon without being aware. This example is pretty extreme,  and sophisticated technologies are [used and abused in many ways](https://blog.metomic.io/main/2019/06/05/tech-abuse.html) — but why not be on the good side of that conversation? I can appreciate that when you're just starting out, it's really tempting to rack up piles of statistics and track user engagement etc., but in all seriousness... has anyone *not* tried that?

At Metomic we wanted to avoid using Google Analytics, so we use [Simple Analytics](https://simpleanalytics.io/) instead. If we ever do choose to advertise, we'd probably go with someone like [ContextCue](https://contextcue.com/) because they do not rely on tracking technologies to serve ads. It's obvious that we get much less insight from using Simple Analytics over Google Analytics, but it's made us question whether ever needed what Google have to offer in the first place.

If you're just getting a company started and feel that you cannot afford to use alternative tools and services in order to get moving, that's totally understandable. What if instead, you were just completely **transparent** about what you were doing? Being open about a tool or service you use where you see no alternative is better than keeping it a secret. 

No company out there should just sit there and say 'trust us'. You can't tell anyone who or what to trust; that is something they decide. Therefore, just **be trusty** and eventually **people will trust you.**