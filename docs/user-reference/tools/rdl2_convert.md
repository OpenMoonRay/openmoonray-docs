---
title: rdl2_convert
---
# rdl2_convert

rdl2_convert is the command-line utility for converting rdl2 files between ASCII and binary formats

## Command-line options
Use the _-h_ flag to display the exact command-line help. The following is a
summary of the supported forms and options:

```bash
Usage: rdl2_convert [options] <input file> [<input file> ...] <output file>
Converts RDL2 files between ASCII and binary formats.

The output format is determined by the output filename extension:
  .rdla   ASCII format
  .rdlb   binary format
  <none>  split format: geometry is written to <output>.rdlb and other scene data
          to <output>.rdla

Options:
  -h, --help                  Print this help message
  -i, --in <file>             Input file (.rdla | .rdlb); repeatable
  -o, --out <file>            Output file (.rdla | .rdlb | no extension)
  -e, --elements <n>          Number of ASCII array elements per line (0=unlimited)
  -d, --dso-path <path>       DSO search path
```
