import { useState } from 'react';
import { tactics, type Tactic, type Technique } from '../data/aatmf-data';

export default function AATMFMatrix() {
  const [selectedTactic, setSelectedTactic] = useState<Tactic | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const [filter, setFilter] = useState<'all' | 'Critical' | 'High' | 'Medium'>('all');

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Critical': return '#dc2626';
      case 'High': return '#f97316';
      case 'Medium': return '#eab308';
      default: return '#22c55e';
    }
  };

  const filteredTactics = filter === 'all'
    ? tactics
    : tactics.filter(t => t.riskLevel === filter);

  return (
    <div className="aatmf-matrix">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filter === 'all'
              ? 'bg-white/10 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          All Tactics
        </button>
        {['Critical', 'High', 'Medium'].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              filter === level
                ? 'bg-white/10 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getRiskColor(level) }}
            />
            {level}
          </button>
        ))}
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredTactics.map((tactic) => (
          <div
            key={tactic.id}
            onClick={() => {
              setSelectedTactic(tactic);
              setSelectedTechnique(null);
            }}
            className={`tactic-card cursor-pointer p-4 rounded-lg border transition-all hover:scale-[1.02] ${
              selectedTactic?.id === tactic.id
                ? 'ring-2 ring-red-500'
                : ''
            }`}
            style={{
              background: 'rgba(30, 30, 30, 0.8)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderLeft: `4px solid ${getRiskColor(tactic.riskLevel)}`
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-mono text-gray-500">{tactic.code}</span>
              {tactic.isNew && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-medium">
                  NEW
                </span>
              )}
            </div>
            <h3 className="font-bold text-white text-sm mb-2 leading-tight">
              {tactic.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getRiskColor(tactic.riskLevel) }}
              />
              {tactic.riskLevel}
              <span className="text-gray-600">|</span>
              <span>{tactic.techniques.length} techniques</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tactic Detail Panel */}
      {selectedTactic && (
        <div
          className="mt-6 p-6 rounded-lg border"
          style={{
            background: 'rgba(20, 20, 20, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-sm font-mono text-gray-500">{selectedTactic.code}</span>
              <h3 className="text-xl font-bold text-white">{selectedTactic.name}</h3>
            </div>
            <button
              onClick={() => setSelectedTactic(null)}
              className="text-gray-500 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
          <p className="text-gray-400 mb-6">{selectedTactic.objective}</p>

          {/* Techniques List */}
          <div className="space-y-3">
            {selectedTactic.techniques.map((technique) => (
              <div
                key={technique.id}
                onClick={() => setSelectedTechnique(
                  selectedTechnique?.id === technique.id ? null : technique
                )}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:bg-white/5 ${
                  selectedTechnique?.id === technique.id ? 'ring-1 ring-red-500/50' : ''
                }`}
                style={{
                  background: 'rgba(30, 30, 30, 0.5)',
                  borderColor: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-red-400">{technique.id}</span>
                    <h4 className="font-semibold text-white">{technique.name}</h4>
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: `${getRiskColor(technique.riskLevel)}20`,
                      color: getRiskColor(technique.riskLevel)
                    }}
                  >
                    {technique.riskLevel}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{technique.description}</p>

                {/* Expanded Details */}
                {selectedTechnique?.id === technique.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                    {technique.example && (
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Example</h5>
                        <code className="block p-3 rounded bg-black/50 text-sm text-green-400 font-mono">
                          {technique.example}
                        </code>
                      </div>
                    )}

                    <div>
                      <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">KPIs</h5>
                      <div className="flex flex-wrap gap-2">
                        {technique.kpis.map((kpi, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300"
                          >
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Foundational</h5>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {technique.controls.foundational.map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">+</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Advanced</h5>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {technique.controls.advanced.map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-yellow-500 mt-0.5">+</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">State-of-Art</h5>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {technique.controls.sota.map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-500 mt-0.5">+</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .tactic-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
