---
title: AttributeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# AttributeMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Primitive Attribute attributes</summary>

<h2>primitive_attribute_name</h2>
<b>String</b>  

Default value : Cd  

the name of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'


<h2>primitive_attribute_type</h2>
<b>Int</b>  *enum*

- float = 0

- vec2f = 1

- vec3f = 2

- rgb = 3 (default)

- int = 4


the type of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

input color - preferably a connected map


<h2>default_value</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

default value to display when the requested attribute is not available


<h2>map_type</h2>
<b>Int</b>  *enum*

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


<p class="scene-class-attr-missing">Documentation for the attribute <b>map_type</b> needs to be written</p>


<h2>warn_when_unavailable</h2>
<b>Bool</b>  

Default value : False  

Whether or not to issue a warning when the requested attribute is unavailable


</details>

