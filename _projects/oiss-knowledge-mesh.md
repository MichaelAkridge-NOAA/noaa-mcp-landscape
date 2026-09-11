---
# Filename (without .md) is the entry's permanent id and URL: /project/oiss-knowledge-mesh/
# Keep the surrounding fence lines: they mark this as a rendered entry. See /docs/contribute.
name: OISS Knowledge Mesh
organization: NOAA / Noblis
poc:
  name: TBD
  role: OISS Knowledge Mesh lead
  email: ""
summary: >-
  MCP access to documentation, architecture, and development resources
  associated with OISS.

status: prototype        # concept | prototype | pilot | production | archived
mcp_type: server         # server | client | host | both
resource: knowledge management

overview: >
  A Model Context Protocol server that exposes OISS program knowledge —
  documentation, architecture references, and development artifacts — to
  MCP-capable assistants. The goal is to let staff and contractors query
  institutional knowledge in natural language rather than hunting across
  wikis, repositories, and slide decks.

capabilities:
  - Retrieval over OISS documentation and architecture references
  - Structured lookup of development resources and component metadata
  - Context assembly for assistant-driven Q&A about the program

resources_exposed:
  - OISS documentation corpus
  - Architecture and design references
  - Development / component metadata

architecture: >
  MCP server fronting an indexed knowledge store. Transport and hosting
  details to be documented. (Add specifics: server framework, index/store,
  auth model, deployment target.)

status_detail: >
  Prototype under active development. Not yet a supported production service.

evidence:
  - label: Program documentation (replace with real link)
    url: https://example.org/REPLACE-ME

last_verified: 2026-09-01
---
