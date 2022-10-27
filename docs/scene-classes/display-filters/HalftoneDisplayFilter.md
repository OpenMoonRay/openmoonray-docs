---
title: HalftoneDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HalftoneDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.path%}
{%if site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.HalftoneDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.HalftoneDisplayFilter.links-%}
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
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.invert_mask
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.mix
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>filter_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The width in pixels of the antialiasing</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.filter_width
          path=image_path
      %}
    </p>
    <h3>grayscale</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Ignore color information, render as grayscale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.grayscale
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to be represented in halftone</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.input
          path=image_path
      %}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Whether the dots should be black (normal) or white/color (inverted)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.invert
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.mask
          path=image_path
      %}
    </p>
    <h3>size</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 5
      <p class="scene-class-comments">The size in pixels of the halftone dots</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.HalftoneDisplayFilter.images.attributes.size
          path=image_path
      %}
    </p>
  </p>
</details>
</div>