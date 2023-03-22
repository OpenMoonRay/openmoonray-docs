---
title: LayerMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LayerMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.LayerMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.gallery data=site.data.user-reference.scene-objects.maps.LayerMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Foreground color to blend</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_A.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_A.videos data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_A.links heading=4-%}
    </p>
    <h3>input_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Background color to blend</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_B.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_B.videos data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_B.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blending amount</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mask.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mask.videos data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mask.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;over&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;add&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;subtract&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;multiply&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;overlay&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;overlay contrast&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;darken&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;lighten&rdquo;<br>
          &nbsp;&nbsp;10 = &ldquo;color dodge&rdquo;<br>
          &nbsp;&nbsp;11 = &ldquo;color burn&rdquo;<br>
          &nbsp;&nbsp;12 = &ldquo;hard light&rdquo;<br>
          &nbsp;&nbsp;13 = &ldquo;soft light&rdquo;<br>
          &nbsp;&nbsp;14 = &ldquo;difference&rdquo;<br>
          &nbsp;&nbsp;15 = &ldquo;exclusion&rdquo;<br>
      <p class="scene-class-comments">Method of blending</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mode.videos data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.LayerMap-%}