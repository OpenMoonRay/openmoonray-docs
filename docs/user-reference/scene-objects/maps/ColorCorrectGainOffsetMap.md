---
title: ColorCorrectGainOffsetMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectGainOffsetMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.gallery data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplies the input channels by the specified values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain.links heading=4-%}
    </p>
    <h3>gain_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplies the blue channel by the specified values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_b.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_b.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_b.links heading=4-%}
    </p>
    <h3>gain_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplies the green channel by the specified values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_g.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_g.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_g.links heading=4-%}
    </p>
    <h3>gain_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplies the red channel by the specified values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_r.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_r.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.gain_r.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bind the input here</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.input.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.input.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">How much of the overall color correct to mix in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.mix.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.mix.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.mix.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Adds the specified values to the input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset.links heading=4-%}
    </p>
    <h3>offset_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Adds the specified values to the blue channel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_b.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_b.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_b.links heading=4-%}
    </p>
    <h3>offset_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Adds the specified values to the green channel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_g.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_g.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_g.links heading=4-%}
    </p>
    <h3>offset_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Adds the specified values to the red channel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_r.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_r.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.offset_r.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disables all color correct operations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.on.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.on.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.on.links heading=4-%}
    </p>
    <h3>use_per_channel_gain_offset</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables separate rgb controls for gain and offset</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.use_per_channel_gain_offset.images data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.use_per_channel_gain_offset.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap.attributes.use_per_channel_gain_offset.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ColorCorrectGainOffsetMap-%}