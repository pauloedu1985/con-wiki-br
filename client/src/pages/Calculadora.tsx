import React, { useState, useMemo } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Unit {
  id: string;
  name: string;
  weight: number;
  type: 'infantry' | 'artillery' | 'armor' | 'air' | 'aa' | 'recon';
  category: string;
}

const units: Unit[] = [
  // Infantaria
  { id: 'mi', name: 'Motorized Infantry', weight: 3, type: 'infantry', category: 'Infantaria' },
  { id: 'meci', name: 'Mechanized Infantry', weight: 7, type: 'infantry', category: 'Infantaria' },
  { id: 'ai', name: 'Airborne Infantry', weight: 5, type: 'infantry', category: 'Infantaria' },
  { id: 'mti', name: 'Mountain Infantry', weight: 3, type: 'infantry', category: 'Infantaria' },
  { id: 'mari', name: 'Marine Infantry', weight: 5, type: 'infantry', category: 'Infantaria' },
  { id: 'sf', name: 'Special Forces', weight: 1, type: 'infantry', category: 'Infantaria' },
  
  // Artilharia
  { id: 'fa', name: 'Field Artillery', weight: 4, type: 'artillery', category: 'Artilharia' },
  { id: 'spg', name: 'Self-Propelled Gun', weight: 6, type: 'artillery', category: 'Artilharia' },
  { id: 'ra', name: 'Rocket Artillery', weight: 5, type: 'artillery', category: 'Artilharia' },
  { id: 'mortar', name: 'Mortar', weight: 2, type: 'artillery', category: 'Artilharia' },
  { id: 'atg', name: 'Anti-Tank Gun', weight: 3, type: 'artillery', category: 'Artilharia' },
  
  // Blindados
  { id: 'lt', name: 'Light Tank', weight: 4, type: 'armor', category: 'Blindados' },
  { id: 'mbt', name: 'Main Battle Tank', weight: 8, type: 'armor', category: 'Blindados' },
  { id: 'ht', name: 'Heavy Tank', weight: 10, type: 'armor', category: 'Blindados' },
  { id: 'td', name: 'Tank Destroyer', weight: 6, type: 'armor', category: 'Blindados' },
  { id: 'ifv', name: 'Infantry Fighting Vehicle', weight: 5, type: 'armor', category: 'Blindados' },
  
  // Aviação
  { id: 'fj', name: 'Fighter Jet', weight: 1, type: 'air', category: 'Aviação' },
  { id: 'sf_air', name: 'Strike Fighter', weight: 1, type: 'air', category: 'Aviação' },
  { id: 'ah', name: 'Attack Helicopter', weight: 2, type: 'air', category: 'Aviação' },
  { id: 'th', name: 'Transport Helicopter', weight: 2, type: 'air', category: 'Aviação' },
  { id: 'bomber', name: 'Bomber', weight: 2, type: 'air', category: 'Aviação' },
  
  // Defesa Aérea
  { id: 'maa', name: 'Mobile Anti-Air Vehicle', weight: 4, type: 'aa', category: 'Defesa Aérea' },
  { id: 'sam', name: 'Surface-to-Air Missile', weight: 5, type: 'aa', category: 'Defesa Aérea' },
  
  // Reconhecimento
  { id: 'recon', name: 'Recon Vehicle', weight: 2, type: 'recon', category: 'Reconhecimento' },
];

interface StackUnit {
  unitId: string;
  quantity: number;
}

export default function Calculadora() {
  const [defenderStack, setDefenderStack] = useState<StackUnit[]>([
    { unitId: 'mbt', quantity: 5 },
    { unitId: 'mi', quantity: 3 },
  ]);
  const [totalDamage, setTotalDamage] = useState(100);

  const categories = Array.from(new Set(units.map(u => u.category)));

  const getUnitById = (id: string) => units.find(u => u.id === id);

  const calculateDistribution = useMemo(() => {
    if (defenderStack.length === 0) return [];

    const stackWithDetails = defenderStack
      .map(stackUnit => {
        const unit = getUnitById(stackUnit.unitId);
        if (!unit) return null;
        return {
          unit,
          quantity: stackUnit.quantity,
          totalWeight: unit.weight * stackUnit.quantity,
        };
      })
      .filter(Boolean) as any[];

    const totalWeight = stackWithDetails.reduce((sum, item) => sum + item.totalWeight, 0);

    if (totalWeight === 0) return [];

    return stackWithDetails.map(item => ({
      unit: item.unit,
      quantity: item.quantity,
      totalWeight: item.totalWeight,
      percentage: (item.totalWeight / totalWeight) * 100,
      damageReceived: (item.totalWeight / totalWeight) * totalDamage,
      damagePerUnit: ((item.totalWeight / totalWeight) * totalDamage) / item.quantity,
    }));
  }, [defenderStack, totalDamage]);

  const totalStackWeight = defenderStack.reduce((sum, stackUnit) => {
    const unit = getUnitById(stackUnit.unitId);
    return sum + (unit ? unit.weight * stackUnit.quantity : 0);
  }, 0);

  const addUnitToStack = (unitId: string) => {
    const existing = defenderStack.find(su => su.unitId === unitId);
    if (existing) {
      setDefenderStack(
        defenderStack.map(su =>
          su.unitId === unitId ? { ...su, quantity: su.quantity + 1 } : su
        )
      );
    } else {
      setDefenderStack([...defenderStack, { unitId, quantity: 1 }]);
    }
  };

  const removeUnitFromStack = (unitId: string) => {
    const updated = defenderStack
      .map(su =>
        su.unitId === unitId ? { ...su, quantity: su.quantity - 1 } : su
      )
      .filter(su => su.quantity > 0);
    setDefenderStack(updated);
  };

  const clearStack = () => {
    setDefenderStack([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">🧮 Calculadora de Dano</h1>
          <p className="text-slate-400">Calcule como o dano é distribuído entre suas unidades</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Unit Selection */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-lime-400 mb-4">Adicionar Unidades</h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {categories.map(category => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">{category}</h3>
                    <div className="space-y-1">
                      {units
                        .filter(u => u.category === category)
                        .map(unit => (
                          <button
                            key={unit.id}
                            onClick={() => addUnitToStack(unit.id)}
                            className="w-full text-left px-3 py-2 rounded bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-lime-400 transition-colors text-sm"
                          >
                            <div className="flex justify-between items-center">
                              <span>{unit.name}</span>
                              <span className="text-xs text-slate-500">W:{unit.weight}</span>
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stack and Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Damage Input */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-lime-400 mb-4">Dano Total Recebido</h2>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="text-sm text-slate-400 mb-2 block">Dano (pontos)</label>
                  <Input
                    type="number"
                    value={totalDamage}
                    onChange={(e) => setTotalDamage(Math.max(0, parseInt(e.target.value) || 0))}
                    className="bg-slate-700/50 border-slate-600 text-lime-400"
                  />
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Peso Total</div>
                  <div className="text-2xl font-bold text-lime-400">{totalStackWeight}</div>
                </div>
              </div>
            </div>

            {/* Stack Composition */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-lime-400">Stack Defensivo</h2>
                {defenderStack.length > 0 && (
                  <button
                    onClick={clearStack}
                    className="px-3 py-1 rounded text-sm bg-red-900/50 hover:bg-red-800 text-red-300 transition-colors flex items-center gap-1"
                  >
                    <RotateCcw size={14} />
                    Limpar
                  </button>
                )}
              </div>

              {defenderStack.length === 0 ? (
                <p className="text-slate-400 text-center py-8">Clique em uma unidade à esquerda para adicionar ao stack</p>
              ) : (
                <div className="space-y-3">
                  {defenderStack.map(stackUnit => {
                    const unit = getUnitById(stackUnit.unitId);
                    if (!unit) return null;
                    return (
                      <div key={unit.id} className="bg-slate-900/50 rounded p-3 flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-200">{unit.name}</div>
                          <div className="text-xs text-slate-400">Peso: {unit.weight} × {stackUnit.quantity} = {unit.weight * stackUnit.quantity}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeUnitFromStack(unit.id)}
                            className="p-1 rounded bg-red-900/50 hover:bg-red-800 text-red-300 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold text-lime-400">{stackUnit.quantity}</span>
                          <button
                            onClick={() => addUnitToStack(unit.id)}
                            className="p-1 rounded bg-lime-900/50 hover:bg-lime-800 text-lime-300 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Results */}
            {calculateDistribution.length > 0 && (
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-lime-400 mb-4">📊 Distribuição de Dano</h2>
                
                <div className="space-y-4">
                  {calculateDistribution.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 rounded p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-semibold text-slate-200">{item.unit.name}</div>
                          <div className="text-xs text-slate-400">Quantidade: {item.quantity}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-lime-400">{item.damageReceived.toFixed(1)}</div>
                          <div className="text-xs text-slate-400">dano total</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-slate-400">Distribuição</span>
                          <span className="text-sm font-semibold text-lime-400">{item.percentage.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-lime-500 h-full transition-all duration-300"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Per Unit Damage */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-slate-800/50 rounded p-2">
                          <div className="text-xs text-slate-400">Dano por Unidade</div>
                          <div className="font-bold text-slate-200">{item.damagePerUnit.toFixed(2)}</div>
                        </div>
                        <div className="bg-slate-800/50 rounded p-2">
                          <div className="text-xs text-slate-400">Peso Total</div>
                          <div className="font-bold text-slate-200">{item.totalWeight}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-900/50 rounded p-3 text-center">
                      <div className="text-xs text-slate-400 mb-1">Dano Total</div>
                      <div className="text-2xl font-bold text-lime-400">{totalDamage}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-3 text-center">
                      <div className="text-xs text-slate-400 mb-1">Peso Total</div>
                      <div className="text-2xl font-bold text-lime-400">{totalStackWeight}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-3 text-center">
                      <div className="text-xs text-slate-400 mb-1">Unidades</div>
                      <div className="text-2xl font-bold text-lime-400">
                        {defenderStack.reduce((sum, su) => sum + su.quantity, 0)}
                      </div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-3 text-center">
                      <div className="text-xs text-slate-400 mb-1">Dano/Peso</div>
                      <div className="text-2xl font-bold text-lime-400">
                        {(totalDamage / totalStackWeight).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Info Section */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-lime-400 mb-3">💡 Como Funciona</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• <strong>Peso (Weight):</strong> Cada unidade tem um peso que determina como o dano é distribuído</li>
                <li>• <strong>Distribuição:</strong> O dano é dividido proporcionalmente ao peso de cada unidade</li>
                <li>• <strong>Proteção:</strong> Unidades pesadas protegem unidades leves no mesmo stack</li>
                <li>• <strong>Exemplo:</strong> Um stack com tanques (peso alto) protege aviões (peso baixo)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
