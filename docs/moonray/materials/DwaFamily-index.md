---
title: Dwa Family of Materials

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# Dwa Family of Materials
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 
>The **Dwa** materials represent a family of physically-based materials that are designed to be simple and easy to use and can achieve a wide variety of looks.

These materials are energy-conserving, except the **DwaToonMaterial** which can be forced to not be energy conserving for non-photoreal looks. The rest of the materials make it very easy to create realistic, well-behaved looks, and it is difficult to create looks that behave poorly or that do not look physically plausible.

It is best to feed the materials with physically-inspired values in order to best leverage the underlying models and benefits of energy conservation. When it is important that a particular attribute be fed a physical value it is noted in the tables below with the (plus) icon and physical guidelines are provided.

Under the hood, the **Dwa** family of materials are all built from the same core material. This helps provide consistency in terms of behavior and user interface across all materials. It also allows for the ability to layer any of the materials, regardless of which model, over any other material using a mask to control coverage. Specifically, layering is achieved through parameter blending.

The following materials are considered the standard materials to recreate any real-world surface: 
- DwaSolidDielectricMaterial
- DwaRefractiveMaterial
- DwaMetalMaterial
- DwaSkinMaterial
- DwaFabricMaterial
- DwaVelvetMaterial
- DwaEmissiveMaterial

TODO: More info about DwaSolidDielectric vs DwaBase

<!-- Reference info here -->
## Shading Components 
>More details about shading components: clearcoat, specular, diffuse, emission, etc

## Layering 
>More details about layering and parameter blending

