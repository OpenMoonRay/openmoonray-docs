---
title: DwaSwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaSwitchMaterial
{%assign image_path=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.image_path%}
{%if site.data.scene-classes.materials.dwa.DwaSwitchMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.dwa.DwaSwitchMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.dwa.DwaSwitchMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
          | random walk = 2
      <p class="scene-class-comments">If the two materials disagree on the type of bssrdf, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.fallback_bssrdf.images.
          path=image_path
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaSwitchMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.sss_trace_set.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">which of the 64 inputs (0 to 63) to use</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.choice.images.
          path=image_path
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material0.images.
          path=image_path
      %}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material1.images.
          path=image_path
      %}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material10.images.
          path=image_path
      %}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material11.images.
          path=image_path
      %}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material12.images.
          path=image_path
      %}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material13.images.
          path=image_path
      %}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material14.images.
          path=image_path
      %}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material15.images.
          path=image_path
      %}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material16.images.
          path=image_path
      %}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material17.images.
          path=image_path
      %}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material18.images.
          path=image_path
      %}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material19.images.
          path=image_path
      %}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material2.images.
          path=image_path
      %}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material20.images.
          path=image_path
      %}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material21.images.
          path=image_path
      %}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material22.images.
          path=image_path
      %}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material23.images.
          path=image_path
      %}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material24.images.
          path=image_path
      %}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material25.images.
          path=image_path
      %}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material26.images.
          path=image_path
      %}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material27.images.
          path=image_path
      %}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material28.images.
          path=image_path
      %}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material29.images.
          path=image_path
      %}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material3.images.
          path=image_path
      %}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material30.images.
          path=image_path
      %}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material31.images.
          path=image_path
      %}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material32.images.
          path=image_path
      %}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material33.images.
          path=image_path
      %}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material34.images.
          path=image_path
      %}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material35.images.
          path=image_path
      %}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material36.images.
          path=image_path
      %}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material37.images.
          path=image_path
      %}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material38.images.
          path=image_path
      %}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material39.images.
          path=image_path
      %}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material4.images.
          path=image_path
      %}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material40.images.
          path=image_path
      %}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material41.images.
          path=image_path
      %}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material42.images.
          path=image_path
      %}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material43.images.
          path=image_path
      %}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material44.images.
          path=image_path
      %}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material45.images.
          path=image_path
      %}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material46.images.
          path=image_path
      %}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material47.images.
          path=image_path
      %}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material48.images.
          path=image_path
      %}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material49.images.
          path=image_path
      %}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material5.images.
          path=image_path
      %}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material50.images.
          path=image_path
      %}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material51.images.
          path=image_path
      %}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material52.images.
          path=image_path
      %}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material53.images.
          path=image_path
      %}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material54.images.
          path=image_path
      %}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material55.images.
          path=image_path
      %}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material56.images.
          path=image_path
      %}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material57.images.
          path=image_path
      %}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material58.images.
          path=image_path
      %}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material59.images.
          path=image_path
      %}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material6.images.
          path=image_path
      %}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material60.images.
          path=image_path
      %}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material61.images.
          path=image_path
      %}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material62.images.
          path=image_path
      %}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material63.images.
          path=image_path
      %}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material7.images.
          path=image_path
      %}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material8.images.
          path=image_path
      %}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.material9.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterialattributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>