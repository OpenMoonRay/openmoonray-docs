---
title: UsdPrimvarReader_normal

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPrimvarReader_normal
---
{%assign image_dir=site.data.scene-classes.maps.UsdPrimvarReader_normal.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.UsdPrimvarReader_normal.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">fallback value to be returned if geometry fetch failed.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdPrimvarReader_normal.fallback
          image_dir=image_dir
      %}
    </p>
    <h3>varname</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Name of the primvar to be read from the mesh</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdPrimvarReader_normal.varname
          image_dir=image_dir
      %}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdPrimvarReader_normal.warn_when_unavailable
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>