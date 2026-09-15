---
# id / URL: /project/mcp-showcase-demo/
name: MCP Showcase Demo
organization: JoshuaLee-NOAA GitHub account (NOAA-associated developer)
affiliation: NOAA       # NOAA | External
poc:
  name: Joshua Lee
  role: "GitHub: JoshuaLee-NOAA"
summary: >-
  An interactive, NOAA-themed demonstration of how MCP connects an AI chat
  application with external tools and data-like services.

status: prototype
mcp_type: both
resource: other

overview: >
  A NOAA-themed educational/demo project. It does not access live NOAA data:
  per the README, all server data are realistic fake data for demonstration.
  Especially useful as a training and communication example.

capabilities:
  - "4 custom MCP servers with 13 tools: weather stations (2), ocean buoys (3), satellite data (3), storm tracker (5)"
  - "Request-lifecycle visualization and educational content"

resources_exposed:
  - "Demonstration weather-station, ocean-buoy, satellite, and storm-tracking data (realistic fake data for demonstration)"

architecture: >
  Next.js 15; React 19; TypeScript; Tailwind CSS; LangChain.js; custom
  TypeScript MCP servers; Node.js 18+. AI integration is via Anthropic Claude or
  OpenAI GPT through LangChain.js and requires an Anthropic or OpenAI API key;
  there is no NOAA-data authentication because the servers generate demo data.

status_detail: >
  Prototype / demonstration, explicitly in development. Do not catalog its 13
  tools as operational NOAA data services — the repository states they generate
  realistic fake data.

evidence:
  - label: "Repository"
    url: https://github.com/JoshuaLee-NOAA/mcp-showcase

last_verified: 2026-09-11
---
