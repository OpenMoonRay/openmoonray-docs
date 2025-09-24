---
title: GradientMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# GradientMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.GradientMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.gallery data=site.data.user-reference.scene-objects.maps.GradientMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Additional properties attributes</summary>
  <p>
    <h3>symmetric</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Color A blends into Color B and then back into Color A from the start to the end point</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.symmetric.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.symmetric.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.symmetric.links heading=4-%}
    </p>
    <h3>symmetric_center</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Shifts the center of the symmetric falloff</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.symmetric_center.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.symmetric_center.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.symmetric_center.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Falloff properties attributes</summary>
  <p>
    <h3>falloff_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Compresses the blending towards the start or end color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_bias.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_bias.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_bias.links heading=4-%}
    </p>
    <h3>falloff_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Shifts where the falloff ends</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_end.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_end.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_end.links heading=4-%}
    </p>
    <h3>falloff_end_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Adjust the intensity of the end color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_end_intensity.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_end_intensity.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_end_intensity.links heading=4-%}
    </p>
    <h3>falloff_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Adjusts rate of blending</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_exponent.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_exponent.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_exponent.links heading=4-%}
    </p>
    <h3>falloff_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Shifts where the falloff starts</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_start.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_start.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_start.links heading=4-%}
    </p>
    <h3>falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;none&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;natural&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;linear&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;squared&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;gaussian&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;ease out&rdquo;<br>
      <p class="scene-class-comments">Falloff blend mode</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_type.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_type.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.falloff_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Gradient properties attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Start color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.color_A.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.color_A.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">End color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.color_B.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.color_B.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.color_B.links heading=4-%}
    </p>
    <h3>end</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">End position in the chosen space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.end.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.end.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.end.links heading=4-%}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Node</b>
      <br>
      default: None
      <p class="scene-class-comments">Use the provided object's transformation space (only used if object space is also specified)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.object.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.object.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.object.links heading=4-%}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;texture&rdquo;<br>
      <p class="scene-class-comments">The transformation space in which to perform the blending</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.space.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.space.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.space.links heading=4-%}
    </p>
    <h3>start</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Start position in the chosen space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.GradientMap.attributes.start.images data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.GradientMap.attributes.start.videos data=site.data.user-reference.scene-objects.maps.GradientMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.GradientMap.attributes.start.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.GradientMap-%}