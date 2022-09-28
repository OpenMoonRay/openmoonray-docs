---
title: DwaAdjustMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaAdjustMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Enable attributes</summary>
  <p>
    
    <h3>adjust_color</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>use color adjustment attrs: color_hue_shift, color_saturation, color_gain</p>
    
    
    <h3>adjust_presence</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>use presence adjustment attrs: presence_set, presence_set_blend, presence_mult</p>
    
    
    <h3>adjust_roughness</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>use roughness adjustment attrs: roughness_set, roughness_set_blend, roughness_mult, roughness_remap_{in/out}_{min/max}</p>
    
    
    <h3>adjust_specular</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>use specular adjustment attrs: specular_set, specular_set_blend, specular_mult</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Override attributes</summary>
  <p>
    
    <h3>casts_caustics</h3>
    <b>Int</b>
    <i>enum</i>
    
    - unmodified = 0 (default)
    
    - force on = 1
    
    - force off = 2
    
    
    <p>allows you to keep or set casts caustics attribute</p>
    
    
    <h3>disable_clearcoat</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>when checked, turn off clearcoat from input</p>
    
    
    <h3>disable_diffuse</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>when checked, turn off all diffuse from input</p>
    
    
    <h3>disable_specular</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>when checked, turn off all specular from input</p>
    
    
    <h3>thin_geometry</h3>
    <b>Int</b>
    <i>enum</i>
    
    - unmodified = 0 (default)
    
    - force on = 1
    
    - force off = 2
    
    
    <p>allows you to keep or set thin geometry attribute</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>emission</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>emissive map to add to material's emission</p>
    
    
    <h3>emission_mode</h3>
    <b>Int</b>
    <i>enum</i>
    
    - off = 0 (default)
    
    - masked = 1
    
    - unmasked = 2
    
    
    <p>how to handle emission input. masked uses mix input, unmasked is mix = 1</p>
    
    
    <h3>extra_aovs</h3>
    <b>Map</b>
    
    
    default: None
    
    <p>Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
    
    
    <h3>input_material</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>label</h3>
    <b>String</b>
    
    
    default: 
    
    <p>label used in material and light aovs</p>
    
    
    <h3>mix</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>weight of adjustments applied to the material</p>
    
    
    <h3>on</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>Enable/disable all adjustments</p>
    
    
    <h3>priority</h3>
    <b>Int</b>
    
    
    default: 0
    
    <p>The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
    
    
  </p>
</details>

