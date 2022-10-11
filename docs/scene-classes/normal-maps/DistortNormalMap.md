---
title: DistortNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DistortNormalMap
---
<div class="scene-class">
<details open>
  <summary>Space attributes</summary>
  <p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
    </p>
    <h3>noise_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | world = 2
          | object = 4 (default)
          | reference = 5
          | texture = 6
          | input texture coordinates = 7
          | hair_surface_uv = 8
          | hair_closest_surface_uv = 9
      <p class="scene-class-comments">The space to calculate the noise in</p>
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>amplitude_U</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">controls amplitude of U distortion</p>
    </p>
    <h3>amplitude_V</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">controls amplitude of V distortion</p>
    </p>
    <h3>frequency_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">controls noise frequency for U distortion</p>
    </p>
    <h3>frequency_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">controls noise frequency for V distortion</p>
    </p>
    <h3>input_U</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for distortion</p>
    </p>
    <h3>input_V</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for distortion</p>
    </p>
    <h3>input_normals</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">optional input to distort. if not connected, use geom normals</p>
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">the seed for the noise generation</p>
    </p>
    <h3>use_input_vectors</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
    </p>
  </p>
</details>
</div>