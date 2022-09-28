---
title: BaseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BaseMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Diffuse attributes</summary>
  <p>
    
    <h3>diffuse</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_factor</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Directional Diffuse attributes</summary>
  <p>
    
    <h3>directional_diffuse</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>directional_diffuse_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>directional_diffuse_factor</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>directional_diffuse_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
    
    <h3>emission</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>emission_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>emission_factor</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Iridescence attributes</summary>
  <p>
    
    <h3>iridescence</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>iridescence_at_0_incidence</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Iridescence effect at 0 degree viewing angle</p>
      
    
    <h3>iridescence_exponent</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Tightens or broadens the distribution of colors</p>
      
    
    <h3>iridescence_factor</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">overall multiplier on effect of iridescence</p>
      
    
    <h3>iridescence_flip_hue_direction</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>iridescence_primary_color</h3>
    <b>Rgb</b>
    
      
        default: [ 1, 0, 0 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">First color to interpolate from around the hue wheel</p>
      
    
    <h3>iridescence_secondary_color</h3>
    <b>Rgb</b>
    
      
        default: [ 1, 0, 0 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Second color to interpolate to around the hue wheel</p>
      
    
    <h3>iridescence_thickness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Controls how much the color spectrum is repeated</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal attributes</summary>
  <p>
    
    <h3>input_normal_space</h3>
    <b>Int</b>
    <i>enum</i>
      
          | tangent = 0 (default)
        
          | render = 1
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Opacity attributes</summary>
  <p>
    
    <h3>opacity</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>opacity_factor</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular attributes</summary>
  <p>
    
    <h3>retroreflectivity</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_factor</h3>
    <b>Float</b>
    
      
        default: 0.10000000149
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.300000011921
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Translucency attributes</summary>
  <p>
    
    <h3>translucency</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>translucency_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>translucency_factor</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>translucency_falloff</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>translucency_radius</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Translucent Diffuse attributes</summary>
  <p>
    
    <h3>translucent_diffuse</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>translucent_diffuse_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>translucent_diffuse_factor</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Transmission attributes</summary>
  <p>
    
    <h3>transmission</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>transmission_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>transmission_factor</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>anisotropic_direction</h3>
    <b>Vec2f</b>
    <i>bindable</i>
      
        default: [ 1, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>anisotropy</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>casts_caustics</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>extra_aovs</h3>
    <b>Map</b>
    
      
        default: None
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      
    
    <h3>fresnel_factor</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>index_of_refraction</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">affects transmission and translucency</p>
      
    
    <h3>input_normal</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 0, 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>input_normal_dial</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>label</h3>
    <b>String</b>
    
      
        default: 
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">label used in material and light aovs</p>
      
    
    <h3>priority</h3>
    <b>Int</b>
    
      
        default: 0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    
    <h3>use_fresnel</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>

