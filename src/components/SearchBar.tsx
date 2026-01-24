import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load search index
  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setSearchIndex(data))
      .catch(err => console.error('Failed to load search index:', err));
  }, []);

  // Fuse.js setup
  const fuse = new Fuse(searchIndex, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'description', weight: 0.3 },
      { name: 'category', weight: 0.2 },
      { name: 'url', weight: 0.1 }
    ],
    threshold: 0.4,
    includeScore: true,
  });

  // Search handler
  useEffect(() => {
    if (query.length > 0) {
      const searchResults = fuse.search(query).slice(0, 8);
      setResults(searchResults.map(r => r.item));
      setIsOpen(true);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, searchIndex]);

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        }
        break;
    }
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Framework': return '#39FF14';
      case 'CVE': return '#BD34FE';
      case 'Article': return '#10b981';
      case 'Research': return '#3b82f6';
      default: return '#8B949E';
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="terminal-search flex items-center w-full px-4 py-2 rounded-lg transition-all"
        style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          boxShadow: isOpen ? '0 0 0 3px rgba(57, 255, 20, 0.15), 0 0 20px rgba(57, 255, 20, 0.1)' : 'none',
          borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)'
        }}
      >
        <span className="text-sm mr-2" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder="search snailsploit..."
          className="flex-1 bg-transparent text-sm outline-none"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}
        />
        <kbd
          className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded"
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          ⌘K
        </kbd>
      </div>

      {/* Results dropdown */}
      {isOpen && results.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden z-50 shadow-2xl"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)'
          }}
        >
          {results.map((result, index) => (
            <a
              key={result.url}
              href={result.url}
              className="block px-4 py-3 transition-colors"
              style={{
                backgroundColor: index === selectedIndex ? 'var(--color-surface-hover)' : 'transparent'
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: `${getCategoryColor(result.category)}20`,
                    color: getCategoryColor(result.category),
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {result.category}
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  {result.title}
                </span>
              </div>
              <p className="text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>
                {result.description}
              </p>
            </a>
          ))}

          <div
            className="px-4 py-2 text-xs flex items-center gap-4 border-t"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span><kbd className="px-1 rounded" style={{ backgroundColor: 'var(--color-bg)' }}>↑↓</kbd> navigate</span>
            <span><kbd className="px-1 rounded" style={{ backgroundColor: 'var(--color-bg)' }}>↵</kbd> select</span>
            <span><kbd className="px-1 rounded" style={{ backgroundColor: 'var(--color-bg)' }}>esc</kbd> close</span>
          </div>
        </div>
      )}

      {/* No results */}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg p-4 text-center z-50"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)'
          }}
        >
          <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            No results for "{query}"
          </p>
        </div>
      )}
    </div>
  );
}
