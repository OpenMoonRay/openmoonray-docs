---
title: Attribute Map
---
# AttributeMap
{%-include overview.html data=site.data.scene-classes.maps.AttributeMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.gallery data=site.data.scene-classes.maps.AttributeMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Primitive Attribute attributes</summary>
  <p>
    <h3>primitive_attribute_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: Cd
      <p class="scene-class-comments">the name of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.attributes.primitive_attribute_name.images data=site.data.scene-classes.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.attributes.primitive_attribute_name.links heading=4-%}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | float = 0
          | vec2f = 1
          | vec3f = 2
          | rgb = 3 (default)
          | int = 4
      <p class="scene-class-comments">the type of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.attributes.primitive_attribute_type.images data=site.data.scene-classes.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.attributes.primitive_attribute_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">input color - preferably a connected map</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.attributes.color.images data=site.data.scene-classes.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.attributes.color.links heading=4-%}
    </p>
    <h3>default_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">default value to display when the requested attribute is not available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.attributes.default_value.images data=site.data.scene-classes.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.attributes.default_value.links heading=4-%}
    </p>
    <h3>map_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | primitive attribute = 0 (default)
          | position = 1
          | texture st = 2
          | shading normal = 3
          | geometric normal = 4
          | dpds = 5
          | dpdt = 6
          | dnds = 7
          | dndt = 8
          | map color = 9
          | hair surface P = 12
          | hair surface N = 13
          | hair surface st = 14
          | hair closest surface st = 15
          | id = 16
          | velocity = 17
          | acceleration = 18
          | motionvec = 19
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.attributes.map_type.images data=site.data.scene-classes.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.attributes.map_type.links heading=4-%}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.AttributeMap.attributes.warn_when_unavailable.images data=site.data.scene-classes.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.AttributeMap.attributes.warn_when_unavailable.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.AttributeMap-%}