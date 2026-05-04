# Trouble Shooting

## Build Fails With Windows `spawn EPERM`

### Symptom

Running `npm run build` inside the sandbox failed with:

```text
[commonjs--resolver] spawn EPERM
```

### Context

The TypeScript step completed far enough for Vite to start, but Vite failed while resolving paths on Windows inside the sandbox.

### Resolution

Rerun the same command with elevated command permissions:

```bash
npm run build
```

The elevated run succeeded.

### Latest Occurrence

The same sandbox-only `spawn EPERM` happened after the Preparation UI refinement. Running `npm run build` with elevated command permissions succeeded again.

## `test-scraper.js` Fails Under Current Package Settings

### Symptom

Running `node test-scraper.js` fails because the file uses CommonJS:

```text
ReferenceError: require is not defined in ES module scope
```

### Cause

`package.json` sets:

```json
{
  "type": "module"
}
```

But `test-scraper.js` uses `require(...)` and `module.exports`.

### Resolution Options

- Treat `test-scraper.js` as separate/legacy and do not include it in the Vite game workflow.
- Rename it to `.cjs` if it must run as CommonJS.
- Convert it to ESM if it should remain a `.js` file in this package.

## Docker Mention Confusion

### Symptom

There was a question about whether Docker needed to be installed.

### Finding

No `Dockerfile`, `docker-compose.yml`, or Docker references are present in the project source/docs.

### Resolution

Docker is not required for the current project workflow. Use:

```bash
npm install
npm run dev
npm run build
```

## Mojibake In PowerShell Output

### Symptom

Some Korean Markdown content appears garbled when read through PowerShell command output.

### Likely Cause

The file content is UTF-8, but the shell output encoding/code page may not display Korean correctly.

### Resolution

Do not assume the file itself is corrupted from PowerShell mojibake alone. Verify in the editor or with a UTF-8 aware viewer before rewriting large Korean documents.

## Skill Validation Fails Because `PyYAML` Is Missing

### Symptom

Running the skill creator validation or metadata scripts failed with:

```text
ModuleNotFoundError: No module named 'yaml'
```

### Context

This happened while creating the global `startpjt` skill under `C:\Users\madwi\.codex\skills\startpjt`.

### Resolution

Manual validation was used:

- Confirmed `SKILL.md` exists.
- Confirmed `SKILL.md` has YAML frontmatter with `name` and `description`.
- Confirmed `agents/openai.yaml` exists with `interface` metadata.

Installing `PyYAML` in the active Python environment would allow `quick_validate.py` and `generate_openai_yaml.py` to run normally.

## Vite Chunk Size Warning After Asset Imports

### Symptom

`npm run build` succeeds but warns that a chunk is larger than 500 kB after minification.

### Cause

The preparation screen imports many image assets directly through Vite URLs, increasing the main bundle's referenced asset graph and generated JavaScript chunk size.

### Resolution

No immediate fix is required while the app remains small. If the warning becomes a real loading issue, consider:

- Splitting UI modules with dynamic `import()`.
- Loading preparation-only assets lazily when the player opens Preparation.
- Adjusting `build.chunkSizeWarningLimit` only after measuring actual load performance.
