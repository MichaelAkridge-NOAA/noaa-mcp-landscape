---
# id / URL: /project/forecast-mcp/
name: Forecast MCP
organization: NOAA / Office of Marine and Aviation Operations (OMAO), Lapenta Internship Program
poc:
  name: Nikhil Manakkal
  role: 2026 OMD Lapenta Intern
summary: >-
  Natural-language access to numerical weather prediction data to support
  forecast questions and Impact-Based Decision Support Services (IDSS).

status: prototype
mcp_type: server
resource: data access

overview: >
  An internal NOAA internship-developed prototype designed to move specialized
  forecast-data retrieval and calculations into MCP tools rather than relying on
  the LLM to perform them. NBM is used for longer-range/probabilistic guidance
  and RRFS for shorter-term precision. Tested with Claude 4.6 Opus, Gemini 2.5
  Pro, and ChatGPT 5.4.

capabilities:
  - "batch_tool: query weather parameters across a time window"
  - "probability_of_exceedance: likelihood of crossing thresholds"
  - "event_timing: onset/end timing for thresholds"
  - "window_search: max/min/average/sum over time"
  - "swath_tool: map values by grid cell for an area"

resources_exposed:
  - "Numerical weather prediction data via EDR; National Blend of Models (NBM); Rapid Refresh Forecast System (RRFS)"
  - "Available weather parameters, model runs, and forecast runs"

architecture: >
  MCP; EDR API; chat interface; point- and area-based spatial queries.
  Underlying implementation language/framework and access method were not
  specified in the presentation.

status_detail: >
  Prototype / demonstration developed summer 2026. Testing found that different
  LLMs could make consistent tool calls for simple forecast requests.

evidence:
  - label: "Internal OMAO / Lapenta presentation / demo (no public link provided)"

last_verified: 2026-09-11
---
