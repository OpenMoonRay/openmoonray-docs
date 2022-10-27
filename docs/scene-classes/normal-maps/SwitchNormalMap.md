---
title: SwitchNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchNormalMap
{%assign image_path=site.data.scene-classes.normal-maps.SwitchNormalMap.image_path%}
{%if site.data.scene-classes.normal-maps.SwitchNormalMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.SwitchNormalMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.normal-maps.SwitchNormalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.normal-maps.SwitchNormalMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use, values greater than 63 get cycled back to be in [0,63]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.choice.images.
          path=image_path
      %}
    </p>
    <h3>input0</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input0.images.
          path=image_path
      %}
    </p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input1.images.
          path=image_path
      %}
    </p>
    <h3>input10</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input10.images.
          path=image_path
      %}
    </p>
    <h3>input11</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input11.images.
          path=image_path
      %}
    </p>
    <h3>input12</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input12.images.
          path=image_path
      %}
    </p>
    <h3>input13</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input13.images.
          path=image_path
      %}
    </p>
    <h3>input14</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input14.images.
          path=image_path
      %}
    </p>
    <h3>input15</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input15.images.
          path=image_path
      %}
    </p>
    <h3>input16</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input16.images.
          path=image_path
      %}
    </p>
    <h3>input17</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input17.images.
          path=image_path
      %}
    </p>
    <h3>input18</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input18.images.
          path=image_path
      %}
    </p>
    <h3>input19</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input19.images.
          path=image_path
      %}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input2.images.
          path=image_path
      %}
    </p>
    <h3>input20</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input20.images.
          path=image_path
      %}
    </p>
    <h3>input21</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input21.images.
          path=image_path
      %}
    </p>
    <h3>input22</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input22.images.
          path=image_path
      %}
    </p>
    <h3>input23</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input23.images.
          path=image_path
      %}
    </p>
    <h3>input24</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input24.images.
          path=image_path
      %}
    </p>
    <h3>input25</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input25.images.
          path=image_path
      %}
    </p>
    <h3>input26</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input26.images.
          path=image_path
      %}
    </p>
    <h3>input27</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input27.images.
          path=image_path
      %}
    </p>
    <h3>input28</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input28.images.
          path=image_path
      %}
    </p>
    <h3>input29</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input29.images.
          path=image_path
      %}
    </p>
    <h3>input3</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input3.images.
          path=image_path
      %}
    </p>
    <h3>input30</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input30.images.
          path=image_path
      %}
    </p>
    <h3>input31</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input31.images.
          path=image_path
      %}
    </p>
    <h3>input32</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input32.images.
          path=image_path
      %}
    </p>
    <h3>input33</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input33.images.
          path=image_path
      %}
    </p>
    <h3>input34</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input34.images.
          path=image_path
      %}
    </p>
    <h3>input35</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input35.images.
          path=image_path
      %}
    </p>
    <h3>input36</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input36.images.
          path=image_path
      %}
    </p>
    <h3>input37</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input37.images.
          path=image_path
      %}
    </p>
    <h3>input38</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input38.images.
          path=image_path
      %}
    </p>
    <h3>input39</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input39.images.
          path=image_path
      %}
    </p>
    <h3>input4</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input4.images.
          path=image_path
      %}
    </p>
    <h3>input40</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input40.images.
          path=image_path
      %}
    </p>
    <h3>input41</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input41.images.
          path=image_path
      %}
    </p>
    <h3>input42</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input42.images.
          path=image_path
      %}
    </p>
    <h3>input43</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input43.images.
          path=image_path
      %}
    </p>
    <h3>input44</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input44.images.
          path=image_path
      %}
    </p>
    <h3>input45</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input45.images.
          path=image_path
      %}
    </p>
    <h3>input46</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input46.images.
          path=image_path
      %}
    </p>
    <h3>input47</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input47.images.
          path=image_path
      %}
    </p>
    <h3>input48</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input48.images.
          path=image_path
      %}
    </p>
    <h3>input49</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input49.images.
          path=image_path
      %}
    </p>
    <h3>input5</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input5.images.
          path=image_path
      %}
    </p>
    <h3>input50</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input50.images.
          path=image_path
      %}
    </p>
    <h3>input51</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input51.images.
          path=image_path
      %}
    </p>
    <h3>input52</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input52.images.
          path=image_path
      %}
    </p>
    <h3>input53</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input53.images.
          path=image_path
      %}
    </p>
    <h3>input54</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input54.images.
          path=image_path
      %}
    </p>
    <h3>input55</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input55.images.
          path=image_path
      %}
    </p>
    <h3>input56</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input56.images.
          path=image_path
      %}
    </p>
    <h3>input57</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input57.images.
          path=image_path
      %}
    </p>
    <h3>input58</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input58.images.
          path=image_path
      %}
    </p>
    <h3>input59</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input59.images.
          path=image_path
      %}
    </p>
    <h3>input6</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input6.images.
          path=image_path
      %}
    </p>
    <h3>input60</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input60.images.
          path=image_path
      %}
    </p>
    <h3>input61</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input61.images.
          path=image_path
      %}
    </p>
    <h3>input62</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input62.images.
          path=image_path
      %}
    </p>
    <h3>input63</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input63.images.
          path=image_path
      %}
    </p>
    <h3>input7</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input7.images.
          path=image_path
      %}
    </p>
    <h3>input8</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input8.images.
          path=image_path
      %}
    </p>
    <h3>input9</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.SwitchNormalMap.attributes.input9.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>