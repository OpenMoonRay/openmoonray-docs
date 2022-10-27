---
title: GradientMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# GradientMap
{%assign image_path=site.data.scene-classes.maps.GradientMap.images.path%}
{%if site.data.scene-classes.maps.GradientMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.GradientMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.GradientMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.GradientMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Additional properties attributes</summary>
  <p>
    <h3>symmetric</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Color A blends into Color B and then back into Color A from the start to the end point</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.symmetric
          path=image_path
      %}
    </p>
    <h3>symmetric_center</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Shifts the center of the symmetric falloff</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.symmetric_center
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Falloff properties attributes</summary>
  <p>
    <h3>falloff_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Compresses the blending towards the start or end color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.falloff_bias
          path=image_path
      %}
    </p>
    <h3>falloff_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Shifts where the falloff ends</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.falloff_end
          path=image_path
      %}
    </p>
    <h3>falloff_end_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjust the intensity of the end color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.falloff_end_intensity
          path=image_path
      %}
    </p>
    <h3>falloff_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts rate of blending</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.falloff_exponent
          path=image_path
      %}
    </p>
    <h3>falloff_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Shifts where the falloff starts</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.falloff_start
          path=image_path
      %}
    </p>
    <h3>falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | none = 0
          | natural = 1 (default)
          | linear = 2
          | squared = 3
          | gaussian = 4
          | ease out = 5
      <p class="scene-class-comments">Falloff blend mode</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.falloff_type
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Gradient properties attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Start color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.color_A
          path=image_path
      %}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">End color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.color_B
          path=image_path
      %}
    </p>
    <h3>end</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">End position in the chosen space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.end
          path=image_path
      %}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-comments">Use the provided object's transformation space (only used if object space is also specified)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.object
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
      <p class="scene-class-comments">The transformation space in which to perform the blending</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.space
          path=image_path
      %}
    </p>
    <h3>start</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Start position in the chosen space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.GradientMap.images.attributes.start
          path=image_path
      %}
    </p>
  </p>
</details>
</div>