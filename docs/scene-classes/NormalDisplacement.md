# NormalDisplacement

**ROOTSHADER SHADER DISPLACEMENT**

Documentation for class NormalDisplacement



---

## <p style="color:blue;">General attributes</p>

## bound_padding

**Float** 


Default value : 0.0




bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.




## height

**Float** *bindable*


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>height</b> needs to be written</p>




## height_multiplier

**Float** *bindable*


Default value : 1.0




Multiply the computed (post zero-value) height with this factor.




## zero_value

**Float** 


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>zero_value</b> needs to be written</p>





