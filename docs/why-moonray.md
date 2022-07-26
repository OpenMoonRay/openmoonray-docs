# Why Moonray?

Moonray is a fast and lean MCRT-based renderer.  Here are some facts:

-   Moonray is the culmination of conversations with developers and
    examinations of courses and papers from other studios with regards
    to improvements in raytracing.
-   It is built from the \"ground-up\" with as little add-ons and
    plugins at its base to slow down the renderer.
-   It is tailored to use Intel\'s Embree\'s processors to their full
    extant.
-   It empowers raas_gui for high interactive performance feedback;
    great fluidity using IRP.
-   Geometry is loaded up front.  Geometry culled on demand slows down
    the renderer.  Textures are accessed when needed and not loaded up
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
