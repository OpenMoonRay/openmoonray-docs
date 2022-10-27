---
title: HairColumnMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairColumnMap
{%assign image_path=site.data.scene-classes.maps.HairColumnMap.image_path%}
{%if site.data.scene-classes.maps.HairColumnMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.HairColumnMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.HairColumnMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.HairColumnMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
</div>