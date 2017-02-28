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

## Gaussian Channels
A Gaussian Channel is affected by noise variable with a mean of zero and a variance of *N*.  Band-limiting may also be applied to the channel as a result of the hardware used for communication.

## Networks
A network is a group of *N* nodes communicating with each other.  There are several different types of channel within a network.

* **Multiple Access** - *m* stations are able to communicate with a single receiver ($Y = sum_(k=1)^mX_k+ccN(0, N)$)
* **Broadcast** - One transmitter communicating with *m* receivers (If receivers are working together then it may be possible to derive the message from a combination of them, since each receiver is subject to different noise) ($Y_1=X+Z_1, Y_2=X+Z_2, ...$)
* **Relay** - *X* communicates with *Y* via an intermediate receiver *Y<sub>1</sub>* ($Y_1=X+Z_1, Y=Y_1+X_1+Z_2$)
* **Interference** - A message may suffer interference and be delivered to an incorrect receiver ($Y_1=X_1+thetaX_2+Z_1, Y_2=X_2+thetaX1+Z_2$ where $theta$ is the probability of a misdirected message)
* **Two-Way** - As an interference network however each sender is also a receiver.  It has a solution only as a Gaussian Channel and when modelled as two one-way interference channels.
