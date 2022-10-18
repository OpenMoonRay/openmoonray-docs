---
title: SwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchMaterial
---
{%assign image_dir=site.data.scene-classes.materials.SwitchMaterial.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.materials.SwitchMaterial.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.choice
          image_dir=image_dir
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.extra_aovs
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.label
          image_dir=image_dir
      %}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material0
          image_dir=image_dir
      %}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material1
          image_dir=image_dir
      %}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material10
          image_dir=image_dir
      %}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material11
          image_dir=image_dir
      %}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material12
          image_dir=image_dir
      %}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material13
          image_dir=image_dir
      %}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material14
          image_dir=image_dir
      %}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material15
          image_dir=image_dir
      %}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material16
          image_dir=image_dir
      %}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material17
          image_dir=image_dir
      %}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material18
          image_dir=image_dir
      %}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material19
          image_dir=image_dir
      %}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material2
          image_dir=image_dir
      %}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material20
          image_dir=image_dir
      %}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material21
          image_dir=image_dir
      %}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material22
          image_dir=image_dir
      %}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material23
          image_dir=image_dir
      %}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material24
          image_dir=image_dir
      %}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material25
          image_dir=image_dir
      %}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material26
          image_dir=image_dir
      %}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material27
          image_dir=image_dir
      %}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material28
          image_dir=image_dir
      %}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material29
          image_dir=image_dir
      %}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material3
          image_dir=image_dir
      %}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material30
          image_dir=image_dir
      %}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material31
          image_dir=image_dir
      %}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material32
          image_dir=image_dir
      %}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material33
          image_dir=image_dir
      %}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material34
          image_dir=image_dir
      %}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material35
          image_dir=image_dir
      %}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material36
          image_dir=image_dir
      %}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material37
          image_dir=image_dir
      %}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material38
          image_dir=image_dir
      %}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material39
          image_dir=image_dir
      %}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material4
          image_dir=image_dir
      %}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material40
          image_dir=image_dir
      %}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material41
          image_dir=image_dir
      %}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material42
          image_dir=image_dir
      %}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material43
          image_dir=image_dir
      %}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material44
          image_dir=image_dir
      %}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material45
          image_dir=image_dir
      %}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material46
          image_dir=image_dir
      %}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material47
          image_dir=image_dir
      %}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material48
          image_dir=image_dir
      %}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material49
          image_dir=image_dir
      %}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material5
          image_dir=image_dir
      %}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material50
          image_dir=image_dir
      %}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material51
          image_dir=image_dir
      %}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material52
          image_dir=image_dir
      %}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material53
          image_dir=image_dir
      %}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material54
          image_dir=image_dir
      %}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material55
          image_dir=image_dir
      %}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material56
          image_dir=image_dir
      %}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material57
          image_dir=image_dir
      %}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material58
          image_dir=image_dir
      %}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material59
          image_dir=image_dir
      %}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material6
          image_dir=image_dir
      %}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material60
          image_dir=image_dir
      %}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material61
          image_dir=image_dir
      %}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material62
          image_dir=image_dir
      %}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material63
          image_dir=image_dir
      %}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material7
          image_dir=image_dir
      %}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material8
          image_dir=image_dir
      %}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.material9
          image_dir=image_dir
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterial.priority
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>