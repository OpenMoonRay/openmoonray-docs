---
title: ShadowDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ShadowDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blend value between occluded and unoccluded images. 1 = completely occluded. 0 = completely unoccluded.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.density.images data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.density.links heading=4-%}
    </p>
    <h3>occluded</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Renderoutput containing the occluded image</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.occluded.images data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.occluded.links heading=4-%}
    </p>
    <h3>shadow_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Color of the shadow</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.shadow_color.images data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.shadow_color.links heading=4-%}
    </p>
    <h3>unoccluded</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Renderoutput containing the unoccluded image</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.unoccluded.images data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter.attributes.unoccluded.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.ShadowDisplayFilter-%}