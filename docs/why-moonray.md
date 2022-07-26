# Why Moonray?

Moonray is a fast and lean MCRT-based renderer.  It is the culmination of conversations with developers and examinations of courses and papers from other studios with an eye toward making improvements in raytracing. Some highlights:
-   Built from the \"ground-up\" with minimal add-ons or plugins to slow down the renderer.
-   Tailored to use Intel® Embree processors to their full
    capability.
-   Empowers *raas_gui* for highly interactive performance feedback;
    great fluidity using IRP.
-   Geometry is loaded up front. (Geometry culled on demand slows down
    the renderer.) However, textures are accessed when needed &#8212; they are not loaded up
    front.
-   Prune geometry tools in development to make smart decisions about
    what geometry to carry through the render, (e.g: based on ray hits;
    multiple cameras; regions, etc.)

There is much on the roadmap for future development:
-   Volume Rendering
-   Deep Image Support
-   Denoiser
-   Stereo Rendering Efficiencies
-   Render Checkpoint/Resume Render
-   Adaptive Tesselation
-   Auto-Normal Mapping
-   Light Decay, Gobo, Barndoors
-   Portal & Mesh Lights
-   Many Light Importance Sampling
-   USD
-   Bidirectional Light Transport
