---
layout: default
permalink: /topic/numeric/bases
title: Bases
---

All numbers must be specified in a base.  The most commonly used base is base 10, also known as deanery or decimal.  Other common bases include base 2 (binary), 16 (hexadecimal) and 64 (Base64).

## Deanery
This is the system most often used by people.  All digits in a number are from the range 0, 1, ..., 9, and each digit increases/decreases by a magnitude of 10.

|Place Power|$10^3$|$10^2$|$10^1$|$10^0$|$10^-1$|$10^-2$>|
|----------:|------|------|------|------|-------|--------|
|Place Value|$1000$|$1000$|$10$  |$1$   |$1/10$ |$1/100$ |
|Example    |8|7|4|2.|8|3|

## Binary
This system is used to store data in computer systems as it represents all digits in base 2 (0 or 1).  Each digit therefore stores in an increment of a power of 2 (in deanery).

|Place Power|$2^3$|$2^2$|$2^1$|$2^0$|$2^-1$|$2^-2$|
|----------:|-----|-----|-----|-----|------|------|
|Place Value|$8$  |$4$  |$2$  |$1$  |$1/2$ |$1/4$ |
|Example    |1|0|1|1.|0|1|

Different storage systems will store different number representations in different ways (hence the different in Integer and Float data types).  Therefore it is important to note that not all binary representations of a number will be the same (unlike with a deanery representation).

### Terms
Some terms are used to refer to different parts of a binary number.

|Term|Meaning|
|----|-------|
|Bit|A binary digit (0 or 1)|
|Nibble|4 bits|
|Byte|8 bits|

The standard kilo-, mega-, and giga- terms can be applied to refer to magnitude increases as per standard SI units.  It is worth noting that these terms are often however used to represent a binary based increase (eg. for kilobyte, representing 1024 bytes rather than the SI unit 1000 bytes), despite this being technically incorrect. For binary increases the official units are kibi-, mebi-, gibi-, etc.  These are yet to enter common use and the SI names are often used for binary magnitudes.  [ISO/IEC 80000](https://en.wikipedia.org/wiki/ISO/IEC_80000#Information_science_and_technology) Clause 4 defines the binary terms.

### Deanery to binary
The simplest way to perform the conversion is to write down the binary spaces upto the size of the deanery number, and then subtract the values (and represent them as 1 if it can be subtracted without going negative, otherwise as a 0) until the number is fully represented.

### Binary to deanery
Conversion from binary to deanery can be done by writing a power value above all of the binary digits and then summing together all which are written above a 1.

## Hexadecimal
This system works in base 16, which allows large numbers to be expressed in a very small number of characters.  The symbols used to represent these numbers need to go beyond the standard 0, 1, ..., 9 range, and extend to use A, B, ..., F as well.  This gives a full alphabet of 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.  Whilst this is the most common hexadecimal (hex) alphabet there are alternate alphabets used on some occasions.

|Place Power|$16^3$|$16^2$|$16^1$|$16^0$|$16^1$|$16^2$ |
|----------:|------|------|------|------|------|-------|
|Place Value|$4096$|$256$ |$16$  |$1$   |$1/16$|$1/256$|
|Example    |7|F|2|C.|B|4|

## Base64
Base64 uses a much wider alphabet range which includes A, ..., Z, a, ..., z, 0, ..., 9, +, /.  The final two characters are often changed between implementations.  Whilst it can be used to represent any binary number, it's main uses are in obfuscation and encoding binary data into an easy to transmit format.

Due to computer storage functioning in binary, encoding and representation schemes often use bases that are multiples of 2.
