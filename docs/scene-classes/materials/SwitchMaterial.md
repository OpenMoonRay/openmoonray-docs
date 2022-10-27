---
title: SwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchMaterial
{%assign image_path=site.data.scene-classes.materials.SwitchMaterial.image_path%}
{%if site.data.scene-classes.materials.SwitchMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.SwitchMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.SwitchMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.SwitchMaterial.links-%}
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
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.choice.images.
          path=image_path
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material0.images.
          path=image_path
      %}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material1.images.
          path=image_path
      %}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material10.images.
          path=image_path
      %}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material11.images.
          path=image_path
      %}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material12.images.
          path=image_path
      %}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material13.images.
          path=image_path
      %}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material14.images.
          path=image_path
      %}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material15.images.
          path=image_path
      %}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material16.images.
          path=image_path
      %}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material17.images.
          path=image_path
      %}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material18.images.
          path=image_path
      %}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material19.images.
          path=image_path
      %}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material2.images.
          path=image_path
      %}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material20.images.
          path=image_path
      %}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material21.images.
          path=image_path
      %}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material22.images.
          path=image_path
      %}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material23.images.
          path=image_path
      %}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material24.images.
          path=image_path
      %}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material25.images.
          path=image_path
      %}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material26.images.
          path=image_path
      %}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material27.images.
          path=image_path
      %}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material28.images.
          path=image_path
      %}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material29.images.
          path=image_path
      %}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material3.images.
          path=image_path
      %}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material30.images.
          path=image_path
      %}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material31.images.
          path=image_path
      %}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material32.images.
          path=image_path
      %}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material33.images.
          path=image_path
      %}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material34.images.
          path=image_path
      %}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material35.images.
          path=image_path
      %}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material36.images.
          path=image_path
      %}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material37.images.
          path=image_path
      %}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material38.images.
          path=image_path
      %}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material39.images.
          path=image_path
      %}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material4.images.
          path=image_path
      %}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material40.images.
          path=image_path
      %}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material41.images.
          path=image_path
      %}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material42.images.
          path=image_path
      %}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material43.images.
          path=image_path
      %}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material44.images.
          path=image_path
      %}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material45.images.
          path=image_path
      %}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material46.images.
          path=image_path
      %}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material47.images.
          path=image_path
      %}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material48.images.
          path=image_path
      %}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material49.images.
          path=image_path
      %}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material5.images.
          path=image_path
      %}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material50.images.
          path=image_path
      %}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material51.images.
          path=image_path
      %}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material52.images.
          path=image_path
      %}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material53.images.
          path=image_path
      %}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material54.images.
          path=image_path
      %}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material55.images.
          path=image_path
      %}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material56.images.
          path=image_path
      %}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material57.images.
          path=image_path
      %}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material58.images.
          path=image_path
      %}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material59.images.
          path=image_path
      %}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material6.images.
          path=image_path
      %}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material60.images.
          path=image_path
      %}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material61.images.
          path=image_path
      %}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material62.images.
          path=image_path
      %}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material63.images.
          path=image_path
      %}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material7.images.
          path=image_path
      %}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material8.images.
          path=image_path
      %}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.material9.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.SwitchMaterialattributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>