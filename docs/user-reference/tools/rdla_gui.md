---
title: rdla_gui
---
# rdla_gui

rdla_gui creates a GUI for parameters in an input RDLA or RDLB file and writes
the full scene to an output RDLA or RDLB file. The input is optional; without
it, the GUI starts with a new empty scene. Delta output remains an RDLA file.
The tool is experimental and may not work in all cases.

[![]({{ "/assets/images/user-reference/tools/rdla_gui/rdla_gui.gif" | absolute_url }})]({{ "/assets/images/user-reference/tools/rdla_gui/rdla_gui.gif" | absolute_url }})

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
usage: rdla_gui [-h] [-in input.rdl{a|b}]
                (-out output.rdl{a|b} | -deltas deltas.rdla)


options:
  -h, --help           show this help message and exit
  -in input.rdl{a|b}   Optional input RDLA or RDLB file to read. Parameters are
                       converted to gui controls. Optionally add comment at
                       the end of float or int parameters to specify range
                       (i.e. -- min=-1 max=1). If omitted, a new empty scene
                       is created.
                       
  -out output.rdl{a|b} Output RDLA or RDLB file to write (all parameters).
                       Mutually exclusive with -deltas.
                       
  -deltas deltas.rdla  Output only parameter differences to a separate RDLA
                       file. Mutually exclusive with -out; requires -in.

```
