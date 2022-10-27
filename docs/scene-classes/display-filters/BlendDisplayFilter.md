---
title: BlendDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BlendDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.BlendDisplayFilter.images.path%}
{%if site.data.scene-classes.display-filters.BlendDisplayFilter.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.BlendDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.BlendDisplayFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.invert_mask
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.mix
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>blendAmt</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">float determining amount of blend</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.blendAmt
          path=image_path
      %}
    </p>
    <h3>blendType</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | cubic = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.blendType
          path=image_path
      %}
    </p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">first operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.input1
          path=image_path
      %}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">second operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.input2
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.images.attributes.mask
          path=image_path
      %}
    </p>
  </p>
</details>
</div>