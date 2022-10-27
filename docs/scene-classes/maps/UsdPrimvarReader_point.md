---
title: UsdPrimvarReader_point

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPrimvarReader_point
{%assign image_path=site.data.scene-classes.maps.UsdPrimvarReader_point.image_path%}
{%if site.data.scene-classes.maps.UsdPrimvarReader_point.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.UsdPrimvarReader_point.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.UsdPrimvarReader_point.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.UsdPrimvarReader_point.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">fallback value to be returned if geometry fetch failed.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdPrimvarReader_point.attributes.fallback.images.
          path=image_path
      %}
    </p>
    <h3>varname</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Name of the primvar to be read from the mesh</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdPrimvarReader_point.attributes.varname.images.
          path=image_path
      %}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdPrimvarReader_point.attributes.warn_when_unavailable.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>