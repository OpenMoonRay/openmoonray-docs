---
title: UsdPrimvarReader_vector

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPrimvarReader_vector
{%-include overview.html data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.gallery data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">fallback value to be returned if geometry fetch failed.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.fallback.images data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.fallback.videos data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.fallback.links heading=4-%}
    </p>
    <h3>varname</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Name of the primvar to be read from the mesh</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.varname.images data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.varname.videos data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.varname.links heading=4-%}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.warn_when_unavailable.images data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.warn_when_unavailable.videos data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector.attributes.warn_when_unavailable.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_vector-%}