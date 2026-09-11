---
layout: doc
title: About this registry
summary: What the NOAA MCP Landscape is, what belongs in it, and how it's maintained.
permalink: /docs/about/
---

The **NOAA MCP Landscape** is an open, community-maintained survey of
[Model Context Protocol](https://modelcontextprotocol.io/) (MCP)
experimentation and implementation across NOAA and its partners.

Its job is simple: make it easy to see who is building what with MCP, so that
teams can find each other, reuse work, and avoid duplicating effort. It is a
map of activity, not an endorsement or an inventory of supported services.

## What belongs here

Any effort — from a napkin concept to a production service — that uses MCP to
expose NOAA-relevant resources or to build MCP-consuming assistants. That
includes:

- **Servers** that expose data, documentation, or tools over MCP.
- **Clients / hosts** that consume MCP servers to support a workflow.
- Efforts led by NOAA, by partners (cooperative institutes, IOOS regional
  associations, contractors), or jointly.

Concepts and prototypes are welcome. An early entry with a name and a status is
more useful than a blank spot on the map.

## How it works

Each entry is a single structured YAML file in the repository. The site is a
static [GitHub Pages](https://pages.github.com/) build — there is no database
and no backend. Search and filtering run in the browser over the entries.

Because entries are contributed by the community, treat each record's
**evidence** links and **last verified** date as the measure of how current it
is. See [Contribute](../contribute/) to add or correct an entry, and
[Terminology](../terminology/) for definitions of the fields and vocabularies.

## What it is not

- Not an official NOAA service catalog or a statement of support.
- Not a security or approval review. Listing here says nothing about whether a
  server is authorized for any particular data or environment.
- Not exhaustive — it only knows what people contribute.
