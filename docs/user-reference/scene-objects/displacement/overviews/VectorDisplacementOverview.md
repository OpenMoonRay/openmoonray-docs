**VectorDisplacement** displaces geometry using special input maps, where the color indicates direction and magnitude determines length of displacement.

Large displacement values might cause strong UV deformation.

When combining two VectorDisplacement nodes, it is more efficient to layer the input data using **LayerMap** or **OpMap** than using **CombineDisplacement**.
