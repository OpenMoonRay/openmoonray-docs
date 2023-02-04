---
title: moonray
---
# moonray

The **moonray** command is the command line tool for rendering scenes in [RDLA\|RDLB]({{site.baseurl}}/getting-started/about/rdl-scene-format/) format with MoonRay.

## Command line options
Use the _-h_ flag to display the full list of command line options.

```bash
$ moonray -h
```

### Execution modes
MoonRay supports four execution modes:

```bash
$ moonray -exec_mode mode
     -exec_mode mode
         Choose a specific mode of execution. Valid options are:
         scalar - run in scalar mode (default).
         vector - always run vectorized regardless if volumes are found.
         xpu    - run in xpu mode.
         auto   - attempt to run vectorized but fall back to scalar if volumes are found.
```
