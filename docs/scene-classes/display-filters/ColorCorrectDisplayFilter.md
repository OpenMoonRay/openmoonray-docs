---
title: ColorCorrectDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.mix
          image_dir=image_dir
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
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.contrast
          image_dir=image_dir
      %}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Adjusts the exposure, in fstops</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.exposure
          image_dir=image_dir
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts gamma of input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.gamma
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to color correct</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.input
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
    <h3>multiply</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Multiplies input using specified color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.multiply
          image_dir=image_dir
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Add offset color to input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.offset
          image_dir=image_dir
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Desaturates input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.saturation
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>