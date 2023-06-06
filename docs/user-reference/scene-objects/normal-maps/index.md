---
title: MoonRay Normal Maps
---
# NormalMaps

NormalMaps create and manipulate surface normals, which change the direction a surface faces for the purpose of lighting. NormalMaps do not change the shape or silhouette of the geometry.  The output of NormalMaps is always in render space.

When viewing the attribute types in these documents, note that some inputs are NORMALMAP while others are RGB. NormalMaps are separated from _Map_ shaders-- a user must explicitly convert from one type to another using [RgbToNormalMap](RgbToNormalMap), to ensure that the manipulating colors vs. normals is intentional. 

The following NormalMap shaders are included in MoonRay:
{% assign section = site.data.site-nav-tree[1].subitems[1].subitems[13].subitems %}
{%- for item in section -%}
- [{{ item.text }}]({{ item.path | replace: "index.md", "" | relative_url | replace: ".md", "/"}})
{% endfor %}
