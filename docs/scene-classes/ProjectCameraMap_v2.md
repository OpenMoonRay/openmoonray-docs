# ProjectCameraMap_v2

**MAP SHADER**

Documentation for class ProjectCameraMap_v2



---

## <p style="color:blue;">General attributes</p>

## alpha_only

**Bool** 


Default value : False




When enabled, the alpha channel is returned instead of RGB




## aspect_ratio_source

**Int** *enum*



- from texture = 0 (default)

- custom = 1





Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio




## black_outside_projection

**Bool** 


Default value : True




Toggles whether projections appear outside the 0-1 uv range of the projector




## custom_aspect_ratio

**Float** 


Default value : 1.0




a custom aspect ratio for the projected texture




## gamma

**Int** *enum*



- off = 0

- on = 1

- auto = 2 (default)





Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images




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




## unpremultiply

**Bool** 


Default value : False




When enabled, the rgb channels are divided by the alpha channel (where non-zero)




## use_reference_space

**Bool** 


Default value : False




use reference space





