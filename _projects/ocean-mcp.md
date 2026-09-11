---
# id / URL: /project/ocean-mcp/
name: OceanMCP
organization: oceanmodeling open-source project (external)
poc:
  name: Mansur Ali Jisan
  role: oceanmodeling project
summary: >-
  A collection of independently installable MCP servers for coastal and
  oceanographic data and modeling workflows, many focused on NOAA operational
  data.

status: prototype
mcp_type: server
resource: data access

overview: >
  An external open-source monorepo documenting 19 MCP servers spanning NOAA
  operational data and modeling/HPC workflows. It is not presented as an
  official NOAA service. Best cataloged as a collection rather than a single
  MCP server.

capabilities:
  - "19 documented MCP servers; most expose read-only data discovery and retrieval"
  - "Additional servers support model configuration, alerts, NOAA RDHPCS/HPC interaction, and UFS-Coastal job submission"

resources_exposed:
  - "NOAA CO-OPS; ERDDAP; NHC; hurricane reconnaissance; STOFS; OFS; RTOFS; WAVEWATCH III / GFS-Wave; NDBC; GOES; NWS winds"
  - "USGS data and modeling/HPC resources"

architecture: >
  Python; FastMCP; httpx; Pydantic. Servers are independently packaged and
  distributed via PyPI/uvx, with markdown/JSON/GeoJSON/image response formats
  and example .mcp.json configurations. Most data servers require no API keys;
  HPC/UFS servers require NOAA RDHPCS cluster access and credentials.

status_detail: >
  Active early-stage open-source project with multiple prototypes and published
  packages. Note that most components are read-only, but hpc-system-mcp and
  ufs-runner-mcp execute commands/jobs and therefore carry materially different
  security implications.

evidence:
  - label: "Repository"
    url: https://github.com/oceanmodeling/ocean-mcp

last_verified: 2026-09-11
---
