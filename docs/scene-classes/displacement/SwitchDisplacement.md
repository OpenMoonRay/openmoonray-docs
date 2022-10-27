---
title: SwitchDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchDisplacement
{%assign image_path=site.data.scene-classes.displacement.SwitchDisplacement.images.path%}
{%if site.data.scene-classes.displacement.SwitchDisplacement.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.displacement.SwitchDisplacement.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.displacement.SwitchDisplacement.links-%}
---
## See Also
{%for link in site.data.scene-classes.displacement.SwitchDisplacement.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.bound_padding
          path=image_path
      %}
    </p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use, values greater than 63 get cycled back to be in [0,63]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.choice
          path=image_path
      %}
    </p>
    <h3>displacement0</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement0
          path=image_path
      %}
    </p>
    <h3>displacement1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement1
          path=image_path
      %}
    </p>
    <h3>displacement10</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement10
          path=image_path
      %}
    </p>
    <h3>displacement11</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement11
          path=image_path
      %}
    </p>
    <h3>displacement12</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement12
          path=image_path
      %}
    </p>
    <h3>displacement13</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement13
          path=image_path
      %}
    </p>
    <h3>displacement14</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement14
          path=image_path
      %}
    </p>
    <h3>displacement15</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement15
          path=image_path
      %}
    </p>
    <h3>displacement16</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement16
          path=image_path
      %}
    </p>
    <h3>displacement17</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement17
          path=image_path
      %}
    </p>
    <h3>displacement18</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement18
          path=image_path
      %}
    </p>
    <h3>displacement19</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement19
          path=image_path
      %}
    </p>
    <h3>displacement2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement2
          path=image_path
      %}
    </p>
    <h3>displacement20</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement20
          path=image_path
      %}
    </p>
    <h3>displacement21</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement21
          path=image_path
      %}
    </p>
    <h3>displacement22</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement22
          path=image_path
      %}
    </p>
    <h3>displacement23</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement23
          path=image_path
      %}
    </p>
    <h3>displacement24</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement24
          path=image_path
      %}
    </p>
    <h3>displacement25</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement25
          path=image_path
      %}
    </p>
    <h3>displacement26</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement26
          path=image_path
      %}
    </p>
    <h3>displacement27</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement27
          path=image_path
      %}
    </p>
    <h3>displacement28</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement28
          path=image_path
      %}
    </p>
    <h3>displacement29</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement29
          path=image_path
      %}
    </p>
    <h3>displacement3</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement3
          path=image_path
      %}
    </p>
    <h3>displacement30</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement30
          path=image_path
      %}
    </p>
    <h3>displacement31</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement31
          path=image_path
      %}
    </p>
    <h3>displacement32</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement32
          path=image_path
      %}
    </p>
    <h3>displacement33</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement33
          path=image_path
      %}
    </p>
    <h3>displacement34</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement34
          path=image_path
      %}
    </p>
    <h3>displacement35</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement35
          path=image_path
      %}
    </p>
    <h3>displacement36</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement36
          path=image_path
      %}
    </p>
    <h3>displacement37</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement37
          path=image_path
      %}
    </p>
    <h3>displacement38</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement38
          path=image_path
      %}
    </p>
    <h3>displacement39</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement39
          path=image_path
      %}
    </p>
    <h3>displacement4</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement4
          path=image_path
      %}
    </p>
    <h3>displacement40</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement40
          path=image_path
      %}
    </p>
    <h3>displacement41</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement41
          path=image_path
      %}
    </p>
    <h3>displacement42</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement42
          path=image_path
      %}
    </p>
    <h3>displacement43</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement43
          path=image_path
      %}
    </p>
    <h3>displacement44</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement44
          path=image_path
      %}
    </p>
    <h3>displacement45</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement45
          path=image_path
      %}
    </p>
    <h3>displacement46</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement46
          path=image_path
      %}
    </p>
    <h3>displacement47</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement47
          path=image_path
      %}
    </p>
    <h3>displacement48</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement48
          path=image_path
      %}
    </p>
    <h3>displacement49</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement49
          path=image_path
      %}
    </p>
    <h3>displacement5</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement5
          path=image_path
      %}
    </p>
    <h3>displacement50</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement50
          path=image_path
      %}
    </p>
    <h3>displacement51</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement51
          path=image_path
      %}
    </p>
    <h3>displacement52</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement52
          path=image_path
      %}
    </p>
    <h3>displacement53</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement53
          path=image_path
      %}
    </p>
    <h3>displacement54</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement54
          path=image_path
      %}
    </p>
    <h3>displacement55</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement55
          path=image_path
      %}
    </p>
    <h3>displacement56</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement56
          path=image_path
      %}
    </p>
    <h3>displacement57</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement57
          path=image_path
      %}
    </p>
    <h3>displacement58</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement58
          path=image_path
      %}
    </p>
    <h3>displacement59</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement59
          path=image_path
      %}
    </p>
    <h3>displacement6</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement6
          path=image_path
      %}
    </p>
    <h3>displacement60</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement60
          path=image_path
      %}
    </p>
    <h3>displacement61</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement61
          path=image_path
      %}
    </p>
    <h3>displacement62</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement62
          path=image_path
      %}
    </p>
    <h3>displacement63</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement63
          path=image_path
      %}
    </p>
    <h3>displacement7</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement7
          path=image_path
      %}
    </p>
    <h3>displacement8</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement8
          path=image_path
      %}
    </p>
    <h3>displacement9</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.images.attributes.displacement9
          path=image_path
      %}
    </p>
  </p>
</details>
</div>