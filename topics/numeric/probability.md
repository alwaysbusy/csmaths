---
title: Probability
layout: default
permalink: /topic/numeric/probability
---

## Preliminaries
Probability is an expression of likelihood.  To express probabilities the following notation will be used:

|Notation|Meaning|
|--------|-------|
|P(*n*)|The probability of event *n* occurring|
|P(*n*, *m*)|The combined probabilities of *n* and *m* occurring|
|P(*n*&#124;*m*)|The probability of *n* given *m* has happened (conditional probability)|
|{*N*}|*N* is a valid value in the sample space|

For any event a probability is always given as a real value between 0 and 1.  P(*n*) = 0 would express an impossible event, whilst P(*n*) = 1 would express a certainty.  A sample space must also have at least 1 sample within it; calculating probability in it's most simple form of *desired_event*/*sample_size* would result in a division by 0 (a mathematical impossibility).

## Calculating combined probabilities
When a probability is known, it can be combined with other probabilities to give a combined probability.  Take the example:

> A fair coin is tossed twice.  What is the probability that it lands showing the same face both times?

This requires us to combine the probability of multiple events occurring and then summing the probability of different events to get the final value.  We know that the possible sample space of this case is {HH, HT, TH, TT}, where H is Heads and T is Tails, and that for a coin P(H) = P(T) = 0.5.  Therefore we can calculate the probability as:

    P(HH) = P(H) x P(H)
          = 0.5 x 0.5
          = 0.25

Now we know the probability P(HH) we also know this must be the probability P(TT) since P(H) and P(T) share a value.  We can calculate the probability of either value {HH, TT} happening by summing the probabilities together as:

    P(HH || TT) = P(HH) + P(TT)
                = 0.25 + 0.25
                = 0.5

## Event types
Events and values do have a relation to one another.  An event can either be:

* **Independent** - Does not rely on any other event taking place (that we are concerned by)
* **Dependent** - Is influenced by another event of concern (hence probability may be expressed as P(*m*&#124;*n*) if appropriate)

Dependence, in particular, is introduced often in subtle ways.  Considering

> Six balls are placed in a bag; two each of Red, White and Blue colour.  Two balls are successively drawn from the bag and placed on a table.  What is the probability they are of the same colour.

a dependence between the first and second events exists as a ball is removed leaving a different total number of balls in the bag, as well as a different number of balls of one particular colour.  In this case, care must be taken before multiplying probabilities as the second probability will change based on the first event.

Events and their values may also be related to one another as:

* **Mutually exclusive** - Two or more events which may never occur at the same time (such as rolling a 1 and a 2 on a die, since it is physically impossible for a standard die to read multiple values).  The probability of such an event occurring is P(A &#124;&#124; B) = P(A) + P(B).
* **Mutually non-exclusive** - Two events that may occur simultaneously (such as rolling a multiple of two and a multiple of three on a die).  The probability of such events occurring is given as P(A &#124;&#124; B) = P(A) + P(B) - P(A, B)

## Permutations and Combinations
The simplest way to think of a permutation is a way of arranging a subset of symbols from an alphabet.  The easiest way of calculating this is using the **P** function on a calculator (often stylised as <sup>*n*</sup>**p**<sub>*r*</sub>).  This can be better expressed as <sup>*n*</sup>**p**<sub>*r*</sub> = *n*! / (*n* - *r*)!

For example, we know that all permutations of the characters {A, B, C} that are two characters in length are {AB, AC, BC, BA, CA, CB}, so there are 6 in total.

    3P2 = 3! / (3 - 2)! = (3 x 2 x 1) / 1 = 6 / 1 = 6

Combinations are similar to permutations but do not consider the ordering of elements.  Again, calculators provide a facility for this via the **C** function (written as <sup>*n*</sup>**C**<sub>*r*</sub>), and is also expressed in a column vector style as **n, r** when written.  <sup>*n*</sup>**C**<sub>*r*</sub> can be calculated as *n*! / (*n* - *r*)!*r*!.

Taking the previous example, all combinations of two characters from the three would be {AB, AC, BC} or three.

    3C2 = 3! / (3 - 2)!2! = (3 x 2 x 1) / 1!(2 x 1) = 6 / 2 = 3

## Binomial Probability Distribution
In a binomial distribution there are two options, often referred to as success (*p*) and failure (*q*).  Probability for a binomial event is such that P(*p*) + P(*q*) = 1.  By applying knowledge of combinations we are able to account for the likelihood of a certain success rate (*r*) over a number of trials (*n*), to give a probability of (*n*! / (*n* - *r*)!*r*!)*q*<sup>*n* - *r*</sup>*p*<sup>*r*</sup>.

### Standard Deviation
Standard deviation is one of several parts of probability that we can calculate by knowing other properties of the distribution.

To calculate the standard deviation we must first know the mean.  This is given as μ = Σ(*fx*) / *N*.  This is vastly simplified for a binomial distribution to be μ = *np*, where n is the number of possible outcomes and p is the probability of success in a single trial.

Standard deviation gives an indication of the average distance from the mean.  For a non-binomial distribution this can be a very complex calculation.  For a binomial distribution, however, the standard deviation is given as σ = √(μ*q*) where q is the probability of failure in a single trial.

## Continuous Probability Distribution
A binomial distribution only handles discreet events, but the majority of real-world events have a continuous range of possibilities.  In continuous events the probability is considered to lie within certain limiting variables on the normal distribution curve.  In practice, the standard normal curve is used to place x=0 at the centre of the curve.
