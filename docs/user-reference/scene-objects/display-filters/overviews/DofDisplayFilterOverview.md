The **DofDisplayFilter** is an approximate post-process depth-of-field effect. It requires an image
input and a depth input, computes a blur size from the depth at each pixel, and averages a square
neighborhood of the image with a box filter. It does not reproduce the shape or sampling of
camera-rendered depth of field.
