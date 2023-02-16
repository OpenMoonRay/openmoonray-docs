---
Title: How To Look Dev Transparent Surfaces
---
# How To: Look Dev Transparent Surfaces

A transparent surface is a material interface that allows light to pass through. The law of refraction defines how light bends as it enters/exits from one medium to another (e.g., from air to water, or air to glass). MoonRay's [DwaRefractiveMaterial](../scene-objects/materials/dwa/DwaRefractiveMaterial.md) allows you to author a transparent material, and below are some tips on how to dial the settings to achieve a desired look.

### Index of Refraction for Common Materials

| Medium | Index of Refraction | 
| -------------- | ------------------- |
| Air | 1.0 |
| Water | 1.33 |
| Glass | 1.5 |
| Gemstones, etc | 2.x |

## Depth Settings
Transparent surfaces require higher depth settings because light rays need more bounces to escape the medium. Increase the following SceneVariable settings to produce a brighter render:

* *max_depth* (default: 5)
* *max_glossy_depth* (default: 2)
* *max_mirror_depth* (default: 3)

<!--- ============= These images need to be attributed before they are used ==============================
{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/max_depth_example2.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/max_depth_example1.png' 
                               image_alt_before='Higher depth settings for transparent surfaces.' 
                               image_alt_after='Default depth settings.' 
                               position='52' %}
--->

## Overlapping Dielectrics
What if you have overlapping transparent mediums (e.g. water in a glass cup)? You will need to set a [*material priority*](./overlapping-dielectrics.md). 

## Independent Transmission IOR
By default the reflective and refractive IOR are the same. If you want to reduce distortions in refractions, lower the *independent_transmission_refractive_index*on the DwaRefractiveMaterial. 

<!-- ============= These images need to be attributed before they are used ==============================
**IOR 1.5 vs. Transmission IOR 1.2**
{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/ior1.5.png'
                               image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/transmissionIor1.2.png' 
                               image_alt_after='Index of Refraction 1.5' 
                               image_alt_before='Transmission Index of Refraction 1.2' 
                               position='52' %}

**Transmission IOR 1.2 vs. IOR 1.2**
{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/transmissionIor1.2.png'
                               image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/ior1.2.png' 
                               image_alt_after='Transmission Index of Refraction 1.2' 
                               image_alt_before='Index of Refraction 1.2' 
                               position='52' %}
-->

## BaseVolume for Refraction Color
Light gets absorbed as it travels through a refractive medium, which `BaseVolume` more accurately simulates than transmission color. 

Set *diffuse_color* to black to eliminate scattering within the volume, then set the *attenuation_color* to the desired absorption color. 

## Caustics
<span class="define">Caustics</span> occur when light rays are bent through a transparent medium then hit a specular surface. Due to the noisiness it produces in unidirectional path tracers, caustics are turned *OFF* by default in MoonRay. You should typically switch *casts_caustics* on in the material settings if the transparent surface occludes any other surface.

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/caustics_on.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/caustics_off.png' 
                               image_alt_before='Refraction color using transmission color.' 
                               image_alt_after='Refraction color using BaseVolume.' %}

## Thin Geometry
If you are modeling a thin surface, like a plastic cup or bubble, you should try turning on the material setting *thin_geometry*. This will essentially let light pass through *without* bending, and it will correctly handle IORs when exiting the surface via back-sided polygons. 

| | |
| - | - |
| ![Thin Geometry Diagram Off]({{ "/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/thin_geometry_diagram_off.png" | absolute_url }}) | ![Thin Geometry Diagram On]({{ "/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/thin_geometry_diagram_on.png" | absolute_url }}) |

Thin Geometry is also useful for planar or open surfaces modeled without thickness. When a ray hits the backside of a surface, MoonRay typically treats it as if it's coming from the *inside* of the surface, and inverts the IORs accordingly. When using thin geometry, we treat the ray as if it's hitting the front-facing surface and do *not* invert IORs or bend the ray, since any bending will be corrected upon exiting from the infinitely thin surface. 

<aside> <!-- Also: <aside class="info-aside"> -->
<p>Note that <i>roughness</i> will have no effect when 'thin_geometry' is on.</p>
</aside>
{: .info-aside}

## Clearcoat
You can use *clearcoat* to decouple reflection and refraction roughness, where regular roughness will be used for refractions under the clearcoat reflections.

{%-include image-gallery.html images=site.data.user-reference.how-to-guides.look-dev-transparent-surfaces.clearcoat_gallery data=site.data.user-reference.how-to-guides.look-dev-transparent-surfaces-%}

### Clearcoat Bending
*clearcoat_bending* models a 'physical' layer of refractive material, and bends the incident ray according to the two IORS (clearcoat IOR over specular IOR). This setting is on by default.

{%-include image-gallery.html images=site.data.user-reference.how-to-guides.look-dev-transparent-surfaces.clearcoat_bending_gallery data=site.data.user-reference.how-to-guides.look-dev-transparent-surfaces-%} 

## Dispersion
<span class="define">Dispersion</span> is the separation of white light into colors at a material interface. Refractive indices become wavelength-dependent when you *use_dispersion*. This is a very subtle change in most renders, but it is also not expensive. 

### Abbe Number
The <span class="define">Abbe Number</span> is the measure of the material's dispersion in optics and lens design. This number is used to classify glass and other mediums in terms of chromaticity. Values range from:
* lower than 25 for flint glasses (high dispersion)
* around 34 for polycarbonate plastics
* more than 65 for crown, fluorite, and phosphate crown glasses (low dispersion)

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/dispersion_on_example1.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/dispersion_off_example1.png' 
                               image_alt_before='Dispersion On' 
                               image_alt_after='Dispersion Off'
                               position='40' %}
