---
# id / URL: /project/cefi-mcp-pilot/
name: CEFI MCP Pilot
organization: NOAA Changing Ecosystems and Fisheries Initiative (CEFI) — Regional Ocean Modeling / NOAA GFDL
affiliation: NOAA       # NOAA | External
poc:
  name: Andrew Ross
  role: NOAA CEFI Regional Ocean Modeling / GFDL
summary: >-
  Pilot for accessing CEFI regional ocean-modeling data with AI through MCP.

status: pilot
mcp_type: server
resource: data access

overview: >
  A NOAA-managed pilot MCP server for discovering and accessing CEFI regional
  ocean-modeling data through AI assistants. The repository states the project
  code is managed by NOAA-GFDL.

capabilities:
  - "Discover and access CEFI data through MCP tools"
  - "Optional 'Geocode ocean place' tool for location resolution"
  - "Repository contains catalog, server, tools, and utility modules"

resources_exposed:
  - "CEFI regional ocean-modeling catalog and data"
  - "Optional ocean-place geocoding to support location resolution"

architecture: >
  Python; uv; Docker/Podman. Runs locally or as an HTTP MCP endpoint at /mcp.
  Packaged source includes server.py, tools.py, catalog.py, and tests. No
  authentication requirement is documented in the public README for the local
  pilot. Works with MCP-compatible clients; local configuration is documented.

status_detail: >
  NOAA-managed pilot. The repository explicitly labels the effort experimental
  and for demonstration; outputs may contain errors and are not substitutes for
  official NOAA forecasts, alerts, or data.

evidence:
  - label: "Repository"
    url: https://github.com/NOAA-CEFI-Regional-Ocean-Modeling/cefi-mcp-pilot

last_verified: 2026-09-11
---
