---
title: TransformSpaceMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TransformSpaceMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.gallery data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-comments">An alternate camera to use when transforming to/from 'camera' space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.camera.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.camera.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.camera.links heading=4-%}
    </p>
    <h3>concatenate_instance_level_transforms</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">When true, instance level transforms below the specified one are concatenated otherwise only the selected level's transform is used</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.concatenate_instance_level_transforms.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.concatenate_instance_level_transforms.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.concatenate_instance_level_transforms.links heading=4-%}
    </p>
    <h3>from_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;local tangent&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;instance object transform&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;instance level 0&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;instance level 1&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;instance level 2&rdquo;<br>
          &nbsp;&nbsp;10 = &ldquo;instance level 3&rdquo;<br>
          &nbsp;&nbsp;11 = &ldquo;instance level 4&rdquo;<br>
      <p class="scene-class-comments">The space to transform from</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.from_space.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.from_space.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.from_space.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The input value to transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.input.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.input.links heading=4-%}
    </p>
    <h3>input_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;point&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;vector&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;normal&rdquo;<br>
      <p class="scene-class-comments">The type of input value provided</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.input_type.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.input_type.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.input_type.links heading=4-%}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      <br>
      default: None
      <p class="scene-class-comments">An alternate object to use when transforming to/from 'object' space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.object.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.object.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.object.links heading=4-%}
    </p>
    <h3>to_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo; (default)<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;local reference tangent&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;instance level 0&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;instance level 1&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;instance level 2&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;instance level 3&rdquo;<br>
          &nbsp;&nbsp;10 = &ldquo;instance level 4&rdquo;<br>
          &nbsp;&nbsp;11 = &ldquo;instance object transform&rdquo;<br>
      <p class="scene-class-comments">The space to transform to</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.to_space.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.to_space.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.to_space.links heading=4-%}
    </p>
    <h3>use_custom_window_coordinates</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Used to apply non-uniform scaling to projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.use_custom_window_coordinates.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.use_custom_window_coordinates.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.use_custom_window_coordinates.links heading=4-%}
    </p>
    <h3>window_x_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Maximum projected x coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_x_max.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_x_max.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_x_max.links heading=4-%}
    </p>
    <h3>window_x_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: -1.0
      <p class="scene-class-comments">Minimum projected x coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_x_min.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_x_min.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_x_min.links heading=4-%}
    </p>
    <h3>window_y_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Maximum projected y coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_y_max.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_y_max.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_y_max.links heading=4-%}
    </p>
    <h3>window_y_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: -1.0
      <p class="scene-class-comments">Minimum projected y coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_y_min.images data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_y_min.videos data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.TransformSpaceMap.attributes.window_y_min.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.TransformSpaceMap-%}