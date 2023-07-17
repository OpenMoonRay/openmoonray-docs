A <span class="define">LightFilterSet</span> is a high-level grouping of LightFilters, whose purpose is to specify which LightFilters influence a specified geometry object.

The LightFilterSet is used by the Layer.  One LightFilterSet is specified per Layer entry.  The individual light filters in the set are combined during rendering.

For example:

```lua
filter1 = IntensityLightFilter("/Scene/lighting/intensity1") {
    ["color"] = Rgb(1,1,0),  -- red + green
}

filter2 = IntensityLightFilter("/Scene/lighting/intensity2") {
    ["color"] = Rgb(0,1,1),  -- green + blue
}

LightFilterSet("LightFilterSetA") {
    filter1,
    filter2,
}

-- definitions for the MmGeometry, BaseMaterial, and LightSet have been omitted for this example

Layer("/Scene/Layer1") {
    {MmGeometry("/Scene/geometry/floor"), "1", BaseMaterial("/Scene/surfacing/floor"), LightSet("LightSetA"), LightFilterSet("LightFilterSetA")},
}

```

In the example there are two IntensityLightFilters.  The first allows red and green light through.  The second allows green and blue light through.  MoonRay
evaluates the filters individually, combining the results so that only green light passes through the set of filters.  The filter is applied to lighting
that illuminates the "/Scene/geometry/floor" geometry, cast from lights in "LightSetA".

