---
Assigns a material to the surface based on the incoming ray type. The supported ray types are as follows:

- camera ray
- indirect diffuse ray 
- indirect mirror ray
- indirect glossy ray

If no material is specified for the incoming ray type, the *default_material* will be used. 