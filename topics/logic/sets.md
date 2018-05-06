---
layout: default
permalink: /topic/logic/sets
title: Sets
description: Collections of values
---

Sets are used to represent collections of distinct values (referred to as members ot elements). Multiple sets, or sets of pairs can sometimes be represented as an [adjacency matrix](/topic/numeric/matrices).

## Set specification

There are two ways in which a set can be specified, as either a list or a generator.

A list specification for a set would simply be written as $bb "S" = {1,2,3,4}$, where the members of the set are given as a comma separated list within braces. It is convention that a value representing a set is bold.

A generator specifies the members of the set based on a logic statement. The list given above would be represented as $bb "S" = {x | 0 < x < 5}}$, where the value given before the bar is the member, with the values being all of those which satisfy the logic statement after the bar.

An element being a member of a set is expressed as $1 in bb "S"$.

### Common sets

There are a few common sets that are referred to by standard symbols:

* **N** - Naturals - all whole non-negative numbers
* **Z** - Integers - all whole numbers
* **U** - Universal - all possible elements (within some agreed world of values)
* ∅ - Empty - A set containing no elements

## Subset

A subset is a set where its members also all belong to another set, so $bb "X" sube bb "Y"$ when **X** contains only elements from **Y**, but not necessarily all of them. It is more precisely a subset iff every member of **X** is a member of **Y**.

A proper subset, expressed by ⊂, holds if it is a subset but not equal to the other set. More simply, a proper subset has at least one fewer element than the parent set.

## Intersection

The intersection of two sets, represented by ∩, is the set which contains only the values which are members of both sets. This if formally given as $bb "X" nn bb "Y" = {x | x in bb "X" ^^ x in bb "Y"}$.

Intersection is a commutative operation.

## Union

The union of two sets, represented by ∪, is the set containing the elements of both sets. Since a set must have distinct values, each value will only appear in the set at most once.

There is also the notion of a disjoint union, given as ⊎, where the two sets have no members in common. This is, in practice, no different to a union operation.

Union is a commutative operation.

## Difference

The difference of two sets, represented as a backslash, is those elements which feature in the first but not the second. Therefore, $bb "X" \\\\ bb "Y" = {x | x in bb "X" ^^ x !in bb "Y"}$.

## Complement

The complement of a set, represented as **X'**, is the set which contains all elements other than those in the original set. This is the difference of the universe and the original set.

## Cardinality

The cardinality is the count of members in the set. Cardinality is often represented in the same way as magnitude would be, &#124;**N**&#124;, or with a hash, **#N**.

## Powerset

The powerset of a set **S** is given as $2^(bb "S")$. It contains all possible subsets of the set, including the set itself and the empty set.

## Cartesian Product

The cartesian product of two sets, given by x, is a set containing orders pairs of each combination of elements. If there were two sets $bb "A" = {1,2,3}$ and $bb "B" = {4,5,6}$, then $bb "A" xx bb "B" = {(1,4),(1,5),(1,6),(2,4),(2,5),(2,6),(3,4),(3,5),(3,6)}.
