---
title: CombineDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineDisplacement
{%assign image_path=site.data.scene-classes.displacement.CombineDisplacement.images.path%}
{%if site.data.scene-classes.displacement.CombineDisplacement.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.displacement.CombineDisplacement.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.displacement.CombineDisplacement.links-%}
---
## See Also
{%for link in site.data.scene-classes.displacement.CombineDisplacement.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.images.attributes.bound_padding
          path=image_path
      %}
    </p>
    <h3>input_1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-comments">Displacement object 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.images.attributes.input_1
          path=image_path
      %}
    </p>
    <h3>input_2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-comments">Displacement object 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.images.attributes.input_2
          path=image_path
      %}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | add = 0 (default)
          | max magnitude = 1
          | min magnitude = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.images.attributes.operation
          path=image_path
      %}
    </p>
    <h3>scale_1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Scale of input 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.images.attributes.scale_1
          path=image_path
      %}
    </p>
    <h3>scale_2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Scale of input 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.images.attributes.scale_2
          path=image_path
      %}
    </p>
  </p>
</details>
</div>