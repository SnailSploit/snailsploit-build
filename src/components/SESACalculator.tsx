import { useState, useMemo } from 'react';
import { sesaDimensions } from '../data/sef-data';

interface DimensionScore {
  id: string;
  score: number;
}

export default function SESACalculator() {
  const [scores, setScores] = useState<DimensionScore[]>(
    sesaDimensions.map(d => ({ id: d.id, score: 5 }))
  );
  const [expandedDimension, setExpandedDimension] = useState<string | null>(null);

  const updateScore = (id: string, score: number) => {
    setScores(prev => prev.map(s => s.id === id ? { ...s, score } : s));
  };

  const { weightedScore, rating, ratingColor, interpretation } = useMemo(() => {
    let totalWeight = 0;
    let weightedSum = 0;

    scores.forEach(score => {
      const dimension = sesaDimensions.find(d => d.id === score.id);
      if (dimension) {
        weightedSum += score.score * dimension.weight;
        totalWeight += dimension.weight;
      }
    });

    const avgScore = weightedSum / totalWeight;

    let rating: string;
    let color: string;
    let interpretation: string;

    if (avgScore >= 8) {
      rating = 'Mature';
      color = '#22c55e';
      interpretation = 'Strong security posture with well-established defenses against social engineering. Focus on continuous improvement and emerging threats.';
    } else if (avgScore >= 6) {
      rating = 'Developing';
      color = '#3b82f6';
      interpretation = 'Good foundation with room for improvement. Prioritize closing gaps in lower-scoring dimensions.';
    } else if (avgScore >= 4) {
      rating = 'Basic';
      color = '#f59e0b';
      interpretation = 'Significant vulnerabilities exist. Immediate focus needed on awareness training and process formalization.';
    } else {
      rating = 'Vulnerable';
      color = '#ef4444';
      interpretation = 'High susceptibility to social engineering attacks. Urgent remediation required across all dimensions.';
    }

    return {
      weightedScore: avgScore,
      rating,
      ratingColor: color,
      interpretation
    };
  }, [scores]);

  return (
    <div className="sesa-calculator">
      {/* Overall Score Display */}
      <div
        className="p-8 rounded-xl mb-8 text-center"
        style={{
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(148, 163, 184, 0.2)'
        }}
      >
        <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">
          SESA Score
        </div>
        <div
          className="text-6xl font-bold mb-2"
          style={{ color: ratingColor }}
        >
          {weightedScore.toFixed(1)}
        </div>
        <div
          className="text-xl font-semibold mb-4"
          style={{ color: ratingColor }}
        >
          {rating}
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {interpretation}
        </p>

        {/* Score Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(weightedScore / 10) * 100}%`,
                background: `linear-gradient(90deg, ${ratingColor}, ${ratingColor}88)`
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>0</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>
      </div>

      {/* Dimension Sliders */}
      <div className="space-y-4">
        {sesaDimensions.map((dimension) => {
          const currentScore = scores.find(s => s.id === dimension.id)?.score || 5;
          const isExpanded = expandedDimension === dimension.id;

          return (
            <div
              key={dimension.id}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(30, 30, 30, 0.8)',
                border: '1px solid rgba(148, 163, 184, 0.15)'
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setExpandedDimension(isExpanded ? null : dimension.id)}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <span className="text-sm">{isExpanded ? '▼' : '▶'}</span>
                    </button>
                    <div>
                      <h4 className="text-white font-medium">{dimension.name}</h4>
                      <p className="text-sm text-gray-500">{dimension.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-2xl font-bold"
                      style={{
                        color: currentScore >= 7 ? '#22c55e' :
                               currentScore >= 4 ? '#f59e0b' : '#ef4444'
                      }}
                    >
                      {currentScore}
                    </div>
                    <div className="text-xs text-slate-500">
                      Weight: {dimension.weight}x
                    </div>
                  </div>
                </div>

                {/* Slider */}
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-600 w-8">Low</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={currentScore}
                    onChange={(e) => updateScore(dimension.id, parseInt(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right,
                        #ef4444 0%, #f59e0b 40%, #22c55e 100%)`
                    }}
                  />
                  <span className="text-xs text-gray-600 w-8 text-right">High</span>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div
                  className="px-6 pb-6 pt-2"
                  style={{ borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-medium text-red-400 mb-3">
                        Low Maturity Indicators
                      </h5>
                      <ul className="space-y-2">
                        {dimension.lowIndicators.map((indicator, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-red-500">−</span>
                            {indicator}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-green-400 mb-3">
                        High Maturity Indicators
                      </h5>
                      <ul className="space-y-2">
                        {dimension.highIndicators.map((indicator, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-green-500">+</span>
                            {indicator}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Radar Visualization */}
      <div
        className="mt-8 p-8 rounded-xl"
        style={{
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(148, 163, 184, 0.2)'
        }}
      >
        <h4 className="text-center text-slate-400 text-sm uppercase tracking-wide mb-6">
          Dimension Breakdown
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sesaDimensions.map((dimension) => {
            const score = scores.find(s => s.id === dimension.id)?.score || 5;
            const percentage = (score / 10) * 100;

            return (
              <div key={dimension.id} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="rgba(148, 163, 184, 0.1)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke={score >= 7 ? '#22c55e' : score >= 4 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${percentage * 2.26} 226`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{score}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{dimension.name}</div>
              </div>
            );
          })}
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
          border: 2px solid #94a3b8;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #94a3b8;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
