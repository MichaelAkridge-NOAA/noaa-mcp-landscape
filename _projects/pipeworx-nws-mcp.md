---
# id / URL: /project/pipeworx-nws-mcp/
name: NWS MCP (@pipeworx/nws)
organization: Pipeworx (external); uses NOAA/NWS data
affiliation: External
poc:
  name: Pipeworx
  role: pipeworx-io
summary: >-
  AI-agent access to U.S. National Weather Service forecasts, alerts, and
  weather observations through MCP.

status: production
mcp_type: server
resource: data access

overview: >
  An external MCP interface to NWS data rather than an NWS-developed MCP. Should
  not be confused with Pipeworx Weather MCP, which uses Open-Meteo rather than
  NOAA/NWS as its primary source.

capabilities:
  - "Retrieve NWS forecasts, active alerts, station information, and current observations"
  - "Pipeworx gateway also provides shared discovery/routing capabilities"

resources_exposed:
  - "NWS forecasts; active weather alerts"
  - "Observation stations; current station observations"

architecture: >
  TypeScript; Pipeworx MCP gateway; JSON-RPC over HTTP; hosted MCP endpoint. No
  NWS API key required. Works with MCP-compatible clients including Claude
  Desktop, Cursor, Windsurf, and others.

status_detail: >
  Publicly available; hosted endpoint at gateway.pipeworx.io/nws/mcp.

evidence:
  - label: "Hosted MCP endpoint"
    url: https://gateway.pipeworx.io/nws/mcp

last_verified: 2026-09-11
---
