---
title: RgbToHsvDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToHsvDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.image_path%}
{%if site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.links-%}
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
          images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilterattributes.invert_mask.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilterattributes.mix.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">image buffer</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilterattributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilterattributes.mask.images.
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | rgb_to_hsv = 0 (default)
          | hsv_to_rgb = 1
      <p class="scene-class-comments">specify whether you are converting rgb-&gt;hsv or hsv-&gt;rgb</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilterattributes.mode.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>