---
title: UsdUVTexture

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdUVTexture
{%assign image_path=site.data.scene-classes.maps.UsdUVTexture.image_path%}
{%if site.data.scene-classes.maps.UsdUVTexture.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.UsdUVTexture.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.UsdUVTexture.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.UsdUVTexture.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Bias to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.bias.images.
          path=image_path
      %}
    </p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Fallback value used when texture can not be read.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.fallback.images.
          path=image_path
      %}
    </p>
    <h3>file</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">Path to the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.file.images.
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.scale.images.
          path=image_path
      %}
    </p>
    <h3>sourceColorSpace</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | raw = 0
          | sRGB = 1
          | auto = 2 (default)
      <p class="scene-class-comments">Flag indicating the color space in which the source texture is encoded.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.sourceColorSpace.images.
          path=image_path
      %}
    </p>
    <h3>st</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Texture coordinate to use to fetch this texture.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.st.images.
          path=image_path
      %}
    </p>
    <h3>udim_files</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.udim_files.images.
          path=image_path
      %}
    </p>
    <h3>udim_max_v</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 10
      <p class="scene-class-comments">udim maximum v value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.udim_max_v.images.
          path=image_path
      %}
    </p>
    <h3>udim_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.udim_values.images.
          path=image_path
      %}
    </p>
    <h3>wrapS</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0
          | clamp = 1
          | repeat = 2
          | mirror = 3
          | useMetadata = 4 (default)
      <p class="scene-class-comments">Wrap mode when reading this texture.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.wrapS.images.
          path=image_path
      %}
    </p>
    <h3>wrapT</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0
          | clamp = 1
          | repeat = 2
          | mirror = 3
          | useMetadata = 4 (default)
      <p class="scene-class-comments">Wrap mode when reading this texture.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.UsdUVTexture.attributes.wrapT.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>