---
title: DofDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DofDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.DofDisplayFilter.images.path%}
{%if site.data.scene-classes.display-filters.DofDisplayFilter.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.DofDisplayFilter.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.DofDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.DofDisplayFilter.links-%}
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
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.invert_mask
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.mix
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 8.0
      <p class="scene-class-comments">aperture in millimeters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.aperture
          path=image_path
      %}
    </p>
    <h3>depth</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">the 'depth' result RenderOutput to sample z depth values from</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.depth
          path=image_path
      %}
    </p>
    <h3>focal_length</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-comments">focal length in millimeters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.focal_length
          path=image_path
      %}
    </p>
    <h3>focus_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.focus_distance
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to apply depth of field</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.input
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.mask
          path=image_path
      %}
    </p>
    <h3>use_camera_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">read dof attributes from active scene camera</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.images.attributes.use_camera_attributes
          path=image_path
      %}
    </p>
  </p>
</details>
</div>