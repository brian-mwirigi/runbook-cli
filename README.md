<div align="center">
  <h1>runbook-cli</h1>
  <p><strong>Remember project commands. Run them from anywhere.</strong></p>
  
  <p>
    <a href="https://www.npmjs.com/package/runbook-cli"><img src="https://img.shields.io/npm/v/runbook-cli?color=brightgreen" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/runbook-cli"><img src="https://img.shields.io/npm/dm/runbook-cli" alt="npm downloads"></a>
    <a href="https://github.com/brian-mwirigi/runbook-cli/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/runbook-cli" alt="license"></a>
  </p>

  <p><em>Stop checking README. Stop guessing commands. Just run.</em></p>
</div>

---

##  The Problem

Every project runs differently. You can't remember. You check the README every time.

```bash
# Is it...
npm run dev        # or
npm start          # or
pnpm dev           # or  
python manage.py runserver  # or
go run main.go     # ???
```

**Stop guessing. Stop checking.**

##  The Solution

Set it once. Run it forever.

```bash
# Set commands
runbook set dev "npm run dev"
runbook set test "npm test"
runbook set build "npm run build"

# Run from anywhere in the project
runbook dev

# That's it. 
```

> **Demo:** _[Add GIF here showing setting and running commands]_

##  Install

```bash
npm install -g runbook-cli
```

##  Usage

### Set Commands

```bash
# Basic
runbook set dev "npm run dev"

# With install
runbook set dev "npm install && npm run dev"

# Backend
runbook set start "python manage.py runserver"

# Docker
runbook set up "docker-compose up -d"

# Multi-step
runbook set deploy "npm run build && npm run test && git push"
```

### Run Commands

```bash
# Run a command
runbook dev

# Works from any subfolder
cd src/components
runbook dev  # Still works!

# Short alias
rb dev
```

### List Commands

```bash
# See all commands
runbook list

# Or just
runbook
```

### Delete Commands

```bash
runbook delete dev
# or
runbook rm dev
```

### Project Info

```bash
runbook info
```

## How It Works

- Finds your git root automatically
- Stores commands in `.runbook` in project root
- Works from any subfolder
- Team shares via git (commit `.runbook`)

## Example Workflow

```bash
# New project
cd my-project
runbook set dev "npm install && npm run dev"
runbook set test "npm test"

# 3 months later, can't remember
runbook
# Shows: dev, test

runbook dev
# Runs instantly

# In subfolder
cd src/pages
runbook dev
# Still works!
```

## Team Usage

Commit `.runbook` to git:

```bash
git add .runbook
git commit -m "Add runbook commands"
```

Now everyone runs:
```bash
runbook dev  # Works for everyone
```

## Commands Reference

```bash
runbook set <name> <command>   # Set a command
runbook <name>                 # Run a command
runbook list                   # List all commands
runbook delete <name>          # Delete a command
runbook info                   # Show project info
runbook                        # Show available commands
rb                             # Short alias
```

## Examples

### Node.js
```bash
runbook set dev "npm install && npm run dev"
runbook set build "npm run build"
runbook set test "npm test"
```

### Python/Django
```bash
runbook set dev "pip install -r requirements.txt && python manage.py runserver"
runbook set migrate "python manage.py migrate"
runbook set shell "python manage.py shell"
```

### Go
```bash
runbook set dev "go run main.go"
runbook set build "go build -o bin/app"
runbook set test "go test ./..."
```

### Docker
```bash
runbook set up "docker-compose up -d"
runbook set down "docker-compose down"
runbook set logs "docker-compose logs -f"
```

### Full Stack
```bash
runbook set dev "docker-compose up -d && npm run dev"
runbook set backend "cd backend && python manage.py runserver"
runbook set frontend "cd frontend && npm start"
```

##  Why runbook?

| Feature | runbook | README | Makefile | package.json scripts |
|---------|---------|---------|----------|---------------------|
| **Works everywhere** | ✅ Any subfolder | ❌ Root only | ❌ Root only | ❌ Root only |
| **Cross-language** | ✅ Node, Python, Go, Rust | ✅ | ✅ | ❌ Node only |
| **No config** | ✅ Just set & run | ❌ Need to read | ❌ Need Makefile | ❌ Need package.json |
| **Team sharing** | ✅ Commit `.runbook` | ⚠️ Documentation | ⚠️ Documentation | ⚠️ Node projects |
| **Instant recall** | ✅ `runbook` shows all | ❌ Search README | ❌ Search Makefile | ❌ Open file |

##  Real-World Benefits

- **Onboarding**: New dev runs `runbook dev`, they're coding in 10 seconds
- **Context switching**: Jump between 5 projects? Each has different commands? `runbook` remembers
- **Remote work**: SSH into server, forgot commands? `runbook` knows
- **Polyglot teams**: Frontend, backend, mobile - all use `runbook`

##  Examples

Commands stored in `.runbook` in project root (JSON format).

```json
{
  "dev": "npm run dev",
  "test": "npm test",
  "build": "npm run build"
}
```

**Tip:** Commit `.runbook` to git so your team uses the same commands!

##  Contributing

Found a bug? Have an idea? [Open an issue](https://github.com/brian-mwirigi/runbook-cli/issues) or submit a PR!

##  License

MIT

##  Author

Built by [Brian Mwirigi](https://github.com/brian-mwirigi)  
Blog: [brianmunene.me/blog](https://brianmunene.me/blog)

---

<div align="center">
  <strong>Stop thinking. Start running.</strong>
  <br><br>
  <a href="https://www.npmjs.com/package/runbook-cli">npm</a> •
  <a href="https://github.com/brian-mwirigi/runbook-cli">GitHub</a> •
  <a href="https://github.com/brian-mwirigi/runbook-cli/issues">Issues</a>
</div>