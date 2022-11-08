---
title: ExtraAovMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ExtraAovMap
{%-include overview.html data=site.data.scene-classes.maps.ExtraAovMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.ExtraAovMap.gallery data=site.data.scene-classes.maps.ExtraAovMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.ExtraAovMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bind the root of a map shader network that you want evaluated as an extra aov</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ExtraAovMap.attributes.color.images data=site.data.scene-classes.maps.ExtraAovMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ExtraAovMap.attributes.color.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Sets the LPE label that is used for the extra aov</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ExtraAovMap.attributes.label.images data=site.data.scene-classes.maps.ExtraAovMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ExtraAovMap.attributes.label.links heading=4-%}
    </p>
    <h3>post_scatter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If true, accumulate this aov when scattering off the surface as an indirect ray (after the LPE scatter transition event, after path throughput multiplication), rather than when the surface is first intersected.  The purpose of this setting is to efficiently capture information from all rays that leave a surface that could potentially intersect and trigger aov evaluation on other surfaces.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ExtraAovMap.attributes.post_scatter.images data=site.data.scene-classes.maps.ExtraAovMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ExtraAovMap.attributes.post_scatter.links heading=4-%}
    </p>
  </p>
</details>
</div>