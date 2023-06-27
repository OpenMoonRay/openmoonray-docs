---
title: Light Filters in MoonRay
maths: 1
---

# Light Filters in MoonRay

Light filters modulate the output of a light by multiplying the light's radiance by a filter value.
This provides more precise, customized control over the light's emission.

The following LightFilter plug-ins are included in MoonRay:
{% assign section = site.data.site-nav-tree[1].subitems[1].subitems[8].subitems %}
{%- for item in section -%}
- [{{ item.text }}]({{ item.path | replace: "index.md", "" | relative_url | replace: ".md", "/"}})
{% endfor %}

