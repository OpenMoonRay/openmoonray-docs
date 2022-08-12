## What is Arras?

The core of Arras is a system for communicating between processes using messages. It is used to split a program into multiple components, each running in its own process. Some of the reasons you might want to do this are:

- To distribute execution of a program across multiple machines.
- To isolate components from each other. For example, splitting into multiple processes can help with conflicts between compilers or different versions of the same library.
- To make a program configurable by allowing components to be assembled in different ways.

A single Arras component (i.e. a process) is called a **computation**. An assembly of communicating computations forming a "program" is called a **session**.

An Arras client communicates with a session using messages : both to provide input data and to collect results. Clients can be standalone programs or plugins to applications like Maya or Houdini.

## Arras and Moonray

Moonray provides several Arras computations. These can be used:

- To allow multimachine Moonray renders. Applying multiple computations on different machines to the same render results in an almost linear speedup of the shading phase.
- To support remote Moonray renders. This can be used both for performance reasons and for cross-platform support. For example, you can integrate a Windows application with Moonray by running the render computation processes in a Linux container or on a different machine.
- To  avoid conflicts between host applications and the Moonray libraries. Building and maintaining several versions of a system like Moonray, in order to be compatible with multiple different host applications, can be troublesome : Arras helps to avoid the need to do this.

We generally recommend using Arras to add Moonray support into existing applications. It is possible to link directly to the Moonray libraries, without using Arras. However this requires a Moonray build that is compatible with application, and can lead to problems. The most common issues that we see are "pauses" caused by interactions between the application GUI threads and the threads that Moonray uses to render. These can be hard to diagnose and fix, particularly if you don't have access to the application source code.

The Moonray Hydra plugin, HdMoonray, uses Arras as its primary means of communicating with Moonray.

## Moonray Arras Client Plugins

You can integrate interactive Moonray rendering into an application using an Arras client plugin. If the application supports Hydra, the easiest way to do this is to use the HdMoonray Hydra plugin. You can also write a new client plugin that does not require Hydra.