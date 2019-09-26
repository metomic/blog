---
layout: post
title:  "Is it okay to store data on a blockchain under GDPR?"
description: "A piece that explains blockchain and how this works with GDPR; you cannot store data on blockchain and be GDPR compliant because data cannot be deleted from a blockchain"
categories: "Explainer"
author: "Georgia Iacovou"
socialImage: /images/blockchain-never-forgets.png
themeColor: "#466993"
date:   2019-09-26 13:16:00
---

##Blockchain is an interesting storage solution for data... but should you do it?

A few months ago I [wrote an article](https://blog.metomic.io/main/2019/04/24/open-data.html) about a fictional person called April who lived in a world where all of the data she had ever produced was freely available for her to access whenever she needed to. She could also **control who else had access to it.**

This came in handy when she went to the doctor, and they already knew her symptoms; she'd been using a health app to measure heart rate, and she made sure that the only other place this data existed was her own medical records — boom, her doctor was well-informed before the appointment had even happened.

Okay but what if I told you that April's data was stored on a blockchain?

## What is this... 'blockchain'?

I feel like I spend my life avoiding talking about it but we all must understand it in order for this article to make sense. If you already understand what it is: lucky you, scroll down. If not, read this **very brief and very simple** explanation. 

If you're not storing data on a blockchain, you're just putting it in a regular old database; it's all in one place, clumped together.

But with a blockchain, it is stored on a "chain". Pieces of information (or data) are stored within blocks on that chain. The blocks are in chronological order, which is why blockchains are very often compared to public ledgers. You can't change or delete things in old blocks — you only add new information inside new blocks. Like this numbered list of entries:

1. My name is Georgia
2. I love pretzels
3. I ride my bike to work
4. **My name has now changed to Greg**
5. I like drinking IPA
6. **I hate pretzels now**

So here, entry 4 stated that I had a name change. Instead of changing entry 1, I just made a new entry, with the new information. Entry 6 does the same thing for entry 2. No entries are changed or removed; only new entries added. So in a sense this is not only a way to store data, but also a record of what has been added.

This is, in a simplified manner, how blockchain works — like with entries on a ledger, you do not change or delete existing blocks; you just add new ones.

![diagram illustrating the difference between a blockchain and a normal database](/images/blockchain-vs-not.jpg)
*Everyone has a copy of the ledger, everyone's ledger gets updated if something new is added. Everyone can see everything — there is no one central authority overseeing the data*

But, the extremely important difference between a straightforward ledger and a blockchain is that **data stored on a blockchain is decentralised.** All data on a blockchain, regardless of who added it 'belongs' to everyone using that blockchain. Everyone has every block. Which leads us neatly to this very apt question...

**🤔 If everyone has every block, does that mean everyone can see all the data?**

Yes they can, and that's totally fine for some blockchains (open data and all that), but if you're using blockchain for personal or sensitive data, the norm is to encrypt it.

`Encrypted blockchain data is the reason why you don't 'lose your Bitcoin' — you lose the key to your bitcoin.`

If a block, or piece of data within that block is **encrypted** the only person (or people) who can access it are the ones with the key. You can read [more here](https://blog.metomic.io/main/2019/09/10/cryptography-explained.html) about how encryption works but essentially, when it comes to blockchain, it's the reason why you don't 'lose your Bitcoin' — you lose the **key to your bitcoin**.

So, here are the important things to remember about blockchain:

- **It's decentralised:** everyone on the chain 'has' all blocks on the chain. There is no one central place where the data is stored — it is stored with everyone.
- **Controlled access**: if using encryption, the only person who can access data, is the one with the encryption key
- **You can't change blocks:** blockchains are like decentralised ledgers, so changing or deleting a block doesn't work, or the whole chain falls apart.

## Well gosh, this sounds like a great way to store data

Yes it does — there is no central authority governing the data. It's just data that exists, and the correct people have access to it. In theory, it's also pretty secure because blocks can't be changed without disturbing the entire chain. Changing the data in one block would mean changing the data in all following blocks — in other words it's really hard and gets harder as more people contribute to that specific chain. 

**So going back to April's health app:** her data is accessible only to her, and stored *not on the app's servers,* but with everyone else who also uses the app (it's decentralised). The data itself is encrypted, and April is the only one with the key . 

The app even uses smart contracts, which is a small piece of code that will perform an action as soon as a certain condition is met. So in April's case, the condition is "when I flip this switch, share this data with my doctor".

So April has a lot of control over her data on this wonderful blockchain. Her mind is now at rest and she can spend her days metaphorically skipping freely in a flowery meadow.

## April would now like to exercise her data rights

April is done with the health app and wants them to delete all her data — this 'right to be forgotten' is [part of the GDPR](https://gdpr-info.eu/art-15-gdpr/), and is just one of the many rights that April has over her data.

Wait a sec 😳. April's data is on... a blockchain. And as we just learned you cannot change or delete data on a blockchain. So, simply by storing her data on a blockchain, that health app have removed her right to be forgotten — a blockchain never forgets.

`Simply by storing her data on a blockchain, April's right to be forgotten has been taken away.`

What's more, if the data is distributed among everyone else using the health app, who is the data controller? Under GDPR, the **controller of the data** (e.g. those who own and run the health app) needs to be able to fulfil any data requests they may receive from their users. In April's case this is not possible... the health app themselves cannot even access the data to fulfil requests.

Finally, what happens if April's encryption key is ever compromised? The data that she put on this blockchain will be exposed forever — because, as mentioned, you cannot delete it. So for securing personal data, it may not be a great solution.

![a graphic reading 'blockchain never forgets'](/images/blockchain-never-forgets.png)
*A poster for your wall in case you suddenly decide to build an app on a blockchain*

Right so, you may be confused. Let's do a quick FAQ to clear things up:

**Q: Is it okay to store data on a blockchain under GDPR?**

A: Nope. You can't be compliant if you can't let your users exercise their data rights. 

End of FAQ. End of article.