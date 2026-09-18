---
# id / URL: /project/pipeworx-swpc-mcp/
name: NOAA SWPC MCP (@pipeworx/noaa-swpc)
organization: Pipeworx (external); uses NOAA SWPC data
affiliation: External
poc:
  name: Pipeworx
  role: pipeworx-io
summary: >-
  AI-agent access to NOAA SWPC space-weather data — geomagnetic indices, solar
  wind, aurora forecasts, X-ray flux, alerts, and forecasts.

status: production
mcp_type: server
resource: data access

overview: >
  An external SWPC data pack within the larger Pipeworx MCP gateway rather than
  a fully standalone service. Note that connecting to the SWPC endpoint also
  exposes shared Pipeworx meta-tools for discovery and routing.

capabilities:
  - "7 SWPC-specific tools: alerts; solar_wind; kp_index; aurora_forecast; goes_xray; boulder_kp; forecast_text"
  - "Pipeworx gateway also exposes shared discovery/routing tools"

resources_exposed:
  - "SWPC alerts/warnings; DSCOVR solar wind; planetary Kp"
  - "OVATION aurora forecast; GOES X-ray flux; Boulder K index; SWPC 3-day forecast"

architecture: >
  TypeScript; Pipeworx MCP gateway; public remote MCP endpoint. No NOAA/SWPC API
  key required, since SWPC source products are keyless. Works with
  MCP-compatible clients; examples include Claude Desktop, Cursor, and Windsurf.

status_detail: >
  Publicly available; hosted remote endpoint. The SWPC capability is a scoped
  pack within the larger Pipeworx gateway rather than a completely standalone
  service.

evidence:
  - label: "Repository"
    url: https://github.com/pipeworx-io/mcp-noaa-swpc

last_verified: 2026-09-11
---
