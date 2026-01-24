import { useState } from 'react';
import { components, type PromptComponent } from '../data/prompt-data';

export default function PROMPTFramework() {
  const [selectedComponent, setSelectedComponent] = useState<PromptComponent | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="prompt-framework">
      {/* Letter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {components.map((component, index) => (
          <button
            key={index}
            onClick={() => setSelectedComponent(
              selectedComponent?.letter === component.letter && selectedComponent?.name === component.name
                ? null
                : component
            )}
            className={`letter-card relative p-6 rounded-xl text-center transition-all duration-300 cursor-pointer ${
              selectedComponent?.letter === component.letter && selectedComponent?.name === component.name
                ? 'ring-2 scale-105'
                : 'hover:scale-105'
            }`}
            style={{
              background: 'rgba(30, 30, 30, 0.8)',
              border: `1px solid ${selectedComponent?.letter === component.letter && selectedComponent?.name === component.name ? component.color : 'rgba(255,255,255,0.1)'}`,
              boxShadow: selectedComponent?.letter === component.letter && selectedComponent?.name === component.name
                ? `0 0 30px ${component.color}30`
                : 'none',
              ['--ring-color' as string]: component.color
            }}
          >
            <div
              className="text-4xl mb-3 font-bold"
              style={{ color: component.color }}
            >
              {component.letter}
            </div>
            <div className="text-2xl mb-2">{component.icon}</div>
            <div className="text-sm font-medium text-white">{component.name}</div>
            <div className="text-xs text-gray-500 mt-1">{component.tagline}</div>
          </button>
        ))}
      </div>

      {/* Expanded Details */}
      {selectedComponent && (
        <div
          className="component-details p-8 rounded-xl mb-8 animate-fadeIn"
          style={{
            background: 'rgba(20, 20, 20, 0.9)',
            border: `1px solid ${selectedComponent.color}40`,
            boxShadow: `0 0 40px ${selectedComponent.color}10`
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span
                className="text-5xl font-bold"
                style={{ color: selectedComponent.color }}
              >
                {selectedComponent.letter}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedComponent.name}
                </h3>
                <p className="text-gray-400">{selectedComponent.tagline}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedComponent(null)}
              className="text-gray-500 hover:text-white transition-colors text-2xl"
            >
              &times;
            </button>
          </div>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            {selectedComponent.description}
          </p>

          {/* Good vs Bad Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">Good Example</span>
              </div>
              <div className="relative">
                <pre
                  className="p-4 rounded-lg text-sm text-green-300 overflow-x-auto"
                  style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
                >
                  {selectedComponent.exampleGood}
                </pre>
                <button
                  onClick={() => copyToClipboard(selectedComponent.exampleGood, 0)}
                  className="absolute top-2 right-2 p-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedIndex === 0 ? '✓' : '📋'}
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400 text-xl">✗</span>
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">Avoid This</span>
              </div>
              <pre
                className="p-4 rounded-lg text-sm text-red-300 overflow-x-auto"
                style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
              >
                {selectedComponent.exampleBad}
              </pre>
            </div>
          </div>

          {/* Format Options (for Results component) */}
          {selectedComponent.formatOptions && (
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Format Options</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {selectedComponent.formatOptions.map((format, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg text-center"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="text-2xl mb-2" style={{ color: selectedComponent.color }}>{format.icon}</div>
                    <div className="text-sm font-medium text-white">{format.type}</div>
                    <div className="text-xs text-gray-500 mt-1">{format.bestFor}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Risk Categories (for Obstacles component) */}
          {selectedComponent.riskCategories && (
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Risk Categories to Address</h4>
              <div className="flex flex-wrap gap-2">
                {selectedComponent.riskCategories.map((risk, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ background: `${selectedComponent.color}20`, color: selectedComponent.color }}
                  >
                    {risk}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Pro Tips</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedComponent.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span style={{ color: selectedComponent.color }}>→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Instruction Text */}
      {!selectedComponent && (
        <p className="text-center text-gray-500 py-8">
          Click on any letter above to explore that component in detail
        </p>
      )}

      <style>{`
        .letter-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .letter-card[style*="--ring-color"] {
          --tw-ring-color: var(--ring-color);
        }
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
