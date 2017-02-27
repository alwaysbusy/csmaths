---
title: Entropy
layout: default
permalink: /topic/information/entropy
---

## Preliminaries
Entropy builds upon knowledge of probability.  A good understanding of marginal, combined and conditional probability as well as related theorems is required.

## Shannon Entropy
The Shannon Entropy of a variable gives the minimum number of bits of information required to individuate the value of the data.  It can be calculated from the information content of a stochastic variable.

Information Content: $h(x) = log_2(1/(P(x)))$

Shannon Entropy: $H(x) = sum_(x in X)P(x)h(x)$

The Shannon Entropy is always a non-negative value, and never greater than the maximum entropy.  Due to the log function in the entropy calculation, it should produce a concave graph if entropy values are plotted.

### Joint Entropy
For 2 variables with a joint probability there will also be a joint entropy.  The joint entropy of two variables will always be no greater than the sum of the two individual entropies ($H(X,Y) <= H(X)+H(Y)$).

$H(X,Y) = -sum_(x in X, y in Y)P(x, y)log_2(P(x, y))$

### Conditional Entropy
Conditional entropy can also be calculated.  Using the definition of entropy and conditional probability it is possible to derive the equation:

$H(Y\|X) = -sum_(x in X, y in Y)P(x, y)log_2(P(y\|x))
         = sum_(x in X)P(x)H(Y \| X=x) where H(Y \| X=x) = -sum_(y in Y)P(y\|x)log_2(P(y\|x))$

### Relative Entropy
Calculated and represented differently to other entropies, relative entropy represents the distance (difference) between two "equivalent" distributions.  Rather than expressing in terms of values from the distributions it requires the values $p$ and $q$ to be the distributions.

$D(p \|\| q)$ = sum_(x in X)p(x)log_2(p(x)/q(x))$

Relative entropy forms the basis of the **Information Inequality**, which all values must satisfy.  Iff $p = q$ then $D(q \|\| p) = 0$, otherwise $D(q \|\| p) >= 0$.   It is always maximal for the uniform distribution, non-negative and will form a concave curve.  From the information inequality we can also determine that $H(X\|Y) <= H(X)$, so information cannot increase the entropy.  This also means joint entropy is sub-additive on it's component parts.

This further gives rise to the data processing inequality where output cannot increase the information on input.

### Fano's Inequality
$H(P_(err))+P_(err)log\|ccX\|$ where $P_(err) >= (H(X\|Y)-1)/(log\|ccX\|)$


## Mutual Information
In cases where different values have related content they will share information between them.

$I(X:Y) = I(Y:X) = D(P(x,y) \|\| P(x)P(y))
                 = sum_(x in X, y in Y)P(x, y)log_2((P(x, y))/(P(x)P(y)))$

Mutual information can also be expressed in the form of entropies.

$I(X:Y) = H(X)-H(X\|Y) = H(Y)-H(Y\|X)$

Conditional information can also be expressed.

$I(X:Y\|Z) = H(X\|Z)-H(x\|Y, Z)$

$I(X, Y:Z) = I(X:Z)+I(Y:Z\|X)$


## Differential Entropy
Differential Entropy can be used to determine the shortest binary description of a continuous variable.  It may be a negative value (unlike other entropies) with the logarithm being base 2 for binary values and the natural log for natural numbers $bbbN$.  $h(X)+n$ would be the average number of bits to describe *X* to *N* bit accuracy.

$h(X) = h(P) = -int_sP(x)logP(x).dx$

Joint differential entropy can be given as $h(bbX) = int_bbsP(bbx)logP(bbx).d^nbbx$, while conditional differential entropy can be expressed as $h(X,Y) = h(Y)+h(X\|Y) = h(X)+h(Y\|X)$.  Relative differential entropy is given as $D(p\|\|q) = intp(x)log((p(x))/(q(x))).dx$.  These definitions are all very similar to standard entropy.

Mutual information can also be expressed from differential entropy values.

$I(X:Y) = h(X)+h(Y)-h(X,Y) = h(X)-h(X\|Y) = h(Y)-h(Y\|X)$
