---
# id / URL: /project/oiss-mcp-server/
# This supersedes the placeholder entry oiss-knowledge-mesh — delete that file.
name: OISS MCP Server
organization: Noblis / NOAA NESDIS
affiliation: NOAA       # NOAA | External
poc:
  name: Achuna Ofonedu, Amogha Sinha, Dawson Miller
  role: Noblis
summary: >-
  AI-assisted documentation retrieval, code generation, and architecture
  understanding for developers and data analysts working with NOAA's Open
  Information Stewardship Service (OISS).

status: prototype
mcp_type: server
resource: knowledge management

overview: >
  A NOAA-funded implementation developed by Noblis in collaboration with NOAA
  stakeholders during the NOAA Knowledge Mesh project, as an ad-hoc proof of
  concept rather than an original project objective. Demonstrated with GitHub
  Copilot in Visual Studio Code.

capabilities:
  - "Question answering over OISS documentation using RAG / vector retrieval"
  - "Intelligent code generation using custom Python source-code chunking and retrieval"
  - "Architecture-diagram extraction and interpretation using vision-enabled LLMs"

resources_exposed:
  - "OISS documentation PDFs"
  - "OISS Python source code"
  - "OISS architecture diagrams and associated system information"

architecture: >
  Model Context Protocol; Retrieval-Augmented Generation (RAG); vector
  retrieval; custom Python code chunking; vision-enabled LLM processing of
  architecture diagrams; integration with the OISS Python package. Demonstrated
  via GitHub Copilot in VS Code, with MCP interoperability intended to support
  additional model providers and development environments. Authentication was
  not specified in the public report.

status_detail: >
  Proof of concept completed in 2025; demonstrated in a developer environment,
  with broader access/deployment not documented. Noblis recommended
  productionizing it as an interactive OISS developer toolkit, expanding IDE
  support, and integrating MCP capabilities with OISS UBL templates.

evidence:
  - label: "NOAA Institutional Repository report — Comprehensive Knowledge Mesh for Emergency Management and Response in Coastline Disasters"

last_verified: 2026-09-11
---
