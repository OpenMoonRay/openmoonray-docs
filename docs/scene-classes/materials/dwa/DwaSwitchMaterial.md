---
title: DwaSwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaSwitchMaterial
{%assign image_path=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.path%}
{%if site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.gallery
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
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.fallback_bssrdf
          path=image_path
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaSwitchMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.sss_trace_set
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
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.choice
          path=image_path
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.extra_aovs
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material0
          path=image_path
      %}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material1
          path=image_path
      %}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material10
          path=image_path
      %}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material11
          path=image_path
      %}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material12
          path=image_path
      %}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material13
          path=image_path
      %}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material14
          path=image_path
      %}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material15
          path=image_path
      %}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material16
          path=image_path
      %}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material17
          path=image_path
      %}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material18
          path=image_path
      %}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material19
          path=image_path
      %}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material2
          path=image_path
      %}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material20
          path=image_path
      %}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material21
          path=image_path
      %}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material22
          path=image_path
      %}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material23
          path=image_path
      %}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material24
          path=image_path
      %}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material25
          path=image_path
      %}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material26
          path=image_path
      %}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material27
          path=image_path
      %}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material28
          path=image_path
      %}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material29
          path=image_path
      %}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material3
          path=image_path
      %}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material30
          path=image_path
      %}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material31
          path=image_path
      %}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material32
          path=image_path
      %}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material33
          path=image_path
      %}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material34
          path=image_path
      %}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material35
          path=image_path
      %}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material36
          path=image_path
      %}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material37
          path=image_path
      %}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material38
          path=image_path
      %}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material39
          path=image_path
      %}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material4
          path=image_path
      %}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material40
          path=image_path
      %}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material41
          path=image_path
      %}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material42
          path=image_path
      %}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material43
          path=image_path
      %}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material44
          path=image_path
      %}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material45
          path=image_path
      %}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material46
          path=image_path
      %}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material47
          path=image_path
      %}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material48
          path=image_path
      %}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material49
          path=image_path
      %}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material5
          path=image_path
      %}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material50
          path=image_path
      %}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material51
          path=image_path
      %}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material52
          path=image_path
      %}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material53
          path=image_path
      %}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material54
          path=image_path
      %}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material55
          path=image_path
      %}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material56
          path=image_path
      %}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material57
          path=image_path
      %}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material58
          path=image_path
      %}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material59
          path=image_path
      %}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material6
          path=image_path
      %}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material60
          path=image_path
      %}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material61
          path=image_path
      %}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material62
          path=image_path
      %}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material63
          path=image_path
      %}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material7
          path=image_path
      %}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material8
          path=image_path
      %}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.material9
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.images.attributes.priority
          path=image_path
      %}
    </p>
  </p>
</details>
</div>