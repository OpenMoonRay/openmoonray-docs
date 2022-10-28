---
title: ColorCorrectGammaMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectGammaMap
{%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.gallery data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
{%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma.links heading=4-%}
    </p>
    <h3>gamma_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the blue channel to the specified exponents</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_b.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_b.links heading=4-%}
    </p>
    <h3>gamma_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the green channel to the specified exponents</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_g.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_g.links heading=4-%}
    </p>
    <h3>gamma_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the red channel to the specified exponents</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_r.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.gamma_r.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.input.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.input.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.mix.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.on.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.on.links heading=4-%}
    </p>
    <h3>use_per_channel_gamma</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gamma</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.use_per_channel_gamma.images data=site.data.scene-classes.maps.ColorCorrectGammaMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectGammaMap.attributes.use_per_channel_gamma.links heading=4-%}
    </p>
  </p>
</details>
</div>