NoiseMap creates procedural noise based on Ken Perlin's _Improved Noise (2002)_, a lattice gradient noise. It can create noise using a classic square grid or a simplex grid.

## Flow Noise
When using the simplex grid, this node also implements Perlin's _flow noise_, creating an appearance of advection that's perceptually different from scrolling 4D noise.

## Order of Operations:
When changing settings of this map, they're applied in this order:
- Noise Calculation
- Bias
- Gain
- Smoothstep
- Amplitude
- Invert
