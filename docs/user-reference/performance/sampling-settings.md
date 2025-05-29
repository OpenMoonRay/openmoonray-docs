---
title: Sampling Settings
---

# Sampling Settings

Adjusting sampling settings to minimize both noise and render times can be tricky.  There are some general
guidelines to solving common noise problems.

## Issue: Primary Aliasing

Symptoms: 
- features are jagged
- small details do not appear
- small features pop or swim between frames

Solution:
- increase pixel samples
- higher adaptive sampling min_samples

If you find yourself using a lot of pixel samples, consider changing light and BSDF samples to 1.

## Issue: Noisy Motion Blur or Depth of Field

Solution:
- increase pixel samples
- lower adaptive sampling error_threshold
- consider lowering BSDF and light samples

The goal is to have MoonRay focus on primary rays to resolve the noise.
Secondary rays have little effect on motion blur or depth of field.

## Issue: Noisy Shadow Penumbras

Solution:
- more light samples
- lower adaptive sampling error_threshold

## Issue: Noisy Materials

Solution:
- more BSDF samples
- lower adaptive sampling error_threshold

## Issue: Noisy Indirect Light or Caustics

Solution:
- more BSDF samples
- lower adaptive sampling error_threshold

## Issue: Render has Fireflies

Solution:
- turn off caustics
- lower adaptive sampling error_threshold
- use sample clamping

