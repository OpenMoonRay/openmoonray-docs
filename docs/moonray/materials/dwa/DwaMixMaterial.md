---
title: DwaMixMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaMixMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
  
  <h3>blend_color_space</h3>
  <b>Int</b>  *enum*
  
  - RGB = 0 (default)
  
  - HSV = 1
  
  - HSL = 2
  
  
  <p>Color space used when blending the two material's color parameters</p>
  
  
  <h3>fallback_bssrdf</h3>
  <b>Int</b>  *enum*
  
  - normalized diffusion = 0 (default)
  
  - dipole = 1
  
  - random walk = 2
  
  
  <p>If child materials disagree on the type of bssrdf, this type will be used instead.</p>
  
  
  <h3>fallback_clearcoat_use_bending</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
  
  
  <h3>fallback_outer_specular_model</h3>
  <b>Int</b>  *enum*
  
  - Beckmann = 0
  
  - GGX = 1 (default)
  
  
  <p>If child materials disagree on the type of outer specular model, this type will be used instead.</p>
  
  
  <h3>fallback_specular_model</h3>
  <b>Int</b>  *enum*
  
  - Beckmann = 0
  
  - GGX = 1 (default)
  
  
  <p>If child materials disagree on the type of specular model, this type will be used instead.</p>
  
  
  <h3>fallback_thin_geometry</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>If child materials disagree on the type of thin geometry, this type will be used instead.</p>
  
  
  <h3>fallback_toon_specular_model</h3>
  <b>Int</b>  *enum*
  
  - Beckmann = 0
  
  - GGX = 1 (default)
  
  - Toon = 2
  
  
  <p>If child materials disagree on the type of toon specular model, this type will be used instead.</p>
  
  
  <h3>sss_trace_set</h3>
  <b>Traceset</b>  
  
  default: None
  
  <p>By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Glitter Fallback attributes</summary>
  <p>
  
  <h3>fallback_glitter_LOD_quality</h3>
  <b>Float</b>  
  
  default: 0.5
  
  <p>controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_debug_mode</h3>
  <b>Int</b>  *enum*
  
  - off = 0 (default)
  
  - blend = 1
  
  - color = 2
  
  - averageColor = 3
  
  - footprintArea = 4
  
  - radius = 5
  
  
  <p>developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_layering_mode</h3>
  <b>Int</b>  *enum*
  
  - physical = 0 (default)
  
  - additive = 1
  
  
  <p>layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_randomness</h3>
  <b>Float</b>  
  
  default: 0.5
  
  <p>randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_seed</h3>
  <b>Int</b>  
  
  default: 0
  
  <p>The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_space</h3>
  <b>Int</b>  *enum*
  
  - object = 4
  
  - reference = 5 (default)
  
  
  <p>The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_style_A_frequency</h3>
  <b>Float</b>  
  
  default: 1.0
  
  <p>0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_style_B_frequency</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_texture_A</h3>
  <b>String</b>  *filename*
  
  default: 
  
  <p>filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  <h3>fallback_glitter_texture_B</h3>
  <b>String</b>  
  
  default: 
  
  <p>filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  <p>Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  <p>label used in material and light aovs</p>
  
  
  <h3>material0</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material1</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material10</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material11</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material12</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material13</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material14</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material15</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material16</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material17</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material18</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material19</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material2</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material20</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material21</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material22</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material23</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material24</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material25</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material26</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material27</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material28</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material29</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material3</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material30</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material31</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material32</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material33</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material34</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material35</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material36</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material37</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material38</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material39</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material4</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material40</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material41</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material42</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material43</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material44</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material45</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material46</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material47</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material48</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material49</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material5</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material50</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material51</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material52</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material53</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material54</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material55</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material56</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material57</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material58</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material59</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material6</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material60</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material61</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material62</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material63</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material7</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material8</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>material9</h3>
  <b>Dwabaselayerable</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>mix</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>Which of the 64 inputs (0 to 63) to use. Fractional values will mix the two materials the value lies between</p>
  
  
  <h3>mix_interpolation</h3>
  <b>Int</b>  *enum*
  
  - linear = 0 (default)
  
  - hold = 1
  
  - nearest = 2
  
  - smooth = 3
  
  
  <p>Adjusts rate of transition from one material to the next based on mix value</p>
  
  
  <h3>priority</h3>
  <b>Int</b>  
  
  default: 0
  
  <p>The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
  
  
  <h3>remap_mix_to_inputs</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>When enabled, multiplies mix value by number of inputs used. Inputs should start at 0 with no gaps</p>
  
  
  </p>
</details>

