---
title: ShadowDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ShadowDisplayFilter
{%include image-gallery.html images=site.data.scene-classes.display-filters.ShadowDisplayFilter.gallery data=site.data.scene-classes.display-filters.ShadowDisplayFilter-%}
{%include see-also.html links=site.data.scene-classes.display-filters.ShadowDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend value between occluded and unoccluded images. 1 = completely occluded. 0 = completely unoccluded.</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.density.images data=site.data.scene-classes.display-filters.ShadowDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.density.links heading=4-%}
    </p>
    <h3>occluded</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Image Buffer representing the occluded image</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.occluded.images data=site.data.scene-classes.display-filters.ShadowDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.occluded.links heading=4-%}
    </p>
    <h3>shadow_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">color of the shadow</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.shadow_color.images data=site.data.scene-classes.display-filters.ShadowDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.shadow_color.links heading=4-%}
    </p>
    <h3>unoccluded</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Image Buffer representing the unoccluded image</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.unoccluded.images data=site.data.scene-classes.display-filters.ShadowDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ShadowDisplayFilter.attributes.unoccluded.links heading=4-%}
    </p>
  </p>
</details>
</div>