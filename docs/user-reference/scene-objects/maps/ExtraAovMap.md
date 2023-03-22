---
title: ExtraAovMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ExtraAovMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ExtraAovMap.gallery data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ExtraAovMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bind the root of a map shader network that you want evaluated as an extra aov</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.color.images data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.color.videos data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.color.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Sets the lpe label that is used for the extra aov</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.label.images data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.label.videos data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.label.links heading=4-%}
    </p>
    <h3>post_scatter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If true, accumulate this aov when scattering off the surface as an indirect ray (after the lpe scatter transition event, after path throughput multiplication), rather than when the surface is first intersected.  the purpose of this setting is to efficiently capture information from all rays that leave a surface that could potentially intersect and trigger aov evaluation on other surfaces.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.post_scatter.images data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.post_scatter.videos data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ExtraAovMap.attributes.post_scatter.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ExtraAovMap-%}