---
title: CombineNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineNormalMap
{%include image-gallery.html images=site.data.scene-classes.normal-maps.CombineNormalMap.gallery data=site.data.scene-classes.normal-maps.CombineNormalMap-%}
{%include see-also.html links=site.data.scene-classes.normal-maps.CombineNormalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_1</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">First normal map to combine; usually a base map</p>
      {%include image-gallery.html images=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.input_1.images data=site.data.scene-classes.normal-maps.CombineNormalMap-%}
      {%include see-also.html links=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.input_1.links heading=4-%}
    </p>
    <h3>input_2</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">Second normal map to combine; usually a base map</p>
      {%include image-gallery.html images=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.input_2.images data=site.data.scene-classes.normal-maps.CombineNormalMap-%}
      {%include see-also.html links=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.input_2.links heading=4-%}
    </p>
    <h3>normal_map_1_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of normal map 1 to blend in</p>
      {%include image-gallery.html images=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.normal_map_1_dial.images data=site.data.scene-classes.normal-maps.CombineNormalMap-%}
      {%include see-also.html links=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.normal_map_1_dial.links heading=4-%}
    </p>
    <h3>normal_map_2_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of normal map 2 to blend in</p>
      {%include image-gallery.html images=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.normal_map_2_dial.images data=site.data.scene-classes.normal-maps.CombineNormalMap-%}
      {%include see-also.html links=site.data.scene-classes.normal-maps.CombineNormalMap.attributes.normal_map_2_dial.links heading=4-%}
    </p>
  </p>
</details>
</div>