import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from './Icons.jsx'

export default function CommandPalette({ items, onClose }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)

  // Focus the search box on open and give focus back to whatever opened us on close.
  useEffect(() => {
    const opener = document.activeElement
    inputRef.current?.focus()
    return () => {
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [])

  const q = query.trim().toLowerCase()
  const results = q ? items.filter((it) => (it.group + ' ' + it.label).toLowerCase().includes(q)) : items
  const active = Math.min(index, Math.max(results.length - 1, 0))

  const run = (item) => {
    onClose()
    // Wait a tick so focus returns first, then run the action.
    setTimeout(() => item.run(), 0)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex(Math.min(active + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex(Math.max(active - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault()
      run(results[active])
    }
  }

  return (
    <div className="palette__backdrop" onMouseDown={onClose}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Quick actions"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="palette__search">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIndex(0)
            }}
            placeholder="Go to a section, open a profile, copy my email"
            aria-label="Search actions"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `pal-${results[active].id}` : undefined}
          />
        </div>
        <ul id="palette-list" className="palette__list" role="listbox" aria-label="Actions">
          {results.length === 0 ? (
            <li className="palette__empty">Nothing matches “{query}”. Try “github”, “work” or “email”.</li>
          ) : (
            results.map((it, i) => (
              <li
                key={it.id}
                id={`pal-${it.id}`}
                role="option"
                aria-selected={i === active}
                className="palette__item"
                onMouseMove={() => setIndex(i)}
                onClick={() => run(it)}
              >
                <span>{it.label}</span>
                <span className="palette__group">{it.group}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
