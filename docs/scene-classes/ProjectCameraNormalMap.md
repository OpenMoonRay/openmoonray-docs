# ProjectCameraNormalMap

**SHADER**

Documentation for class ProjectCameraNormalMap



---

## <p style="color:blue;">General attributes</p>

## aspect_ratio_source

**Int** *enum*



- from texture = 0 (default)

- custom = 1





Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio




## custom_aspect_ratio

**Float** 


Default value : 1.0




a custom aspect ratio for the projected texture




## normal_encoding

**Int** *enum*



- [0,1] = 0 (default)

- [-1,1] = 1





Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]




## project_on_back_faces

**Bool** 


Default value : False




Toggles whether camera projections appear on back faces.




## projector

**Camera** 


Default value : None




the camera to project from




## texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## use_reference_space

**Bool** 


Default value : False




use reference space





