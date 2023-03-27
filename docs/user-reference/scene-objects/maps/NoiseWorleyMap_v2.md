---
title: NoiseWorleyMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NoiseWorleyMap_v2
{%-include overview.html data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.gallery data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Adjustment attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">Bias of interpolation from color A to color B</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.bias.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.bias.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.bias.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">Gain of interpolation from color A to color B</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.gain.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.gain.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.gain.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the final pattern</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.invert.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.invert.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.invert.links heading=4-%}
    </p>
    <h3>point_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">For points output mode, relative radius of points</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.point_size.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.point_size.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.point_size.links heading=4-%}
    </p>
    <h3>remap</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br>
      default: [ 0, 1 ]
      <p class="scene-class-comments">Allows mapping the distances from the specified min/max range into the 0..1 range</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.remap.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.remap.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.remap.links heading=4-%}
    </p>
    <h3>smoothstep</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br>
      default: [ 0, 1 ]
      <p class="scene-class-comments">min/max values between which the smoothstep will interpolate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.smoothstep.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.smoothstep.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.smoothstep.links heading=4-%}
    </p>
    <h3>use_smoothstep</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Put the noise value through a smoothstep function defined by min/max</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.use_smoothstep.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.use_smoothstep.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.use_smoothstep.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>F1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Influence of F1 (the closest feature point)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F1.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F1.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F1.links heading=4-%}
    </p>
    <h3>F2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Influence of F2 (the second closest feature point)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F2.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F2.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F2.links heading=4-%}
    </p>
    <h3>F3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Influence of F3 (the third closest feature point)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F3.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F3.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F3.links heading=4-%}
    </p>
    <h3>F4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Influence of F4 (the fourth closest feature point)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F4.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F4.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.F4.links heading=4-%}
    </p>
    <h3>cell_id</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;f1&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;f2&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;f3&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;f4&rdquo;<br>
      <p class="scene-class-comments">Which of the distances determines the cell id</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.cell_id.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.cell_id.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.cell_id.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Output attributes</summary>
  <p>
    <h3>distance_method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;linear&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;linear squared&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;manhattan&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;chebyshev&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;quadratic&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;minkowski&rdquo;<br>
      <p class="scene-class-comments">Metric for calculating distance to feature points which controls the shape of the falloff when output mode is distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.distance_method.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.distance_method.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.distance_method.links heading=4-%}
    </p>
    <h3>minkowski_number</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 3.0
      <p class="scene-class-comments">Exponent on distances when distance method is set to Minkowski</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.minkowski_number.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.minkowski_number.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.minkowski_number.links heading=4-%}
    </p>
    <h3>output_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;distance&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;gradient&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;cell id&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;cell edges&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;points&rdquo;<br>
      <p class="scene-class-comments">Method by which the shader outputs a color.  Distance uses F1..F4 interpolated between color A and color B, gradient outputs the gradient of the noise, and cell ID outputs a random color for each cell</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.output_mode.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.output_mode.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.output_mode.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Space attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-comments">Camera used to define camera and screen space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.camera.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.camera.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.camera.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">User specified UVs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.input_texture_coordinates.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>object_space</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      <br>
      default: None
      <p class="scene-class-comments">Directly connect object to use that object's space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.object_space.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.object_space.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.object_space.links heading=4-%}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo; (default)<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;texture&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;input texture coordinates&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;hair_surface_uv&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;hair_closest_surface_uv&rdquo;<br>
      <p class="scene-class-comments">The space to calculate the noise in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.space.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.space.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.space.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Transform attributes</summary>
  <p>
    <h3>rotation</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotates the noise in space based on the specified rotation order</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.rotation.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.rotation.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.rotation.links heading=4-%}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;xyz&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;xzy&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;yxz&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;yzx&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;zxy&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;zyx&rdquo;<br>
      <p class="scene-class-comments">Order in which to apply the euler rotations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.rotation_order.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.rotation_order.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.rotation_order.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Vector to scale the noise non-proportionally</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.scale.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.scale.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.scale.links heading=4-%}
    </p>
    <h3>transformation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;srt&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;str&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;rst&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;rts&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;tsr&rdquo; (default)<br>
          &nbsp;&nbsp;5 = &ldquo;trs&rdquo;<br>
      <p class="scene-class-comments">Order in which to apply the translation, rotation, and frequency</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.transformation_order.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.transformation_order.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.transformation_order.links heading=4-%}
    </p>
    <h3>translation</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Translation of the noise in space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.translation.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.translation.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.translation.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The interpolated color value at distance equals zero</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.color_A.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.color_A.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The interpolated color value at distance equals one</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.color_B.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.color_B.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.color_B.links heading=4-%}
    </p>
    <h3>frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier for the frequency vector</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.frequency.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.frequency.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.frequency.links heading=4-%}
    </p>
    <h3>jitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the distortion of the cells</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.jitter.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.jitter.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.jitter.links heading=4-%}
    </p>
    <h3>max_level</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Number of octaves of noise to add together for the final result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.max_level.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.max_level.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.max_level.links heading=4-%}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The seed for the random number generator</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.seed.images data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.seed.videos data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2.attributes.seed.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.NoiseWorleyMap_v2-%}