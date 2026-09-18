---
layout: doc
title: Terminology
summary: Definitions for the fields and controlled vocabularies used across entries.
permalink: /docs/terminology/
---

## Model Context Protocol (MCP)

An open protocol that standardizes how applications provide context and tools
to AI assistants. An MCP **server** exposes resources, tools, and prompts; an
MCP **client** (embedded in a **host** application) connects to servers and
makes their capabilities available to a model. See
[modelcontextprotocol.io](https://modelcontextprotocol.io/) for the spec.

## MCP type

How a project sits relative to the protocol.

- **server** — Exposes resources, tools, or prompts over MCP for others to consume.
- **client** — Software that connects to MCP servers (often embedded in a host).
- **host** — An application a person uses that embeds one or more MCP clients.
- **both** — A project that genuinely does more than one of the above.

## Status

Maturity of the effort. This is about the project's lifecycle, not a quality or
security judgment.

- **concept** — An idea or proposal; little or no code yet.
- **prototype** — Working code demonstrating the idea; not supported.
- **pilot** — In limited real use with a defined group of users.
- **production** — A supported, generally available service.
- **archived** — No longer active; kept for the historical record.

## Resource

The primary kind of thing an entry is about.

- **data access** — Discovery, query, or retrieval of datasets and observations.
- **knowledge management** — Documentation, references, institutional knowledge.
- **tooling** — Actions and utilities (running a job, formatting, conversions).
- **workflow** — Assembling context across sources to support a task end to end.
- **modeling** — Model configuration, runs, or output interpretation.
- **other** — Anything that doesn't fit; propose a new value if it recurs.

## Affiliation

Whether the effort is internal to NOAA or comes from outside it. Shown on the
front page as the **Affiliation** filter.

- **NOAA** — Run by a NOAA office, lab, or program, or by NOAA-funded
  contractors and cooperative institutes acting on NOAA's behalf.
- **External** — An independent third-party project, even when it builds on or
  exposes NOAA data. External entries are not NOAA services and carry no NOAA
  endorsement.

## Record fields

- **overview** — What the effort is and why it exists.
- **capabilities** — What the MCP interface can actually do.
- **resources exposed** — The datasets, documents, or tools made available
  (for servers).
- **architecture / technology** — Framework, transport, hosting, and auth.
- **evidence / documentation** — Links that let a reader verify the entry:
  repositories, design docs, demos, publications.
- **point of contact (POC)** — Who to reach about the effort. A name, role, and
  email, shown near the top of the entry.
- **last verified** — When someone last confirmed the entry was accurate.
