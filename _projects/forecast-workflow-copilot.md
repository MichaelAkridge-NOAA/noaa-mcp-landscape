---
# id / URL: /project/forecast-workflow-copilot/
# ILLUSTRATIVE SAMPLE ENTRY — shows a "client" MCP type and "pilot" status.
# Replace or delete before launch.
name: Forecast Workflow Copilot (sample)
organization: NOAA / NWS
poc:
  name: TBD
  role: ""
  email: ""
summary: >-
  An assistant that consumes multiple MCP servers to support routine
  forecast-desk workflows.

status: pilot
mcp_type: client
resource: workflow

overview: >
  A sample MCP client (host application) that connects to several MCP
  servers — data access, documentation, and internal tooling — to help
  forecasters assemble context and draft routine products. Included to
  illustrate the "client / host" side of the landscape, not just servers.

capabilities:
  - Connects to multiple MCP servers and routes tool calls
  - Assembles cross-source context for a forecaster's task
  - Drafts routine text products for human review

resources_exposed:
  - Not applicable (this is a client, not a server)

architecture: >
  MCP host application orchestrating several remote MCP servers. (Add
  specifics: host framework, which servers it connects to, human-in-the-loop
  review.)

status_detail: >
  Limited pilot with a small group of users.

evidence:
  - label: Model Context Protocol
    url: https://modelcontextprotocol.io/

last_verified: 2026-09-01
---
