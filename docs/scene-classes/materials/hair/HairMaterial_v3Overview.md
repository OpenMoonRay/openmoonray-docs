---
>An energy-conserving, artist-friendly shader for human hair, animal fur and any other curve-based geometry.

![]({{site.baseurl}}/assets/images/scene-classes/materials/hair/HairMaterial_v3/abominable.jpg) 

The three most important attributes that determine the overall look:  

#### Hair Color
This color determines the color of your hair. The shader will internally calculate the correct absorption and scattering coefficients required for the physically based hair shading model to create the final user-specified color. Primary specular highlights are not affected by this color which only affects the transmission and secondary specular highlights. Secondary specular is always darker than transmission since it travels longer inside the hair fiber and gets absorbed more. 

#### Primary Specular Roughness
This should be your one-stop shop to control the roughness of the hair material. For physical behavior, this roughness will automatically determine what the transmission and secondary specular roughnesses should be. The secondary specular roughness is calculated as 2x and the transmission roughness is calculated as 0.5x the primary specular roughness. If desired, this connection between roughnesses can be broken based on attributes outlined below.

#### Transmission Azimuthal Roughness
Azimuthal roughness only applies to the transmission lobe and controls the lateral spread of energy from the hair fibers. This attribute helps control how the shader distributes energy in the hair/fur _volume_. Lower values will distribute the energy in a narrow band only when the light is _exactly_ at the back resulting in darker renders whereas, higher values tend to distribute energy more evenly resulting in a more natural look. Use a value of 0.75 for human hair and 1.0 for animal fur. 

### Importance of max depth and max hair depth
The color of the hair comes from true multiple scattering inside the hair/fur volume. This means that the number of bounces will have a significant impact on the color of your hair. Especially for lighter/white/blonde hair, this depth should be set to a high number to allow for a more realistic hair color.

Moonray provides a separate depth variable called `max hair depth` that helps you control the number of bounces for the hair material. This should be set to at least 5 and for best results 10 or more for white hair. 

