---
# id / URL: /project/erddap-mcp/
name: ERDDAP MCP
organization: GCOOS / IOOS
affiliation: NOAA       # NOAA | External
poc:
  name: TBD
  role: ERDDAP MCP maintainer
  email: ""
summary: >-
  MCP access to oceanographic datasets and metadata through ERDDAP.

status: prototype
mcp_type: server
resource: data access

overview: >
  A Model Context Protocol server that wraps ERDDAP so assistants can
  discover datasets, read metadata, and pull subsets of oceanographic
  observations without hand-writing ERDDAP query URLs. Targets the IOOS /
  GCOOS data-access use case, where the barrier is often knowing which
  dataset and which query parameters to use.

capabilities:
  - Dataset discovery and search across an ERDDAP instance
  - Metadata retrieval (variables, coverage, units, provenance)
  - Parameterized data subsetting (time / space / variable) via ERDDAP griddap and tabledap

resources_exposed:
  - ERDDAP dataset catalog
  - Dataset-level metadata
  - Observational and gridded data subsets

architecture: >
  MCP server that translates tool calls into ERDDAP griddap/tabledap
  requests against a configured ERDDAP endpoint. (Add specifics: language/
  framework, which ERDDAP instance(s), response size limits, caching.)

status_detail: >
  Prototype demonstrating dataset discovery and subsetting.

evidence:
  - label: ERDDAP (reference implementation)
    url: https://coastwatch.pfeg.noaa.gov/erddap/
  - label: Project repository (replace with real link)
    url: https://example.org/REPLACE-ME

last_verified: 2026-09-01
---
