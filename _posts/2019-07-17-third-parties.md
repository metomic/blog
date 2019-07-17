---
layout: post
title:  "Not all third-party tools are evil'"
categories: ["Guests"]
author: "Danielle Johnson"
author_description: 'Digital nomad and indie maker'
author_image: /images/danielle.jpg
socialImage: /images/leavemealone.jpg
themeColor: "#BCC077"
date:   2019-07-17 13:18:00
---

It seems like every week there is another privacy scandal hitting the news. They have become so common that many don’t even make the front page any more. Whether it’s giants like Facebook [selling](https://techcrunch.com/2018/04/04/cambridge-analytica-87-million/) your data to a political campaign, dating apps like Grindr [sharing](https://techcrunch.com/2018/04/02/grindr-sends-hiv-status-to-third-parties-and-some-personal-data-unencrypted/) its users’ medical data, or email tools like Unroll.me [harvesting](https://www.nytimes.com/2017/04/24/technology/personal-data-firm-slice-unroll-me-backlash-uber.html) your information for profit, it seems like it’s impossible to protect your information.

Therefore it is not surprising that many people are concerned that all third-party tools are evil, faceless entities who track users to sell them more rubbish. While this may be true in some cases, there are tools that exist which can provide real benefits and value to your product or business without selling you out.

When a service is free then you are the product. Agreeing to share a certain amount of personal information in exchange for a free service is common, but often the full extent of the trade-off is unclear or buried in the terms and conditions.

`When a service is free then you are the product`

Unfortunately, privacy scandals are not limited to free services. Silicon Valley’s hottest new startup Superhuman, which charges $30 a month, recently received a big backlash when users found out they were [tracking](https://www.theverge.com/2019/7/3/20681508/tracking-pixel-email-spying-superhuman-web-beacon-open-tracking-read-receipts-location) when and *where* emails were read. The difference with this scandal is that as a paid tool Superhuman was only using this data internally to improve the service. They admitted that they made a mistake and within days they [pledged](https://blog.superhuman.com/read-statuses-bdf0cc34b6a5) to turn off read receipts and location tracking by default, and delete all the data they have, hopefully before too much PR damage was done.

## So what third-party tools are friendly?

It’s not all doom and gloom. I use several third-party tools, many of which were chosen because they are open, have good values, and are dedicated to privacy or provide a way to have control over the data. Here are a few:

### [Intergram](https://github.com/idoco/intergram)

![](/images/intergram.jpg)
*Intergram is a self-hosted live chat widget which connects to Telegram messenger.*

I recently researched live chat apps such as Intercom, Crisp, and Drift from a privacy and ethics point of view and found that they are collecting and aggregating a lot of information which is unnecessary. I don’t want a customers address, exact location, social media handles, employer information, or gender etc when they have a question about my product, I just need to be able to chat to them (if I’m not asleep).

Intergram is hosted on our servers, the transcripts are stored in the users client (never by us), and the messages are sent to Telegram which is secure and encrypted. As I already use Telegram for messaging this service was a perfect alternative. I highly recommend it, even if you don’t already use it yourself.

I even made some [changes](https://github.com/squarecat/squarechat) to improve privacy so that logged in users’ chat messages would be cleared when they log out, included a typing indicator, and added our Squarecat branding - I will be making this ready to use and customise for other websites soon so [let me know](https://twitter.com/dinkydani21) if you are interested!

### [Simple Analytics](https://simpleanalytics.com/)

Simple Analytics is a privacy-focused analytics service which is open and transparent about everything from the exact data they [collect](https://docs.simpleanalytics.com/what-we-collect) and what it is used for, to their [revenue](https://simpleanalytics.com/open) and user statistics.

I am not going to pretend that I don’t have analytics on my product websites, because having access to visitor statistics is essential to building a business, but I have ditched Google Analytics and switched to this privacy-focused alternative. I don’t want the IP address of users browsing my website, I just need visitor numbers and page views!


![](/images/simpleanalytics.jpg)
*Simple Analytics has fair tiered pricing which means they can make money without selling my data.*

### [Metomic](https://metomic.io/)*

Metomic makes data compliance and managing users consent preferences easy.

Cookie banners are annoying, and since the introduction of GDPR they have become complicated with confusing options and inconsistent ways of asking which information you agree to share.

Metomic provides me with a customisable widget which tells users what data we are asking for access to, with whom we share it, and for what.

`I don’t want the IP address of users browsing my website, I just need visitor numbers and page views`

For example, a website might ask for several permissions such as remembering the last email you logged in with in a cookie, or loading a chat widget which will share your user ID. Using the Metomic widget these can be disabled and the scripts for these services will not be loaded. Metomic also monitors the website to let me know if any user data is being tracked or shared unlawfully.

This service has been a game changer for me and it’s beautifully designed!

*this is not a paid or promoted review Metomic is just a fantastic tool*

### [Leave Me Alone](https://leavemealone.app/)

I am also taking steps to ensure that the products I build are privacy-focused, open, and transparent in every way possible. One of these products is [Leave Me Alone](https://leavemealone.app/) - a privacy-focused email unsubscription service.

To operate, Leave Me Alone needs third-party access to the users Google or Microsoft email account. We detail exactly which [permissions](https://leavemealone.app/security) we need, what they are used for, and we provide links to view and revoke access at any time.

`We don’t believe in collecting data that we don’t need to operate`

We never store the content of any emails on our servers, all email data is streamed to the users client. We do store some anonymous metadata to help make Leave Me Alone better for all users. We are completely [open](https://leavemealone.app/security) about what data is collected, what it is used for, and users can opt-out at any time.

We don’t believe in collecting data that we don’t need to operate, we share everything we can including [how](https://blog.leavemealone.xyz/building-in-the-open/) we built the product and revenue [stats](https://leavemealone.app/open), and we are always looking for ways to improve our users privacy even more.

![](/images/leavemealone.jpg)

# That’s all folks

When deciding which tools to use with data security in mind a good place to start is to choose and support products that value privacy and charge for their services. There seems to be a growing trend of users that, when given the option, choose products that are paid rather than free. Paid products have an established revenue stream so you can be *fairly* sure they will never need to sell your data to keep their lights on.

More and more companies are joining the [Open Startup](https://hackernoon.com/what-does-it-mean-to-be-an-open-startup-f4446984189) movement. More transparency, especially about how companies are making their money, is a positive shift in a traditionally secretive world, which is making it easier to find ethical and privacy-focused tools.

Next time you are deciding whether to use a product, check if they are an Open Startup or have an open revenue page.

Data security and privacy is a hot topic right now. There are many great privacy-focused alternatives popping up that it’s easier than ever to support the companies putting users first and avoid using a product which is going to be caught up in another scandal.

*Danielle is a digital nomad and indie maker, with a background in web development. In 2016 she decided to change her lifestyle and co-founded web development agency [Squarecat](http://squarecat.io/) with her partner James. Together they travel the world writing software that helps people because it's rewarding and they love doing it, which they say is a good reason to do just about anything!*