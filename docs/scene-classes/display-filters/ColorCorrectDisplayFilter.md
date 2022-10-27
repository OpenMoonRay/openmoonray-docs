---
title: ColorCorrectDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.image_path%}
{%if site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.links-%}
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
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.invert_mask.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.mix.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Decrease contrast below 0.0 and increase contrast above 0.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Adjusts the exposure, in fstops</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.exposure.images.
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts gamma of input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.gamma.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to color correct</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.mask.images.
          path=image_path
      %}
    </p>
    <h3>multiply</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Multiplies input using specified color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.multiply.images.
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Add offset color to input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.offset.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Desaturates input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilterattributes.saturation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>