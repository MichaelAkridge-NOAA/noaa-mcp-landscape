---
# Copy this file to _projects/<your-entry-id>.md and fill it in.
# The filename (without .md) becomes the entry's permanent id and URL:
#   _projects/erddap-mcp.md  ->  /project/erddap-mcp/
# Use lowercase-hyphenated words. Keep the surrounding fence lines.
#
# Controlled vocabularies (keep to these values):
#   status   : concept | prototype | pilot | production | archived
#   mcp_type : server | client | host | both
#   resource : data access | knowledge management | tooling | workflow | modeling | other
#
# Full field reference: /docs/contribute/
name: Example MCP Project
organization: NOAA / Partner
poc:
  name: Jane Doe
  role: Maintainer
  email: jane.doe@example.org
summary: >-
  One sentence describing what this exposes or does.

status: prototype
mcp_type: server
resource: data access

overview: >
  A short paragraph: what it is, who it's for, and why it exists.

capabilities:
  - What the MCP interface can do
  - Another capability

resources_exposed:
  - A dataset, document set, or tool it exposes
  - Another resource

architecture: >
  Server framework, transport, hosting, and auth model.

status_detail: >
  One sentence on maturity and support level.

evidence:
  - label: Repository
    url: https://example.org/repo
  - label: Design doc
    url: https://example.org/doc

last_verified: 2026-09-01
---
