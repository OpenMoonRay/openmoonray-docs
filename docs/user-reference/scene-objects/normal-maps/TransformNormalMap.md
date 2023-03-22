---
title: TransformNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TransformNormalMap
{%-include overview.html data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.gallery data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">Input normal in either tangent or render space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.input_normal.images data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.input_normal.videos data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.input_normal.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>decode_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Decode the input normal if it's in tangent space [0,1] -&gt; [-1,1]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.decode_input_normal.images data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.decode_input_normal.videos data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.decode_input_normal.links heading=4-%}
    </p>
    <h3>transform</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;tangent to render&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;render to tangent&rdquo;<br>
      <p class="scene-class-comments">Transform to apply to the normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.transform.images data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.transform.videos data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap.attributes.transform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.normal-maps.TransformNormalMap-%}