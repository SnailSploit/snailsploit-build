import { useState, useMemo } from 'react';

interface RiskValues {
  likelihood: number;
  impact: number;
  detectability: number;
  recoverability: number;
}

export default function AATMFRiskCalculator() {
  const [values, setValues] = useState<RiskValues>({
    likelihood: 3,
    impact: 3,
    detectability: 3,
    recoverability: 3
  });

  const riskScore = useMemo(() => {
    const { likelihood, impact, detectability, recoverability } = values;
    return likelihood * impact * (6 - detectability) * (6 - recoverability);
  }, [values]);

  const getRiskLevel = (score: number) => {
    if (score > 200) return { level: 'Critical', color: '#39FF14', bg: 'rgba(57, 255, 20, 0.2)' };
    if (score >= 100) return { level: 'High', color: '#f97316', bg: 'rgba(249, 115, 22, 0.2)' };
    if (score >= 50) return { level: 'Medium', color: '#eab308', bg: 'rgba(234, 179, 8, 0.2)' };
    return { level: 'Low', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.2)' };
  };

  const risk = getRiskLevel(riskScore);

  const sliders = [
    {
      key: 'likelihood',
      label: 'Likelihood (L)',
      description: 'How likely is this attack to occur?',
      value: values.likelihood,
      labels: ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain']
    },
    {
      key: 'impact',
      label: 'Impact (I)',
      description: 'What is the potential business impact?',
      value: values.impact,
      labels: ['Negligible', 'Minor', 'Moderate', 'Major', 'Severe']
    },
    {
      key: 'detectability',
      label: 'Detectability (D)',
      description: 'How easy is the attack to detect?',
      value: values.detectability,
      labels: ['Very Stealthy', 'Stealthy', 'Moderate', 'Visible', 'Obvious'],
      inverted: true
    },
    {
      key: 'recoverability',
      label: 'Recoverability (R)',
      description: 'How easy is it to recover from this attack?',
      value: values.recoverability,
      labels: ['Impossible', 'Very Hard', 'Difficult', 'Moderate', 'Easy'],
      inverted: true
    }
  ];

  return (
    <div className="risk-calculator p-6 rounded-xl" style={{ background: 'rgba(20, 20, 20, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="text-center mb-8">
        <h3 className="text-lg font-bold text-white mb-2">AATMF-R Risk Calculator</h3>
        <p className="text-sm text-gray-400">
          Formula: <code className="px-2 py-1 rounded bg-black/50 text-red-400">L x I x (6-D) x (6-R)</code>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="space-y-6">
          {sliders.map((slider) => (
            <div key={slider.key} className="slider-group">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-white">{slider.label}</label>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
                  {slider.value} - {slider.labels[slider.value - 1]}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{slider.description}</p>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={slider.value}
                  onChange={(e) => setValues({
                    ...values,
                    [slider.key]: parseInt(e.target.value)
                  })}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${slider.inverted ? '#22c55e' : '#39FF14'} 0%, ${slider.inverted ? '#39FF14' : '#22c55e'} 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Score Display */}
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative w-48 h-48 rounded-full flex items-center justify-center mb-4"
            style={{
              background: `conic-gradient(${risk.color} ${Math.min(riskScore / 625 * 100, 100)}%, rgba(255,255,255,0.05) 0%)`,
              boxShadow: `0 0 40px ${risk.bg}`
            }}
          >
            <div
              className="absolute inset-3 rounded-full flex flex-col items-center justify-center"
              style={{ background: '#141414' }}
            >
              <span className="text-4xl font-bold" style={{ color: risk.color }}>
                {riskScore}
              </span>
              <span
                className="text-sm font-semibold px-3 py-1 rounded-full mt-2"
                style={{ backgroundColor: risk.bg, color: risk.color }}
              >
                {risk.level}
              </span>
            </div>
          </div>

          {/* Risk Thresholds Legend */}
          <div className="w-full max-w-xs space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded" style={{ backgroundColor: '#39FF14' }} />
                <span className="text-gray-400">Critical</span>
              </div>
              <span className="text-gray-500">&gt; 200</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded" style={{ backgroundColor: '#f97316' }} />
                <span className="text-gray-400">High</span>
              </div>
              <span className="text-gray-500">100 - 200</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded" style={{ backgroundColor: '#eab308' }} />
                <span className="text-gray-400">Medium</span>
              </div>
              <span className="text-gray-500">50 - 100</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded" style={{ backgroundColor: '#22c55e' }} />
                <span className="text-gray-400">Low</span>
              </div>
              <span className="text-gray-500">&lt; 50</span>
            </div>
          </div>

          {/* Formula Breakdown */}
          <div className="mt-6 p-4 rounded-lg bg-black/30 text-center">
            <p className="text-xs text-gray-500 mb-2">Calculation</p>
            <p className="font-mono text-sm text-gray-300">
              {values.likelihood} x {values.impact} x ({6 - values.detectability}) x ({6 - values.recoverability}) = <span style={{ color: risk.color }}>{riskScore}</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          border: 2px solid #39FF14;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          border: 2px solid #39FF14;
        }
      `}</style>
    </div>
  );
}
