# ImageMap

**MAP SHADER**

Documentation for class ImageMap



---

## <p style="color:blue;">Blur attributes</p>

## blur

**Float** *bindable*


Default value : 0.0




This parameter is deprecated, do not use!   Number of pixels to blur the image




## mip_bias

**Float** *bindable*


Default value : 0.0




Amount to scale derivatives which controls mipmap selection




## num_blur_samples

**Int** 


Default value : 3




This parameter is deprecated, do not use!  Number of internal samples for blur.   Higher values increase quality






---

## <p style="color:blue;">Color Correction attributes</p>

## TMI

**Vec3f** 


Default value : [ 0, 0, 0 ]




T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 




## TMI_control_enabled

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>TMI_control_enabled</b> needs to be written</p>




## contrast

**Rgb** 


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>contrast</b> needs to be written</p>




## contrast_enabled

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>contrast_enabled</b> needs to be written</p>




## gain

**Rgb** 


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>gain</b> needs to be written</p>




## gain_offset_enabled

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>gain_offset_enabled</b> needs to be written</p>




## gamma_adjust

**Rgb** 


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>gamma_adjust</b> needs to be written</p>




## gamma_enabled

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>gamma_enabled</b> needs to be written</p>




## offset_adjust

**Rgb** 


Default value : [ 0, 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>offset_adjust</b> needs to be written</p>




## saturation

**Rgb** 


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>saturation</b> needs to be written</p>




## saturation_enabled

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>saturation_enabled</b> needs to be written</p>






---

## <p style="color:blue;">General attributes</p>

## alpha_only

**Bool** 


Default value : False




If true, the alpha channel of the texture will be placed in the rgb channels.  If the texture has no alpha channel, 1.0 is used, and the resulting texture lookup is then always white.




## default_color

**Rgb** 


Default value : [ 0, 1, 0 ]




default color to be used for missing udims when 'use default color when missing' is enabled




## gamma

**Int** *enum*



- off = 0

- on = 1

- auto = 2 (default)





<p style="color:red;">Documentation for the attribute <b>gamma</b> needs to be written</p>




## input_texture_coordinates

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>




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




## texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '<UDIM>', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.




## texture_coordinates

**Int** *enum*



- texture = 0 (default)

- hair surface = 1

- input texture coordinates = 2

- hair closest surface = 3





<p style="color:red;">Documentation for the attribute <b>texture_coordinates</b> needs to be written</p>




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


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe299b02b18>




<p style="color:red;">Documentation for the attribute <b>udim_values</b> needs to be written</p>




## use_default_color_when_missing

**Bool** 


Default value : False




Uses the 'default color' for missing udims and does not report error




## wrap_around

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>wrap_around</b> needs to be written</p>





