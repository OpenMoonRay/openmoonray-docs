---
title: IntensityLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# IntensityLightFilter
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.gallery data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Multiply the light radiance by this RGB color value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.color.images data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.color.videos data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.color.links heading=4-%}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Multiply the light radiance by exposure = pow(2, exposure)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.exposure.images data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.exposure.videos data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.exposure.links heading=4-%}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiply the light radiance by this intensity value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.intensity.images data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.intensity.videos data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.intensity.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the light radiance by 1/radiance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.invert.images data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.invert.videos data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.invert.links heading=4-%}
    </p>
    <h3>light_path_selection</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;all light paths&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;all indirect&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;all indirect first bounce&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;indirect diffuse&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;indirect diffuse first bounce&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;indirect specular&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;indirect specular first bounce&rdquo;<br>
      <p class="scene-class-comments">Controls which light paths the filter is applied to.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.light_path_selection.images data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.light_path_selection.videos data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.light_path_selection.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.on.videos data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter.attributes.on.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.IntensityLightFilter-%}