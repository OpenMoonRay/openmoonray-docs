---
title: DwaMixMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaMixMaterial

**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

Documentation for class DwaMixMaterial



---

## <p class="scene-class-attr-group">Advanced attributes</p>

## blend_color_space

**Int** *enum*



- RGB = 0 (default)

- HSV = 1

- HSL = 2





Color space used when blending the two material's color parameters




## fallback_bssrdf

**Int** *enum*



- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2





If child materials disagree on the type of bssrdf, this type will be used instead.




## fallback_clearcoat_use_bending

**Bool** 


Default value : True




If child materials disagree on the type of clearcoat use bending, this type will be used instead.




## fallback_outer_specular_model

**Int** *enum*



- Beckmann = 0

- GGX = 1 (default)





If child materials disagree on the type of outer specular model, this type will be used instead.




## fallback_specular_model

**Int** *enum*



- Beckmann = 0

- GGX = 1 (default)





If child materials disagree on the type of specular model, this type will be used instead.




## fallback_thin_geometry

**Bool** 


Default value : True




If child materials disagree on the type of thin geometry, this type will be used instead.




## fallback_toon_specular_model

**Int** *enum*



- Beckmann = 0

- GGX = 1 (default)

- Toon = 2





If child materials disagree on the type of toon specular model, this type will be used instead.




## sss_trace_set

**Traceset** 


Default value : None




By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.






---

## <p class="scene-class-attr-group">Glitter Fallback attributes</p>

## fallback_glitter_LOD_quality

**Float** 


Default value : 0.5




controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_debug_mode

**Int** *enum*



- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5





developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_layering_mode

**Int** *enum*



- physical = 0 (default)

- additive = 1





layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_randomness

**Float** 


Default value : 0.5




randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_seed

**Int** 


Default value : 0




The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_space

**Int** *enum*



- object = 4

- reference = 5 (default)





The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_style_A_frequency

**Float** 


Default value : 1.0




0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_style_B_frequency

**Float** *bindable*


Default value : 1.0




0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_texture_A

**String** *filename*


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.




## fallback_glitter_texture_B

**String** 


Default value : 




filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.






---

## <p class="scene-class-attr-group">General attributes</p>

## extra_aovs

**Map** 


Default value : None




Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result




## label

**String** 


Default value : 




label used in material and light aovs




## material0

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material0</b> needs to be written</p>




## material1

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material1</b> needs to be written</p>




## material10

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material10</b> needs to be written</p>




## material11

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material11</b> needs to be written</p>




## material12

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material12</b> needs to be written</p>




## material13

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material13</b> needs to be written</p>




## material14

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material14</b> needs to be written</p>




## material15

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material15</b> needs to be written</p>




## material16

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material16</b> needs to be written</p>




## material17

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material17</b> needs to be written</p>




## material18

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material18</b> needs to be written</p>




## material19

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material19</b> needs to be written</p>




## material2

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material2</b> needs to be written</p>




## material20

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material20</b> needs to be written</p>




## material21

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material21</b> needs to be written</p>




## material22

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material22</b> needs to be written</p>




## material23

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material23</b> needs to be written</p>




## material24

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material24</b> needs to be written</p>




## material25

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material25</b> needs to be written</p>




## material26

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material26</b> needs to be written</p>




## material27

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material27</b> needs to be written</p>




## material28

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material28</b> needs to be written</p>




## material29

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material29</b> needs to be written</p>




## material3

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material3</b> needs to be written</p>




## material30

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material30</b> needs to be written</p>




## material31

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material31</b> needs to be written</p>




## material32

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material32</b> needs to be written</p>




## material33

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material33</b> needs to be written</p>




## material34

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material34</b> needs to be written</p>




## material35

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material35</b> needs to be written</p>




## material36

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material36</b> needs to be written</p>




## material37

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material37</b> needs to be written</p>




## material38

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material38</b> needs to be written</p>




## material39

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material39</b> needs to be written</p>




## material4

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material4</b> needs to be written</p>




## material40

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material40</b> needs to be written</p>




## material41

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material41</b> needs to be written</p>




## material42

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material42</b> needs to be written</p>




## material43

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material43</b> needs to be written</p>




## material44

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material44</b> needs to be written</p>




## material45

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material45</b> needs to be written</p>




## material46

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material46</b> needs to be written</p>




## material47

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material47</b> needs to be written</p>




## material48

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material48</b> needs to be written</p>




## material49

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material49</b> needs to be written</p>




## material5

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material5</b> needs to be written</p>




## material50

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material50</b> needs to be written</p>




## material51

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material51</b> needs to be written</p>




## material52

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material52</b> needs to be written</p>




## material53

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material53</b> needs to be written</p>




## material54

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material54</b> needs to be written</p>




## material55

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material55</b> needs to be written</p>




## material56

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material56</b> needs to be written</p>




## material57

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material57</b> needs to be written</p>




## material58

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material58</b> needs to be written</p>




## material59

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material59</b> needs to be written</p>




## material6

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material6</b> needs to be written</p>




## material60

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material60</b> needs to be written</p>




## material61

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material61</b> needs to be written</p>




## material62

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material62</b> needs to be written</p>




## material63

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material63</b> needs to be written</p>




## material7

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material7</b> needs to be written</p>




## material8

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material8</b> needs to be written</p>




## material9

**Dwabaselayerable** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>material9</b> needs to be written</p>




## mix

**Float** *bindable*


Default value : 0.0




Which of the 64 inputs (0 to 63) to use. Fractional values will mix the two materials the value lies between




## mix_interpolation

**Int** *enum*



- linear = 0 (default)

- hold = 1

- nearest = 2

- smooth = 3





Adjusts rate of transition from one material to the next based on mix value




## priority

**Int** 


Default value : 0




The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.




## remap_mix_to_inputs

**Bool** 


Default value : True




When enabled, multiplies mix value by number of inputs used. Inputs should start at 0 with no gaps





