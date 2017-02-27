---
title: Channels
layout: default
permalink: /topic/information/channels
---

## Preliminaries
This should be read after having developed an understanding of Entropy.

## Channels
A channel is a path down which information is communicated.  It is formally defined as being a system $(ccX, P(y\|x), ccY)$ with discreet input and output alphabets as well as a transition probability.  A channel may have a memory where previous values may interfere with future values to be communicated but most frequently this is not the case.  The channels capacity (maximum number of bits per second over the channel) is defined as the maximum information capacity for the distribution ($C = max_(P(X))I(X:Y)$).

There are a variety of different channel types which will different affect the data being transmitted through them:

* **Noiseless** - Data transmits with no errors ($P(y=A \| x=A) = 1$)
* **Symmetric** - Probability *p* that a bit flip will occur outputting an incorrect value ($C = 1-H_2(p)$)
* **Erasure** - Probability *p* that a bit will be transformed to an unknown value, often represented as *?* ($C = 1-p$)
* **Confusion** - Unknown input mapped to a binary input with equal probability *p* whilst binary values always map correctly ($C = 1$, $I(X:Y) = H_2(P_0+P_?/2) - P_?$)
* **Z** - 0 will always transmit correctly, but there is probability *p* that a 1 will decay to a 0

## Block Channel Code
Across a block channel an *n* symbol code word will be transmitted at a rate of $R = log_2M/n$.  Channel error can also be defined.

$P_(err) = P(m' != m) = sum_m(P(m' != m\|m)P(m))$ where $P(m) = 1/M$

Error free communication can be achieved across a channel if the rate is less than the channel capacity.  In cases where the rate is greater than the channel capacity error tolerance can be developed for rates up to $R_(max) = C/(1-H_2(P_(err)))$.
