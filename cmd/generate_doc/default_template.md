---
title: {{class.name}}

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# {{class.name}}
{%raw-%}{%-{%endraw%}include overview.html data={{data_path}}{%raw%}-%}{%endraw%}
{%raw-%}{%-{%endraw%}include image-gallery.html images={{data_path}}.gallery data={{data_path}}{%raw%}-%}{%endraw%}
{%raw-%}{%-{%endraw%}include see-also.html links={{data_path}}.links{%raw%}-%}{%endraw%}
---
## Attribute Reference

<div class="scene-class">
{%- for group in class.groups %}
<details open>
  <summary>{{ group.name }} attributes</summary>
  <p>
    {%- for attr in group.attributes %}
    <h3>{{ attr.name }}</h3>
    <p class="scene-class-type">
      <b>{{ attr.type }}</b>
      {%- if attr.flags %} <i>{{','.join(attr.flags) if attr.hasFlags else ''}}</i>{% endif %}
      <br>
      {%- if attr.enum %}
        {%- for (name,val) in attr.enumValues %}
          &nbsp;&nbsp;{{val}} = &ldquo;{{name}}&rdquo;{{' (default)' if val==attr.default_value else ''}}<br>
        {%- endfor %}
      {%- elif attr.type=="IntVector" or attr.type=="FloatVector"%}
      default: {}
      {%- else %}
      default: {{ attr.default_value | replace('[]', '{}') | replace('<', '&lt;') | replace('>', '&gt;') | replace_mem_address }}
      {%- endif %}
      {%- if attr.hasComment %}
      <p class="scene-class-comments">{{attr.comment | replace('<', '&lt;') | replace('>', '&gt;') | replace('\n','<br>') | replace('\t', '&emsp;')}}</p>
      {%- else %}
      <p class="scene-class-no-doc">No documentation available</p>
      {%- endif %}
      {%raw-%}{%-{%endraw%}include image-gallery.html images={{data_path}}.attributes.{{attr.name}}.images data={{data_path}}{%raw%}-%}{%endraw%}
      {%raw-%}{%-{%endraw%}include video-gallery.html videos={{data_path}}.attributes.{{attr.name}}.videos data={{data_path}}{%raw%}-%}{%endraw%}
      {%raw-%}{%-{%endraw%}include see-also.html links={{data_path}}.attributes.{{attr.name}}.links heading=4{%raw%}-%}{%endraw%}
    </p>
    {%- endfor %}{# group.attributes #}
  </p>
</details>
{%- endfor %}{# class.groups #}
</div>
{%raw-%}{%-{%endraw%}include example.html data={{data_path}}{%raw%}-%}{%endraw%}
