import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Building {
  id: string;
  name: string;
  emoji: string;
  description: string;
  category: string;
  levels: Array<{
    level: number;
    cost: { money: number; manpower: number; oil: number; ore: number; time: string };
    stats: Record<string, string | number>;
  }>;
  specialNotes?: string;
}

const buildings: Building[] = [
  {
    id: 'combat-outpost',
    name: 'Combat Outpost',
    emoji: '🎖️',
    category: 'Defesa',
    description: 'Posto de combate defensivo que oferece entrenchment e bônus de moral.',
    levels: [
      {
        level: 1,
        cost: { money: 500, manpower: 750, oil: 2000, ore: 0, time: '1 hour' },
        stats: { 'HP': 15, 'Entrenchment': '45%', 'Moral': '+10%', 'Upkeep': 100 }
      },
      {
        level: 2,
        cost: { money: 750, manpower: 875, oil: 2750, ore: 0, time: '4 hours 30 mins' },
        stats: { 'HP': 25, 'Entrenchment': '57%', 'Moral': '+13%', 'Upkeep': 110 }
      },
      {
        level: 3,
        cost: { money: 1000, manpower: 1000, oil: 3500, ore: 0, time: '9 hours' },
        stats: { 'HP': 30, 'Entrenchment': '69%', 'Moral': '+15%', 'Upkeep': 120 }
      }
    ]
  },
  {
    id: 'airfield',
    name: 'Airfield',
    emoji: '🛫',
    category: 'Militar',
    description: 'Campo de aviação para operações aéreas em províncias.',
    levels: [
      {
        level: 1,
        cost: { money: 700, manpower: 900, oil: 800, ore: 2500, time: '21 hours' },
        stats: { 'HP': 10, 'Upkeep': 100 }
      }
    ]
  },
  {
    id: 'field-hospital',
    name: 'Field Hospital',
    emoji: '⛺',
    category: 'Suporte',
    description: 'Hospital de campanha que oferece bônus de moral e cura.',
    levels: [
      {
        level: 1,
        cost: { money: 750, manpower: 750, oil: 1250, ore: 0, time: '9 hours' },
        stats: { 'HP': 7, 'Moral': '+10%', 'Upkeep': 100 }
      },
      {
        level: 2,
        cost: { money: 1000, manpower: 900, oil: 1750, ore: 0, time: '18 hours' },
        stats: { 'HP': 10, 'Moral': '+13%', 'Upkeep': 110 }
      },
      {
        level: 3,
        cost: { money: 0, manpower: 0, oil: 0, ore: 0, time: '-' },
        stats: { 'HP': 12, 'Moral': '+15%', 'Upkeep': 120 }
      }
    ]
  },
  {
    id: 'local-industry',
    name: 'Local Industry',
    emoji: '🏭',
    category: 'Produção',
    description: 'Indústria local que aumenta significativamente a produção de recursos.',
    levels: [
      {
        level: 1,
        cost: { money: 750, manpower: 750, oil: 1500, ore: 0, time: '9 hours' },
        stats: { 'HP': 10, 'Produção': '+100%' }
      },
      {
        level: 2,
        cost: { money: 900, manpower: 900, oil: 2000, ore: 0, time: '18 hours' },
        stats: { 'HP': 15, 'Produção': '+150%' }
      },
      {
        level: 3,
        cost: { money: 1000, manpower: 1000, oil: 2500, ore: 0, time: '1 day 3 hours' },
        stats: { 'HP': 20, 'Produção': '+200%' }
      }
    ]
  },
  {
    id: 'pontoon',
    name: 'Pontoon',
    emoji: '🌉',
    category: 'Logística',
    description: 'Ponte flutuante que melhora o tempo de embarque de unidades navais.',
    levels: [
      {
        level: 1,
        cost: { money: 250, manpower: 500, oil: 250, ore: 1250, time: '3 hours' },
        stats: { 'HP': 10, 'Embarque': '-5%', 'Upkeep': 100 }
      }
    ]
  },
  {
    id: 'military-logistics',
    name: 'Military Logistics',
    emoji: '🚚',
    category: 'Logística',
    description: 'Centro de logística militar que aumenta a velocidade de movimento das unidades terrestres.',
    levels: [
      {
        level: 1,
        cost: { money: 250, manpower: 250, oil: 250, ore: 500, time: '3 hours' },
        stats: { 'HP': 10, 'Velocidade': '+150%' }
      }
    ]
  },
  {
    id: 'mercenary-outpost',
    name: 'Mercenary Outpost',
    emoji: '💼',
    category: 'Militar',
    description: 'Acampamento de mercenários que oferece bônus de velocidade de mobilização.',
    levels: [
      {
        level: 1,
        cost: { money: 500, manpower: 500, oil: 1000, ore: 250, time: '12 hours' },
        stats: { 'HP': 10, 'Mobilização': '+100%', 'Upkeep': 500 }
      },
      {
        level: 2,
        cost: { money: 1500, manpower: 1500, oil: 750, ore: 500, time: '1 day' },
        stats: { 'HP': 15, 'Mobilização': '+100%', 'Upkeep': 1000 }
      },
      {
        level: 3,
        cost: { money: 2000, manpower: 2000, oil: 1000, ore: 750, time: '1 day 12 hours' },
        stats: { 'HP': 20, 'Mobilização': '+100%', 'Upkeep': 1500 }
      }
    ]
  }
];

export default function EdificiosProvincia() {
  const [expandedBuilding, setExpandedBuilding] = useState<string | null>('combat-outpost');
  const [expandedLevel, setExpandedLevel] = useState<Record<string, number>>({});

  const categories = Array.from(new Set(buildings.map(b => b.category)));

  const toggleBuildingExpand = (id: string) => {
    setExpandedBuilding(expandedBuilding === id ? null : id);
  };

  const toggleLevelExpand = (buildingId: string, level: number) => {
    const key = `${buildingId}-${level}`;
    setExpandedLevel(prev => ({
      ...prev,
      [key]: prev[key] ? 0 : 1
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">🏕️ Edifícios de Província</h1>
          <p className="text-slate-400">Fortifique suas províncias com estruturas estratégicas</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Info Banner */}
        <div className="mb-8 bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
          <p className="text-blue-300 text-sm">
            💡 <strong>Dica:</strong> Edifícios de província são construídos em áreas conquistadas e oferecem bônus defensivos e de produção. Diferente dos edifícios de cidade, eles são mais rápidos de construir mas com efeitos mais limitados.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-lime-400/50 hover:text-lime-400 transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Buildings List */}
        <div className="space-y-4">
          {buildings.map(building => (
            <div key={building.id} className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
              {/* Building Header */}
              <button
                onClick={() => toggleBuildingExpand(building.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <span className="text-3xl">{building.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-lime-400">{building.name}</h3>
                    <p className="text-sm text-slate-400">{building.description}</p>
                  </div>
                </div>
                {expandedBuilding === building.id ? (
                  <ChevronUp className="text-lime-400" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>

              {/* Building Content */}
              {expandedBuilding === building.id && (
                <div className="border-t border-slate-700/50 px-6 py-4 space-y-4">
                  {building.specialNotes && (
                    <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3">
                      <p className="text-sm text-yellow-300">⚠️ {building.specialNotes}</p>
                    </div>
                  )}

                  {/* Levels */}
                  <div className="space-y-2">
                    {building.levels.map(levelData => {
                      const levelKey = `${building.id}-${levelData.level}`;
                      const isExpanded = expandedLevel[levelKey];

                      return (
                        <div key={levelData.level} className="bg-slate-900/50 rounded overflow-hidden">
                          <button
                            onClick={() => toggleLevelExpand(building.id, levelData.level)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 text-left">
                              <span className="text-lg font-bold text-lime-400">Nível {levelData.level}</span>
                              <span className="text-xs text-slate-500">⏱️ {levelData.cost.time}</span>
                            </div>
                            {isExpanded ? (
                              <ChevronUp size={18} className="text-lime-400" />
                            ) : (
                              <ChevronDown size={18} className="text-slate-400" />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="border-t border-slate-700/50 px-4 py-3 space-y-3 bg-slate-900/30">
                              {/* Cost */}
                              <div>
                                <h4 className="text-sm font-semibold text-slate-300 mb-2">Custo de Construção</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                  <div className="bg-slate-800/50 rounded p-2 text-center">
                                    <div className="text-xs text-slate-400">Dinheiro</div>
                                    <div className="font-bold text-lime-400">{levelData.cost.money}</div>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-2 text-center">
                                    <div className="text-xs text-slate-400">Mão de Obra</div>
                                    <div className="font-bold text-lime-400">{levelData.cost.manpower}</div>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-2 text-center">
                                    <div className="text-xs text-slate-400">Óleo</div>
                                    <div className="font-bold text-lime-400">{levelData.cost.oil}</div>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-2 text-center">
                                    <div className="text-xs text-slate-400">Minério</div>
                                    <div className="font-bold text-lime-400">{levelData.cost.ore}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Stats */}
                              <div>
                                <h4 className="text-sm font-semibold text-slate-300 mb-2">Benefícios</h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {Object.entries(levelData.stats).map(([key, value]) => (
                                    <div key={key} className="bg-slate-800/50 rounded p-2">
                                      <div className="text-xs text-slate-400">{key}</div>
                                      <div className="font-bold text-slate-200">{String(value)}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">💡 Estratégia de Edifícios de Província</h3>
          <ul className="text-slate-300 space-y-3">
            <li>• <strong>Defesa:</strong> Combat Outpost oferece entrenchment para proteger províncias</li>
            <li>• <strong>Produção:</strong> Local Industry dobra ou triplica a produção de recursos</li>
            <li>• <strong>Logística:</strong> Military Logistics acelera movimento terrestre, Pontoon acelera embarque</li>
            <li>• <strong>Suporte:</strong> Field Hospital oferece bônus de moral</li>
            <li>• <strong>Aviação:</strong> Airfield permite operações aéreas em províncias</li>
            <li>• <strong>Mercenários:</strong> Mercenary Outpost acelera mobilização mas tem upkeep alto</li>
            <li>• <strong>Prioridade:</strong> Construa Local Industry primeiro para melhor economia</li>
          </ul>
        </div>

        {/* Comparison Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">📊 Comparação: Cidade vs Província</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-2 px-4 text-lime-400">Aspecto</th>
                  <th className="text-left py-2 px-4 text-lime-400">Edifícios de Cidade</th>
                  <th className="text-left py-2 px-4 text-lime-400">Edifícios de Província</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/30">
                  <td className="py-2 px-4 font-semibold">Tempo de Construção</td>
                  <td className="py-2 px-4">Longo (1-2 dias)</td>
                  <td className="py-2 px-4">Rápido (3h-21h)</td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="py-2 px-4 font-semibold">Custo de Recursos</td>
                  <td className="py-2 px-4">Alto</td>
                  <td className="py-2 px-4">Moderado</td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="py-2 px-4 font-semibold">Níveis</td>
                  <td className="py-2 px-4">Até 5</td>
                  <td className="py-2 px-4">1-3</td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="py-2 px-4 font-semibold">Efeito</td>
                  <td className="py-2 px-4">Forte e duradouro</td>
                  <td className="py-2 px-4">Moderado e tático</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Localização</td>
                  <td className="py-2 px-4">Apenas em cidades</td>
                  <td className="py-2 px-4">Em províncias conquistadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
