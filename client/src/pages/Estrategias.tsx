import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, Target, Shield, Zap } from 'lucide-react';

interface Strategy {
  id: string;
  phase: 'early' | 'mid' | 'late';
  title: string;
  description: string;
  objectives: string[];
  composition: { unit: string; quantity: number; role: string }[];
  tactics: string[];
  tips: string[];
  focus: string;
}

const strategies: Strategy[] = [
  {
    id: 'early-aggressive',
    phase: 'early',
    title: 'Estratégia Agressiva - Early Game',
    description: 'Foco em ataque rápido e controle de território nos primeiros minutos',
    focus: 'Ataque Rápido',
    objectives: [
      'Conquistar províncias adjacentes rapidamente',
      'Estabelecer superioridade militar local',
      'Acumular recursos através de conquistas',
      'Pressionar inimigos próximos'
    ],
    composition: [
      { unit: 'Motorized Infantry', quantity: 8, role: 'Ataque Principal' },
      { unit: 'Combat Recon Vehicle', quantity: 4, role: 'Reconhecimento' },
      { unit: 'Mobile Artillery', quantity: 2, role: 'Suporte de Fogo' }
    ],
    tactics: [
      'Ataque em múltiplas frentes para dividir defesa inimiga',
      'Use reconhecimento para identificar pontos fracos',
      'Concentre força em um setor por vez',
      'Mantenha pressão constante para evitar consolidação inimiga'
    ],
    tips: [
      'Priorize conquistar províncias com bons recursos',
      'Não sobrecarregue seu exército - mantenha eficiência',
      'Monitore inimigos próximos constantemente',
      'Construa edifícios militares nas cidades conquistadas'
    ]
  },
  {
    id: 'early-defensive',
    phase: 'early',
    title: 'Estratégia Defensiva - Early Game',
    description: 'Foco em defesa sólida e acúmulo de recursos para crescimento futuro',
    focus: 'Defesa e Economia',
    objectives: [
      'Fortalecer defesa das cidades principais',
      'Acumular recursos passivamente',
      'Pesquisar tecnologias defensivas',
      'Preparar para expansão no mid game'
    ],
    composition: [
      { unit: 'Mechanized Infantry', quantity: 6, role: 'Defesa' },
      { unit: 'Main Battle Tank', quantity: 2, role: 'Defesa Pesada' },
      { unit: 'Mobile SAM Launcher', quantity: 2, role: 'Defesa Aérea' }
    ],
    tactics: [
      'Posicione unidades defensivas em cidades principais',
      'Crie múltiplas linhas de defesa',
      'Use terreno para vantagem defensiva',
      'Mantenha reservas para contra-ataque'
    ],
    tips: [
      'Construa edifícios de defesa nas cidades',
      'Pesquise tecnologias de armadura',
      'Monitore atividade inimiga constantemente',
      'Prepare economia para escalação no mid game'
    ]
  },
  {
    id: 'early-balanced',
    phase: 'early',
    title: 'Estratégia Balanceada - Early Game',
    description: 'Equilíbrio entre ataque e defesa com crescimento econômico',
    focus: 'Equilíbrio',
    objectives: [
      'Conquistar 2-3 províncias adjacentes',
      'Manter defesa sólida em cidades principais',
      'Desenvolver economia',
      'Preparar transição para mid game'
    ],
    composition: [
      { unit: 'Motorized Infantry', quantity: 5, role: 'Ataque' },
      { unit: 'Mechanized Infantry', quantity: 3, role: 'Defesa' },
      { unit: 'Combat Recon Vehicle', quantity: 2, role: 'Reconhecimento' },
      { unit: 'Mobile Artillery', quantity: 1, role: 'Suporte' }
    ],
    tactics: [
      'Ataque províncias fracas enquanto defende cidades',
      'Use reconhecimento para avaliar força inimiga',
      'Mantenha flexibilidade para responder a ameaças',
      'Construa infraestrutura econômica'
    ],
    tips: [
      'Diversifique seu exército para flexibilidade',
      'Invista em pesquisa de múltiplas áreas',
      'Monitore economia constantemente',
      'Prepare transição suave para mid game'
    ]
  },

  {
    id: 'mid-aggressive',
    phase: 'mid',
    title: 'Estratégia Agressiva - Mid Game',
    description: 'Ofensiva massiva com composições mistas para dominar adversários',
    focus: 'Ofensiva Total',
    objectives: [
      'Conquistar territórios significativos',
      'Eliminar ameaças militares próximas',
      'Estabelecer superioridade regional',
      'Preparar para final game'
    ],
    composition: [
      { unit: 'Mechanized Infantry', quantity: 8, role: 'Infantaria Pesada' },
      { unit: 'Main Battle Tank', quantity: 6, role: 'Poder de Fogo' },
      { unit: 'Mobile Artillery', quantity: 4, role: 'Suporte de Fogo' },
      { unit: 'Mobile SAM Launcher', quantity: 2, role: 'Defesa Aérea' },
      { unit: 'Attack Helicopter', quantity: 2, role: 'Suporte Aéreo' }
    ],
    tactics: [
      'Concentre força massiva em um setor',
      'Use artilharia para suprimir defesa inimiga',
      'Coordene ataque terrestre com suporte aéreo',
      'Avance rapidamente após quebra de defesa'
    ],
    tips: [
      'Mantenha linhas de suprimento abertas',
      'Não deixe flancos expostos',
      'Use helicópteros para reconhecimento aéreo',
      'Prepare defesa para contra-ataques inimigos'
    ]
  },
  {
    id: 'mid-defensive',
    phase: 'mid',
    title: 'Estratégia Defensiva - Mid Game',
    description: 'Defesa em profundidade com contra-ataques oportunistas',
    focus: 'Defesa Estratégica',
    objectives: [
      'Manter controle territorial',
      'Repelir ataques inimigos',
      'Acumular força para contra-ataque',
      'Pesquisar tecnologias avançadas'
    ],
    composition: [
      { unit: 'Main Battle Tank', quantity: 8, role: 'Defesa Pesada' },
      { unit: 'Tank Destroyer', quantity: 4, role: 'Anti-Tanque' },
      { unit: 'Mobile SAM Launcher', quantity: 3, role: 'Defesa Aérea' },
      { unit: 'Mobile Anti-Air Vehicle', quantity: 2, role: 'Defesa Aérea Móvel' },
      { unit: 'Theater Defense System', quantity: 1, role: 'Defesa Estratégica' }
    ],
    tactics: [
      'Crie múltiplas linhas de defesa em profundidade',
      'Use tanques destruidores contra ataques blindados',
      'Mantenha defesa aérea em múltiplas localizações',
      'Prepare contra-ataque com reservas'
    ],
    tips: [
      'Posicione unidades em terreno favorável',
      'Use bunkers para proteção adicional',
      'Mantenha mobilidade para responder rápido',
      'Pesquise tecnologias de armadura'
    ]
  },
  {
    id: 'mid-balanced',
    phase: 'mid',
    title: 'Estratégia Balanceada - Mid Game',
    description: 'Ataque e defesa coordenados com pressão constante',
    focus: 'Pressão Constante',
    objectives: [
      'Expandir território gradualmente',
      'Manter defesa sólida',
      'Desenvolver força aérea',
      'Preparar para late game'
    ],
    composition: [
      { unit: 'Mechanized Infantry', quantity: 6, role: 'Infantaria' },
      { unit: 'Main Battle Tank', quantity: 4, role: 'Blindado' },
      { unit: 'Mobile Artillery', quantity: 3, role: 'Suporte' },
      { unit: 'Mobile SAM Launcher', quantity: 2, role: 'Defesa Aérea' },
      { unit: 'Strike Fighter', quantity: 2, role: 'Força Aérea' }
    ],
    tactics: [
      'Mantenha pressão em múltiplas frentes',
      'Use força aérea para reconhecimento e suporte',
      'Equilibre ataque e defesa',
      'Adapte-se à estratégia inimiga'
    ],
    tips: [
      'Desenvolva força aérea gradualmente',
      'Mantenha flexibilidade tática',
      'Invista em pesquisa balanceada',
      'Prepare transição para late game'
    ]
  },

  {
    id: 'late-aggressive',
    phase: 'late',
    title: 'Estratégia Agressiva - Late Game',
    description: 'Ofensiva final com tecnologia avançada para vitória decisiva',
    focus: 'Vitória Decisiva',
    objectives: [
      'Conquistar pontos de vitória críticos',
      'Eliminar ameaças militares',
      'Estabelecer domínio total',
      'Vencer o jogo'
    ],
    composition: [
      { unit: 'Stealth Strike Fighter', quantity: 4, role: 'Ataque Aéreo Furtivo' },
      { unit: 'Heavy Bomber', quantity: 2, role: 'Bombardeio Estratégico' },
      { unit: 'Main Battle Tank', quantity: 8, role: 'Poder de Fogo Terrestre' },
      { unit: 'Mobile Artillery', quantity: 4, role: 'Suporte de Fogo' },
      { unit: 'Theater Defense System', quantity: 2, role: 'Defesa Estratégica' },
      { unit: 'Ballistic Missile Launcher', quantity: 1, role: 'Arma Estratégica' }
    ],
    tactics: [
      'Use bombardeiros para destruir infraestrutura inimiga',
      'Coordene ataque aéreo massivo com ataque terrestre',
      'Use mísseis contra alvos estratégicos',
      'Avance rapidamente após supressão de defesa'
    ],
    tips: [
      'Mantenha superioridade aérea total',
      'Proteja mísseis balísticos',
      'Coordene todas as armas disponíveis',
      'Não deixe inimigo se recuperar'
    ]
  },
  {
    id: 'late-defensive',
    phase: 'late',
    title: 'Estratégia Defensiva - Late Game',
    description: 'Defesa impenetrável com contra-ataques devastadores',
    focus: 'Defesa Impenetrável',
    objectives: [
      'Manter controle territorial',
      'Repelir ataques finais inimigos',
      'Preparar contra-ataque decisivo',
      'Alcançar vitória por pontos'
    ],
    composition: [
      { unit: 'Stealth Air Superiority Fighter', quantity: 4, role: 'Superioridade Aérea' },
      { unit: 'Theater Defense System', quantity: 3, role: 'Defesa Estratégica' },
      { unit: 'Main Battle Tank', quantity: 8, role: 'Defesa Terrestre' },
      { unit: 'Tank Destroyer', quantity: 4, role: 'Anti-Tanque' },
      { unit: 'Ballistic Missile Submarine', quantity: 1, role: 'Dissuasão' }
    ],
    tactics: [
      'Mantenha defesa aérea impenetrável',
      'Use submarinos para defesa naval',
      'Crie zonas de negação de área',
      'Prepare contra-ataque com reservas'
    ],
    tips: [
      'Mantenha superioridade aérea',
      'Use defesa em profundidade',
      'Proteja pontos de vitória críticos',
      'Prepare contra-ataque final'
    ]
  },
  {
    id: 'late-balanced',
    phase: 'late',
    title: 'Estratégia Balanceada - Late Game',
    description: 'Equilíbrio perfeito entre ataque e defesa para vitória final',
    focus: 'Equilíbrio Final',
    objectives: [
      'Manter controle territorial',
      'Pressionar inimigos estrategicamente',
      'Proteger pontos de vitória',
      'Alcançar vitória'
    ],
    composition: [
      { unit: 'Stealth Strike Fighter', quantity: 3, role: 'Ataque Aéreo' },
      { unit: 'Air Superiority Fighter', quantity: 2, role: 'Defesa Aérea' },
      { unit: 'Main Battle Tank', quantity: 6, role: 'Blindado' },
      { unit: 'Mobile Artillery', quantity: 3, role: 'Suporte' },
      { unit: 'Theater Defense System', quantity: 2, role: 'Defesa' },
      { unit: 'Ballistic Missile Launcher', quantity: 1, role: 'Estratégico' }
    ],
    tactics: [
      'Mantenha pressão em múltiplas frentes',
      'Defenda pontos críticos enquanto ataca',
      'Use força aérea para controlar espaço aéreo',
      'Coordene todas as armas disponíveis'
    ],
    tips: [
      'Mantenha flexibilidade tática',
      'Adapte-se à situação do jogo',
      'Proteja pontos de vitória',
      'Prepare vitória final'
    ]
  }
];

const phases = [
  { id: 'early', label: 'Early Game (Primeiros 30 min)', icon: '🚀', color: 'bg-blue-900/20 border-blue-700' },
  { id: 'mid', label: 'Mid Game (30-60 min)', icon: '⚔️', color: 'bg-orange-900/20 border-orange-700' },
  { id: 'late', label: 'Late Game (60+ min)', icon: '👑', color: 'bg-red-900/20 border-red-700' }
];

export default function Estrategias() {
  const [selectedPhase, setSelectedPhase] = useState<'early' | 'mid' | 'late'>('early');
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);

  const phaseStrategies = strategies.filter(s => s.phase === selectedPhase);

  const toggleStrategy = (id: string) => {
    setExpandedStrategy(expandedStrategy === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">⚔️ Estratégias de Jogo</h1>
          <p className="text-slate-400">Guias completos para dominar cada fase do jogo</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Phase Tabs */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map(phase => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id as 'early' | 'mid' | 'late')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                selectedPhase === phase.id
                  ? 'bg-lime-400 text-slate-900 shadow-lg shadow-lime-400/20'
                  : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-lime-400/50'
              }`}
            >
              <span className="text-2xl mr-2">{phase.icon}</span>
              {phase.label}
            </button>
          ))}
        </div>

        {/* Strategies Grid */}
        <div className="space-y-4">
          {phaseStrategies.map(strategy => (
            <div
              key={strategy.id}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-slate-600/50 transition-colors"
            >
              <button
                onClick={() => toggleStrategy(strategy.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 bg-lime-400/10 border border-lime-400/30 rounded text-lime-400 text-xs font-semibold">
                      {strategy.focus}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-lime-400">{strategy.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{strategy.description}</p>
                </div>
                {expandedStrategy === strategy.id ? (
                  <ChevronUp className="text-lime-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedStrategy === strategy.id && (
                <div className="border-t border-slate-700/50 px-6 py-6 bg-slate-900/30 space-y-6">
                  {/* Objectives */}
                  <div>
                    <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                      <Target size={18} />
                      Objetivos
                    </h4>
                    <ul className="space-y-2">
                      {strategy.objectives.map((obj, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-lime-400 font-bold mt-0.5">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Composition */}
                  <div>
                    <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                      <Shield size={18} />
                      Composição de Exército Recomendada
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {strategy.composition.map((unit, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded p-3 border border-slate-700/30">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-slate-300">{unit.unit}</p>
                              <p className="text-slate-400 text-xs">{unit.role}</p>
                            </div>
                            <span className="px-2 py-1 bg-lime-400/10 border border-lime-400/30 rounded text-lime-400 text-sm font-bold">
                              x{unit.quantity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tactics */}
                  <div>
                    <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                      <Zap size={18} />
                      Táticas Principais
                    </h4>
                    <ul className="space-y-2">
                      {strategy.tactics.map((tactic, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-lime-400 font-bold mt-0.5">→</span>
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className="text-lime-400 font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb size={18} />
                      Dicas Importantes
                    </h4>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-lime-400 font-bold mt-0.5">✓</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* General Tips */}
        <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">💡 Dicas Gerais para Todas as Fases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm">
            <div>
              <p className="font-semibold text-lime-400 mb-2">Economia</p>
              <ul className="space-y-1 text-slate-400">
                <li>• Mantenha produção de recursos equilibrada</li>
                <li>• Invista em edifícios de produção cedo</li>
                <li>• Conquiste províncias ricas em recursos</li>
                <li>• Gerencie moral para manter produção</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lime-400 mb-2">Militar</p>
              <ul className="space-y-1 text-slate-400">
                <li>• Mantenha exército dentro de limites de eficiência</li>
                <li>• Diversifique tipos de unidades</li>
                <li>• Use reconhecimento antes de atacar</li>
                <li>• Proteja unidades valiosas</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lime-400 mb-2">Pesquisa</p>
              <ul className="space-y-1 text-slate-400">
                <li>• Priorize pesquisa de acordo com estratégia</li>
                <li>• Equilibre pesquisa militar e econômica</li>
                <li>• Pesquise defesa aérea cedo</li>
                <li>• Prepare para tecnologias avançadas</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lime-400 mb-2">Diplomacia</p>
              <ul className="space-y-1 text-slate-400">
                <li>• Monitore atividade de inimigos próximos</li>
                <li>• Faça alianças estratégicas quando possível</li>
                <li>• Evite lutar em múltiplas frentes</li>
                <li>• Comunique intenções claramente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
