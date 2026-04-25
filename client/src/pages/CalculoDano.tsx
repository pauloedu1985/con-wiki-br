import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export default function CalculoDano() {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">🎰 Cálculo Completo de Dano</h1>
          <p className="text-slate-400">Entenda os cálculos complexos de dano e domine a estratégia de combate</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Warning Banner */}
        <div className="mb-8 bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 flex gap-3">
          <AlertCircle className="text-yellow-400 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-yellow-300 text-sm">
            <strong>Aviso:</strong> Este guia é baseado em análise da comunidade e não é verificado oficialmente. Os cálculos podem mudar com atualizações do jogo.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-lime-400 mb-4">📑 Índice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'intro', label: 'Introdução' },
              { id: 'processo', label: 'Processo de Cálculo' },
              { id: 'exemplo', label: 'Exemplo Prático' },
              { id: 'modificadores', label: 'Modificadores de Dano' },
              { id: 'fatores', label: 'Fatores que Afetam' },
              { id: 'casos', label: 'Casos Especiais' },
              { id: 'otimizacao', label: 'Otimização de Dano' },
              { id: 'referencia', label: 'Tabela de Referência' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => toggleSection(item.id)}
                className="text-left px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 hover:text-lime-400 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {/* Introdução */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('intro')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Introdução</h3>
              {expandedSection === 'intro' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'intro' && (
              <div className="border-t border-slate-700/50 px-6 py-4 text-slate-300 space-y-4">
                <p>
                  O sistema de cálculo de dano em Conflict of Nations é complexo e envolve múltiplos fatores. Compreender como o dano é calculado permite que você otimize suas composições de unidades e preveja resultados de combate com maior precisão.
                </p>
                <p>
                  Este guia detalha cada etapa do processo de cálculo, fornecendo exemplos práticos e estratégias para maximizar sua efetividade em combate.
                </p>
              </div>
            )}
          </div>

          {/* Processo de Cálculo */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('processo')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Processo de Cálculo de Dano</h3>
              {expandedSection === 'processo' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'processo' && (
              <div className="border-t border-slate-700/50 px-6 py-4 space-y-6">
                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded p-4">
                    <h4 className="font-bold text-lime-400 mb-2">Etapa 1: Distribuição de Dano</h4>
                    <p className="text-slate-300 text-sm">
                      O dano é distribuído entre as unidades no stack baseado em seus pesos (Echelon). Unidades mais pesadas recebem mais dano proporcionalmente.
                    </p>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4">
                    <h4 className="font-bold text-lime-400 mb-2">Etapa 2: Conversão para Tipo de Armadura</h4>
                    <p className="text-slate-300 text-sm">
                      O dano é convertido para o tipo apropriado baseado no tipo de armadura da unidade alvo. Diferentes tipos de dano são efetivos contra diferentes tipos de armadura.
                    </p>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4">
                    <h4 className="font-bold text-lime-400 mb-2">Etapa 3: Aplicação de Modificadores</h4>
                    <p className="text-slate-300 text-sm">
                      Modificadores são aplicados ao dano baseado em tipo de unidade atacante, tipo de unidade defensora, terreno e outros fatores especiais.
                    </p>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4">
                    <h4 className="font-bold text-lime-400 mb-2">Etapa 4: Aplicação de RNG (Randomização)</h4>
                    <p className="text-slate-300 text-sm">
                      Um fator de randomização é aplicado, o que significa que o dano não é sempre exatamente o mesmo. Há variação natural nos resultados.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exemplo Prático */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('exemplo')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Exemplo Prático Completo</h3>
              {expandedSection === 'exemplo' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'exemplo' && (
              <div className="border-t border-slate-700/50 px-6 py-4 space-y-6">
                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Cenário</h4>
                  <div className="bg-slate-900/50 rounded p-4 space-y-2 text-slate-300 text-sm">
                    <p><strong>Stack Defensivo:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>5x Motorized Infantry (75 HP total, 15 DDW)</li>
                      <li>5x Combat Recon Vehicle (85 HP total, 10 DDW)</li>
                    </ul>
                    <p className="mt-3"><strong>Atacante:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Lv1 Gunship Helicopter com 7 Soft + 2 Hard</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Cálculo Passo a Passo</h4>
                  <div className="space-y-3">
                    <div className="bg-slate-900/50 rounded p-4">
                      <p className="text-lime-400 font-semibold mb-2">Passo 1: Distribuição de Dano</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Peso total do stack: 15 + 10 = 25</li>
                        <li>• Infantaria receberá: 15/25 = 60% do dano</li>
                        <li>• Recon receberá: 10/25 = 40% do dano</li>
                      </ul>
                    </div>

                    <div className="bg-slate-900/50 rounded p-4">
                      <p className="text-lime-400 font-semibold mb-2">Passo 2: Dano Recebido</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Se o Gunship faz 7 de dano:</li>
                        <li>• Infantaria recebe: 60% × 7 = 4.2 de dano</li>
                        <li>• Recon recebe: 40% × 7 = 2.8 de dano</li>
                      </ul>
                    </div>

                    <div className="bg-slate-900/50 rounded p-4">
                      <p className="text-lime-400 font-semibold mb-2">Passo 3: Aplicação de Modificadores</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Gunship é efetivo contra alvos macios</li>
                        <li>• Infantaria é alvo macio: 60% × 7 = 4.2</li>
                        <li>• Recon é alvo macio: 40% × 7 = 2.8</li>
                      </ul>
                    </div>

                    <div className="bg-slate-900/50 rounded p-4">
                      <p className="text-lime-400 font-semibold mb-2">Passo 4: RNG e Resultado Final</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• Infantaria: ~4.2 ± variação</li>
                        <li>• Recon: ~2.8 ± variação</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modificadores */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('modificadores')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Modificadores de Dano</h3>
              {expandedSection === 'modificadores' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'modificadores' && (
              <div className="border-t border-slate-700/50 px-6 py-4 space-y-6">
                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Por Tipo de Armadura</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-slate-300">
                      <thead>
                        <tr className="border-b border-slate-700/50">
                          <th className="text-left py-2 px-3 text-lime-400">Tipo</th>
                          <th className="text-left py-2 px-3 text-lime-400">Descrição</th>
                          <th className="text-left py-2 px-3 text-lime-400">Modificador</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-700/30">
                          <td className="py-2 px-3 font-semibold">Soft</td>
                          <td className="py-2 px-3">Alvos leves (infantaria, helicópteros)</td>
                          <td className="py-2 px-3">Baseline</td>
                        </tr>
                        <tr className="border-b border-slate-700/30">
                          <td className="py-2 px-3 font-semibold">Hard</td>
                          <td className="py-2 px-3">Alvos blindados (tanques)</td>
                          <td className="py-2 px-3">Reduz dano de armas anti-soft</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-semibold">Building</td>
                          <td className="py-2 px-3">Estruturas</td>
                          <td className="py-2 px-3">Modificadores especiais</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Por Terreno</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { name: 'Urbano', effect: 'Pode afetar efetividade de certos ataques' },
                      { name: 'Floresta', effect: 'Pode fornecer proteção' },
                      { name: 'Montanha', effect: 'Pode afetar mobilidade e dano' },
                      { name: 'Água', effect: 'Afeta unidades terrestres' }
                    ].map(terrain => (
                      <div key={terrain.name} className="bg-slate-900/50 rounded p-3">
                        <p className="font-semibold text-lime-400 text-sm">{terrain.name}</p>
                        <p className="text-slate-300 text-xs mt-1">{terrain.effect}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Especiais</h4>
                  <div className="space-y-2 text-slate-300 text-sm">
                    <p>• <strong>Entrincheiramento:</strong> Reduz dano recebido</p>
                    <p>• <strong>Altitude:</strong> Afeta aviação</p>
                    <p>• <strong>Enriquecimento:</strong> Aumenta dano em certos casos</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fatores que Afetam */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('fatores')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Fatores que Afetam o Dano</h3>
              {expandedSection === 'fatores' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'fatores' && (
              <div className="border-t border-slate-700/50 px-6 py-4 space-y-4">
                {[
                  { label: 'ATK (Ataque)', desc: 'O valor de ataque de uma unidade determina quanto dano ela pode fazer. Unidades com ATK mais alto fazem mais dano.' },
                  { label: 'DEF (Defesa)', desc: 'O valor de defesa de uma unidade reduz o dano recebido. Unidades com DEF mais alta recebem menos dano.' },
                  { label: 'HP (Health Points)', desc: 'O HP total de uma unidade determina quanto dano ela pode absorver antes de ser destruída.' },
                  { label: 'Alcance (Range)', desc: 'Unidades a maior distância podem ter modificadores de dano diferentes.' }
                ].map(factor => (
                  <div key={factor.label} className="bg-slate-900/50 rounded p-4">
                    <p className="font-bold text-lime-400 mb-2">{factor.label}</p>
                    <p className="text-slate-300 text-sm">{factor.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Casos Especiais */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('casos')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Casos Especiais</h3>
              {expandedSection === 'casos' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'casos' && (
              <div className="border-t border-slate-700/50 px-6 py-4 space-y-4">
                <div className="bg-slate-900/50 rounded p-4">
                  <p className="font-bold text-lime-400 mb-2">Unidades com Bunker</p>
                  <p className="text-slate-300 text-sm">Algumas unidades com bunker têm cálculos de dano separados. Elas podem ter resistência especial a certos tipos de dano.</p>
                </div>

                <div className="bg-slate-900/50 rounded p-4">
                  <p className="font-bold text-lime-400 mb-2">Dano de Mísseis</p>
                  <p className="text-slate-300 text-sm">Mísseis têm cálculos especiais que podem incluir dano de explosão, dano de splash e dano de contaminação (para warheads químicos/nucleares).</p>
                </div>

                <div className="bg-slate-900/50 rounded p-4">
                  <p className="font-bold text-lime-400 mb-2">Dano de Artilharia</p>
                  <p className="text-slate-300 text-sm">Artilharia tem alcance e pode ter modificadores baseados em distância.</p>
                </div>
              </div>
            )}
          </div>

          {/* Otimização */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('otimizacao')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Dicas para Otimizar Dano</h3>
              {expandedSection === 'otimizacao' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'otimizacao' && (
              <div className="border-t border-slate-700/50 px-6 py-4 space-y-6">
                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Escolha de Unidades</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>1. <strong>Matchups:</strong> Escolha unidades efetivas contra o tipo de alvo</li>
                    <li>2. <strong>Composição:</strong> Misture tipos de dano para cobrir múltiplos alvos</li>
                    <li>3. <strong>Distribuição:</strong> Distribua dano para não deixar nenhuma unidade muito forte</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Posicionamento</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>1. <strong>Alcance:</strong> Posicione unidades de alcance longo fora do alcance inimigo</li>
                    <li>2. <strong>Proteção:</strong> Proteja unidades frágeis com unidades pesadas</li>
                    <li>3. <strong>Flanqueamento:</strong> Ataque de múltiplas direções quando possível</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lime-400 mb-3">Timing</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>1. <strong>Sequência:</strong> Ataque na sequência correta para maximizar dano</li>
                    <li>2. <strong>Coordenação:</strong> Coordene ataques de múltiplas unidades</li>
                    <li>3. <strong>Renovação:</strong> Renove unidades danificadas quando necessário</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Referência Rápida */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('referencia')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-lime-400">Tabela de Referência Rápida</h3>
              {expandedSection === 'referencia' ? (
                <ChevronUp className="text-lime-400" />
              ) : (
                <ChevronDown className="text-slate-400" />
              )}
            </button>
            {expandedSection === 'referencia' && (
              <div className="border-t border-slate-700/50 px-6 py-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left py-2 px-3 text-lime-400">Fator</th>
                        <th className="text-left py-2 px-3 text-lime-400">Impacto</th>
                        <th className="text-left py-2 px-3 text-lime-400">Como Melhorar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700/30">
                        <td className="py-2 px-3 font-semibold">ATK</td>
                        <td className="py-2 px-3">Aumenta dano</td>
                        <td className="py-2 px-3">Upgrade de unidades, pesquisa</td>
                      </tr>
                      <tr className="border-b border-slate-700/30">
                        <td className="py-2 px-3 font-semibold">DEF</td>
                        <td className="py-2 px-3">Reduz dano</td>
                        <td className="py-2 px-3">Upgrade de unidades, posicionamento</td>
                      </tr>
                      <tr className="border-b border-slate-700/30">
                        <td className="py-2 px-3 font-semibold">HP</td>
                        <td className="py-2 px-3">Durabilidade</td>
                        <td className="py-2 px-3">Escolher unidades com mais HP</td>
                      </tr>
                      <tr className="border-b border-slate-700/30">
                        <td className="py-2 px-3 font-semibold">Tipo</td>
                        <td className="py-2 px-3">Efetividade</td>
                        <td className="py-2 px-3">Escolher matchups corretos</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold">RNG</td>
                        <td className="py-2 px-3">Variação</td>
                        <td className="py-2 px-3">Aceitar variação natural</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Resumo Final */}
        <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">💡 Resumo</h3>
          <div className="text-slate-300 space-y-3">
            <p>O cálculo de dano é importante porque:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Permite Previsão:</strong> Você pode estimar resultados de combate</li>
              <li><strong>Recompensa Planejamento:</strong> Composições bem pensadas são mais efetivas</li>
              <li><strong>Cria Profundidade:</strong> Adiciona estratégia ao combate</li>
              <li><strong>Balanceia Jogo:</strong> Impede que um tipo de unidade domine completamente</li>
            </ul>
            <p className="mt-4 text-lime-400 font-semibold">Lembre-se: Compreender dano é compreender o jogo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
