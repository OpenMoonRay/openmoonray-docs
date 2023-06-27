---
title: Geometry
---
# Geometry

The following Geometry procedurals are included in MoonRay:
{% assign section = site.data.site-nav-tree[1].subitems[1].subitems[3].subitems %}
{%- for item in section -%}
- [{{ item.text }}]({{ item.path | replace: "index.md", "" | relative_url | replace: ".md", "/"}})
{% endfor %}

All geometry types support [motion blur]({{ "/user-reference/how-to-guides/motion-blur" | absolute_url }})

For development, see:
[Writing Geometry Procedurals]({{ "/developer-reference/shaders/geometry-procedurals" | absolute_url }})
