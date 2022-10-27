---
title: SwitchDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchDisplacement
{%assign image_path=site.data.scene-classes.displacement.SwitchDisplacement.image_path%}
{%if site.data.scene-classes.displacement.SwitchDisplacement.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.displacement.SwitchDisplacement.gallery
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
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.bound_padding.images.
          path=image_path
      %}
    </p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use, values greater than 63 get cycled back to be in [0,63]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.choice.images.
          path=image_path
      %}
    </p>
    <h3>displacement0</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement0.images.
          path=image_path
      %}
    </p>
    <h3>displacement1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement1.images.
          path=image_path
      %}
    </p>
    <h3>displacement10</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement10.images.
          path=image_path
      %}
    </p>
    <h3>displacement11</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement11.images.
          path=image_path
      %}
    </p>
    <h3>displacement12</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement12.images.
          path=image_path
      %}
    </p>
    <h3>displacement13</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement13.images.
          path=image_path
      %}
    </p>
    <h3>displacement14</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement14.images.
          path=image_path
      %}
    </p>
    <h3>displacement15</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement15.images.
          path=image_path
      %}
    </p>
    <h3>displacement16</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement16.images.
          path=image_path
      %}
    </p>
    <h3>displacement17</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement17.images.
          path=image_path
      %}
    </p>
    <h3>displacement18</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement18.images.
          path=image_path
      %}
    </p>
    <h3>displacement19</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement19.images.
          path=image_path
      %}
    </p>
    <h3>displacement2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement2.images.
          path=image_path
      %}
    </p>
    <h3>displacement20</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement20.images.
          path=image_path
      %}
    </p>
    <h3>displacement21</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement21.images.
          path=image_path
      %}
    </p>
    <h3>displacement22</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement22.images.
          path=image_path
      %}
    </p>
    <h3>displacement23</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement23.images.
          path=image_path
      %}
    </p>
    <h3>displacement24</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement24.images.
          path=image_path
      %}
    </p>
    <h3>displacement25</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement25.images.
          path=image_path
      %}
    </p>
    <h3>displacement26</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement26.images.
          path=image_path
      %}
    </p>
    <h3>displacement27</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement27.images.
          path=image_path
      %}
    </p>
    <h3>displacement28</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement28.images.
          path=image_path
      %}
    </p>
    <h3>displacement29</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement29.images.
          path=image_path
      %}
    </p>
    <h3>displacement3</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement3.images.
          path=image_path
      %}
    </p>
    <h3>displacement30</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement30.images.
          path=image_path
      %}
    </p>
    <h3>displacement31</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement31.images.
          path=image_path
      %}
    </p>
    <h3>displacement32</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement32.images.
          path=image_path
      %}
    </p>
    <h3>displacement33</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement33.images.
          path=image_path
      %}
    </p>
    <h3>displacement34</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement34.images.
          path=image_path
      %}
    </p>
    <h3>displacement35</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement35.images.
          path=image_path
      %}
    </p>
    <h3>displacement36</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement36.images.
          path=image_path
      %}
    </p>
    <h3>displacement37</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement37.images.
          path=image_path
      %}
    </p>
    <h3>displacement38</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement38.images.
          path=image_path
      %}
    </p>
    <h3>displacement39</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement39.images.
          path=image_path
      %}
    </p>
    <h3>displacement4</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement4.images.
          path=image_path
      %}
    </p>
    <h3>displacement40</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement40.images.
          path=image_path
      %}
    </p>
    <h3>displacement41</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement41.images.
          path=image_path
      %}
    </p>
    <h3>displacement42</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement42.images.
          path=image_path
      %}
    </p>
    <h3>displacement43</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement43.images.
          path=image_path
      %}
    </p>
    <h3>displacement44</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement44.images.
          path=image_path
      %}
    </p>
    <h3>displacement45</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement45.images.
          path=image_path
      %}
    </p>
    <h3>displacement46</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement46.images.
          path=image_path
      %}
    </p>
    <h3>displacement47</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement47.images.
          path=image_path
      %}
    </p>
    <h3>displacement48</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement48.images.
          path=image_path
      %}
    </p>
    <h3>displacement49</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement49.images.
          path=image_path
      %}
    </p>
    <h3>displacement5</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement5.images.
          path=image_path
      %}
    </p>
    <h3>displacement50</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement50.images.
          path=image_path
      %}
    </p>
    <h3>displacement51</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement51.images.
          path=image_path
      %}
    </p>
    <h3>displacement52</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement52.images.
          path=image_path
      %}
    </p>
    <h3>displacement53</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement53.images.
          path=image_path
      %}
    </p>
    <h3>displacement54</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement54.images.
          path=image_path
      %}
    </p>
    <h3>displacement55</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement55.images.
          path=image_path
      %}
    </p>
    <h3>displacement56</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement56.images.
          path=image_path
      %}
    </p>
    <h3>displacement57</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement57.images.
          path=image_path
      %}
    </p>
    <h3>displacement58</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement58.images.
          path=image_path
      %}
    </p>
    <h3>displacement59</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement59.images.
          path=image_path
      %}
    </p>
    <h3>displacement6</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement6.images.
          path=image_path
      %}
    </p>
    <h3>displacement60</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement60.images.
          path=image_path
      %}
    </p>
    <h3>displacement61</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement61.images.
          path=image_path
      %}
    </p>
    <h3>displacement62</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement62.images.
          path=image_path
      %}
    </p>
    <h3>displacement63</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement63.images.
          path=image_path
      %}
    </p>
    <h3>displacement7</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement7.images.
          path=image_path
      %}
    </p>
    <h3>displacement8</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement8.images.
          path=image_path
      %}
    </p>
    <h3>displacement9</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.attributes.displacement9.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>