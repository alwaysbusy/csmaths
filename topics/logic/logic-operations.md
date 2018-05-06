---
layout: default
permalink: /topic/logic/logic-operations
title: Logic Operations
description: Basic operations such as And, Or and Not
---

Logic operations are used on binary data to calculate logic information about their values.  Each operation is represented by a truth table which gives at least one *output* based on the inputs it receives.  There are three basic operations (And, Or and Not) from which all other operations can be built, but are expressed separately for convenience.

## And

The and operation takes in two values and gives a true (1) value if both inputs are true, otherwise it is false (0).  And is represented by the ˄ symbol (NB: the symbol is an Up Arrowhead, not a hat).

The function can be defined as:

|Value 1|Value 2|*And*|
|-------|-------|-----|
|0      |0      |0    |
|0      |1      |0    |
|1      |0      |0    |
|1      |1      |1    |

And is a commutative operation.

## Or

The or operation takes in two value and give a true value if at least one of the input values is true.  It is represented by ˅.

The function can be defined as:

|Value 1|Value 2|*Or*|
|-------|-------|----|
|0      |0      |0   |
|0      |1      |1   |
|1      |0      |1   |
|1      |1      |1   |

Or is a commutative operation.

## Not

The not operator takes a single input value and inverts the value of it.  It is represented by the ¬ symbol, but is sometimes also represented by a ! before the value or an overline.

|Value|*Not*|
|-----|-----|
|0    |1    |
|1    |0    |

## Nand

The nand operation combines the And and Not operations, so provides the opposite result to an and operation.

|Value 1|Value 2|*Nand*|
|-------|-------|------|
|0      |0      |1     |
|0      |1      |1     |
|1      |0      |1     |
|1      |1      |0     |

Nand is a commutative operation.

## Nor

The nor operation combines Or and Not to invert the result of an or operation.

|Value 1|Value 2|*Nor*|
|-------|-------|-----|
|0      |0      |1    |
|0      |1      |0    |
|1      |0      |0    |
|1      |1      |0    |

Nor is a commutative operation.

## Xor

The xor operator will only give true if a single input is true, and for all other cases (neither true or both true) it is false.  Xor can be constructed from the equation (A ˅ B) ˄ ¬(A ˄ B).  Xor either represented as "xor" or the ⊕ symbol.

|Value 1|Value 2|*Xor*|
|-------|-------|-----|
|0      |0      |0    |
|0      |1      |1    |
|1      |0      |1    |
|1      |1      |0    |

Xor is a commutative operation.

## Implication

The implication operator is true if the first input is sufficient for the second. Whilst using in some logic expressions this is less likely to be implemented in a language. Implication can be constructed from the equation ¬A ˅ B, and is represented by the symbol ⇒.

|Value 1|Value 2|*Implies*|
|-------|-------|---------|
|0      |0      |1        |
|0      |1      |1        |
|1      |0      |0        |
|1      |1      |1        |

## Double implication

Double implication is where each input implies the other. This results in the same behaviour to an equality operator, but can be more correctly expressed as (A ⇒ B) ˄ (B ⇒ A). It is expressed by the symbol ⇔.  It is also referred to as if and only if, or iff.

|Value 1|Value 2|*Double Implies*|
|-------|-------|----------------|
|0      |0      |1               |
|0      |1      |0               |
|1      |0      |0               |
|1      |1      |1               |

Double implication is a commutative operation.
