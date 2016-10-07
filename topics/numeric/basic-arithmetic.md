---
layout: default
permalink: /topic/numeric/basic-arithmetic
title: Basic Arithmetic
---

Basic arithmetic underpins numerical maths, and provides the basis to develop all other ideas.

## Assumed knowledge
The following assumes that you already have an understanding of:

* Addition, Subtraction, Multiplication and Division
* How to calculate powers and roots of a number
* Modulus is the magnitude of a number (the number without it being positive or negative)
* Modulo is the calculation that finds the remainder from a division operation (denoted as %)
* How to balance equations
* What the decimal number system is, and how it is expressed
* How to perform decimal operations on any fractional (Rational) number

## Operator Precedence
Operators are applied in a standard order to remove the possibility of any ambiguity in calculations.  This is commonly remembered through the BODMAS or BIDMAS rule.  The rules only apply to the numbers or symbols immediately surrounding the operator.

1. **Brackets** - Any calculations contained within brackets are calculated first and the values used in place of the statement within the brackets
2. **Indices** - Also known as powers of a number (denoted as x^y or x<sup>y</sup>), powers are calculated as the number x recursively multiplied by itself y times
3. **Division** - Any division operation or number expressed as a fraction
4. **Multiplication**
5. **Addition**
6. **Subtraction**

Modulo is not commonly included in operator precedence lists, and so it is always safest to enclose a module operation in brackets, and hence it is not given here.

This ensures a consistent answer and doesn't always rely on the inclusion of brackets to clarify the calculation.  For clarity, however, it doesn't do any harm to provide brackets in extended equations to make the calculation clearer.  Operator precedence can change the result of equations comparted to if it were tackled linearly.  For example:

* 3 + 5 x 2 = 8 x 2 = 16 if performed linearly
* 3 + 5 x 2 = 3 + 10 = 13 if operator precedence is followed

## Operator Commutativity
An operation is commutative if the numbers or symbols expressed on either side can be switched and still achieve the same result.  In the context of standard decimal operations:

* **Addition** is a commutative operation (5 + 3 == 3 + 5)
* **Multiplication** is also commutative (5 x 3 == 3 x 5)
* **Subtraction** is not commutative (5 - 3 ≠ 3 - 5)
* **Division** is also not commutative (5 / 3 ≠ 3 / 5)
* **Modulo** is therefore also not commutative

If dealing with other cases than decimal maths, then different commutativity rules will apply.  Whilst they apply for cases where the numbers are represented in other forms (such as binary or hexadecimal), they do not all apply if conducting operations on non-decimals such as a matrices (covered at another point).

## Operator Associativity
An operation is said to be associative if the order of three or more numbers is irrelevant to the result.  Again, addition and multiplication are associative operations, whilst subtraction, division and modulo are not.

## Number categories
Decimal numbers are more commonly placed into categories to make it easier to express large quantities of numbers.  Whilst a number range can be given as 1, 2, ..., 10 it is not always practical or formal enough to express them in this way.

A computer will often store a number as either an Integer (a whole number) or a float (a number with digits after the decimal place).  More detail on how computers store numbers is beyond the scope of this text.  Mathematically, however, numbers can be grouped as:

|Group|Name|Meaning|Examples|
|-----|----|-------|--------|
|ℕ|Natural|The positive integers|1, 2, 3, ...|
|ℤ|Integers|Any whole number (positive or negative)|..., -2, -1, 0, 1, 2, ...|
|ℚ|Rational|Any number which can be expressed as a fraction|1, -4, 7/5, etc.|
|ℝ|Real|Any number which can be expressed on a 2D number line|5, -6, 2/7, 8.1531, etc.|
|ℂ|Complex|A real number plus and imaginary component|3 + 2i, 5 - 3i, etc.|

For the most part complex numbers are not considered in Computer Science related mathematics at this level, and so *i* is not used to represent the imaginary unit.  It is also worth noting that *j* is used in some cases to represent the imaginary unit.

Ignoring complex numbers, each of the major categories is a proper subset of the following.  So, ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.  Set theory is covered at a later point.

## Number rounding
A number may only need to be specified to a certain precision, in which case it can be rounded.  How a number should be rounded is often expressed in English as being to the nearest 10, 100 or 1000 (or another similar form) for whole numbers, and nearest 10<sup>th</sup>, 100<sup>th</sup> or 1000<sup>th</sup> (or another similar form) if it is being specified to a decimal precision.

If the number **after** the specified level of precision is half way or more between the next value (eg. rounding to the nearest 10, and number was natural between 15 and 19 inclusive) then number is rounded up by incrementing the digit at the precision level (eg. for the example it would become 20).  If this causes the digit to move from being a single to multiple digit, then any additional digits should be allowed to propagate.

If the number after the specified level of precision is less than half way, then the number is rounded down by leaving the digit at the precision level as is and zeroing any following digits (or removing them if after the decimal place).

The same rules are followed for both negative and positive numbers.  This is distinct to truncating a number, where no rounding of any kind takes place.

## Significant figures
This is similar to rounding, however rather than performing the process to a precision it is performed to a number of digits starting with the first non-zero digit.  To 3 significant digits:

* the number 12345 becomes 12300
* the number 12.345 becomes 12.3
* the number 0.0012345 becomes 0.00123
* the number 45678 becomes 45700

It may be necessary to insert trailing zeros to a number to bring it to the correct number of significant digits (since any zero after the first non-zero number is significant).  This would lead to 12.3 to 5 significant digits being 12.300.  The concept is similar to including leading zeros with a number to allow it to align with other larger numbers correctly; it is for presentation and clarity, and does not affect the value of the number.

## Recurring decimals
A recurrent decimal is one which can be expressed as a decimal of unending length but can be represented by a recurring string of digits.  For example, 1/3 is a recurring decimal as it can be expressed as 0.3 where the 3 is repeated infinitely.  The repeated digits may be longer than a single digit, or indeed not all of the digits given after the decimal place (but rather just the final one(s)).

Computer systems can have difficulty representing a recurring decimal, hence the need to round to a precision or truncate a number.  The number can also be represented as a fraction (two integers requiring division) if such precision is needed.  In the case of a non-recurring unending decimal (such as Π) then it must be rounded to a precision in order for a computer to be able to store or process it.

## Standard form
Standard form is a method for expressing very long numbers in a more compact or readable way.  It uses the notation of Xx10<sup>Y</sup>.  This is a fairly simple concept as it is just representing a number as a multiplication.  For example:

* 12345 can be represented as 12.345x10<sup>3</sup>
* 5000000 can be represented as 5x10<sup>6</sup>
* 0.000006 can be represented as 6x10<sup>-5</sup>
