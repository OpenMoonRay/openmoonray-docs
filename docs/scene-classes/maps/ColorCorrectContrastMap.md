---
title: ColorCorrectContrastMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectContrastMap
{%assign image_path=site.data.scene-classes.maps.ColorCorrectContrastMap.image_path%}
{%if site.data.scene-classes.maps.ColorCorrectContrastMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectContrastMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ColorCorrectContrastMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ColorCorrectContrastMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>contrast_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.contrast_b.images.
          path=image_path
      %}
    </p>
    <h3>contrast_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.contrast_g.images.
          path=image_path
      %}
    </p>
    <h3>contrast_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.contrast_r.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.mix.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.on.images.
          path=image_path
      %}
    </p>
    <h3>use_per_channel_contrast</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for contrast</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectContrastMap.attributes.use_per_channel_contrast.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>