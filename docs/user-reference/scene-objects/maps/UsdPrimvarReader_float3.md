---
title: UsdPrimvarReader_float3

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPrimvarReader_float3
{%-include overview.html data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.gallery data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.attributes.fallback.images data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.attributes.fallback.links heading=4-%}
    </p>
    <h3>varname</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Name of the primvar to be read from the mesh</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.attributes.varname.images data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.attributes.varname.links heading=4-%}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.attributes.warn_when_unavailable.images data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3.attributes.warn_when_unavailable.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.UsdPrimvarReader_float3-%}