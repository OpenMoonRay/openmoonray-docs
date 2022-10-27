---
title: UserData

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UserData
{%assign image_path=site.data.scene-classes.user-data.UserData.images.path%}
{%if site.data.scene-classes.user-data.UserData.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.user-data.UserData.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.user-data.UserData.links-%}
---
## See Also
{%for link in site.data.scene-classes.user-data.UserData.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bool_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for bool type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.bool_key
          path=image_path
      %}
    </p>
    <h3>bool_values</h3>
    <p class="scene-class-type">
      <b>BoolVector</b>
      default: []
      <p class="scene-class-comments">bool type user data values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.bool_values
          path=image_path
      %}
    </p>
    <h3>color_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for color type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.color_key
          path=image_path
      %}
    </p>
    <h3>color_values_0</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: []
      <p class="scene-class-comments">color type user data values for motion step 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.color_values_0
          path=image_path
      %}
    </p>
    <h3>color_values_1</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: []
      <p class="scene-class-comments">color type user data values for motion step 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.color_values_1
          path=image_path
      %}
    </p>
    <h3>float_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for float type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.float_key
          path=image_path
      %}
    </p>
    <h3>float_values_0</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">float type user data values for motion step 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.float_values_0
          path=image_path
      %}
    </p>
    <h3>float_values_1</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">float type user data values for motion step 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.float_values_1
          path=image_path
      %}
    </p>
    <h3>int_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for integer type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.int_key
          path=image_path
      %}
    </p>
    <h3>int_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">integer type user data values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.int_values
          path=image_path
      %}
    </p>
    <h3>mat4f_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for mat4f type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.mat4f_key
          path=image_path
      %}
    </p>
    <h3>mat4f_values_0</h3>
    <p class="scene-class-type">
      <b>Mat4fVector</b>
      default: []
      <p class="scene-class-comments">mat4f type user data values for motion step 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.mat4f_values_0
          path=image_path
      %}
    </p>
    <h3>mat4f_values_1</h3>
    <p class="scene-class-type">
      <b>Mat4fVector</b>
      default: []
      <p class="scene-class-comments">mat4f type user data values for motion step 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.mat4f_values_1
          path=image_path
      %}
    </p>
    <h3>string_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for string type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.string_key
          path=image_path
      %}
    </p>
    <h3>string_values</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-comments">string type user data values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.string_values
          path=image_path
      %}
    </p>
    <h3>vec2f_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for vec2f type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.vec2f_key
          path=image_path
      %}
    </p>
    <h3>vec2f_values_0</h3>
    <p class="scene-class-type">
      <b>Vec2fVector</b>
      default: []
      <p class="scene-class-comments">vec2f type user data values for motion step 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.vec2f_values_0
          path=image_path
      %}
    </p>
    <h3>vec2f_values_1</h3>
    <p class="scene-class-type">
      <b>Vec2fVector</b>
      default: []
      <p class="scene-class-comments">vec2f type user data values for motion step 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.vec2f_values_1
          path=image_path
      %}
    </p>
    <h3>vec3f_key</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">key name for vec3f type user data</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.vec3f_key
          path=image_path
      %}
    </p>
    <h3>vec3f_values_0</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">vec3f type user data values for motion step 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.vec3f_values_0
          path=image_path
      %}
    </p>
    <h3>vec3f_values_1</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">vec3f type user data values for motion step 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.user-data.UserData.images.attributes.vec3f_values_1
          path=image_path
      %}
    </p>
  </p>
</details>
</div>