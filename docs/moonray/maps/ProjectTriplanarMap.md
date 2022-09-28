---
title: ProjectTriplanarMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ProjectTriplanarMap

**MAP SHADER**

Documentation for class ProjectTriplanarMap



---

## <p class="scene-class-attr-group">Negative X Modifiers attributes</p>

## negative_x_invert_s

**Bool** 


Default value : False




Flip in the s direction (horizontal)




## negative_x_invert_t

**Bool** 


Default value : False




Flip in the t direction (vertical)




## negative_x_offset

**Vec2f** 


Default value : [ 0, 0 ]




2D offset




## negative_x_rotation

**Float** 


Default value : 0.0




2D rotation amount




## negative_x_rotation_center

**Vec2f** 


Default value : [ 0, 0 ]




2D rotation center




## negative_x_scale

**Vec2f** 


Default value : [ 1, 1 ]




2D scale




## negative_x_swap_st

**Bool** 


Default value : False




Swap the s and t directions.   Same as a 90 degree rotation




## negative_x_wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture






---

## <p class="scene-class-attr-group">Negative Y Modifiers attributes</p>

## negative_y_invert_s

**Bool** 


Default value : False




Flip in the s direction (horizontal)




## negative_y_invert_t

**Bool** 


Default value : False




Flip in the t direction (vertical)




## negative_y_offset

**Vec2f** 


Default value : [ 0, 0 ]




2D offset




## negative_y_rotation

**Float** 


Default value : 0.0




2D rotation amount




## negative_y_rotation_center

**Vec2f** 


Default value : [ 0, 0 ]




2D rotation center




## negative_y_scale

**Vec2f** 


Default value : [ 1, 1 ]




2D scale




## negative_y_swap_st

**Bool** 


Default value : False




Swap the s and t directions.   Same as a 90 degree rotation




## negative_y_wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture






---

## <p class="scene-class-attr-group">Negative Z Modifiers attributes</p>

## negative_z_invert_s

**Bool** 


Default value : False




Flip in the s direction (horizontal)




## negative_z_invert_t

**Bool** 


Default value : False




Flip in the t direction (vertical)




## negative_z_offset

**Vec2f** 


Default value : [ 0, 0 ]




2D offset




## negative_z_rotation

**Float** 


Default value : 0.0




2D rotation amount




## negative_z_rotation_center

**Vec2f** 


Default value : [ 0, 0 ]




2D rotation center




## negative_z_scale

**Vec2f** 


Default value : [ 1, 1 ]




2D scale




## negative_z_swap_st

**Bool** 


Default value : False




Swap the s and t directions.   Same as a 90 degree rotation




## negative_z_wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture






---

## <p class="scene-class-attr-group">Positive X Modifiers attributes</p>

## positive_x_invert_s

**Bool** 


Default value : False




Flip in the s direction (horizontal)




## positive_x_invert_t

**Bool** 


Default value : False




Flip in the t direction (vertical)




## positive_x_offset

**Vec2f** 


Default value : [ 0, 0 ]




2D offset




## positive_x_rotation

**Float** 


Default value : 0.0




2D rotation amount




## positive_x_rotation_center

**Vec2f** 


Default value : [ 0, 0 ]




2D rotation center




## positive_x_scale

**Vec2f** 


Default value : [ 1, 1 ]




2D scale




## positive_x_swap_st

**Bool** 


Default value : False




Swap the s and t directions.   Same as a 90 degree rotation




## positive_x_wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture






---

## <p class="scene-class-attr-group">Positive Y Modifiers attributes</p>

## positive_y_invert_s

**Bool** 


Default value : False




Flip in the s direction (horizontal)




## positive_y_invert_t

**Bool** 


Default value : False




Flip in the t direction (vertical)




## positive_y_offset

**Vec2f** 


Default value : [ 0, 0 ]




2D offset




## positive_y_rotation

**Float** 


Default value : 0.0




2D rotation amount




## positive_y_rotation_center

**Vec2f** 


Default value : [ 0, 0 ]




2D rotation center




## positive_y_scale

**Vec2f** 


Default value : [ 1, 1 ]




2D scale




## positive_y_swap_st

**Bool** 


Default value : False




Swap the s and t directions.   Same as a 90 degree rotation




## positive_y_wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture






---

## <p class="scene-class-attr-group">Positive Z Modifiers attributes</p>

## positive_z_invert_s

**Bool** 


Default value : False




Flip in the s direction (horizontal)




## positive_z_invert_t

**Bool** 


Default value : False




Flip in the t direction (vertical)




## positive_z_offset

**Vec2f** 


Default value : [ 0, 0 ]




2D offset




## positive_z_rotation

**Float** 


Default value : 0.0




2D rotation amount




## positive_z_rotation_center

**Vec2f** 


Default value : [ 0, 0 ]




2D rotation center




## positive_z_scale

**Vec2f** 


Default value : [ 1, 1 ]




2D scale




## positive_z_swap_st

**Bool** 


Default value : False




Swap the s and t directions.   Same as a 90 degree rotation




## positive_z_wrap_around

**Bool** 


Default value : True




Controls whether to repeat (true) or clamp (false) the texture






---

## <p class="scene-class-attr-group">General attributes</p>

## TRS_order

**Int** *enum*



- Scale Rot Trans = 0 (default)

- Scale Trans Rot = 1

- Rot Scale Trans = 2

- Rot Trans Scale = 3

- Trans Scale Rot = 4

- Trans Rot Scale = 5





Order in which to apply transformations




## debug_mode

**Int** *enum*



- none = 0 (default)

- dSdx/dSdy = 1

- dTdx/dTdy = 2





for testing




## gamma

**Int** *enum*



- off = 0

- on = 1

- auto = 2 (default)





Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images




## negative_x_active

**Bool** 


Default value : True




Turns this direction on/off.  Output is black if off.




## negative_x_texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## negative_y_active

**Bool** 


Default value : True




Turns this direction on/off.  Output is black if off.




## negative_y_texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## negative_z_active

**Bool** 


Default value : True




Turns this direction on/off.  Output is black if off.




## negative_z_texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## number_of_textures

**Int** *enum*



- one = 1

- three = 3 (default)

- six = 6





Controls the number of active textures.   If set to 'one', only the 'pos x' texture settings will be used for all sides.   If set to 'three' the pos x, pos y, and pos z settings will be used for their respective negative sides.   If set to 'six', each side has independent controls and texture.




## positive_x_active

**Bool** 


Default value : True




Turns this direction on/off.  Output is black if off.




## positive_x_texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## positive_y_active

**Bool** 


Default value : True




Turns this direction on/off.  Output is black if off.




## positive_y_texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## positive_z_active

**Bool** 


Default value : True




Turns this direction on/off.  Output is black if off.




## positive_z_texture

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).




## projection_matrix

**Mat4d** 


Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]




the transform to use for projection




## projection_mode

**Int** *enum*



- projector = 0 (default)

- projection_matrix = 1

- TRS = 2





Source parameters to use for projection transform




## projector

**Node** 


Default value : None




the object whose transform to use for projection




## random_seed

**Int** 


Default value : 8241




Seed for randomizing orientation, offset, and flip




## randomize_flip

**Bool** 


Default value : False




Rnd flipping in S or T for each active texture




## randomize_offset

**Bool** 


Default value : False




Rnd offset in S or T for each active texture




## randomize_rotation

**Bool** 


Default value : False




Rnd 2d rotation of each active texture




## rotate

**Vec3d** 


Default value : [ 0, 0, 0 ]




Rotation of the projection transform




## rotation_order

**Int** *enum*



- xyz = 0 (default)

- xzy = 1

- yxz = 2

- yzx = 3

- zxy = 4

- zyx = 5





Order in which to apply rotation transformations




## scale

**Vec3d** 


Default value : [ 1, 1, 1 ]




Scale of the projection transform




## transition_width

**Float** 


Default value : 0.5




Controls blending of per-axis projections.   Valid range is 0.0 (no blending) to 1.0 (max blending)




## translate

**Vec3d** 


Default value : [ 0, 0, 0 ]




Tranlation of the projection transform




## use_reference_space

**Bool** 


Default value : False




Project onto reference positions ('ref_P') and normals ('ref_N')





