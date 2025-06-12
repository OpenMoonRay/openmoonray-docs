---
title: rdla_gui
---
# rdla_gui

rdla_gui is a command line tool that creates a GUI for parameters in the input_rdla_file and writes out the
results to a separate output_rdla_file.   It's experimental at this time and may not work in all cases.

[![]({{ "/assets/images/user-reference/tools/rdla_gui/rdla_gui.gif" | absolute_url }})]({{ "/assets/images/user-reference/tools/rdla_gui/rdla_gui.gif" | absolute_url }})

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
usage: rdla_gui [-h] -in input.rdla -out output.rdla [-deltas deltas.rdla]


options:
  -h, --help           show this help message and exit
  -in input.rdla       Input rdla file to read.  Parameters are converted to
                       gui controls. Optionally add comment at the end of
                       float or int parameters to specify range
                       (i.e. -- min=-1 max=1)
                       
  -out output.rdla     Output rdla file to write to.
                       
  -deltas deltas.rdla  Output only parameter differences to separate deltas file

```
