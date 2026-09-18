---
# id / URL: /project/noaa-climate-mcp/
name: NOAA Climate MCP Server
organization: Cyanheads (external); uses NOAA/NCEI Climate Data Online (CDO)
affiliation: External       # NOAA | External
poc:
  name: Cyanheads
  role: repository maintainer
summary: >-
  MCP-based search and retrieval of NOAA Climate Data Online datasets,
  stations, metadata, and historical observations.

status: production
mcp_type: server
resource: data access

overview: >
  An external project that provides access to NOAA CDO rather than representing
  a NOAA-developed service. A good example of an agent-oriented wrapper around a
  mature NOAA API: it encodes CDO-specific date limits, units, pagination,
  station/dataset ID flow, and structured errors.

capabilities:
  - "7 tools: list datasets; list data categories; list data types; find locations; find stations; get station metadata; fetch historical observations"
  - "Exposes 2 MCP resources, for datasets and stations"

resources_exposed:
  - "NOAA CDO API v2 datasets; data categories and types"
  - "Geographic locations; station metadata"
  - "Historical climate/weather observations"

architecture: >
  TypeScript; Bun or Node.js; @cyanheads/mcp-ts-core; stdio or Streamable HTTP;
  Docker/Cloudflare Workers supported; Zod configuration; optional
  OpenTelemetry. A NOAA CDO token is required for upstream CDO requests; the MCP
  framework supports none/JWT/OAuth, with the default MCP auth mode set to none.
  Hosted instance and self-hosted/local options; generic MCP client
  configuration is documented.

status_detail: >
  Publicly available public implementation; a public hosted server is
  documented.

evidence:
  - label: "Repository"
    url: https://github.com/cyanheads/noaa-climate-mcp-server

last_verified: 2026-09-11
---
