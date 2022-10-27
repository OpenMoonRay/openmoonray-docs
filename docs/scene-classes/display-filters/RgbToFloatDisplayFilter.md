---
title: RgbToFloatDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToFloatDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.path%}
{%if site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.links-%}
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
          images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.attributes.invert_mask
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.attributes.mix
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
          images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.attributes.input
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.attributes.mask
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | r = 0
          | g = 1
          | b = 2
          | min = 3
          | max = 4
          | average = 5 (default)
          | sum = 6
          | luminance = 7
      <p class="scene-class-comments">specify the method to convert RGB Color to float</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.images.attributes.mode
          path=image_path
      %}
    </p>
  </p>
</details>
</div>