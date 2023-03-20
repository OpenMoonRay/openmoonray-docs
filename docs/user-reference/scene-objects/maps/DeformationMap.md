---
title: DeformationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DeformationMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.DeformationMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DeformationMap.gallery data=site.data.user-reference.scene-objects.maps.DeformationMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.DeformationMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>output_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = name<br>
          &nbsp;&nbsp;1 = name<br>
          &nbsp;&nbsp;2 = name<br>
          &nbsp;&nbsp;3 = name (default)<br>
      <p class="scene-class-comments">Controls output: <br>&emsp;&emsp;    RGB - R = deformation along S, G = deformation along T, B = average deformation from ref space <br>&emsp;&emsp;    deformation_S - deformation along S <br>&emsp;&emsp;    deformation_T - deformation along T <br>&emsp;&emsp;    deformation_avg - average deformation from ref space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DeformationMap.attributes.output_mode.images data=site.data.user-reference.scene-objects.maps.DeformationMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DeformationMap.attributes.output_mode.links heading=4-%}
    </p>
    <h3>use_warning_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If derivatives are missing or zero output the warning color erroring out</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DeformationMap.attributes.use_warning_color.images data=site.data.user-reference.scene-objects.maps.DeformationMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DeformationMap.attributes.use_warning_color.links heading=4-%}
    </p>
    <h3>warning_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Warning color to output when derivatives are missing or zero</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DeformationMap.attributes.warning_color.images data=site.data.user-reference.scene-objects.maps.DeformationMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DeformationMap.attributes.warning_color.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.DeformationMap-%}