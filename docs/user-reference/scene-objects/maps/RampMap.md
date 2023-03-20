---
title: RampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RampMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.RampMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.gallery data=site.data.user-reference.scene-objects.maps.RampMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Additional properties attributes</summary>
  <p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b><br/> <i>bindable</i><br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Bind custom UV coordinates</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>uv_repeat</h3>
    <p class="scene-class-type">
      <b>Vec2f</b><br/>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Number of times to repeat the ramp pattern</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.uv_repeat.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.uv_repeat.links heading=4-%}
    </p>
    <h3>uv_wave</h3>
    <p class="scene-class-type">
      <b>Vec2f</b><br/>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Creates waves which perturb the ramp pattern</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.uv_wave.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.uv_wave.links heading=4-%}
    </p>
    <h3>wrap_type</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=wrap(default)<br/>
          1=clamp<br/>
      <p class="scene-class-comments">Whether to repeat the ramp or maintain the color at each edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.wrap_type.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.wrap_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp Knot attributes</summary>
  <p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b><br/>
      default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.colors.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.colors.links heading=4-%}
    </p>
    <h3>interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b><br/>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.interpolations.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.interpolations.links heading=4-%}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b><br/>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">Color ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.positions.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.positions.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp properties attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b><br/>
      default: None
      <p class="scene-class-comments">Camera used to define camera and screen space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.camera.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.camera.links heading=4-%}
    </p>
    <h3>color_space</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=rgb(default)<br/>
          1=hsv<br/>
          2=hsl<br/>
      <p class="scene-class-comments">Color space to perform interpolation in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.color_space.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.color_space.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Float</b><br/> <i>bindable</i><br/>
      default: 1.0
      <p class="scene-class-comments">Input signal for ramp, used when ramp type is set to input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.input.links heading=4-%}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Geometry</b><br/>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.object.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.object.links heading=4-%}
    </p>
    <h3>ramp_type</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=v(default)<br/>
          1=u<br/>
          2=diagonal<br/>
          3=radial<br/>
          4=circular<br/>
          5=box<br/>
          6=uxv<br/>
          7=four corner<br/>
          8=input<br/>
      <p class="scene-class-comments">Determines input signal / shape of the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.ramp_type.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.ramp_type.links heading=4-%}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=render(default)<br/>
          1=camera<br/>
          2=world<br/>
          3=screen<br/>
          4=object<br/>
          5=reference<br/>
          6=texture<br/>
      <p class="scene-class-comments">Only applies when 'texture coordinates' is set to 'default state coordinates'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.space.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.space.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=default state coordinates(default)<br/>
          1=input texture coordinates<br/>
      <p class="scene-class-comments">Whether to read existing coordinates or bind custom ones</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RampMap.attributes.texture_coordinates.images data=site.data.user-reference.scene-objects.maps.RampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RampMap.attributes.texture_coordinates.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.RampMap-%}