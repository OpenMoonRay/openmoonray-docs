# ImageNormalMap

**SHADER**

Documentation for class ImageNormalMap



---

## <p style="color:blue;">UVs attributes</p>

## offset

**Vec2f** 


Default value : [ 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>offset</b> needs to be written</p>




## rotation_angle

**Float** 


Default value : 0.0




Rotation in degrees




## rotation_center

**Vec2f** 


Default value : [ 0.5, 0.5 ]




UV coordinate around which to rotate




## scale

**Vec2f** 


Default value : [ 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>scale</b> needs to be written</p>




## udim_files

**StringVector** 


Default value : []




<p style="color:red;">Documentation for the attribute <b>udim_files</b> needs to be written</p>




## udim_max_v

**Int** 


Default value : 10




udim maximum v value




## udim_values

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe299b02cf8>




<p style="color:red;">Documentation for the attribute <b>udim_values</b> needs to be written</p>






---

## <p style="color:blue;">General attributes</p>

## default_value

**Vec3f** 


Default value : [ 0, 0, 1 ]




default value to be used for missing udims when 'use_default_value_when_missing' is enabled




## input_texture_coordinates

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>




## normal_encoding

**Int** *enum*



- [0,1] = 0 (default)

- [-1,1] = 1





Most normal maps are encoded [0,1]. Only certain rare floating point normal maps are encoded [-1,1]




## tangent_space_normal_texture

**String** *filename*


Default value : 




filename that points to a tangent space normal texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## texture_coordinates

**Int** *enum*



- texture = 0 (default)

- input texture coordinates = 1





<p style="color:red;">Documentation for the attribute <b>texture_coordinates</b> needs to be written</p>




## use_default_value_when_missing

**Bool** 


Default value : False




Uses the 'default_value' for missing udims and does not report error




## wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture





