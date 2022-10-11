---
title: ImageDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageDisplayFilter
---
<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>display_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | stretch = 0 (default)
          | fit_horizontal = 1
          | fit_vertical = 2
          | fit_by_smallest_dimension = 3
          | fit_by_largest_dimension = 4
          | no_scale = 5
      <p class="scene-class-no-doc">No documentation available</p>
    </p>
    <h3>image_path</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">file path to the .exr we want to fit to the plane</p>
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Input buffer</p>
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
    </p>
  </p>
</details>
</div>