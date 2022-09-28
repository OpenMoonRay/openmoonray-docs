---
title: OpMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# OpMap
**MAP SHADER**
---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## clamp
**Bool** 

Default value : False

if on, the result is clamped to 0 - 1


## op1
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

the first operand


## op1_factor
**Float** *bindable*

Default value : 1.0

a scalar multiplier on op1


## op2
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

the second operand


## op2_factor
**Float** *bindable*

Default value : 1.0

a scalar multiplier on op2


## operation
**Int** *enum*

- add = 0 (default)

- subtract = 1

- multiply = 2

- divide = 3

- maximum = 4

- minimum = 5

- power = 6

- cross = 7

- dot = 8

- invert op1 = 9

- normalize op1 = 10

- op1 = 11

- op2 = 12

- overlay = 13

- screen = 14

- abs = 15

- ceil = 16

- floor = 17

- modulo = 18

- fraction = 19

- length = 20

- sine = 21

- cosine = 22

- round = 23

- acos = 24

- less_than = 25

- less_than_or_equal = 26

- greater_than = 27

- greater_than_or_equal = 28

- equal = 29

- not equal = 30

- and = 31

- or = 32

- not = 33

- xor = 34

- bit_shift_left = 35

- bit_shift_right = 36

- bitwise_and = 37

- bitwise_or = 38


<p class="scene-class-attr-missing">Documentation for the attribute <b>operation</b> needs to be written</p>


</details>

