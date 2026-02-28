# ScriptIt

**Run, navigate, and lint Makefiles, Shell scripts, PowerShell scripts, and Batch files — all from one VS Code extension.**

## Features

- **CodeLens** — `▶ Run` buttons above every target, function, and label  
- **Quick Pick** — Pick & run any target from the current file or entire workspace  
- **Task Auto-Detection** — All targets appear in `Terminal → Run Task`  
- **Outline & Breadcrumbs** — Navigate targets in the sidebar symbol view  
- **Diagnostics** — Lint common issues (tabs in Makefiles, missing shebangs, PS aliases)  
- **Completions** — Autocomplete target/function names  

## Supported Languages

| Language | Files | Detected Targets |
|---|---|---|
| **Makefile** | `Makefile`, `*.mk`, `GNUmakefile` | Targets (`build:`, `clean:`) |
| **Shell/Bash** | `*.sh`, `*.bash`, `*.zsh` | Functions (`my_func()`) |
| **PowerShell** | `*.ps1`, `*.psm1`, `*.psd1` | Functions (`function Verb-Noun`) |
| **Batch** | `*.bat`, `*.cmd` | Labels (`:build`, `:deploy`) |

## Commands

| Command | Description |
|---|---|
| `ScriptIt: Run Target` | Run the target under the cursor (used by CodeLens) |
| `ScriptIt: Pick & Run Target` | Pick a target from the current file |
| `ScriptIt: List All Targets in Workspace` | Pick a target from all files in the workspace |

## Settings

| Setting | Default | Description |
|---|---|---|
| `scriptit.makeCommand` | `make` | Path to the make executable |
| `scriptit.shellCommand` | `bash` | Shell for running `.sh` scripts |
| `scriptit.powershellCommand` | `pwsh` | PowerShell executable |
| `scriptit.enableCodeLens` | `true` | Show ▶ Run CodeLens |
| `scriptit.enableDiagnostics` | `true` | Enable linting |

## Development

```bash
git clone https://github.com/rsvsu/scriptit.git
cd scriptit
npm install
npm run compile
# Press F5 in VS Code to launch Extension Development Host
```

## License

MIT
