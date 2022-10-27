---
title: ColorCorrectGammaMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectGammaMap
{%assign image_path=site.data.scene-classes.maps.ColorCorrectGammaMap.image_path%}
{%if site.data.scene-classes.maps.ColorCorrectGammaMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectGammaMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ColorCorrectGammaMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ColorCorrectGammaMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the input to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma.images.
          path=image_path
      %}
    </p>
    <h3>gamma_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the blue channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_b.images.
          path=image_path
      %}
    </p>
    <h3>gamma_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the green channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_g.images.
          path=image_path
      %}
    </p>
    <h3>gamma_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the red channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_r.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.mix.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.on.images.
          path=image_path
      %}
    </p>
    <h3>use_per_channel_gamma</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gamma</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.use_per_channel_gamma.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>