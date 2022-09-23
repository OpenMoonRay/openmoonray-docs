---
title: DebugMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DebugMap

**MAP SHADER**

Documentation for class DebugMap



---

## <p style="color:blue;">Normal attributes</p>

## input_normal_space

**Int** *enum*



- tangent = 0 (default)

- render = 1





Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections






---

## <p style="color:blue;">Primitive Attribute attributes</p>

## primitive_attribute_name

**String** 


Default value : surface_st




the name of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'




## primitive_attribute_type

**Int** *enum*



- float = 0

- vec2f = 1 (default)

- vec3f = 2

- rgb = 3





the type of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'






---

## <p style="color:blue;">General attributes</p>

## checkerboard

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>checkerboard</b> needs to be written</p>




## input_normal

**Vec3f** *bindable*


Default value : [ 0, 0, 1 ]




<p style="color:red;">Documentation for the attribute <b>input_normal</b> needs to be written</p>




## input_normal_dial

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>input_normal_dial</b> needs to be written</p>




## map_type

**Int** *enum*



- position = 0 (default)

- texture st = 1

- shading normal = 2

- geometric normal = 3

- dpds = 4

- dpdt = 5

- primitive attribute = 6





<p style="color:red;">Documentation for the attribute <b>map_type</b> needs to be written</p>





