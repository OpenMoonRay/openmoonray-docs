---
title: {{class.name}}

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# {{class.name}}
---
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
      {%- if attr.enum %}
        {%- for (name,val) in attr.enumValues %}
          | {{name}} = {{val}}{{' (default)' if val==attr.default_value else ''}}
        {%- endfor %}
      {%- else %}
      default: {{ attr.default_value | replace('<', '&lt;') | replace('>', '&gt;') | replace_mem_address }}
      {%- endif %}
      {%- if attr.hasComment %}
      <p class="scene-class-comments">{{attr.comment | replace('<', '&lt;') | replace('>', '&gt;') | replace('\n','<br>') | replace('\t', '&emsp;')}}</p>
      {%- else %}
      <p class="scene-class-no-doc">No documentation available</p>
      {%- endif %}
    </p>
    {%- endfor %}{# group.attributes #}
  </p>
</details>
{%- endfor %}{# class.groups #}
</div>
