# ToonMap

**MAP SHADER**

Documentation for class ToonMap



---

## <p style="color:blue;">General attributes</p>

## crease_color

**Rgb** *bindable*


Default value : [ 1, 0, 0 ]




Creases are sharp edges like corners in the geometry.




## crease_scale

**Float** *bindable*


Default value : 1.0




This attribute controls the thickness of creases.




## crease_threshold

**Float** *bindable*


Default value : 45.0




This attribute sets the threshold angle (in degree units) to draw creases. The more the threshold angle is, the less the creases are traced.




## fill_color

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>fill_color</b> needs to be written</p>




## mode

**Int** *enum*



- outline = 0

- crease = 1

- both = 2 (default)





<p style="color:red;">Documentation for the attribute <b>mode</b> needs to be written</p>




## outline_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Outlines are silhouettes of the geometry




## outline_scale

**Float** *bindable*


Default value : 1.0




This attribute controls the thickness of outlines.




## outline_threshold

**Float** *bindable*


Default value : 0.0




In most cases, the shader would trace an outline of a model well when this threshold is zero.





