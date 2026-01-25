import { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface MobileNavProps {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchIndex, setSearchIndex] = useState<any[]>([]);

  // Load search index
  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setSearchIndex(data))
      .catch(err => console.error('Failed to load search index:', err));
  }, []);

  // Simple search (Fuse.js is already loaded, but keeping it simple for mobile)
  useEffect(() => {
    if (searchQuery.length > 0 && searchIndex.length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = searchIndex
        .filter((item: any) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        )
        .slice(0, 5);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, searchIndex]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

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
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors"
        style={{ backgroundColor: isOpen ? 'rgba(57, 255, 20, 0.1)' : 'transparent' }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className="block w-5 h-0.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-text-secondary)',
            transform: isOpen ? 'rotate(45deg) translateY(3px)' : 'none',
          }}
        />
        <span
          className="block w-5 h-0.5 rounded-full my-1 transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-text-secondary)',
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-5 h-0.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-text-secondary)',
            transform: isOpen ? 'rotate(-45deg) translateY(-3px)' : 'none',
          }}
        />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-[10000] md:hidden transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{
          backgroundColor: 'var(--color-bg)',
          borderLeft: '1px solid var(--color-border)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 h-16 border-b flex-shrink-0"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b flex-shrink-0" style={{ borderColor: 'var(--color-border)' }}>
          <div
            className="flex items-center px-3 py-2 rounded-lg"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <span
              className="text-sm mr-2"
              style={{ color: 'var(--color-accent-red)', fontFamily: 'var(--font-mono)' }}
            >
              $
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search..."
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}
            />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
              {searchResults.map((result) => (
                <a
                  key={result.url}
                  href={result.url}
                  className="block px-3 py-2 border-b last:border-b-0"
                  style={{ borderColor: 'var(--color-border)' }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: `${getCategoryColor(result.category)}20`,
                        color: getCategoryColor(result.category),
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {result.category}
                    </span>
                    <span
                      className="text-sm truncate"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {result.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      <span className="text-base font-medium">{item.name}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-200 ${
                          expandedItems.includes(item.name) ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-200 ${
                        expandedItems.includes(item.name) ? 'max-h-96' : 'max-h-0'
                      }`}
                      style={{ backgroundColor: 'var(--color-surface)' }}
                    >
                      <li>
                        <a
                          href={item.href}
                          className="block px-6 py-2.5 text-sm"
                          style={{ color: 'var(--color-text-primary)' }}
                          onClick={() => setIsOpen(false)}
                        >
                          Overview
                        </a>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <a
                            href={child.href}
                            className="block px-6 py-2.5 text-sm"
                            style={{ color: 'var(--color-text-primary)' }}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div
          className="px-4 py-4 border-t flex-shrink-0"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg)',
          }}
        >
          <a
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/navbar.png"
              alt="SnailSploit"
              className="h-10 w-auto opacity-90"
            />
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: 'var(--color-text-primary)' }}
            >
              SnailSploit
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
