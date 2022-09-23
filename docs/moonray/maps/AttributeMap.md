---
title: AttributeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# AttributeMap

**MAP SHADER**

Documentation for class AttributeMap



---

## <p style="color:blue;">Primitive Attribute attributes</p>

## primitive_attribute_name

**String** 


Default value : Cd




the name of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'




## primitive_attribute_type

**Int** *enum*



- float = 0

- vec2f = 1

- vec3f = 2

- rgb = 3 (default)

- int = 4





the type of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'






---

## <p style="color:blue;">General attributes</p>

## color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




input color - preferably a connected map




## default_value

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




default value to display when the requested attribute is not available




## map_type

**Int** *enum*



- primitive attribute = 0 (default)

- position = 1

- texture st = 2

- shading normal = 3

- geometric normal = 4

- dpds = 5

- dpdt = 6

- dnds = 7

- dndt = 8

- map color = 9

- hair surface P = 12

- hair surface N = 13

- hair surface st = 14

- hair closest surface st = 15

- id = 16

- velocity = 17

- acceleration = 18

- motionvec = 19





<p style="color:red;">Documentation for the attribute <b>map_type</b> needs to be written</p>




## warn_when_unavailable

**Bool** 


Default value : False




Whether or not to issue a warning when the requested attribute is unavailable





