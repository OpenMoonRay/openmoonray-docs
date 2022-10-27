---
title: RampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RampMap
{%assign image_path=site.data.scene-classes.maps.RampMap.image_path%}
{%if site.data.scene-classes.maps.RampMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.RampMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.RampMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.RampMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Additional properties attributes</summary>
  <p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Bind custom UV coordinates</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.input_texture_coordinates.images.
          path=image_path
      %}
    </p>
    <h3>uv_repeat</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Number of times to repeat the ramp pattern</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.uv_repeat.images.
          path=image_path
      %}
    </p>
    <h3>uv_wave</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Creates waves which perturb the ramp pattern</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.uv_wave.images.
          path=image_path
      %}
    </p>
    <h3>wrap_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | wrap = 0 (default)
          | clamp = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.wrap_type.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp Knot attributes</summary>
  <p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.colors.images.
          path=image_path
      %}
    </p>
    <h3>interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.interpolations.images.
          path=image_path
      %}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">Color ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.positions.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp properties attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-comments">Camera used to define camera and screen space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.camera.images.
          path=image_path
      %}
    </p>
    <h3>color_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | rgb = 0 (default)
          | hsv = 1
          | hsl = 2
      <p class="scene-class-comments">Color space to perform interpolation in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.color_space.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Input signal for ramp, used when ramp type is set to input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.object.images.
          path=image_path
      %}
    </p>
    <h3>ramp_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | v = 0 (default)
          | u = 1
          | diagonal = 2
          | radial = 3
          | circular = 4
          | box = 5
          | uxv = 6
          | four corner = 7
          | input = 8
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.ramp_type.images.
          path=image_path
      %}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0 (default)
          | camera = 1
          | world = 2
          | screen = 3
          | object = 4
          | reference = 5
          | texture = 6
      <p class="scene-class-comments">Only applies when 'texture coordinates' is set to 'default state coordinates'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.space.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | default state coordinates = 0 (default)
          | input texture coordinates = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RampMap.attributes.texture_coordinates.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>