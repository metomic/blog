---
layout: post
title:  "Using Trust Token API"
categories: "Explainer"
author: "Ayooluwa Isaiah"
author_description: 'Freelance developer & technical writer'
author_image: /images/ayo-profile.jpg
socialImage: /images/google-pushed-pages.jpg
themeColor: "#466993"
date:   2020-03-10 13:00:00
---

To detect fraudulent or malicious actors, websites use techniques such as third-party trackers to identify an individual's browser activity across the web for the purpose of building trust signals. While fraud prevention is an important aspect of creating secure web experiences, this method constitutes a serious privacy invasion.

For this reason, a new Trust Token API has been [proposed](https://github.com/WICG/trust-token-api). It is a mechanism for propagating user trust across websites without relying on cross-site persistent identifiers such as third-party cookies. This allows websites, to easily segment users into trusted and untrusted sets without compromising the privacy of any individual.

This classification of users is also beneficial for CDN providers and Ad networks both of whom receive large amounts of fraudulent traffic daily. It would make it easier for companies in those spaces to detect and filter out invalid traffic.

## Issuing a token

This API proposes that a new per-origin storage area will be created for [Privacy Pass](https://privacypass.github.io/) style cryptographic tokens, which will be made accessible in third party contexts. These tokens are issued to the browser by an origin when it is in a context signalling that the user is trusted.

Here's how you can issue tokens to a trusted user via the Fetch API:

![](/images/trust-token-1.png)

This will trigger the Privacy Pass Issuance protocol which will generate and attach a set of blinded nonces to the *Sec-Trust-Token* request header and make a POST request to the provided endpoint.

When a response is received with the blind signatures in a *Sec-Trust-Token* response header, they are unblinded, associated with the unblinded nonces and stored internally in the browser. These nonce-signature pair are the trust tokens that may be redeemed later.

## Redeeming a token

Trust tokens are meant to be used up when a user is in an unknown or less trusted context. To learn about the trust status of the user, you will be able to do the following:

![](/images/trust-token-2.png)

This checks whether any valid trust tokens exist for the issuer ([example.com](http://example.com/)) so that a token redemption may be attempted. Here's how you can attempt a token redemption:

![](/images/trust-token-3.png)

The above request will reject with an error if no tokens are available for the provided issuer or if the issuer does not support raw redemption tokens. Otherwise, the token will be available on the *Sec-Trust-Token* request header.

If you need to show evidence that the token was redeemed, perhaps in order to forward to other parties, you may receive a Signed Redemption Record (SRR) which has the following signature:

![](/images/trust-token-4.png)

The Redemption timestamp ensures the freshness of the SRR while the expiry timestamp, if included, is a recommendation to the User Agent (UA) for when to perform a SRR refresh although the UA is allowed to choose an expiry beyond what is specified in the SRR.

The ClientData is derived from the client and includes the origin that the redemption occurred on. The Metadata includes the key ID, so that consumers of the SRR can compare against the currently active key commitment.

You may request an SRR for the purpose of redemption attestation using the Fetch API as shown below:

![](/images/trust-token-5.png)

If there are no tokens available for the given issuer, the returned promise rejects with an error. Otherwise, the PrivacyPass redemption protocol is invoked against the issuer which results in the SRR being expected in the *Sec-Trust-Token* response header.

![](/images/trust-token-6.png)

This SRR can be forwarded as redemption attestation using the Fetch API and will be added as a new request header *Sec-Signed-Redemption-Record*. SRRs are HTTP-only, and it is only possible to access it in your JavaScript code through the *trust-token* option in the Fetch API. If no SRRs are available, the request header will be omitted.

## Adding metadata to tokens

It possible for issuers to store a limited amount of metadata in the signature of a nonce to provide additional information about the token and forward it as part of the SRR. This metadata may be public or private depending if you want to reveal the details in the metadata to the client or not.

### Public metadata

To make a set of information about the token visible to the client, it needs to be made public. It can be a useful way to run experiments against other trust metrics and use the results to improve your token issuing logic.

You can do this by assigning different keys in the key commitment to have different labels, indicating a different value of the public metadata. To read the value of this metadata, downstream partners would be able to check the key ID contained in the SRR.

### Private metadata

If you want to share private information about the token with downstream partners (via SRR) without revealing it to the client, it is necessary to encode it as private metadata. You can use this quality to mask the decision to trust a client.

Instead of not issuing tokens to trusted clients only, you'll issue tokens to both trusted and untrusted clients, only that the untrusted client will some private metadata set indicating that it should not be trusted. This makes it harder for fraudulent actors to determine that their clients have been distrusted.

To manage private metadata, you will need a pair of keys that sign the token at the point of issuance. One of the keys will be used to indicate that the bit of metadata is true, while the other one will indicate that the bit of metadata is false.

The zero-knowledge proof provided during the issuance will indicate that one of the keys was used to sign the token without revealing which key it was. During token redemption, you will can then check which of the two keys was used to retrieve the value of the private metadata.

## Privacy considerations

### Unlinkability

The privacy of the Trust Token API relies on the fact that token issuance cannot be linked to token redemption. Token issuers are not normally able to link redemption requests to user identity but it is possible can learn aggregate information about which sites users visit.

To ensure that tokens remain unlinkable, the Privacy Pass protocol verifies that a public key commitment list is published by issuers and confirms it is small (for example, a maximum of three keys) and consistent between issuance and redemption. This prevents an issuer from using many different values for private keys allowing the de-anonymization of clients at redemption time.

### Cross-site information transfer

Although, trust tokens are guaranteed to contain only a small amount of information, allowing many redemptions on a single page could be used to learn the exact set of issuers that have granted tokens to a particular user, which could compromise the identity of the user.

To prevent this, limits are placed on both issuance and redemption through [user activation](https://html.spec.whatwg.org/multipage/interaction.html#activation) and by returning cached Signed Redemption Records when an issuer attempts too many refreshes. Additionally, strict limits on the number of token issuers contacted per top-level origin should be enforced and this should apply for both token issuance and redemption.

### First party tracking potential

An SRR and its public key have a similar tracking potential to first party cookies as they allow sites to share user identity with third parties on the page in a verifiable way. To mitigate this potentially undesirable situation, user agents can request multiple SRRs bound to different keypairs, and rotate them when performing requests based on the third-party or over time. Additionally, it should be possible to delete all SRRs using the browser’s existing Clear Site Data functionality.

## Security considerations

### Trust token exhaustion

A trust token exhaustion attack is aimed at depleting a legitimate user's supply of tokens for a given issuer so that the user is less valuable to sites who depend on the issuer’s trust tokens.

There are a number of ways to mitigate this attack:

- Many tokens will be issued at once, so users have a large supply of tokens.
- Browsers redeem only a single token per top-level page view, so it may take many page views to deplete the supply of tokens.
- SRRs will be cached per-origin and only refreshed when an issuer iframe opts-in, so malicious origins won't deplete many tokens. The “freshness” of the SRR becomes an additional trust signal.
- Redemptions may be limited on a time-based schedule, and cached SRRs are returned if available.
- Issuers will be able to detect if any one site is redeeming suspiciously many tokens based on the Referer (subject to the page's referrer policy). It can fail redemption (before the token is revealed) and prevent browsers from using up any tokens there.

## Wrap up

The Trust Token API, once implemented, will essentially make it easier for websites to detect fraudulent users without resorting to the privacy invading practices of today. It's only a proposal right now, so i

---

Ayo is a software developer with a keen interest in web technologies, Security and performance. He's currently working on his own products and teaching programming via freshman.tech