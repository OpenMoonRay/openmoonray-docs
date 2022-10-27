---
title: TangentSpaceDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TangentSpaceDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.image_path%}
{%if site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.links-%}
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
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.invert_mask.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.mix.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>N</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Connect a RenderOutput with State N AOV here. Used to construct tangent space.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.N.images.
          path=image_path
      %}
    </p>
    <h3>dPds</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Connect a RenderOutput with State dPds AOV here. Used to construct tangent space.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.dPds.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">data to transform into tangent space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.mask.images.
          path=image_path
      %}
    </p>
    <h3>normal_map_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">when on, encodes the output to clamped [0, 1] in the same manner as a normal map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilterattributes.normal_map_output.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>