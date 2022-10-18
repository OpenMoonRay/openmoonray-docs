---
title: SwitchDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchDisplacement
---
{%assign image_dir=site.data.scene-classes.displacement.SwitchDisplacement.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.displacement.SwitchDisplacement.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.bound_padding
          image_dir=image_dir
      %}
    </p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use, values greater than 63 get cycled back to be in [0,63]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.choice
          image_dir=image_dir
      %}
    </p>
    <h3>displacement0</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement0
          image_dir=image_dir
      %}
    </p>
    <h3>displacement1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement1
          image_dir=image_dir
      %}
    </p>
    <h3>displacement10</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement10
          image_dir=image_dir
      %}
    </p>
    <h3>displacement11</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement11
          image_dir=image_dir
      %}
    </p>
    <h3>displacement12</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement12
          image_dir=image_dir
      %}
    </p>
    <h3>displacement13</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement13
          image_dir=image_dir
      %}
    </p>
    <h3>displacement14</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement14
          image_dir=image_dir
      %}
    </p>
    <h3>displacement15</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement15
          image_dir=image_dir
      %}
    </p>
    <h3>displacement16</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement16
          image_dir=image_dir
      %}
    </p>
    <h3>displacement17</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement17
          image_dir=image_dir
      %}
    </p>
    <h3>displacement18</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement18
          image_dir=image_dir
      %}
    </p>
    <h3>displacement19</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement19
          image_dir=image_dir
      %}
    </p>
    <h3>displacement2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement2
          image_dir=image_dir
      %}
    </p>
    <h3>displacement20</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement20
          image_dir=image_dir
      %}
    </p>
    <h3>displacement21</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement21
          image_dir=image_dir
      %}
    </p>
    <h3>displacement22</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement22
          image_dir=image_dir
      %}
    </p>
    <h3>displacement23</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement23
          image_dir=image_dir
      %}
    </p>
    <h3>displacement24</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement24
          image_dir=image_dir
      %}
    </p>
    <h3>displacement25</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement25
          image_dir=image_dir
      %}
    </p>
    <h3>displacement26</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement26
          image_dir=image_dir
      %}
    </p>
    <h3>displacement27</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement27
          image_dir=image_dir
      %}
    </p>
    <h3>displacement28</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement28
          image_dir=image_dir
      %}
    </p>
    <h3>displacement29</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement29
          image_dir=image_dir
      %}
    </p>
    <h3>displacement3</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement3
          image_dir=image_dir
      %}
    </p>
    <h3>displacement30</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement30
          image_dir=image_dir
      %}
    </p>
    <h3>displacement31</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement31
          image_dir=image_dir
      %}
    </p>
    <h3>displacement32</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement32
          image_dir=image_dir
      %}
    </p>
    <h3>displacement33</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement33
          image_dir=image_dir
      %}
    </p>
    <h3>displacement34</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement34
          image_dir=image_dir
      %}
    </p>
    <h3>displacement35</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement35
          image_dir=image_dir
      %}
    </p>
    <h3>displacement36</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement36
          image_dir=image_dir
      %}
    </p>
    <h3>displacement37</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement37
          image_dir=image_dir
      %}
    </p>
    <h3>displacement38</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement38
          image_dir=image_dir
      %}
    </p>
    <h3>displacement39</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement39
          image_dir=image_dir
      %}
    </p>
    <h3>displacement4</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement4
          image_dir=image_dir
      %}
    </p>
    <h3>displacement40</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement40
          image_dir=image_dir
      %}
    </p>
    <h3>displacement41</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement41
          image_dir=image_dir
      %}
    </p>
    <h3>displacement42</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement42
          image_dir=image_dir
      %}
    </p>
    <h3>displacement43</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement43
          image_dir=image_dir
      %}
    </p>
    <h3>displacement44</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement44
          image_dir=image_dir
      %}
    </p>
    <h3>displacement45</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement45
          image_dir=image_dir
      %}
    </p>
    <h3>displacement46</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement46
          image_dir=image_dir
      %}
    </p>
    <h3>displacement47</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement47
          image_dir=image_dir
      %}
    </p>
    <h3>displacement48</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement48
          image_dir=image_dir
      %}
    </p>
    <h3>displacement49</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement49
          image_dir=image_dir
      %}
    </p>
    <h3>displacement5</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement5
          image_dir=image_dir
      %}
    </p>
    <h3>displacement50</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement50
          image_dir=image_dir
      %}
    </p>
    <h3>displacement51</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement51
          image_dir=image_dir
      %}
    </p>
    <h3>displacement52</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement52
          image_dir=image_dir
      %}
    </p>
    <h3>displacement53</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement53
          image_dir=image_dir
      %}
    </p>
    <h3>displacement54</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement54
          image_dir=image_dir
      %}
    </p>
    <h3>displacement55</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement55
          image_dir=image_dir
      %}
    </p>
    <h3>displacement56</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement56
          image_dir=image_dir
      %}
    </p>
    <h3>displacement57</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement57
          image_dir=image_dir
      %}
    </p>
    <h3>displacement58</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement58
          image_dir=image_dir
      %}
    </p>
    <h3>displacement59</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement59
          image_dir=image_dir
      %}
    </p>
    <h3>displacement6</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement6
          image_dir=image_dir
      %}
    </p>
    <h3>displacement60</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement60
          image_dir=image_dir
      %}
    </p>
    <h3>displacement61</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement61
          image_dir=image_dir
      %}
    </p>
    <h3>displacement62</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement62
          image_dir=image_dir
      %}
    </p>
    <h3>displacement63</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement63
          image_dir=image_dir
      %}
    </p>
    <h3>displacement7</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement7
          image_dir=image_dir
      %}
    </p>
    <h3>displacement8</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement8
          image_dir=image_dir
      %}
    </p>
    <h3>displacement9</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.SwitchDisplacement.displacement9
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>