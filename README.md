<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=120&section=header" width="100%"/>

# runbook-cli

### Save and run project commands from anywhere

<p>
<a href="https://www.npmjs.com/package/runbook-cli"><img src="https://img.shields.io/npm/v/runbook-cli?style=for-the-badge&color=brightgreen&label=version" alt="npm version"></a>&nbsp;
<a href="https://www.npmjs.com/package/runbook-cli"><img src="https://img.shields.io/npm/dw/runbook-cli?style=for-the-badge&color=blue&label=downloads" alt="npm downloads"></a>&nbsp;
<a href="https://github.com/brian-mwirigi/runbook-cli/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/runbook-cli?style=for-the-badge" alt="license"></a>&nbsp;
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">&nbsp;
<img src="https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
</p>

**Stop checking README &bull; Stop guessing commands &bull; Just run**

[Documentation](https://www.brianmunene.me/docs/runbook-cli-docs) &bull; [npm](https://www.npmjs.com/package/runbook-cli) &bull; [Issues](https://github.com/brian-mwirigi/runbook-cli/issues)

</div>

<br/>

## Why runbook-cli?

Every project runs differently. You can't remember. You check the README every single time.

```bash
# Is it...
npm run dev          # or
npm start            # or
pnpm dev             # or
python manage.py runserver   # ???
```

**Stop guessing.** Set it once. Run it forever.

```bash
runbook set dev "npm run dev"
runbook dev
# Done.
```

---

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Commands](#commands)
- [Real-World Examples](#real-world-examples)
- [Team Usage](#team-usage)
- [Why runbook?](#why-runbook)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

```bash
npm install -g runbook-cli

runbook set dev "npm run dev"
runbook set test "npm test"
runbook set build "npm run build"

# From anywhere in the project:
runbook dev
```

---

## Features

| Feature | Description |
|---------|-------------|
| **Set & Run** | Save any command, run it by name |
| **Works Anywhere** | Run from any subfolder in the project |
| **Cross-Language** | Node, Python, Go, Rust, Docker — anything |
| **Team Sharing** | Commit `.runbook` to git |
| **Auto-Detection** | Finds git root automatically |
| **Short Alias** | `rb dev` works too |
| **Zero Config** | No setup files, no boilerplate |

---

## Commands

### `runbook set` — Save a command

```bash
runbook set dev "npm run dev"
runbook set test "npm test"
runbook set build "npm run build"
runbook set deploy "npm run build && git push"
```

### `runbook <name>` — Run it

```bash
runbook dev

# Works from any subfolder
cd src/components
runbook dev    # Still works!

# Short alias
rb dev
```

### `runbook list` — See all commands

```bash
runbook list
# or just
runbook
```

### `runbook delete` — Remove a command

```bash
runbook delete dev
# or
runbook rm dev
```

### `runbook info` — Project info

```bash
runbook info
```

---

## Real-World Examples

<details>
<summary><b>Node.js / Next.js</b></summary>

```bash
runbook set dev "npm install && npm run dev"
runbook set build "npm run build"
runbook set test "npm test"
runbook set lint "npm run lint"
```

</details>

<details>
<summary><b>Python / Django</b></summary>

```bash
runbook set dev "pip install -r requirements.txt && python manage.py runserver"
runbook set migrate "python manage.py migrate"
runbook set shell "python manage.py shell"
```

</details>

<details>
<summary><b>Go</b></summary>

```bash
runbook set dev "go run main.go"
runbook set build "go build -o bin/app"
runbook set test "go test ./..."
```

</details>

<details>
<summary><b>Docker</b></summary>

```bash
runbook set up "docker-compose up -d"
runbook set down "docker-compose down"
runbook set logs "docker-compose logs -f"
```

</details>

<details>
<summary><b>Full Stack</b></summary>

```bash
runbook set dev "docker-compose up -d && npm run dev"
runbook set backend "cd backend && python manage.py runserver"
runbook set frontend "cd frontend && npm start"
```

</details>

---

## Team Usage

Commit `.runbook` to git — your whole team gets the same commands:

```bash
git add .runbook
git commit -m "Add runbook commands"
```

New dev joins? They run `runbook dev` and they're coding in 10 seconds.

---

## Why runbook?

| | runbook | README | Makefile | package.json |
|---|:---:|:---:|:---:|:---:|
| **Works from subfolders** | :white_check_mark: | :x: | :x: | :x: |
| **Cross-language** | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
| **No config needed** | :white_check_mark: | :x: | :x: | :x: |
| **Team sharing** | :white_check_mark: | :warning: | :warning: | :warning: |
| **Instant recall** | :white_check_mark: | :x: | :x: | :x: |

---

## How It Works

1. **Finds your git root** automatically
2. **Stores commands** in `.runbook` (JSON) at project root
3. **Works from any subfolder** — always resolves to project root
4. **Team shares** by committing `.runbook` to git

```json
{
  "dev": "npm run dev",
  "test": "npm test",
  "build": "npm run build"
}
```

---

## Development

```bash
git clone https://github.com/brian-mwirigi/runbook-cli.git
cd runbook-cli
npm install
npm run build
npm link
runbook set hello "echo hello world"
runbook hello
```

## Contributing

Contributions welcome! Please [open an issue](https://github.com/brian-mwirigi/runbook-cli/issues) or submit a PR.

## License

[MIT](./LICENSE)

---

<div align="center">

**Built by [Brian Munene Mwirigi](https://brianmunene.me)**

<a href="https://www.npmjs.com/package/runbook-cli">npm</a> &bull;
<a href="https://www.brianmunene.me/docs/runbook-cli-docs">Docs</a> &bull;
<a href="https://github.com/brian-mwirigi/runbook-cli/issues">Issues</a>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=80&section=footer" width="100%"/>

</div>
