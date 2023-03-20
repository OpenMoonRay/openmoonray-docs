---
title: TangentSpaceDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TangentSpaceDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>N</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Connect a renderoutput with state n aov here. used to construct tangent space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.N.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.N.links heading=4-%}
    </p>
    <h3>dPds</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Connect a renderoutput with state dpds aov here. used to construct tangent space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.dPds.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.dPds.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Renderoutput to transform into tangent space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Renderoutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>normal_map_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">When on, encodes the output to clamped [0, 1] in the same manner as a normal map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.normal_map_output.images data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter.attributes.normal_map_output.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.TangentSpaceDisplayFilter-%}