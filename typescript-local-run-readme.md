# Running a TypeScript file locally

This project can be used in two simple ways during development:

- **Run the file locally** to test ideas quickly.
- **Check types only** to validate typings without generating build files.

## Why `tsc src/index.ts` showed an error

If a `tsconfig.json` exists and a file is passed directly to `tsc`, TypeScript does **not** load the project config. In newer versions, this now raises TS5112 instead of silently ignoring the config.

Example that causes the error:

```bash
npx tsc .\src\index.ts
```

## Recommended way

Use `tsx` to run the file directly during development

```bash
npx tsx .\src\index.ts
```

Use `tsc` with `--noEmit` when the goal is only to validate types from `tsconfig.json`

```bash
npx tsc -p . --noEmit
```

## Suggested workflow

Run these two commands when experimenting locally:

```bash
npx tsc -p . --noEmit
npx tsx .\src\index.ts
```

This gives type validation from the project config and also runs the file locally for quick tests.

## Optional package scripts

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "tsx src/index.ts",
    "check": "tsc -p . --noEmit"
  }
}
```

Then use:

```bash
npm run check
npm run dev
```

## Notes

- `npx tsc` or `npx tsc -p .` uses `tsconfig.json`.
- `npx tsc .\src\index.ts --ignoreConfig` compiles a single file and intentionally skips `tsconfig.json`, which is usually not ideal for a normal project setup.
- Newer Node versions can run `.ts` files with type stripping, but that does not replace type-checking.
