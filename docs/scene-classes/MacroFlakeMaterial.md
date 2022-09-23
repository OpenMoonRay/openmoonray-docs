# MacroFlakeMaterial

**ROOTSHADER MATERIAL SHADER**

Documentation for class MacroFlakeMaterial



---

## <p style="color:blue;">Normal attributes</p>

## input_normal

**33554432** 


Default value : None




specifies an alternate shading normal in the tangent frame (normal map)




## input_normal_dial

**Float** *bindable*


Default value : 1.0




controls the amount of influence of the alternate normal






---

## <p style="color:blue;">Specular attributes</p>

## metallic_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the overall reflection color, defines Fresnel behavior




## metallic_edge_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the reflection color at grazing angles, defines Fresnel behavior




## roughness

**Float** *bindable*


Default value : 0.5




the roughness of the surface (currently only affects reflection)






---

## <p style="color:blue;">General attributes</p>

## background_material

**Material** 


Default value : None




background material




## diffuse_mode

**Int** *enum*



- block = 0

- add = 1 (default)





Whether to block the diffuse lobe where the mask is applied




## extra_aovs

**Map** 


Default value : None




Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result




## fuzz_mode

**Int** *enum*



- block = 0 (default)

- add = 1





Whether to block the fuzz lobe where the mask is applied




## is_additive

**Bool** 


Default value : False




When true, lobe does not block background material




## label

**String** 


Default value : 




label used in material and light aovs




## mask

**Float** *bindable*


Default value : 1.0




foreground (metal) material weight




## priority

**Int** 


Default value : 0




The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.




## specular_background_mode

**Int** *enum*



- block = 0

- add = 1 (default)





Whether to block the underlying specular lobe where the mask is applied





