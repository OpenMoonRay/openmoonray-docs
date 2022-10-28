---
title: DeformationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DeformationMap
{%include image-gallery.html images=site.data.scene-classes.maps.DeformationMap.gallery data=site.data.scene-classes.maps.DeformationMap-%}
{%include see-also.html links=site.data.scene-classes.maps.DeformationMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>output_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | RGB = 0
          | deformation_S = 1
          | deformation_T = 2
          | deformation_avg = 3 (default)
      <p class="scene-class-comments">Controls output: <br>&emsp;&emsp;    RGB - R = deformation along S, G = deformation along T, B = average deformation from ref space <br>&emsp;&emsp;    deformation_S - deformation along S <br>&emsp;&emsp;    deformation_T - deformation along T <br>&emsp;&emsp;    deformation_avg - average deformation from ref space</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.DeformationMap.attributes.output_mode.images data=site.data.scene-classes.maps.DeformationMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.DeformationMap.attributes.output_mode.links-%}
    </p>
    <h3>use_warning_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If derivatives are missing or zero output the warning color erroring out</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.DeformationMap.attributes.use_warning_color.images data=site.data.scene-classes.maps.DeformationMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.DeformationMap.attributes.use_warning_color.links-%}
    </p>
    <h3>warning_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Warning color to output when derivatives are missing or zero</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.DeformationMap.attributes.warning_color.images data=site.data.scene-classes.maps.DeformationMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.DeformationMap.attributes.warning_color.links-%}
    </p>
  </p>
</details>
</div>