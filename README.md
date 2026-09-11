# NOAA MCP Landscape

An open, community-maintained survey of [Model Context Protocol](https://modelcontextprotocol.io/)
(MCP) experimentation and implementation across NOAA and its partners.

It's a static [GitHub Pages](https://pages.github.com/) site backed by
structured records — no database, no backend. Each entry is its own page;
search and filtering run in the browser.

## Repository layout

```
noaa-mcp-landscape/
├── _config.yml                # site config, collection setup, vocabularies
├── index.html                 # registry: search + filters
├── PROJECT_TEMPLATE.md         # copy this to add an entry
│
├── _projects/                 # ← the data. One file per entry.
│   ├── oiss-knowledge-mesh.md  #    served at /project/oiss-knowledge-mesh/
│   ├── erddap-mcp.md
│   └── ...
│
├── _layouts/                  # default, doc, and project (entry) page shells
├── _includes/                 # head + masthead
├── assets/
│   ├── css/style.css
│   └── js/filter.js           # registry search + filtering
│
├── docs/
│   ├── about.md
│   ├── contribute.md          # how to add/update entries (start here)
│   └── terminology.md
│
└── .github/ISSUE_TEMPLATE/    # web forms that feed the registry
    ├── new_entry.yml
    └── update_entry.yml
```

Each entry lives in `_projects/` as a Markdown file whose **YAML front matter**
(the block between the `---` lines) holds all the fields; the body stays empty.
The **filename is the entry's permanent id and URL** — `_projects/erddap-mcp.md`
is served at `/project/erddap-mcp/`. Keep it stable once merged.

## Add or update an entry

Two ways, both covered in **[docs/contribute.md](docs/contribute.md)**:

1. **Web form** — open a *New entry* issue and fill it in; a maintainer files it.
2. **Pull request** — copy `PROJECT_TEMPLATE.md` into `_projects/<id>.md`,
   fill it in, open a PR.

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. Set two values in `_config.yml` so links resolve:
   - `baseurl`: the repo name with a leading slash (`/noaa-mcp-landscape`), **or**
     `""` if you serve from a user/org root repo or a custom domain.
   - `repo_url`: the repository URL (used by the “Add an entry” links).
4. Update the `url` in `.github/ISSUE_TEMPLATE/config.yml` to your Pages URL.

## Run locally

Requires Ruby + Bundler.

```bash
bundle install
bundle exec jekyll serve
# open http://127.0.0.1:4000/noaa-mcp-landscape/
```

## Notes

- Entries are contributed and not independently verified; each record's evidence
  links and `last_verified` date are the measure of currency.
