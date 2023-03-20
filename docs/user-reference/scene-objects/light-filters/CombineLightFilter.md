---
title: CombineLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineLightFilter
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.CombineLightFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.gallery data=site.data.user-reference.scene-objects.light-filters.CombineLightFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>light_filters</h3>
    <p class="scene-class-type">
      <b>SceneObject Vector</b><br/>
      default: []
      <p class="scene-class-comments">List of light filters to combine together</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.attributes.light_filters.images data=site.data.user-reference.scene-objects.light-filters.CombineLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.attributes.light_filters.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=multiply(default)<br/>
          1=min<br/>
          2=max<br/>
          3=add<br/>
          4=subtract<br/>
      <p class="scene-class-comments">How the light filters are combined</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.attributes.mode.images data=site.data.user-reference.scene-objects.light-filters.CombineLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.attributes.mode.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.CombineLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CombineLightFilter.attributes.on.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.CombineLightFilter-%}