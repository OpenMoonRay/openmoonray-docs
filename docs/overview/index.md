---
title: Overview

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Overview

The open source release of MoonRay contains the following pieces of technology:

- MoonRay path-tracing renderer
- Most of the scene object classes (materials, geometry, lights, cameras, etc) used at Dreamworks Animation (about 150 in total)
- Hydra plugin for MoonRay: HdMoonRay
- Arras execution and distribution framework, used to integrate MoonRay into applications

## Getting MoonRay

The easiest way to obtain MoonRay for testing and evaluation is to use the pre-built **Docker container image**. Inside a Docker container you can run MoonRay from the command-line to render scenes in written in RDL2 (MoonRay's native format) or USD (using HdMoonRay from its command-line program `hd_render`). On Linux hosts with X you should also be able to run the GUI programs `moonray_gui` and `arras_render`.

[Running MoonRay from the Docker Image](running-from-docker)

You can build MoonRay yourself, either in a Docker container or directly on a Linux machine.

[Cloning the MoonRay source Repository](cloning-the-repo)

[Building MoonRay](building-moonray)

## Using MoonRay

[Moonray GUI application](../moonray/moonray_gui)

[Scene Formats](../developers-guide/scene-formats)

## Developing MoonRay

[Source Structure](../developers-guide/source-structure)

[Shaders](../developers-guide/shaders/index)