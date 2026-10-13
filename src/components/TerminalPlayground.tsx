import { Play, Sparkles, Terminal } from 'lucide-react'
import { useState } from 'react'
import { terminalCommands } from '../data/portfolio'

interface CommandEntry {
  command: string
  output: string
}

export function TerminalPlayground() {
  const [history, setHistory] = useState<CommandEntry[]>([
    {
      command: 'about',
      output: terminalCommands.about
    }
  ])
  const [inputVal, setInputVal] = useState('')

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    const output =
      terminalCommands[trimmed] ||
      `Command not found: "${trimmed}". Type "help" to see available commands.`

    setHistory((prev) => [...prev, { command: trimmed, output }])
    setInputVal('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleRunCommand(inputVal)
  }

  const quickCommands = ['about', 'skills', 'projects', 'certs', 'status', 'clear']

  return (
    <div className="terminal-window" id="terminal">
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <div className="terminal-tab-title">
          <Terminal size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-1px' }} />
          niththeesh@ai-core: ~ (interactive shell)
        </div>
        <span style={{ fontSize: '11px', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
          online
        </span>
      </div>

      <div className="terminal-chips">
        <span className="chip-label">
          <Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} />
          Quick Run:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            className="terminal-chip-btn"
            onClick={() => handleRunCommand(cmd)}
          >
            {cmd}
          </button>
        ))}
      </div>

      <div className="terminal-body">
        {history.map((entry, idx) => (
          <div key={idx} className="terminal-log">
            <div className="cmd-executed">
              <span style={{ color: 'var(--text-dim)', marginRight: '8px' }}>$</span>
              {entry.command}
            </div>
            <div className="res-output">{entry.output}</div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminal-input-row">
          <span className="terminal-prompt">$</span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'certs'..."
            aria-label="Terminal command input"
          />
          <button type="submit" style={{ color: 'var(--accent)', padding: '4px' }} aria-label="Run command">
            <Play size={13} fill="var(--accent)" />
          </button>
        </form>
      </div>
    </div>
  )
}
