**OpenVdbMap_v2** reads a grid from a 
[vdb]({{ "https://www.openvdb.org" | absolute_url }})
file as a texture map.\\
**Note:** The difference in v2 of the map is that the *openvdb_geometry* parameter accepts a list of
[VdbGeometry]({{ "/user-reference/scene-objects/geometry/VdbGeometry" | absolute_url }})
objects.  The texture referenced with the *grid_name* parameter will be read from the *VdbGeometry* object that is currently being shaded if it is present in the list.   This allows a single *OpenVdbMap_v2* to be applied to multiple volumes.
