---
# id / URL: /project/zyra/
name: Zyra
organization: NOAA Global Systems Laboratory (GSL)
poc:
  name: Eric Hackathorn
  role: NOAA Global Systems Laboratory
summary: >-
  A modular scientific-workflow framework — acquire, process, simulate,
  visualize, verify, export — with an MCP interface that lets AI clients discover
  and invoke its workflow capabilities.

status: production
mcp_type: server
resource: workflow

overview: >
  A NOAA-developed (GSL) framework in which MCP is one interface within a
  broader scientific-workflow system rather than the project's sole purpose. It
  can expose data-processing and visualization commands as discoverable MCP
  tools and supports asynchronous jobs with progress streaming.

capabilities:
  - "MCP tool discovery and invocation via initialize, tools/list, and tools/call"
  - "Exposes Zyra workflow commands as MCP tools"
  - "Supports synchronous and asynchronous execution and progress reporting"

resources_exposed:
  - "Scientific and environmental data workflows; data-acquisition connectors"
  - "GRIB2, NetCDF and other data-processing capabilities; visualization; workflow outputs and artifacts"

architecture: >
  Python 3.10+; FastAPI-based API service; JSON-RPC 2.0 MCP endpoint; HTTP,
  Server-Sent Events (SSE), and WebSocket support; PyPI distribution. Optional
  API-key authentication (ZYRA_API_KEY / X-API-Key); WebSocket authentication
  supported when enabled. Documented for Claude Desktop, Cursor, and VS Code MCP
  clients. Deployable locally or as a network-accessible service.

status_detail: >
  Public open-source implementation under active development.

evidence:
  - label: "Repository"
    url: https://github.com/NOAA-GSL/zyra

last_verified: 2026-09-11
---
