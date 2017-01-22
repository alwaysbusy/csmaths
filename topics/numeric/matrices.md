---
title: Matrices
layout: default
permalink: /topic/numeric/matrices
---

## Preliminaries
Matrices (singular - matrix) are a rectangular array used to represent numbers.  Below is an example of a 2 x 3 matrix, with 2 rows and 3 columns.

$((1,2,3),(4,5,6))$

A matrix may be as small as 1 x 1.  A 1 x *y* matrix is referred to as a row matrix, while a *y* x 1 matrix is a column matrix.  Whilst a matrix is very similar to a vector, they are different as a vector also has a directional component.  When dealing with either a row or column matrix it is important not to use the terms matrix and vector interchangeably.

To make referring to matrix locations easier locations will be referred to as $bbA = ((a_11,a_12,a_13),(a_21,a_22,a_23))$, where a bold letter is used to refer to a matrix instead of a number.

## Matrix Arithmetic
Whilst the rules surrounding addition and subtraction of matrices are as you may expect, multiplication is more involved and division is not possible.

### Addition
Matrix required both matrices to be the same size.  The numbers in each location are then added together, so that $((a_11,a_12,a_13),(a_21,a_22,a_23))+((b_11,b_12,b_13),(b_21,b_22,b_23))=((a_11+b_11,a_12+b_12,a_13+b_13),(a_21+b_21,a_22+b_22,a_23+b_23))$.  From the general form it can be seen that addition is commutative.

### Subtraction
Matrix subtraction, like addition, is location based.  This is generalised as $((a_11,a_12,a_13),(a_21,a_22,a_23))-((b_11,b_12,b_13),(b_21,b_22,b_23))=((a_11-b_11,a_12-b_12,a_13-b_13),(a_21-b_21,a_22-b_22,a_23-b_23))$.

### Scalar Multiplication
If multiplying the matrix by a single number (a scalar) then each number within the matrix is multiplied by the number.  This gives $nxx((a_11,a_12,a_13),(a_21,a_22,a_23))=((n\*a_11,n\*a_12,n\*a_13),(n\*a_21,n\*a_22,n\*a_23))$.  This is, as with traditional multiplication, a commutative operation.

### Matrix Multiplication
Two matrices may only by multiplied when the number of columns in the first matrix is equal to the number of rows in the second (*X* x *Y* and *Y* x *Z*).  The resulting matrix will have the same number of rows as the first and the same number of columns as the second (*X* x *Z*).  To make each location in the final matrix each location in each row of the first matric will be multiplied by the value in the column from the second, and added together.

For a 2 x 3 and 3 x 2 matrix: $((a_11,a_12,a_13),(a_21,a_22,a_23))\*((b_11,b_12),(b_21,b_22),(b_31,b_32))=((a_11xxb_11 + a_12xxb_21 + a_13xxb_31, a_11xxb_12 + a_12xxb_22 + a_13xxb_32),(a_21xxb_11 + a_22xxb_21 + a_23xxb_31, a_21xxb_12 + a_22xxb_22 + a_23xxb_32))$

To make remembering this process easier, note the numbers given to each location used to calculate each value.

For a 3 x 2 and 2 x 3 matrix: $((b_11,b_12),(b_21,b_22),(b_31,b_32))\*((a_11,a_12,a_13),(a_21,a_22,a_23))=((b_11xxa_11 + b_12xxa_21, b_11xxa_12 + b_12xxa_22, b_11xxa_13 + b_12xxa_23),(b_21xxa_11 + b_22xxa_21, b_21xxa_12 + b_22xxa_22, b_21xxa_13 + b_22xxa_23),(b_31xxa_11 + b_32xxa_21, b_31xxa_12 + b_32xxa_22, b_31xxa_13 + b_32xxa_23))$

It can be seen that matrix multiplication is not commutative, and so the order of the matrices is important.  This is not only to ensure multiplication is possible but also may impact on the result.

## Transpose
A transpose of a matrix interchanges the rows and columns of a matrix. This would move the first column to be the first row, and the second columns to be the second row etc.  A transpose operation is denoted as **A**<sup>T</sup>.

$((a_11,a_12,a_13),(a_21,a_22,a_23))^T = ((a_11,a_21),(a_12,a_22),(a_13,a_23))$

## The Identity Matrix
The Identity Matrix (also known as the unit matrix) is a matrix which contains only 1s on the leading diagonal.  The matrix will be of size *m* x *m* to fit the situation it is used in.

$bbI = ((1,0,0),(0,1,0),(0,0,1))$

## Determinant
Determinants can only be calculated for a square matrix.  There are different methods for a 2x2 matrix, and larger ones.

The determinant of a matrix and it's transpose will always be the same.  If the determinant is equal to zero the matrix is said to be singular.

### For a 2x2 matrix
For the 2x2 matrix $bbA = ((a,b),(c,d))$ the determinant is given as $\|bbA\| = det bbA = |(a,b),(c,d)| = ad-bc$.

### For a larger matrix
For larger matrices the Cofactors of each location need to be found before the determinant can be calculated.  Cofactors are the determinant of the minor matrices at a location along with the place sign for that point in a matrix.  Place signs are given to locations by alternating + and - along odd numbered rows, and - and + along even numbered rows.

The generic place sign matrix is $((+,-,+,...),(-,+,-,...),(+,-,+,...),(...,...,...,...))$.

The minor is calculated as the matrix when both the row and column of the location in question are excluded.  For the matrix $((a_11,a_12,a_13),(a_21,a_22,a_23),(a_31,a_32,a_33))$ the minor of *a*<sub>21</sub> is $((a_12,a_13),(a_32,a_33))$.  It's cofactor would be $-((a_12,a_13),(a_32,a_33))$.

The determinant is made up of the sum of the value of each location and it's cofactor.

For a 3x3 matrix the determinant would be calculated as $\|(a,b,c),(d,e,f),(g,h,i)\| = a\|(e,f),(h,i)\| + -b\|(d,f),(g,i)\| + c\|(d,e),(g,h)\| + -d\|(b,c),(h,i)\| + e\|(a,c),(g,i)\| + -f\|(a,b),(g,h)\| + g\|(b,c),(e,f)\| + -h\|(a,c),(d,f)\| + i\|(a,b),(d,e)\|$
$= a(ei-fh) - b(di-fg) + c(dh-eg) - d(bi-ch) + e(ai-cg) - f(ah-bg) + g(bf-ce) - h(af-cd) + i(ae-bd)$

The cofactors can also be used to make a cofactor matrix, the transpose of which is referred to as the Adjoin of the original square matrix.
