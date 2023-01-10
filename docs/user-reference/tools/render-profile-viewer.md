---
title: Render Profile Viewer

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# Overview
The `render_profile_viewer` is a standalone app that graphs and compares statistics read from MoonRay render logs.   The logs are written using the `-info` option when rendering.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/render_profile_viewer.jpg)

# Usage
```bash
render_profile_viewer [-h] [logs [logs ...]]
```
Where logs is either a list of log files or a directory containing log files.

## Log List
![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/log_list.jpg)

The log list shows all of the logs that have been loaded into the viewer.   If the paths are too long, the *Show full paths* checkbox can be toggled off.  To view one or more logs in the graph pane, simply select them using the shift or control keys.

## Stats
The stats pane controls which stats to view in the graph.   It's divided into three sections: mcrt rendering, render prep, and memory.   Only the mcrt rendering stats are checked by default.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/rendering_stats.jpg)

Enabling any of the render prep stats will stack them under the mcrt stats in the graph.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/render_prep_stats.jpg)

Enabling the memory stats will disable the mcrt stats since memory is measured in gigabytes and mrct is measured in time.
![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/memory_stats.jpg)


## Test Types
If the log files have a suffix for the type of render ( _scalar, _vector, or _xpu) then these toggles will filter which tests are shown in the graph.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/test_types.jpg)

## Performance Thresholds
These checkboxes can be toggled on to highlight adjacent tests that perform worse or better than the specified percentage threshold.  By default, tests that are 10% slower or faster are highlighted.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/performance_thresholds.jpg)

## Options
This sections covers miscellaneous options that can be used.

*Divide by Pixel Samples* will divide all of the timing values by the number of pixel samples.   This allows the cost of a pixel sample to be better determined.

*Show Trend Lines* overlays graph lines between adjacent tests to allow trend visualization.

*Show Fallback* will highlight any tests that were set to execute in vector or xpu mode and fell back to scalar due to feature limitations.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/options.jpg)

## View
The *Refit Chart* button will manually reframe the view to fit all of the selected tests.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/view_refit.jpg)

## Logs
The *Logs* tab can be used to view the actual render logs.

![Render Profile Viewer]({{site.baseurl}}/assets/images/user-reference/tools/render-profile-viewer/log_view.jpg)

