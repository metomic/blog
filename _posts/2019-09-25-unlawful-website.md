---
layout: post
title:  "I made a completely unlawful website in under an hour"
Description: "A demonstration of how you can easily make a site full of third-party providers, but it completely breaks the law. Everyone on the internet does this, but it's not malicious. The problem is with a lack of transparency, not an abundance of third-parties."
categories: "Longform"
author: "Georgia Iacovou"
socialImage: /images/pretend-site.png
themeColor: "#2ECA88"
date:   2019-09-25 13:16:00

---
## Have a quick look at this delightful [single-page website](https://georgia.thebestsh.it/) I just made

Yes, it's so basic that it's hilarious BUT: it also contains over twenty trackers. How is that, and what does it mean?

Well, besides dazzling you with its undeniably beautiful design, all features and functionality are brought to you by **seven different third-party providers.** That means all of them know that you have visited my site. Even if you don't interact with anything on it.

![screenshot of silly little pretend site](/images/pretend-site.png)
*Cool website... very pretend, very not serious.*

The amazing thing is, I didn't really build anything to make this web page (because who am I, Bill Gates?). All I did was write a couple of paragraphs of text, and let the third-parties do the rest.

So who did I use to essentially pad out this fairly simple page?

- YouTube
- Crisp
- Facebook
- Twitter
- LinkedIn
- Google
- Typeform
- Bonus provider: Giphy, for that Power Ranger energy

There's kind of not much happening on the page, and yet there are seven different companies at play here. Why? Well:

🎥 I needed somewhere to easily host the video that demonstrates my product. That is literally what YouTube is for.

📝 I needed a way for people to send subscription details, and to store that information. I'm not going to build one myself when Typeform can do it better. 

💬 I will need a way for customers to interact with me if something goes wrong. Crisp is the best way to do this because it provides live chat. Even if I knew how to a build a live chat feature myself I wouldn't do it — I'm not made of time.

🗺 I needed a clear and accessible way for people to find my HQ. I did that using a Google Map, of course.

📣 And then, quite importantly, I wanted to make it really easy for people to shout about my cool product and ideas — so I added buttons to easily share the page with Twitter, LinkedIn, and Facebook. #Virality.

`The issue here is not being unlawful, it's that this eats away at a fair and transparent internet`

Getting all these providers on my site was incredibly easy — and it should be. I am not a developer, but I should be able to throw together a website that does all these things without really knowing how to code.

**But here's the problem:** building a website like this, lacks transparency, breaches GDPR, and according to the EU Court of Justice, is completely unlawful.

## Sites like this already exist everywhere

Which is why the EU Court of Justice [ruling in July](https://blog.metomic.io/main/2019/07/31/share-buttons-illegal.html) came as a bit of a shock to publishers world-wide. This ruling focused on the social media sharing buttons that you find on millions of websites — if you use these, you are responsible for the data that those social media sites may collect.

This of course is already part of GDPR: as the owner of a site, [you are responsible](https://blog.metomic.io/main/2019/08/07/cookie-consent-guide.html) for getting consent for any data that is collected by third-parties. So that means, any site with social sharing buttons (which is... a lot of sites) have to explicitly ask, "is it okay if I send your data to Facebook, Twitter, and LinkedIn?"

![screenshot of social media share buttons on Tech Crunch](/images/share-buttons.png)
*The social media buttons found on every Tech Crunch article*

But this isn't happening — most blogs and news sites are **not getting explicit consent** for these buttons. [My site](https://georgia.thebestsh.it/), certainly isn't either. Most of the time you just stick the buttons on your site and wait to get famous on social media.

**This is is because we are adhering to an unfair standard that we seem to have set ourselves.** On my site — just as with millions of others — all the third-party providers I've used will drop cookies as soon as the page loads.

`Receiving this many tracking cookies just by casually browsing the internet only perpetuates the damaging and unmanageable problems that we are just ignoring.`

So all you need to do is *visit* my site for all seven of those providers to know that you've browsed to it. They will put cookies in your browser even if you don't fill in the form, play the Youtube video, use the chat widget, or share it on Facebook. 

**Look at it this way:** my website is actually my house, and I've invited you round for tea. What I haven't told you is that there are also seven other people coming — they have free reign over what they do to my house, *and the people inside.* They can pull up the carpets, knock down the walls and yes... force you to eat their cookies.

![diagram of how a blog site makes requests to social media sites](/images/share-buttons-bloggy.jpg)
*"Oh yes please come in, stay as long as you like; make long distance phone calls; eat all my food. Whatever, it's fine"*

☝️ **The issue here is not that this is unlawful or in breach of certain regulations,** it's that this eats away at a fair and transparent internet: receiving this many tracking cookies just by casually browsing the internet only perpetuates unmanageable problems that we are just ignoring, such as [behavioural advertising](https://blog.metomic.io/main/2019/09/13/what-is-behavioural-ads.html).

## Sites like this are not malicious — they are the norm

There is nothing wrong with a site or organisation that uses third-parties to add features or enhance an experience. Anyone should be allowed to do that — but no one should be allowed to use third-parties at the expense of the user.

Setting up my site was way too easy — all I did was copy and paste a few bits of code into a HTML file and boom: I've welcomed seven or more bad actors into my house; and I don't have any control over what they do.

A few weeks ago I wrote a piece about how your third-parties have [their own third-parties](https://blog.metomic.io/main/2019/08/22/nested-cookies.html). This makes sense — if I made a chat widget, I'd want some analytics on how people are interacting with it. But the question is, as a website publisher, how do you even control this?

![screenshot of the Metomic dashboard showing what cookies are contained within my site](/images/pretend-site-scan.png)
*Jeez Giphy give it a rest... is all this stuff worth the Power Rangers gif?*

I scanned my site in the Metomic dashboard and found more third-parties than the ones that I put in myself. Sure, I invited Giphy over but then they, without asking, invited someone called Quantserve? Who even is that? They also brought along Google Analytics. But I never wanted Google Analytics... I just wanted to show one hilarious gif. 

`I never wanted Google Analytics... I just wanted to show one hilarious gif.`

So now, there are a bunch of strangers in my house, leaving rubbish everywhere and being rude to my guests. Great.

## Third-parties are not the problem; a lack of transparency is the problem.

Third-parties are super useful. Like I said, I needed a chat app... but there was no way I was going to drop everything and build one myself. Being able to embed a YouTube video is unbelievably useful too — but why must they, or anyone else, spam up my site with their gross tracking technologies?

**The answer is very simple**: many of these services are 'free'. The secret hidden cost is that they collect my users' data. But maybe my users wouldn't mind if someone at least asked first?