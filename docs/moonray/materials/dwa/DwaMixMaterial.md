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
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>blend_color_space</h2>
<b>Int</b>  *enum*

- RGB = 0 (default)

- HSV = 1

- HSL = 2


Color space used when blending the two material's color parameters


<h2>fallback_bssrdf</h2>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


If child materials disagree on the type of bssrdf, this type will be used instead.


<h2>fallback_clearcoat_use_bending</h2>
<b>Bool</b>  

Default value : True  

If child materials disagree on the type of clearcoat use bending, this type will be used instead.


<h2>fallback_outer_specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of outer specular model, this type will be used instead.


<h2>fallback_specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of specular model, this type will be used instead.


<h2>fallback_thin_geometry</h2>
<b>Bool</b>  

Default value : True  

If child materials disagree on the type of thin geometry, this type will be used instead.


<h2>fallback_toon_specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)

- Toon = 2


If child materials disagree on the type of toon specular model, this type will be used instead.


<h2>sss_trace_set</h2>
<b>Traceset</b>  

Default value : None  

By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


</details>


<details open>
<summary class="scene-class-attr-group">Glitter Fallback attributes</summary>

<h2>fallback_glitter_LOD_quality</h2>
<b>Float</b>  

Default value : 0.5  

controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_debug_mode</h2>
<b>Int</b>  *enum*

- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5


developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_layering_mode</h2>
<b>Int</b>  *enum*

- physical = 0 (default)

- additive = 1


layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_randomness</h2>
<b>Float</b>  

Default value : 0.5  

randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_seed</h2>
<b>Int</b>  

Default value : 0  

The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_space</h2>
<b>Int</b>  *enum*

- object = 4

- reference = 5 (default)


The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_style_A_frequency</h2>
<b>Float</b>  

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_style_B_frequency</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_texture_A</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_texture_B</h2>
<b>String</b>  

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>material0</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material0</b> needs to be written</p>


<h2>material1</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material1</b> needs to be written</p>


<h2>material10</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material10</b> needs to be written</p>


<h2>material11</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material11</b> needs to be written</p>


<h2>material12</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material12</b> needs to be written</p>


<h2>material13</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material13</b> needs to be written</p>


<h2>material14</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material14</b> needs to be written</p>


<h2>material15</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material15</b> needs to be written</p>


<h2>material16</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material16</b> needs to be written</p>


<h2>material17</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material17</b> needs to be written</p>


<h2>material18</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material18</b> needs to be written</p>


<h2>material19</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material19</b> needs to be written</p>


<h2>material2</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material2</b> needs to be written</p>


<h2>material20</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material20</b> needs to be written</p>


<h2>material21</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material21</b> needs to be written</p>


<h2>material22</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material22</b> needs to be written</p>


<h2>material23</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material23</b> needs to be written</p>


<h2>material24</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material24</b> needs to be written</p>


<h2>material25</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material25</b> needs to be written</p>


<h2>material26</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material26</b> needs to be written</p>


<h2>material27</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material27</b> needs to be written</p>


<h2>material28</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material28</b> needs to be written</p>


<h2>material29</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material29</b> needs to be written</p>


<h2>material3</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material3</b> needs to be written</p>


<h2>material30</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material30</b> needs to be written</p>


<h2>material31</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material31</b> needs to be written</p>


<h2>material32</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material32</b> needs to be written</p>


<h2>material33</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material33</b> needs to be written</p>


<h2>material34</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material34</b> needs to be written</p>


<h2>material35</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material35</b> needs to be written</p>


<h2>material36</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material36</b> needs to be written</p>


<h2>material37</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material37</b> needs to be written</p>


<h2>material38</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material38</b> needs to be written</p>


<h2>material39</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material39</b> needs to be written</p>


<h2>material4</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material4</b> needs to be written</p>


<h2>material40</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material40</b> needs to be written</p>


<h2>material41</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material41</b> needs to be written</p>


<h2>material42</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material42</b> needs to be written</p>


<h2>material43</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material43</b> needs to be written</p>


<h2>material44</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material44</b> needs to be written</p>


<h2>material45</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material45</b> needs to be written</p>


<h2>material46</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material46</b> needs to be written</p>


<h2>material47</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material47</b> needs to be written</p>


<h2>material48</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material48</b> needs to be written</p>


<h2>material49</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material49</b> needs to be written</p>


<h2>material5</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material5</b> needs to be written</p>


<h2>material50</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material50</b> needs to be written</p>


<h2>material51</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material51</b> needs to be written</p>


<h2>material52</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material52</b> needs to be written</p>


<h2>material53</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material53</b> needs to be written</p>


<h2>material54</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material54</b> needs to be written</p>


<h2>material55</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material55</b> needs to be written</p>


<h2>material56</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material56</b> needs to be written</p>


<h2>material57</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material57</b> needs to be written</p>


<h2>material58</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material58</b> needs to be written</p>


<h2>material59</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material59</b> needs to be written</p>


<h2>material6</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material6</b> needs to be written</p>


<h2>material60</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material60</b> needs to be written</p>


<h2>material61</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material61</b> needs to be written</p>


<h2>material62</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material62</b> needs to be written</p>


<h2>material63</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material63</b> needs to be written</p>


<h2>material7</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material7</b> needs to be written</p>


<h2>material8</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material8</b> needs to be written</p>


<h2>material9</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material9</b> needs to be written</p>


<h2>mix</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Which of the 64 inputs (0 to 63) to use. Fractional values will mix the two materials the value lies between


<h2>mix_interpolation</h2>
<b>Int</b>  *enum*

- linear = 0 (default)

- hold = 1

- nearest = 2

- smooth = 3


Adjusts rate of transition from one material to the next based on mix value


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


<h2>remap_mix_to_inputs</h2>
<b>Bool</b>  

Default value : True  

When enabled, multiplies mix value by number of inputs used. Inputs should start at 0 with no gaps


</details>

