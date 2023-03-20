---
title: AttributeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AttributeMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.gallery data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Primitive Attribute attributes</summary>
  <p>
    <h3>primitive_attribute_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br/>
      default: Cd
      <p class="scene-class-comments">the name of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.primitive_attribute_name.images data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.primitive_attribute_name.links heading=4-%}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = float<br/>
          </t>1 = vec2f<br/>
          </t>2 = vec3f<br/>
          </t>3 = rgb(default)<br/>
          </t>4 = int<br/>
      <p class="scene-class-comments">the type of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.primitive_attribute_type.images data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.primitive_attribute_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">input color - preferably a connected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.color.images data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.color.links heading=4-%}
    </p>
    <h3>default_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">default value to display when the requested attribute is not available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.default_value.images data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.default_value.links heading=4-%}
    </p>
    <h3>map_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = primitive attribute(default)<br/>
          </t>1 = position<br/>
          </t>2 = texture st<br/>
          </t>3 = shading normal<br/>
          </t>4 = geometric normal<br/>
          </t>5 = dpds<br/>
          </t>6 = dpdt<br/>
          </t>7 = dnds<br/>
          </t>8 = dndt<br/>
          </t>9 = map color<br/>
          </t>12 = hair surface P<br/>
          </t>13 = hair surface N<br/>
          </t>14 = hair surface st<br/>
          </t>15 = hair closest surface st<br/>
          </t>16 = id<br/>
          </t>17 = velocity<br/>
          </t>18 = acceleration<br/>
          </t>19 = motionvec<br/>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.map_type.images data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.map_type.links heading=4-%}
    </p>
    <h3>warn_when_unavailable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">Whether or not to issue a warning when the requested attribute is unavailable</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.warn_when_unavailable.images data=site.data.user-reference.scene-objects.maps.AttributeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AttributeMap.attributes.warn_when_unavailable.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.AttributeMap-%}