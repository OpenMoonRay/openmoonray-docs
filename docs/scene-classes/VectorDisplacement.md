# VectorDisplacement

**ROOTSHADER SHADER DISPLACEMENT**

Documentation for class VectorDisplacement



---

## <p style="color:blue;">General attributes</p>

## bound_padding

**Float** 


Default value : 0.0




bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.




## factor

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>factor</b> needs to be written</p>




## source_space

**Int** *enum*



- tangent = 0 (default)

- object = 1





The space that the map bound to the vector parameter is in




## tangent_space_style

**Int** *enum*



- tnb = 0 (default)

- tbn = 1





Controls how RGB maps to Tangent, Normal, and Bi-Normal




## vector

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>vector</b> needs to be written</p>





