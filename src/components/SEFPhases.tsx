import { useState } from 'react';
import { phases, type Phase } from '../data/sef-data';

export default function SEFPhases() {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  return (
    <div className="sef-phases">
      {/* Phase Timeline */}
      <div className="relative mb-8">
        {/* Connection Line */}
        <div
          className="absolute top-8 left-0 right-0 h-0.5 hidden lg:block"
          style={{ background: 'rgba(148, 163, 184, 0.2)' }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(
                selectedPhase?.id === phase.id ? null : phase
              )}
              className={`relative p-4 rounded-xl text-center transition-all duration-300 ${
                selectedPhase?.id === phase.id
                  ? 'ring-2 ring-slate-400 scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                background: selectedPhase?.id === phase.id
                  ? 'rgba(148, 163, 184, 0.15)'
                  : 'rgba(30, 30, 30, 0.8)',
                border: '1px solid rgba(148, 163, 184, 0.2)'
              }}
            >
              {/* Phase Number */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold"
                style={{
                  background: selectedPhase?.id === phase.id
                    ? '#94a3b8'
                    : 'rgba(148, 163, 184, 0.2)',
                  color: selectedPhase?.id === phase.id
                    ? '#0f172a'
                    : '#94a3b8'
                }}
              >
                {phase.number}
              </div>

              <div className="text-xs font-medium text-white mb-1 leading-tight">
                {phase.name}
              </div>
              <div className="text-xs text-gray-500 hidden md:block">
                {phase.activities.length} activities
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Phase Detail */}
      {selectedPhase && (
        <div
          className="p-8 rounded-xl animate-fadeIn"
          style={{
            background: 'rgba(20, 20, 20, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.3)'
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                style={{
                  background: '#94a3b8',
                  color: '#0f172a'
                }}
              >
                {selectedPhase.number}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {selectedPhase.name}
                </h3>
                <p className="text-slate-400">Phase {selectedPhase.number} of 7</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedPhase(null)}
              className="text-gray-500 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            {selectedPhase.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Activities */}
            <div
              className="p-6 rounded-lg"
              style={{ background: 'rgba(148, 163, 184, 0.05)' }}
            >
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-4">
                Activities
              </h4>
              <ul className="space-y-3">
                {selectedPhase.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-slate-500 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div
              className="p-6 rounded-lg"
              style={{ background: 'rgba(148, 163, 184, 0.05)' }}
            >
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-4">
                Deliverables
              </h4>
              <ul className="space-y-3">
                {selectedPhase.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-600">→</span>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div
              className="p-6 rounded-lg"
              style={{ background: 'rgba(148, 163, 184, 0.05)' }}
            >
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-4">
                Tools & Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedPhase.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm"
                    style={{
                      background: 'rgba(148, 163, 184, 0.1)',
                      color: '#94a3b8'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phase Navigation */}
          <div className="flex justify-between mt-8 pt-6" style={{ borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <button
              onClick={() => {
                const prevPhase = phases.find(p => p.number === selectedPhase.number - 1);
                if (prevPhase) setSelectedPhase(prevPhase);
              }}
              disabled={selectedPhase.number === 1}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: 'rgba(148, 163, 184, 0.1)',
                color: '#94a3b8'
              }}
            >
              ← Previous Phase
            </button>
            <button
              onClick={() => {
                const nextPhase = phases.find(p => p.number === selectedPhase.number + 1);
                if (nextPhase) setSelectedPhase(nextPhase);
              }}
              disabled={selectedPhase.number === 7}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: 'rgba(148, 163, 184, 0.1)',
                color: '#94a3b8'
              }}
            >
              Next Phase →
            </button>
          </div>
        </div>
      )}

      {/* Instruction */}
      {!selectedPhase && (
        <p className="text-center text-gray-500 py-8">
          Select a phase above to explore activities and deliverables
        </p>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
