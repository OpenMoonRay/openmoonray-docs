---
title: TransformSpaceMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TransformSpaceMap
{%-include overview.html data=site.data.scene-classes.maps.TransformSpaceMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.gallery data=site.data.scene-classes.maps.TransformSpaceMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-comments">an alternate camera to use when transforming to/from 'camera' space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.camera.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.camera.links heading=4-%}
    </p>
    <h3>concatenate_instance_level_transforms</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">When true, instance level transforms below the specified one are concatenated otherwise only the selected level's transform is used</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.concatenate_instance_level_transforms.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.concatenate_instance_level_transforms.links heading=4-%}
    </p>
    <h3>from_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0 (default)
          | camera = 1
          | world = 2
          | screen = 3
          | object = 4
          | local tangent = 5
          | instance object transform = 6
          | instance level 0 = 7
          | instance level 1 = 8
          | instance level 2 = 9
          | instance level 3 = 10
          | instance level 4 = 11
      <p class="scene-class-comments">the space to transform from</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.from_space.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.from_space.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input value to transform</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.input.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.input.links heading=4-%}
    </p>
    <h3>input_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | point = 0
          | vector = 1 (default)
          | normal = 2
      <p class="scene-class-comments">the type of input value provided</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.input_type.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.input_type.links heading=4-%}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-comments">an alternate object to use when transforming to/from 'object' space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.object.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.object.links heading=4-%}
    </p>
    <h3>to_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0
          | camera = 1
          | world = 2 (default)
          | screen = 3
          | object = 4
          | local reference tangent = 5
          | instance level 0 = 6
          | instance level 1 = 7
          | instance level 2 = 8
          | instance level 3 = 9
          | instance level 4 = 10
          | instance object transform = 11
      <p class="scene-class-comments">the space to transform to</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.to_space.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.to_space.links heading=4-%}
    </p>
    <h3>use_custom_window_coordinates</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">used to apply non-uniform scaling to projection</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.use_custom_window_coordinates.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.use_custom_window_coordinates.links heading=4-%}
    </p>
    <h3>window_x_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">maximum projected x coordinate</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_x_max.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_x_max.links heading=4-%}
    </p>
    <h3>window_x_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -1.0
      <p class="scene-class-comments">minimum projected x coordinate</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_x_min.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_x_min.links heading=4-%}
    </p>
    <h3>window_y_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">maximum projected y coordinate</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_y_max.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_y_max.links heading=4-%}
    </p>
    <h3>window_y_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -1.0
      <p class="scene-class-comments">minimum projected y coordinate</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_y_min.images data=site.data.scene-classes.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.TransformSpaceMap.attributes.window_y_min.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.TransformSpaceMap-%}