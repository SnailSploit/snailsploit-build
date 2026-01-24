import { useState } from 'react';
import { categories, type Technique, type Category } from '../data/sef-data';

export default function SEFTaxonomy() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map(cat => ({
    ...cat,
    techniques: cat.techniques.filter(tech =>
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.techniques.length > 0 || searchTerm === '');

  const allTechniques = categories.flatMap(c => c.techniques);
  const matchCount = searchTerm
    ? allTechniques.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.id.toLowerCase().includes(searchTerm.toLowerCase())
      ).length
    : allTechniques.length;

  return (
    <div className="sef-taxonomy">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search techniques by ID or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            style={{
              background: 'rgba(30, 30, 30, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.2)'
            }}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
            {matchCount} techniques
          </span>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {filteredCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(selectedCategory?.id === category.id ? null : category);
              setSelectedTechnique(null);
            }}
            className={`p-6 rounded-xl text-left transition-all duration-300 ${
              selectedCategory?.id === category.id ? 'ring-2 ring-slate-400' : ''
            }`}
            style={{
              background: selectedCategory?.id === category.id
                ? 'rgba(148, 163, 184, 0.15)'
                : 'rgba(30, 30, 30, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.2)'
            }}
          >
            <div className="font-mono text-sm text-slate-400 mb-2">{category.code}</div>
            <div className="text-lg font-semibold text-white mb-2">{category.name}</div>
            <div className="text-sm text-gray-400 mb-3 line-clamp-2">{category.description}</div>
            <div className="text-xs text-slate-500">
              {category.techniques.length} techniques
            </div>
          </button>
        ))}
      </div>

      {/* Technique List */}
      {selectedCategory && (
        <div
          className="p-6 rounded-xl mb-8"
          style={{
            background: 'rgba(20, 20, 20, 0.9)',
            border: '1px solid rgba(148, 163, 184, 0.2)'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-slate-400 mr-3">{selectedCategory.code}</span>
              <span className="text-xl font-semibold text-white">{selectedCategory.name}</span>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-gray-500 hover:text-white transition-colors text-xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedCategory.techniques.map((technique) => (
              <button
                key={technique.id}
                onClick={() => setSelectedTechnique(
                  selectedTechnique?.id === technique.id ? null : technique
                )}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedTechnique?.id === technique.id
                    ? 'ring-1 ring-slate-400'
                    : 'hover:bg-white/5'
                }`}
                style={{
                  background: selectedTechnique?.id === technique.id
                    ? 'rgba(148, 163, 184, 0.1)'
                    : 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div className="font-mono text-xs text-slate-500 mb-1">{technique.id}</div>
                <div className="text-sm font-medium text-white">{technique.name}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Technique Detail */}
      {selectedTechnique && (
        <div
          className="p-8 rounded-xl"
          style={{
            background: 'rgba(15, 15, 15, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.3)'
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="font-mono text-slate-400 mb-2">{selectedTechnique.id}</div>
              <h3 className="text-2xl font-semibold text-white">{selectedTechnique.name}</h3>
            </div>
            <button
              onClick={() => setSelectedTechnique(null)}
              className="text-gray-500 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <p className="text-gray-300 mb-8 leading-relaxed">
            {selectedTechnique.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Psychological Levers */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">
                Psychological Levers
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTechnique.psychologicalLevers.map((lever, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(148, 163, 184, 0.15)',
                      color: '#94a3b8'
                    }}
                  >
                    {lever}
                  </span>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">
                Indicators
              </h4>
              <ul className="space-y-1">
                {selectedTechnique.indicators.map((indicator, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-slate-500 mt-0.5">•</span>
                    {indicator}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mitigations */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">
                Mitigations
              </h4>
              <ul className="space-y-1">
                {selectedTechnique.mitigations.map((mitigation, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">→</span>
                    {mitigation}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MITRE Mapping */}
          {selectedTechnique.mitreMapping && (
            <div
              className="p-4 rounded-lg"
              style={{ background: 'rgba(148, 163, 184, 0.05)' }}
            >
              <span className="text-xs text-slate-500 uppercase tracking-wide">MITRE ATT&CK Mapping</span>
              <div className="font-mono text-slate-300 mt-1">{selectedTechnique.mitreMapping}</div>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!selectedCategory && !searchTerm && (
        <p className="text-center text-gray-500 py-8">
          Select a category above to explore techniques
        </p>
      )}
    </div>
  );
}
