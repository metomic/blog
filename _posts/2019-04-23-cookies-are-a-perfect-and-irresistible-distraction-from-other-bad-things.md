---
layout: post
title:  "Cookies are a perfect and irresistible distraction from other bad things"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/cachedimage.jpg
themeColor: "#466993"
date:   2019-04-23 17:50:00

---
## While you've been having fun blocking cookies, advertising networks have been developing fierce alternatives...

Hopefully you know by now that, in part, cookies are a form of 21st century surveillance. If you've never thought about cookies in that way before, it's fine. Just remember: you are served cookies basically all the time, and they can track your browsing behaviours, painting a very accurate picture of who you are. [Chomp on this delicious article to learn more, if you want.](https://blog.metomic.io/main/2019/04/09/help-i-dont-know-what-cookies-are.html)

Please don't let cookies take up more than about 5% of brain energy in your privacy-focused mind. They are a terrible distraction from all the other methods used by advertisers to build up a profile of who you are and what you might like to buy. 

## Caching: take a photo, it'll last longer

Do you remember the olden days where if you were ever walking around and you saw like a really cool tree or sunset or something you couldn't just take a photo. You'd have to actually harness the power of your brain and commit the cool tree or sunset to your memory. And if you couldn't remember it, you'd just have to go back to where you found it if you ever wanted to see it again. God, what a stupid time to be alive.

But then about 200 years ago a bunch of people finally invented photography and that miserable time of 'just remembering things' was over. Now you can just take photos of your loved ones to remember who they are and what they look like. Wow, technology is amazing.

Why am I talking about this? Because, as well as giving a very comprehensive and accurate account on the history of photography, I just basically described what **caching** is. Nowadays when you're surfing that web and loading various banners and logos and cool graphics, your browser does not load the same images over and over again - it just saves them in a drawer for later (or rather saves them into your **cache**).

This is useful for when you visit websites that contain images that are very unlikely to change, like company logos. The site simply says to your browser, "why don't you just keep a copy of that logo and get it out again every time you visit so I don't have to keep loading it for you k thanks bye". So basically it's efficient and stops your phone from dying at 2pm.

Unfortunately, caching is a method that is now abused so that various things *that are not cookies*, but act like cookies, can be stored on your machine. This article explores just a few of these things. Pretty sure no one's attention span (including mine) is big enough to accommodate absolutely every tracking method out there. Please just assume that there are a lot, and they are all used side by side to create an accurate profile of you and target you with ads.

## Be proud, you are unique...

Have you ever done a personality quiz? You go to a really 'high quality' website like Buzzfeed, answer a bunch of seemingly random, nonsensical questions, and then they tell you what kind of person you are.

Well, this is what the whole of the internet is doing with you basically all the time. Except it's asking about what you do, it's just watching what you do

 Except, it's not asking questions, it's just taking information. And instead of the results being totally inconsequential and only funny for five seconds, they are disturbingly accurate and a gross invasion of privacy. GREAT so let's begin our involuntary quiz: *Use the internet for five minutes and we'll tell you exactly what kind of user you are.*

*Beep beep boop* you just visited treerank.bark (you know... where you go to rank trees when you're bored) and they just forced an image into your cache. Your browser did not notice or care, because this is standard internet practice. 

*Secret beep* oh my, this cached image looks like it's nothing to do with treerank.bark. It has no trees in it, and it's nowhere to be found on the site. It's literally just in your browser's cache. You know... *secretly*. Why cache an image that isn't even visible on the site? Why does your browser need to do that?

Ha, it doesn't. It's all a big convoluted TRICK. Treerank.bark have employed the awesome power of *extremely simple* technology which has been around *since the beginning of the internet* to produce an image of randomly generated colours. Meaningless and basically invisible to you, but extremely useful for treerank.bark. Useful like this:

1. The image was generated just for you
2. It's very random and detailed, so it's highly likely that it is entirely unique
3. treerank.bark now know that this image is yours, and associate it with you.

That means, any time you do anything with trees on the internet (treerank.bark own all trees on the internet - don't question it), they will know that **it's you doing it.** Sure, it may be totally anonymised, but that doesn't matter. All treerank.bark care about is: *oh damn this user really likes maple. They're a total "Phoebe" - fake vegan; has secretly bought many furs. Sell them some patio furniture - do it DO IT.*

So if you visit treerank.bark again, their server will see your specially generated image and know that it is you (the... "Phoebe" kind of user). The way that they match a complex, randomly generated image of colours with one specific user is via **hashing**.

At this point I will remind you that this method to track you (and all the others) are employed when/if you block cookies. Using cookies is easier for those who want do all this tracking. But a lot of us are blocking them now, so these more devious and complex methods need to be employed in order to achieve the same tracking results.

## Okay but just... what is hashing again?

*rubs hands together with glee*

Okay so the most common use of hashing is to store user passwords securely. So, when you sign up to a site and set a password, it is not sent clear over the internet for everyone to see. It is shrouded in secrets so that no one but you (theoretically) knows what it is.

It works like this: your password is taken and changed into a string of characters. Say my password is "georgia123" (so secure, right?).

    **Password**: georgia123
    
    Hash: 315361948afe5478c5984b2cc12d32f0

My password is stored on servers as this hash only - in order to authenticate me when I log in, they simply look at the hash, and not my actual password. If I were to change the password by even one character, the hash will be totally different. Look what happens when I change the 'g' to uppercase:

    **Password**: Georgia123
    
    Hash: 74ebf5c96a2ee7ec638c57d61dee875a

So, with hashing just remember: slight changes result in a completely different hash, but hashing 'georgia123' will always give the same result. This is why hashing is useful for anonymously identifying users.

## Getting a hash out of an image: easier than you think

As we get to this point, we realise that this whole thing is actually a complex series of fairly simple steps.  The below image is the one that treerank.bark randomly generated for you in order to identify you later:

![](/images/cachedimage.jpg)

It's utter nonsense, and it isn't clear how someone would hash this considering hashing appears to be reserved for strings of letters and numbers. Well my friend, in computer-land, colours are just letters and numbers. When coding the web, people tend to use hex codes and RGB values.

A hex code is:

- six characters long, preceded by '#'
- uses numbers and letters
- the letters are limited to abcdef

An RGB value is:

- three separate numbers
- each number is between 0 and 255
- each number represents how much red, green, or blue a colour has in it

So, according to computers, black is technically a colour, but it's the least 'colour' of all the colours. And white is the most. This is how computers read colours:

    //Black:
    hex code: #000000
    RGB value: rgb(0, 0, 0)
    
    //White:
    hex code: #ffffff
    RGB value: rgb(255, 255, 255)

Black is 0 and white is the highest number/letter you use to code colours. Have a look at this [colour picker tool](https://htmlcolorcodes.com/) to get a better idea of how every colour that can be rendered on the web has a unique number.

Now think about how many colours exist on your randomly generated image that was forced into your cache when you visited treerank.bark. That has a lot of colours in it, creating a nice string of RGB values or hex codes. These are just letters, numbers and other characters. But the point is, they aren't a .png image anymore. Therefore, they can be turned into this:

    c315d612844a96e073041198e7b9b0eb

Exactly... a hash. Something short and sweet that can be stored easily on a server next to a user ID or something. Your friend Margaret also uses treerank.bark. Here's the image they secretly forced into her cache:

![](/images/cachedimage2.jpg)

Sort of the same... but a bit different. This of course results in an entirely different hash. Something that might be otherwise indistinguishable by the human eye is totally unique to the computer gods. You know, a bit like *fingerprints*. Hmm...

## Canvas Fingerprinting: be *scared*, you are unique

Right so you've logged off of treerank.bark now - tree ranking is super addictive and you are trying desperately to limit your usage to just four hours a day (I know, it's hard... stay strong). Now you're back on buystuff.shop to buy the things that are missing from your life. You decide to do this incognito because you don't want every corporation out there knowing what kind of stuff you like to buy.

Slipping into incognito mode right now is actually totally futile. Buystuff.shop already have you down as a "Joey" (always has lube in their shopping basket). Incognito/private mode blocks cookies, sure. But it certainly does not stop the rendering of a canvas image. Allow me to explain...

So yeah, you're having fun 'being private' in incognito mode, all the while buystuff.shop have read your **canvas fingerprint** in order to target you with 'relevant advertising' (gosh yes, I actually do quite like adverts as long as they're *relevant*). 

Canvas fingerprinting is yet another deviously ingenious way of identifying you. It's fairly similar to a generated image forced into your browser's cache, except there is absolutely no caching necessary - yes, an image is generated, but it is not stored anywhere... it mostly lives in code.

Great so... what is this canvas we've been talking about? Sounds like a place you make pictures. That is correct, essentially it's a place where the coders of the web do painting in HTML. Okay, and what is HTML? I'm not about to give you a history of the internet, so just trust me when I say that all websites that ever existed and will exist are written in HTML. 

[The canvas is a HTML element](https://www.w3schools.com/html/html5_canvas.asp), so that means every website that exists has the ability to render a canvas image. I touched on how to write colours in code, so just apply that concept to other things such as text, drop shadows, gradients, and anything else you can think of for making cool graphics. Using the canvas, you could easily render an image like this:

![](/images/canvas.png)

This fairly antagonistic - but secret - image, was embedded in the code necessary for buystuff.shop to run. This image is not unique to you. Every visitor of buystuff.shop gets the same canvas code as you. So how to extract uniqueness from this?

Well, take a look at this image. It has a bunch of stupid effects like embossing and drop shadows and outlined text etc. Depending on the device, this image will render *ever so slightly* differently. Remember, to a computer, a tiny difference is just a difference. There's no such thing as 'almost the same'. Only 'exactly the same' and 'different'.

So with canvas fingerprinting, the site will load up the code (which is always the same, no matter what), and then temporarily render the code into an actual image. The way this image renders will be different enough from device to device, that buystuff.shop should be able to generate a unique hash out of it. Let's look at some samples:

You, a "Joey", renders their canvas image like this:

    render speed: slow and steady - like a train
    font sharpness: not sharp at all... needs glasses
    italics: very oblique
    gradients: could be smoother
    drop shadows: not grey enough, and far too 'dropped'

But a "Monica" (prefers bookmarks over tabs; addicted to online gambling) might render like this:

    render speed: however long it takes to blink
    font sharpness: crispy
    italics: Monicas don't do italics
    gradients: silky like hot chocolate
    drop shadows: intense and dark

These differences make no sense, and human eyes would never catch them. Some of this is not how the final rendered image actually looks, but *how* it renders. That is why canvas fingerprinting is a perfect way to get a surprisingly accurate profile of you. The hashes created from this may not be unique from person to person, but it will certainly whittle down a demographic of two million people to say, a thousand. 

If you're not convinced that this is a thing [just look at how the same emojis look different depending on what phone you're using](http://mentalfloss.com/article/516048/22-emojis-look-completely-different-different-phones). Cool, now we can move on.

## What your browser says about you: the navigator object

Now you've stopped shopping and want to unwind by watching a movie on watch.me, your favourite streaming service. Watch.me have you down as a "Chandler" (never logs out; has a shit uber rating).

Watch.me don't bother with secretly rendering and caching fancy images to figure out what kind of user you are. They just look at what browser you're using via the navigator object. I can feel that you currently have two burning questions, allow me to answer.

### 1. What is this 'navigator object' please?

Yes so it's a set of info that sort of lives in your browser, available for websites to access so that they can achieve certain things. E.g. if, from the navigator object, they see that you are in the UK, they will know to render the site in English. Here's a simplified version of what the navigator object might look like:

    Browser: Firefox
    Version: very old; needs updating
    Location: Haggerston, London, UK, the world
    Operating system: Windows 7, for some reason
    Likes cookies: yes
    User type: "Ross" (total loser)

### 2. How can this info about my browser even be useful?

Right well, before I answer that please think about the following:

- How many browsers there are
- How many versions of each browser
- How many platforms and operating systems each version of each browser can be installed on
- How many geographical locations each of these different kinds of installations can be in
- How many of these have cookies enabled/disabled
- Aaaaaand so on...

So you see, because of the wealth of browser versions and operating systems and so on, you  can use the navigator object to decently narrow a demographic down to a smaller number. 

## Feature fingerprinting: this one is... ugh

As with the navigator object method, feature fingerprinting uses [tools](https://modernizr.com/) to extract readily available information about your browser, and use it in all kinds of unintended ways.

In feature fingerprinting, you get to some level of user uniqueness by looking at what features a device and browser supports. Now, when I say features, I don't necessarily mean things like 'has microphone support'. Really what we're talking about here is stuff like whether the nav bar animates when you hover over it.

Take this user, for example. They're a "Rachael" (has five credit cards and terrible tinder etiquette). This is their setup:

    Platform: Windows Vista (gross, please don't)
    Browser: IE8 (again... why)
    Add-ons: none
    Version: the latest, fresh from 2002
    Fonts supported: It's Helvetica all the time
    Can play Candy Crush: only if you want a Candy Crash

Obviously, a set up like this would generate a fairly unique hash. I don't know anyone who still internets like this, but I'm sure they exist. Compare this to someone using Safari on an iPhone X and you get a very different picture. Either way, it's used to narrow down groups of users to some degree.

In essence, because there are so many 'features' all they really measure is how many you actually support. A "Rachael" may only support about 200 features, whereas a "Joey" could support more like 2,000. The level of feature-detail they can go down to is how many fonts you have installed. Seriously guys, give it a rest.

## So what can I... do about this?

Not to sound cynical, but not much. The tools and features used in these sophisticated tracking methods are completely allowed, which is why they work. This is why cookies are now an unnecessary distraction - browsers block cookies, so advertisers just try something else.

You could disable other things, like perhaps Javascript, but that would also mean disabling the 'cool' filter of the internet and everything would just look like this:

![](/images/nofrills.png)

Using privacy tools in tandem such as [Privacy Badger](https://www.eff.org/privacybadger) and [Ublock Origin](https://en.wikipedia.org/wiki/UBlock_Origin) have known to be fairly effective. For instance, Privacy Badger will disable canvas rendering, but only on sites that try to render a canvas from a **third party.** In other words, it takes a smarter approach to blocking things. These tools also have manual controls that you can fine tune to your liking. Also, consider switching to more secure browsers such as Firefox or Brave.

With these kinds of tracking, the trick is narrowing user types down as much as possible, and using all methods together. Remember that all these methods do not employ scary new technologies - just scary new ways of using already existing technologies.

To illustrate the breadth of the problem and the wave of concern slowly making its way through the industry, I leave you with this inspirational quote:

> "That's the most evil thing I've ever seen."

*Shad, lead designer at Metomic, after learning about using RGB values to create hashes*