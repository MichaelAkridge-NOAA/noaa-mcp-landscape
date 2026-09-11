---
# id / URL: /project/perigee-tides/
name: NOAA Tides & Currents MCP Server (Perigee-Tides)
organization: Cardin Labs / Ryan Cardin (external); uses NOAA CO-OPS and NWS data
poc:
  name: Ryan Cardin
  role: Cardin Labs
summary: >-
  MCP access to NOAA CO-OPS tides, currents, water levels, station metadata,
  derived coastal products, and related marine information.

status: production
mcp_type: server
resource: data access

overview: >
  An external project (explicitly not affiliated with or endorsed by NOAA)
  offering broad CO-OPS coverage plus NWS marine/wind forecasts and locally
  computed astronomy. A useful comparator to OceanMCP's coops-mcp
  implementation.

capabilities:
  - "25 documented tools spanning observations/predictions, station discovery/metadata, climate/derived products, astronomy, NWS forecasts, and reference guidance"
  - "Also exposes MCP resources and workflow prompts"

resources_exposed:
  - "CO-OPS Data API; Metadata API; Derived Product API"
  - "Water levels; tide/current predictions; station metadata; tidal datums; harmonic constituents; sea-level trends/projections; high-tide flooding"
  - "NWS marine/wind forecasts; locally computed astronomy"

architecture: >
  TypeScript; Node/npm/npx; local stdio or optional stateless Streamable HTTP;
  Zod schemas; shared HTTP retry/cache layer; Vitest tests. No NOAA API key is
  required (upstream CO-OPS APIs are open). Claude Desktop and Claude Code are
  explicitly documented; other MCP-compatible clients can use the server.

status_detail: >
  Publicly available public implementation (npm package). Broad coverage of
  CO-OPS concepts and API nuances, including datums, units, quality flags,
  station capabilities, and derived products. The repository explicitly states
  it is not affiliated with or endorsed by NOAA.

evidence:
  - label: "Repository"
    url: https://github.com/RyanCardin15/Perigee-Tides

last_verified: 2026-09-11
---
