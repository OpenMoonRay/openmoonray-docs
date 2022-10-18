---
title: HairColorPresetsMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairColorPresetsMap
---
{%assign image_dir=site.data.scene-classes.maps.HairColorPresetsMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.HairColorPresetsMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0 (default)
          | gray = 1
          | platinum blond = 2
          | light blond = 3
          | golden blond = 4
          | strawberry blond = 5
          | light red = 6
          | dark red = 7
          | light auburn = 8
          | dark auburn = 9
          | brown = 10
          | dark brown = 11
          | golden brown = 12
          | ash brown = 13
          | chestnut brown = 14
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.HairColorPresetsMap.color
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>