---
title: DwaSwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaSwitchMaterial
{%-include overview.html data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
{%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.gallery data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
{%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.links-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.fallback_bssrdf.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.fallback_bssrdf.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaSwitchMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.sss_trace_set.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.sss_trace_set.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.choice.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.choice.links heading=4-%}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.label.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material0.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material0.links heading=4-%}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material1.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material1.links heading=4-%}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material10.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material10.links heading=4-%}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material11.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material11.links heading=4-%}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material12.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material12.links heading=4-%}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material13.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material13.links heading=4-%}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material14.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material14.links heading=4-%}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material15.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material15.links heading=4-%}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material16.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material16.links heading=4-%}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material17.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material17.links heading=4-%}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material18.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material18.links heading=4-%}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material19.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material19.links heading=4-%}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material2.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material2.links heading=4-%}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material20.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material20.links heading=4-%}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material21.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material21.links heading=4-%}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material22.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material22.links heading=4-%}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material23.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material23.links heading=4-%}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material24.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material24.links heading=4-%}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material25.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material25.links heading=4-%}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material26.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material26.links heading=4-%}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material27.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material27.links heading=4-%}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material28.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material28.links heading=4-%}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material29.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material29.links heading=4-%}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material3.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material3.links heading=4-%}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material30.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material30.links heading=4-%}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material31.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material31.links heading=4-%}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material32.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material32.links heading=4-%}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material33.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material33.links heading=4-%}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material34.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material34.links heading=4-%}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material35.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material35.links heading=4-%}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material36.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material36.links heading=4-%}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material37.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material37.links heading=4-%}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material38.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material38.links heading=4-%}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material39.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material39.links heading=4-%}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material4.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material4.links heading=4-%}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material40.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material40.links heading=4-%}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material41.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material41.links heading=4-%}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material42.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material42.links heading=4-%}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material43.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material43.links heading=4-%}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material44.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material44.links heading=4-%}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material45.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material45.links heading=4-%}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material46.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material46.links heading=4-%}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material47.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material47.links heading=4-%}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material48.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material48.links heading=4-%}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material49.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material49.links heading=4-%}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material5.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material5.links heading=4-%}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material50.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material50.links heading=4-%}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material51.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material51.links heading=4-%}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material52.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material52.links heading=4-%}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material53.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material53.links heading=4-%}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material54.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material54.links heading=4-%}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material55.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material55.links heading=4-%}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material56.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material56.links heading=4-%}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material57.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material57.links heading=4-%}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material58.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material58.links heading=4-%}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material59.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material59.links heading=4-%}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material6.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material6.links heading=4-%}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material60.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material60.links heading=4-%}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material61.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material61.links heading=4-%}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material62.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material62.links heading=4-%}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material63.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material63.links heading=4-%}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material7.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material7.links heading=4-%}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material8.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material8.links heading=4-%}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material9.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.material9.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.priority.images data=site.data.scene-classes.materials.dwa.DwaSwitchMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.dwa.DwaSwitchMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>