---
title: Shadow Controls
---
# Shadow Controls

Two light attributes, `max_shadow_distance` and `clear_radius`, define constraints on how shadows can be cast from the 
associated light. Both of these attributes work in tandem to define the region where shadows cast by the light can appear. 

## Shadow Max Distance
Limit shadows cast by the associated light to *max_shadow_distance*. We can think of this as the maximum distance away 
from the light that shadows can reach.

## Clear Radius
Ignore shadows cast by the associated light until *clear_radius* distance is reached. We can think of this as the 
minimum distance away from the light that shadows can appear. 

## Combined Behavior
*clear_radius* should always be less than *max_shadow_distance*. If *clear_radius* overlaps *max_shadow_distance*, no shadows 
will appear.