---
title: UsdPrimvarReader_int

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPrimvarReader_int
{%-include overview.html data=site.data.scene-classes.maps.UsdPrimvarReader_int-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.UsdPrimvarReader_int.gallery data=site.data.scene-classes.maps.UsdPrimvarReader_int-%}
{%-include see-also.html links=site.data.scene-classes.maps.UsdPrimvarReader_int.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>bindable</i>
      default: 0
      <p class="scene-class-comments">fallback value to be returned if geometry fetch failed.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.UsdPrimvarReader_int.attributes.fallback.images data=site.data.scene-classes.maps.UsdPrimvarReader_int-%}
      {%-include see-also.html links=site.data.scene-classes.maps.UsdPrimvarReader_int.attributes.fallback.links heading=4-%}
    </p>
    <h3>varname</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Name of the primvar to be read from the mesh</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.UsdPrimvarReader_int.attributes.varname.images data=site.data.scene-classes.maps.UsdPrimvarReader_int-%}
      {%-include see-also.html links=site.data.scene-classes.maps.UsdPrimvarReader_int.attributes.varname.links heading=4-%}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.UsdPrimvarReader_int.attributes.warn_when_unavailable.images data=site.data.scene-classes.maps.UsdPrimvarReader_int-%}
      {%-include see-also.html links=site.data.scene-classes.maps.UsdPrimvarReader_int.attributes.warn_when_unavailable.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.UsdPrimvarReader_int-%}