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
    id: 'annexing-city',
    name: 'Annexing City',
    emoji: '🏙️',
    category: 'Estratégico',
    description: 'Mude o status de ocupado para anexado, dobrando efetivamente a produção de recursos da cidade e permitindo mobilizar unidades.',
    specialNotes: 'Se perder a cidade, perderá permanentemente o status de anexado, mesmo se recapturar.',
    levels: [
      {
        level: 1,
        cost: { money: 4250, manpower: 3750, oil: 1250, ore: 1500, time: '18 hours' },
        stats: { 'Benefício': 'Dobra produção de recursos' }
      }
    ]
  },
  {
    id: 'army-base',
    name: 'Army Base',
    emoji: '🪖',
    category: 'Militar',
    description: 'Base para mobilizar unidades terrestres. Não é destruída ao ser capturada.',
    levels: [
      {
        level: 1,
        cost: { money: 250, manpower: 250, oil: 500, ore: 250, time: '1 min 30 sec' },
        stats: { 'HP': 10, 'Upkeep': 100 }
      },
      {
        level: 2,
        cost: { money: 750, manpower: 500, oil: 1000, ore: 375, time: '1 day 4 hours' },
        stats: { 'HP': 15, 'Upkeep': 110 }
      },
      {
        level: 3,
        cost: { money: 1250, manpower: 750, oil: 1500, ore: 500, time: '1 day 8 hours' },
        stats: { 'HP': 20, 'Upkeep': 120 }
      },
      {
        level: 4,
        cost: { money: 2000, manpower: 1000, oil: 2500, ore: 750, time: '1 day 10 hours' },
        stats: { 'HP': 25, 'Upkeep': 130 }
      },
      {
        level: 5,
        cost: { money: 2500, manpower: 1500, oil: 2500, ore: 1000, time: '1 day 12 hours' },
        stats: { 'HP': 30, 'Upkeep': 140 }
      }
    ]
  },
  {
    id: 'air-base',
    name: 'Air Base',
    emoji: '✈️',
    category: 'Militar',
    description: 'Base para mobilizar unidades aéreas. Não é destruída ao ser capturada.',
    levels: [
      {
        level: 1,
        cost: { money: 750, manpower: 1000, oil: 1000, ore: 500, time: '1 day' },
        stats: { 'HP': 10, 'Produção': '+5%' }
      },
      {
        level: 2,
        cost: { money: 1000, manpower: 1250, oil: 1500, ore: 750, time: '1 day 2 hours' },
        stats: { 'HP': 15, 'Produção': '+10%' }
      },
      {
        level: 3,
        cost: { money: 1250, manpower: 1500, oil: 2000, ore: 1000, time: '1 day 4 hours' },
        stats: { 'HP': 20, 'Produção': '+15%' }
      },
      {
        level: 4,
        cost: { money: 1500, manpower: 2000, oil: 2500, ore: 1250, time: '1 day 6 hours' },
        stats: { 'HP': 25, 'Produção': '+20%' }
      },
      {
        level: 5,
        cost: { money: 1750, manpower: 2500, oil: 3000, ore: 1500, time: '1 day 8 hours' },
        stats: { 'HP': 30, 'Produção': '+25%' }
      }
    ]
  },
  {
    id: 'naval-base',
    name: 'Naval Base',
    emoji: '⚓',
    category: 'Militar',
    description: 'Base para mobilizar unidades navais. Não é destruída ao ser capturada.',
    levels: [
      {
        level: 1,
        cost: { money: 0, manpower: 0, oil: 0, ore: 0, time: '-' },
        stats: { 'HP': '-', 'Embarque': '-5%' }
      },
      {
        level: 2,
        cost: { money: 500, manpower: 750, oil: 750, ore: 500, time: '9 hours' },
        stats: { 'HP': 10, 'Produção': '+5%', 'Embarque': '-10%' }
      },
      {
        level: 3,
        cost: { money: 750, manpower: 1000, oil: 1250, ore: 750, time: '1 day 6 hours' },
        stats: { 'HP': 15, 'Produção': '+10%', 'Embarque': '-20%' }
      },
      {
        level: 4,
        cost: { money: 1000, manpower: 1500, oil: 1750, ore: 1000, time: '1 day 8 hours' },
        stats: { 'HP': 20, 'Produção': '+15%', 'Embarque': '-40%' }
      },
      {
        level: 5,
        cost: { money: 1500, manpower: 2000, oil: 2250, ore: 1250, time: '1 day 10 hours' },
        stats: { 'HP': 25, 'Produção': '+20%', 'Embarque': '-50%' }
      }
    ]
  },
  {
    id: 'recruiting-office',
    name: 'Recruiting Office',
    emoji: '📋',
    category: 'Produção',
    description: 'Aumenta produção de mão de obra e velocidade de mobilização de unidades.',
    levels: [
      {
        level: 1,
        cost: { money: 250, manpower: 250, oil: 250, ore: 250, time: '30 mins' },
        stats: { 'HP': 10, 'Mão de Obra': '+200 & +5%', 'Mobilização': '+10%', 'Upkeep': 100 }
      },
      {
        level: 2,
        cost: { money: 750, manpower: 500, oil: 500, ore: 500, time: '1 day 2 hours' },
        stats: { 'HP': 15, 'Mão de Obra': '+200 & +10%', 'Mobilização': '+25%', 'Upkeep': 110 }
      },
      {
        level: 3,
        cost: { money: 1500, manpower: 750, oil: 750, ore: 750, time: '1 day 4 hours' },
        stats: { 'HP': 20, 'Mão de Obra': '+200 & +15%', 'Mobilização': '+45%', 'Upkeep': 120 }
      },
      {
        level: 4,
        cost: { money: 2000, manpower: 1000, oil: 1000, ore: 1000, time: '1 day 6 hours' },
        stats: { 'HP': 25, 'Mão de Obra': '+200 & +20%', 'Mobilização': '+70%', 'Upkeep': 130 }
      },
      {
        level: 5,
        cost: { money: 2500, manpower: 1500, oil: 1250, ore: 1250, time: '1 day 8 hours' },
        stats: { 'HP': 30, 'Mão de Obra': '+200 & +25%', 'Mobilização': '+100%', 'Upkeep': 140 }
      }
    ]
  },
  {
    id: 'arms-industry',
    name: 'Arms Industry',
    emoji: '🏭',
    category: 'Produção',
    description: 'Aumenta produção de dinheiro e recursos. Essencial para economia forte.',
    levels: [
      {
        level: 1,
        cost: { money: 400, manpower: 350, oil: 350, ore: 500, time: '9 hours' },
        stats: { 'HP': 10, 'Dinheiro': '+100', 'Produção': '+10%' }
      },
      {
        level: 2,
        cost: { money: 450, manpower: 450, oil: 400, ore: 1000, time: '1 day' },
        stats: { 'HP': 15, 'Dinheiro': '+135', 'Produção': '+20%' }
      },
      {
        level: 3,
        cost: { money: 500, manpower: 500, oil: 425, ore: 1500, time: '1 day 8 hours' },
        stats: { 'HP': 20, 'Dinheiro': '+165', 'Produção': '+30%' }
      },
      {
        level: 4,
        cost: { money: 525, manpower: 525, oil: 450, ore: 1500, time: '1 day 12 hours' },
        stats: { 'HP': 25, 'Dinheiro': '+185', 'Produção': '+40%' }
      },
      {
        level: 5,
        cost: { money: 550, manpower: 550, oil: 475, ore: 2500, time: '2 days' },
        stats: { 'HP': 30, 'Dinheiro': '+200', 'Produção': '+50%' }
      }
    ]
  },
  {
    id: 'secret-lab',
    name: 'Secret Weapons Lab',
    emoji: '🔬',
    category: 'Pesquisa',
    description: 'Laboratório para pesquisa de armas secretas e tecnologias avançadas.',
    levels: [
      {
        level: 1,
        cost: { money: 750, manpower: 400, oil: 500, ore: 250, time: '1 day 1 hour' },
        stats: { 'HP': 10, 'Upkeep': 100 }
      },
      {
        level: 2,
        cost: { money: 1000, manpower: 800, oil: 1000, ore: 500, time: '1 day 2 hours' },
        stats: { 'HP': 15, 'Upkeep': 110 }
      },
      {
        level: 3,
        cost: { money: 1500, manpower: 1200, oil: 1500, ore: 750, time: '1 day 4 hours' },
        stats: { 'HP': 20, 'Upkeep': 120 }
      },
      {
        level: 4,
        cost: { money: 2500, manpower: 1600, oil: 2000, ore: 1000, time: '1 day 7 hours' },
        stats: { 'HP': 25, 'Upkeep': 130 }
      },
      {
        level: 5,
        cost: { money: 3500, manpower: 200, oil: 2500, ore: 1250, time: '1 day 12 hours' },
        stats: { 'HP': 30, 'Upkeep': 140 }
      }
    ]
  },
  {
    id: 'military-hospital',
    name: 'Military Hospital',
    emoji: '🏥',
    category: 'Suporte',
    description: 'Hospital para curar unidades danificadas e aumentar crescimento populacional.',
    levels: [
      {
        level: 1,
        cost: { money: 500, manpower: 500, oil: 250, ore: 250, time: '1 day 1 hour' },
        stats: { 'HP': 10, 'Cura/dia': '+1', 'Crescimento': '+20%', 'Upkeep': 100 }
      },
      {
        level: 2,
        cost: { money: 750, manpower: 650, oil: 500, ore: 375, time: '1 day 2 hours' },
        stats: { 'HP': 15, 'Cura/dia': '+2', 'Crescimento': '+30%', 'Upkeep': 110 }
      },
      {
        level: 3,
        cost: { money: 1250, manpower: 750, oil: 1500, ore: 500, time: '1 day 3 hours' },
        stats: { 'HP': 20, 'Cura/dia': '+3', 'Crescimento': '+40%', 'Upkeep': 120 }
      },
      {
        level: 4,
        cost: { money: 1500, manpower: 1000, oil: 850, ore: 625, time: '1 day 5 hours' },
        stats: { 'HP': 25, 'Cura/dia': '+4', 'Crescimento': '+55%', 'Upkeep': 130 }
      },
      {
        level: 5,
        cost: { money: 2000, manpower: 1500, oil: 1000, ore: 750, time: '1 day 8 hours' },
        stats: { 'HP': 30, 'Cura/dia': '+5', 'Crescimento': '+75%', 'Upkeep': 140 }
      }
    ]
  },
  {
    id: 'bunker',
    name: 'Underground Bunker',
    emoji: '🛡️',
    category: 'Defesa',
    description: 'Bunker subterrâneo que protege população e oferece bônus de moral. Não é destruído ao ser capturado.',
    levels: [
      {
        level: 1,
        cost: { money: 500, manpower: 750, oil: 750, ore: 2000, time: '8 hours' },
        stats: { 'HP': 20, 'Proteção': 2, 'Entrenchment': '45%', 'Moral': '+5%' }
      },
      {
        level: 2,
        cost: { money: 1000, manpower: 1000, oil: 1000, ore: 3500, time: '1 day' },
        stats: { 'HP': 40, 'Proteção': 4, 'Entrenchment': '52%', 'Moral': '+10%' }
      },
      {
        level: 3,
        cost: { money: 1500, manpower: 1250, oil: 1250, ore: 5000, time: '1 day 8 hours' },
        stats: { 'HP': 75, 'Proteção': 6, 'Entrenchment': '61%', 'Moral': '+20%' }
      },
      {
        level: 4,
        cost: { money: 2000, manpower: 1500, oil: 1500, ore: 6500, time: '1 day 12 hours' },
        stats: { 'HP': 100, 'Proteção': 8, 'Entrenchment': '71%', 'Moral': '+35%' }
      },
      {
        level: 5,
        cost: { money: 2500, manpower: 1750, oil: 1750, ore: 8000, time: '2 days' },
        stats: { 'HP': 125, 'Proteção': 10, 'Entrenchment': '76%', 'Moral': '+50%' }
      }
    ]
  },
  {
    id: 'headquarters',
    name: 'Headquarters',
    emoji: '🏛️',
    category: 'Estratégico',
    description: 'Centro de comando da cidade. Oferece bônus de moral para toda a nação.',
    specialNotes: 'Pode ser relocado com custo de 2500 dinheiro, 15000 mão de obra e 1 dia 12 horas.',
    levels: [
      {
        level: 1,
        cost: { money: 0, manpower: 0, oil: 0, ore: 0, time: '-' },
        stats: { 'Bônus': '+25% moral' }
      }
    ]
  }
];

export default function Edificios() {
  const [expandedBuilding, setExpandedBuilding] = useState<string | null>('army-base');
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
          <h1 className="text-4xl font-bold text-lime-400 mb-2">🏗️ Edifícios de Cidade</h1>
          <p className="text-slate-400">Construa sua base econômica e militar</p>
        </div>
      </div>

      <div className="container py-12">
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
          <h3 className="text-xl font-bold text-lime-400 mb-4">💡 Dicas de Construção</h3>
          <ul className="text-slate-300 space-y-3">
            <li>• <strong>Fase Inicial:</strong> Priorize Recruiting Office e Arms Industry para economia</li>
            <li>• <strong>Defesa:</strong> Construa bunkers para proteger população contra bombardeios</li>
            <li>• <strong>Militar:</strong> Bases (Army, Air, Naval) são essenciais para mobilizar unidades</li>
            <li>• <strong>Saúde:</strong> Hospital cura unidades e aumenta crescimento populacional</li>
            <li>• <strong>Pesquisa:</strong> Secret Lab é importante para tecnologias avançadas</li>
            <li>• <strong>Upkeep:</strong> Cada edifício tem custo de manutenção diária em dinheiro</li>
            <li>• <strong>Anexação:</strong> Anexe cidades capturadas para dobrar produção de recursos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
