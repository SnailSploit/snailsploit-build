import { useState, useMemo } from 'react';
import { components } from '../data/prompt-data';

export default function PromptBuilder() {
  const [values, setValues] = useState({
    purpose: '',
    results: '',
    obstacles: '',
    mindset: '',
    preferences: '',
    technical: ''
  });
  const [copied, setCopied] = useState(false);

  const componentMap = {
    purpose: components[0],
    results: components[1],
    obstacles: components[2],
    mindset: components[3],
    preferences: components[4],
    technical: components[5]
  };

  const assembledPrompt = useMemo(() => {
    const parts: string[] = [];

    if (values.mindset) {
      parts.push(`Context: ${values.mindset}`);
    }
    if (values.purpose) {
      parts.push(`Task: ${values.purpose}`);
    }
    if (values.results) {
      parts.push(`Output Format: ${values.results}`);
    }
    if (values.preferences) {
      parts.push(`Style: ${values.preferences}`);
    }
    if (values.technical) {
      parts.push(`Technical Requirements: ${values.technical}`);
    }
    if (values.obstacles) {
      parts.push(`Constraints: ${values.obstacles}`);
    }

    return parts.join('\n\n');
  }, [values]);

  const filledCount = Object.values(values).filter(v => v.trim()).length;
  const completionPercent = Math.round((filledCount / 6) * 100);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(assembledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setValues({
      purpose: '',
      results: '',
      obstacles: '',
      mindset: '',
      preferences: '',
      technical: ''
    });
  };

  return (
    <div className="prompt-builder">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Fields */}
        <div className="space-y-4">
          {Object.entries(componentMap).map(([key, component]) => (
            <div key={key} className="input-group">
              <label
                className="flex items-center gap-2 text-sm font-medium mb-2"
                style={{ color: component.color }}
              >
                <span className="text-lg">{component.icon}</span>
                <span className="font-bold">{component.letter}</span>
                <span>— {component.name}</span>
              </label>
              <textarea
                value={values[key as keyof typeof values]}
                onChange={(e) => setValues({ ...values, [key]: e.target.value })}
                placeholder={component.tagline}
                rows={2}
                className="w-full p-3 rounded-lg text-sm resize-none transition-all focus:ring-2 focus:outline-none"
                style={{
                  background: 'rgba(30, 30, 30, 0.8)',
                  border: values[key as keyof typeof values]
                    ? `1px solid ${component.color}60`
                    : '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  ['--tw-ring-color' as string]: component.color
                }}
              />
            </div>
          ))}

          <button
            onClick={clearAll}
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Clear all
          </button>
        </div>

        {/* Preview Panel */}
        <div className="preview-panel">
          <div
            className="sticky top-24 p-6 rounded-xl"
            style={{
              background: 'rgba(20, 20, 20, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Prompt Completeness</span>
                <span className="text-sm font-bold" style={{ color: completionPercent === 100 ? '#22c55e' : '#3b82f6' }}>
                  {filledCount}/6 components
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${completionPercent}%`,
                    background: completionPercent === 100
                      ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                      : 'linear-gradient(90deg, #3b82f6, #2563eb)'
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Assembled Prompt</h3>
              <button
                onClick={copyToClipboard}
                disabled={!assembledPrompt}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: copied ? '#22c55e' : '#3b82f6',
                  color: 'white'
                }}
              >
                {copied ? '✓ Copied!' : 'Copy to Clipboard'}
              </button>
            </div>

            <div
              className="min-h-[300px] p-4 rounded-lg font-mono text-sm overflow-auto"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {assembledPrompt ? (
                <pre className="whitespace-pre-wrap text-gray-300">{assembledPrompt}</pre>
              ) : (
                <p className="text-gray-600 italic">
                  Start filling in the components on the left to build your prompt...
                </p>
              )}
            </div>

            {/* Component Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.entries(componentMap).map(([key, component]) => (
                <span
                  key={key}
                  className="px-2 py-1 rounded text-xs font-medium transition-all"
                  style={{
                    background: values[key as keyof typeof values]
                      ? `${component.color}30`
                      : 'rgba(255,255,255,0.05)',
                    color: values[key as keyof typeof values]
                      ? component.color
                      : '#666',
                    border: `1px solid ${values[key as keyof typeof values] ? `${component.color}50` : 'transparent'}`
                  }}
                >
                  {component.letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        textarea:focus {
          box-shadow: 0 0 0 2px var(--tw-ring-color);
        }
      `}</style>
    </div>
  );
}
