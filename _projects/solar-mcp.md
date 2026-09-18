---
# id / URL: /project/solar-mcp/
name: Solar MCP (solar-mcp)
organization: QSO Graph (external); uses NOAA SWPC data
affiliation: External
poc:
  name: QSO Graph
  role: qso-graph
summary: >-
  MCP access to space-weather data and derived HF radio-propagation conditions
  using NOAA SWPC public data.

status: production
mcp_type: server
resource: data access

overview: >
  An external project, more domain-specific than a general SWPC wrapper. It
  combines NOAA space-weather information with a derived solar_band_outlook
  intended to assess HF propagation across amateur-radio bands.

capabilities:
  - "7 tools: solar_conditions; solar_forecast; solar_alerts; solar_wind; solar_xray; solar_band_outlook; get_version_info"

resources_exposed:
  - "Solar flux / SFI; Kp; NOAA R/S/G scales"
  - "NOAA 27-day forecast; SWPC alerts; DSCOVR solar wind; GOES X-ray flux"
  - "Derived HF propagation outlook"

architecture: >
  Python; FastMCP; distributed through PyPI; supports stdio and Streamable HTTP.
  No authentication required (NOAA SWPC public endpoints). Explicitly documents
  Claude Desktop, Claude Code, ChatGPT Desktop, Cursor, VS Code / GitHub
  Copilot, and Gemini CLI.

status_detail: >
  Publicly available; packaged for installation.

evidence:
  - label: "Repository"
    url: https://github.com/qso-graph/solar-mcp

last_verified: 2026-09-11
---
