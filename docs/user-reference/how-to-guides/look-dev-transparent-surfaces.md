---
Title: How To Look Dev Transparent Surfaces
---
# How To: Look Dev Transparent Surfaces

A transparent surface is a material interface that allows light to pass through. The law of refraction defines
how light bends as it enters/exits from one medium to another (e.g., from air to water, or air to glass).
MoonRay's [DwaRefractiveMaterial](../scene-objects/materials/dwa/DwaRefractiveMaterial.md) allows you to author
a transparent material, and below are some tips on how to dial the settings to achieve a desired look.

### Index of Refraction for Common Materials

| Medium | Index of Refraction | 
| -------------- | ------------------- |
| Air | 1.0 |
| Water | 1.33 |
| Glass | 1.5 |
| Gemstones, etc | 2.x |

## Depth Settings
Transparent surfaces require higher depth settings because light rays need more bounces to escape the medium.
Increase the following SceneVariable settings to produce a brighter render:

* *max_depth* (default: 5)
* *max_glossy_depth* (default: 2)
* *max_mirror_depth* (default: 3)

See the [Ray Depth]({{ "/user-reference/how-to-guides/ray-depth/" | absolute_url }}) page for more info.

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/max_depth_example2.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/max_depth_example1.png' 
                               image_alt_before='Higher depth settings for transparent surfaces.' 
                               image_alt_after='Default depth settings.' 
                               position='52' %}

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
Some geometry models often used in production represent extremely "thin" objects, where the geometry is either "open" and does not enclose any
spatial volume, or the geometry is technically closed but intended to represent a very thin film such as a soap bubble.

Examples include:
* a sheet of paper with zero thickness
* a soap bubble, where the walls of the bubble have zero thickness
* a glass window with zero thickness
* any other planar surface such as a wall, floor or ceiling

In MoonRay we refer to models such as these as "thin geometry" and their materials require special handling in order to look correct. The materials
in moonray have an attribute called _thin_geometry_ that is used to control the material's behavior for both reflection and transmission events.

The diagrams below show how transmission events interact with these types of geometry based on the state of this material setting.

![]({{ "/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/thin_geometry_01.png" | absolute_url }})

![]({{ "/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/thin_geometry_02.png" | absolute_url }})

![]({{ "/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/thin_geometry_03.png" | absolute_url }})

In this comparison the same sphere model is used to represent solid glass and a soap bubble. When _thin_geometry_ is set to _false_ the
soap bubble looks incorrect.  This comparison shows what happens when _thin_geometry_ is set to _true_ on the soap bubble material:
{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/bubble_thin_geometry_on.jpg'
                               image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/bubble_thin_geometry_off.jpg' 
                               image_alt_before='A solid glass sphere and a soap bubble with thin_geometry = false'
                               image_alt_after='A solid glass sphere and a soap bubble with thin_geometry = true' %}

In this comparison the tinted glass slab on the left is modeled with thickness > 0 (a box), and the tinted thin glass sheet on the right is modeled with zero thickness (a simple plane).
When _thin_geometry_ is set to _false_ on the thin sheet's material the refraction looks wrong -- the rays are bent as they enter the sheet but never unbent
because there is no exit.

This comparison shows what happens when _thin_geometry_ is set to _true_ on the thin sheet's material:
{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/glass_slab_thin_geometry_on.jpg'
                               image_path_after='/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/glass_slab_thin_geometry_off.jpg' 
                               image_alt_before='A solid glass sphere and a soap bubble with thin_geometry = false'
                               image_alt_after='A solid glass sphere and a soap bubble with thin_geometry = true' %}


<aside> <!-- Also: <aside class="info-aside"> -->
<p>Note that there is currently limitation where the material's <i>roughness</i> will not effect transmission rays when 'thin_geometry' is set to 'true'.</p>
</aside>
{: .info-aside}

For reflections, the _thin_geometry_ material attribute is also required for correct behavior. When a ray hits the backside of a "thin" surface, MoonRay
considers this as an _exiting_ event and inverts the relative index of refraction accordingly. This often has the unwanted effect of making the surface highly
reflective when viewed from the backside, and in fact "total internal reflection" can occur.
When _thin_geometry_ is enabled on the material, both sides of the surface are treated as front-facing and the relative index of refraction is not inverted.

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
