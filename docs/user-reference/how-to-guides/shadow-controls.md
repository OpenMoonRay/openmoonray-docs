---
title: Shadow Controls
---
# Shadow Controls

Two light attributes, `max_shadow_distance` and `clear_radius`, define constraints on how shadows can be cast from the 
associated light. Both of these attributes work in tandem to define the region where shadows cast by the light can appear. 

## Max Shadow Distance
Limits shadows cast by the associated light to *max_shadow_distance* away from the shadow caster. In the example below, 
the shadow's distance from the shadow caster (the plane) ranges from 5.7 to 6.4.

![Max Shadow Distance Example]({{ "/assets/images/user-reference/how-to-guides/shadow-controls/max_shadow_distance.mp4" | absolute_url }})

## Clear Radius
Ignore shadows cast by the associated light until *clear_radius* distance is reached. We can think of this as the 
minimum distance away from the light that shadows can appear. In the example below, the shadow cast by the plane is 
between about 48 and 54 units from the light. 

![Clear Radius Example]({{ "/assets/images/user-reference/how-to-guides/shadow-controls/clear_radius.mp4" | absolute_url }})

## Combined Behavior
*clear_radius* should always be less than *max_shadow_distance*. If *clear_radius* overlaps *max_shadow_distance*, no shadows 
will appear. In the example below, you will see this behavior, as *max_shadow_distance* stays the same (at 6.1) and the *clear_radius* varies. 

![Combined Behavior Example]({{ "/assets/images/user-reference/how-to-guides/shadow-controls/combined.mp4" | absolute_url }})
