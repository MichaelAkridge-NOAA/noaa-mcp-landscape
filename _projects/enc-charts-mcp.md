---
# id / URL: /project/enc-charts-mcp/
name: ENC Charts MCP Server
organization: Independent developer — Tony Bentley (external); uses NOAA data
affiliation: External
poc:
  name: Tony Bentley
  role: tonybentley
summary: >-
  Programmatic access to NOAA Electronic Navigational Charts — chart discovery,
  S-57 parsing, feature extraction, and navigation-oriented spatial queries.

status: production
mcp_type: server
resource: data access

overview: >
  An external MCP built around NOAA ENC products. It uses NOAA's XML ENC Product
  Catalog for chart discovery and downloads chart ZIP files directly from
  charts.noaa.gov. NOAA charts are updated weekly.

capabilities:
  - "Chart discovery by coordinates or bounding box; chart retrieval; chart metadata retrieval"
  - "S-57 feature extraction and filtering; depth-range analysis; spatial queries; local chart caching"

resources_exposed:
  - "NOAA Electronic Navigational Charts (ENC); NOAA ENC XML Product Catalog"
  - "Downloadable S-57 chart files; chart metadata"
  - "Navigational features including lights, buoys, depths, and other S-57 object classes"

architecture: >
  TypeScript / Node.js; MCP SDK; STDIO transport; Python/GDAL used for S-57
  parsing; npm installation; local caching. No NOAA authentication required
  (the NOAA ENC catalog and chart downloads are public). Claude Desktop is
  explicitly documented; other compatible MCP clients should also work.

status_detail: >
  Publicly available public implementation; npm-installable.

evidence:
  - label: "Repository"
    url: https://github.com/tonybentley/enc-charts-mcp

last_verified: 2026-09-11
---
