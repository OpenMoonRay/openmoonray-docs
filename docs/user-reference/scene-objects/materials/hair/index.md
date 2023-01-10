---
title: Hair Materials

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Hair Materials
>Hair materials produce a BCSDF (Bidirectional Cylindrical Scattering Distribution Function) to simulate the complex interaction of light inside a cylindrical fiber.

These materials are only intended to be used on curve type geometry. Hair materials are incompatible with other material types and can only be layered with other hair materials via the HairLayerMaterial.

Hair Material shaders in MoonRay include:  

[HairMaterial_v3](HairMaterial_v3)  
A physically based, energy-conserving, artist-friendly shader for human hair, animal fur, and any other curve-based geometry.

[HairDiffuseMaterial](HairDiffuseMaterial)  
A simple diffuse hair model for creating matte or “dusty” looking fibers.

[HairLayerMaterial](HairLayerMaterial)  
A layer material specifically for layering all hair materials.

[HairColorCorrectMaterial](HairColorCorrectMaterial)  
A hair utility material for doing color corrections on hair materials.

[HairToonMaterial](HairToonMaterial)  
A non-physically based hair material with multiple specular lobes that can be fine tuned for artistic looks.
