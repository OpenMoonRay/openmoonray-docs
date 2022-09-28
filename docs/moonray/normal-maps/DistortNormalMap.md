---
title: DistortNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DistortNormalMap

**SHADER**

Documentation for class DistortNormalMap



---

## <p class="scene-class-attr-group">Space attributes</p>

## input_texture_coordinates

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>




## noise_space

**Int** *enum*



- world = 2

- object = 4 (default)

- reference = 5

- texture = 6

- input texture coordinates = 7

- hair_surface_uv = 8

- hair_closest_surface_uv = 9





The space to calculate the noise in






---

## <p class="scene-class-attr-group">General attributes</p>

## amplitude_U

**Float** 


Default value : 1.0




controls amplitude of U distortion




## amplitude_V

**Float** 


Default value : 1.0




controls amplitude of V distortion




## frequency_U

**Vec3f** 


Default value : [ 1, 1, 1 ]




controls noise frequency for U distortion




## frequency_V

**Vec3f** 


Default value : [ 1, 1, 1 ]




controls noise frequency for V distortion




## input_U

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




input U / tangent for distortion




## input_V

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




input V / bitangent for distortion




## input_normals

**33554432** 


Default value : None




optional input to distort. if not connected, use geom normals




## seed

**Int** 


Default value : 0




the seed for the noise generation




## use_input_vectors

**Bool** 


Default value : False




when checked, use input_U and V. otherwise use geometry dPds/t





