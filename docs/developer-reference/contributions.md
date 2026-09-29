---
title: Contributing to MoonRay
---
# Contributing to MoonRay

MoonRay welcomes code, documentation, tests, bug reports, and other technical
contributions. This page summarizes the project-wide process. The
[contribution policy in the `openmoonray` repository](https://github.com/OpenMoonRay/openmoonray/blob/main/CONTRIBUTING.md)
is authoritative if it differs from this overview.

## Discussing changes and reporting issues

- Use [GitHub Discussions](https://github.com/OpenMoonRay/openmoonray/discussions)
  for general questions, feature ideas, and community discussion.
- Use [GitHub Issues](https://github.com/OpenMoonRay/openmoonray/issues) for
  reproducible bugs, build problems, and enhancement requests.
- The `#moonray` channel on the
  [Academy Software Foundation Slack](https://academysoftwarefdn.slack.com/)
  is available for community discussion. Request an invitation from the
  [ASWF community page](https://www.aswf.io/get-involved/).

Do not report suspected security vulnerabilities in a public issue or pull
request. Follow the
[MoonRay security policy](https://github.com/OpenMoonRay/openmoonray/blob/main/SECURITY.md)
and email `security@moonray.org`.

## Legal requirements

MoonRay is an Academy Software Foundation project released under the
[Apache License 2.0](https://github.com/OpenMoonRay/openmoonray/blob/main/LICENSE).
Before a contribution can be accepted:

1. Complete the MoonRay Contributor License Agreement through the Linux
   Foundation's [EasyCLA](https://docs.linuxfoundation.org/lfx/easycla)
   workflow. The pull-request check provides instructions if the contributor
   or their organization is not yet covered.
2. Add a
   [Developer Certificate of Origin](https://developercertificate.org/)
   `Signed-off-by` trailer to every commit. The easiest method is:

   ```bash
   git commit -s
   ```

Use the individual CLA only when you own the contribution yourself. If an
employer may own the work, the employer must complete the corporate CLA and
authorize the contributor.

All project participants must follow the
[LF Projects Code of Conduct](https://lfprojects.org/policies/code-of-conduct/).

## Choose the correct repository

MoonRay is split across several Git repositories. The
[`openmoonray`](https://github.com/OpenMoonRay/openmoonray) repository is the
top-level build project and references the component repositories as Git
submodules. Submit a pull request to the repository that owns the code or
documentation being changed.

Install [Git LFS](https://git-lfs.com/) before cloning because some repositories
contain LFS-managed test assets:

```bash
git lfs install
git clone --recurse-submodules https://github.com/OpenMoonRay/openmoonray.git
```

See [Source Structure]({{ "/developer-reference/source-structure" | absolute_url }})
for the repository layout and
[Building MoonRay]({{ "/getting-started/installation/building-moonray/" | absolute_url }})
for platform-specific setup.

## Contribution workflow

1. Fork the appropriate OpenMoonRay repository.
2. Create a focused topic branch in your fork.
3. Implement the change and add or update tests and documentation.
4. Build and run the tests relevant to the affected component.
5. Commit with DCO sign-off and push the branch to your fork.
6. Open a pull request that explains what changed, why it changed, and how it
   was tested.
7. Address reviewer feedback. All changes require formal review before a
   project Committer merges them.

Follow the [MoonRay Coding Standards]({{ "/developer-reference/coding-standards/" | absolute_url }})
for source changes. Keep pull requests focused and call out behavior,
compatibility, or rendering changes explicitly.

## Testing expectations

Most component repositories contain a `tests` directory with unit or
integration tests. Add or update tests when changing behavior and run the
smallest relevant test set before submitting the pull request.

Changes that may affect rendered output must also pass the
[Render Acceptance Test Suite](https://github.com/OpenMoonRay/rats) (RATS).
RATS compares rendered images with approved canonical images:

- Unintentional image changes must be fixed.
- Intentional image changes require Technical Steering Committee approval and
  updated canonical images.

Document the commands, scenes, platforms, and configurations used for
validation in the pull-request description.

## Governance

Anyone may become a Contributor by satisfying the legal requirements and
having a contribution accepted. Committers review and merge contributions, and
the Technical Steering Committee provides overall technical direction. See the
[MoonRay governance policy](https://github.com/OpenMoonRay/openmoonray/blob/main/GOVERNANCE.md)
for role definitions, nomination procedures, and public meeting information.