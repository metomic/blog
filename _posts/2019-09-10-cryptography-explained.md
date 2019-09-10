---
layout: post
title:  "The easiest way to understand cryptography"
description: "a short, clear article explaining how cryptography works. Covers an example with a physical box being sent around the world, and how prime numbers are used to send messages securely"
categories: "Explainer"
author: "Richard Vibert"
author_description: 'Cofounder & CEO, Metomic'
author_image: /images/rich-profile.jpg
socialImage: /images/cryptography.png
themeColor: "#466993"
date:   2019-09-10 13:16:00

---

Sending information over the internet is often encrypted — that means it is only readable to the **sender** and **recipient**. So when you send a message to a friend over WhatsApp, the only devices the message is visible in are your phone and your friend's phone. Asymmetric cryptography is a common method for achieving this

But how does it actually work?

[This explanation](https://www.youtube.com/watch?v=PtsrAw1LR3E&t=1694s) I found from Terrance Tao is the best I've seen, so thought I would share it here.

## Alice wants to send a very secret message to Bob who's on the other side of the world.

***But...*** 

- She doesn't trust anyone in the middle
- She can't communicate with Bob in any other way

So what can Alice do? 🤷‍♀️

She has an amazing idea 💡

1. Alice starts by putting the message in a box and putting a padlock on the box. Alice keeps the key and mails the padlocked box to Bob. 
2. Now anyone in the middle can't open the box because it's locked and they don't have the key. 
3. However, when the box arrives with Bob, he doesn't have the key either, so what does he do?
4. Bob puts his own padlock on the box. And he mails the double locked box back to Alice. 
5. Alice obviously can't unlock Bob's padlock, but she can unlock her own. So she does that and then sends the box back to Bob. 
6. Now Bob can unlock his own padlock, open the box, and see the message!
7. So Alice and Bob can securely transmit a message without having to speak to each other. Amazing right?

Obviously this is an over-simplified example — in reality, the box is a digitised code that only Alice and Bob can decipher.

![diagram that illustrates how cryptography works](/images/cryptography.png)

 

## So how would this work digitally?

All types of cryptography rely on prime numbers — they are an integral part of securely sending information over the internet. There are two reasons for this:

1. Very little is understood about them and there is no formula telling us where prime numbers are going to occur.
2. Primes are building blocks of numbers themselves. More specifically, The Fundamental Theorem of Arithmetic tells us that every number is either a prime or the constructed product of primes.

So the scientific version of Alice and Bob's message transmission relies on primes. Here's how can Alice can send a secret message (in the form of a number) *g* to Bob.

1. Alice and Bob agree on a large prime number *p*.
2. Alice chooses some code to "lock" *g* and calls it *a.* She locks *g* by computing *gᵃ* mod *p*, and sending that result to Bob.
3. Bob names his lock code *b* and "double locks" *gᵃ* mod *p* by computing *(gᵃ)ᵇ = gᵃᵇ* mod *p* and sending that back to Alice.
4. Alice takes the *a*-th root of *gᵃᵇ* to create *gᵇ* mod *p* and sends that back to Bob. 
5. Bob takes the *b*-th root *gᵇ* tom uncover the original message *g*.

FYI: mod is like the remainder. For example, 3 mod 2 = 1 because 2 goes into 3 once remainder 1. Or, 25 mod 7 = 4. Or 25 mod 5 = 0.

And there we have it. This time Alice hasn't sent a physical box, but some kind of digital message. And, just like the box, anyone intercepting this message in the middle will not be able to make sense of it — i.e. "unlock it"

So some of the basic principles of keeping information private and secure online rely on prime numbers; if anyone were to figure out a simple formula for prime numbers they'd be rich not only from the mathematical awards they'll undoubtedly win, but also from the number of credit card details they'll be able to intercept and decipher.