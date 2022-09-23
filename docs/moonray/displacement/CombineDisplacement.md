---
title: CombineDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# CombineDisplacement

**ROOTSHADER SHADER DISPLACEMENT**

Documentation for class CombineDisplacement



---

## <p style="color:blue;">General attributes</p>

## bound_padding

**Float** 


Default value : 0.0




bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.




## input_1

**Displacement** 


Default value : None




Displacement object 1




## input_2

**Displacement** 


Default value : None




Displacement object 2




## operation

**Int** *enum*



- add = 0 (default)

- max magnitude = 1

- min magnitude = 2





<p style="color:red;">Documentation for the attribute <b>operation</b> needs to be written</p>




## scale_1

**Float** *bindable*


Default value : 1.0




Scale of input 1




## scale_2

**Float** *bindable*


Default value : 1.0




Scale of input 2





