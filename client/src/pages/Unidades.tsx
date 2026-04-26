import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface Unit {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  specialties: string[];
}

const units: Unit[] = [
  // Infantry
  { id: 'motorized-inf', name: 'Motorized Infantry', category: 'Infantry', description: 'Infantaria leve e móvel para operações rápidas', role: 'Ataque Leve', specialties: ['Mobilidade', 'Custo Baixo'] },
  { id: 'mech-inf', name: 'Mechanized Infantry', category: 'Infantry', description: 'Infantaria pesada com proteção blindada', role: 'Ataque Médio', specialties: ['Proteção', 'Versatilidade'] },
  { id: 'airmobile-inf', name: 'Airmobile Infantry', category: 'Infantry', description: 'Infantaria de desembarque aéreo para operações táticas', role: 'Mobilidade Aérea', specialties: ['Alcance', 'Flexibilidade'] },
  { id: 'special-forces', name: 'Special Forces', category: 'Infantry', description: 'Unidades de elite com habilidades especiais', role: 'Operações Especiais', specialties: ['Eficiência', 'Versatilidade'] },
  { id: 'naval-inf', name: 'Naval Infantry', category: 'Infantry', description: 'Infantaria especializada em operações anfíbias', role: 'Anfíbio', specialties: ['Água', 'Desembarque'] },

  // Armored
  { id: 'mbt', name: 'Main Battle Tank', category: 'Armored', description: 'Tanque de batalha principal com armadura pesada', role: 'Defesa Pesada', specialties: ['Armadura', 'Poder de Fogo'] },
  { id: 'tank-destroyer', name: 'Tank Destroyer', category: 'Armored', description: 'Especialista em combate contra tanques inimigos', role: 'Anti-Tanque', specialties: ['Penetração', 'Alcance'] },
  { id: 'amphibious-cv', name: 'Amphibious Combat Vehicle', category: 'Armored', description: 'Veículo blindado anfíbio para operações em água', role: 'Anfíbio', specialties: ['Mobilidade Aquática', 'Versatilidade'] },
  { id: 'combat-recon', name: 'Combat Recon Vehicle', category: 'Armored', description: 'Veículo de reconhecimento rápido e leve', role: 'Reconhecimento', specialties: ['Velocidade', 'Visibilidade'] },
  { id: 'armored-fv', name: 'Armored Fighting Vehicle', category: 'Armored', description: 'Veículo blindado de combate versátil', role: 'Combate Médio', specialties: ['Equilíbrio', 'Mobilidade'] },

  // Support
  { id: 'mobile-artillery', name: 'Mobile Artillery', category: 'Support', description: 'Artilharia móvel para suporte de fogo à distância', role: 'Suporte Distante', specialties: ['Alcance', 'Poder de Fogo'] },
  { id: 'mobile-sam', name: 'Mobile SAM Launcher', category: 'Support', description: 'Lançador de mísseis ar-terra móvel', role: 'Defesa Aérea', specialties: ['Anti-Aéreo', 'Mobilidade'] },
  { id: 'mobile-aa', name: 'Mobile Anti-Air Vehicle', category: 'Support', description: 'Veículo anti-aéreo móvel com canhões rápidos', role: 'Defesa Aérea', specialties: ['Anti-Aéreo', 'Velocidade'] },
  { id: 'mrls', name: 'Multiple Rocket Launcher', category: 'Support', description: 'Lançador de foguetes múltiplos para bombardeio em área', role: 'Bombardeio', specialties: ['Área de Efeito', 'Poder de Fogo'] },
  { id: 'tds', name: 'Theater Defense System', category: 'Support', description: 'Sistema de defesa teatral contra ataques aéreos', role: 'Defesa Aérea', specialties: ['Defesa Estratégica', 'Alcance Longo'] },

  // Helicopters
  { id: 'attack-heli', name: 'Attack Helicopter', category: 'Helicopters', description: 'Helicóptero de ataque com armamento pesado', role: 'Ataque Aéreo', specialties: ['Poder de Fogo', 'Mobilidade'] },
  { id: 'gunship', name: 'Helicopter Gunship', category: 'Helicopters', description: 'Helicóptero artilhado para suporte de fogo próximo', role: 'Suporte Próximo', specialties: ['Fogo de Suporte', 'Precisão'] },
  { id: 'asw-heli', name: 'ASW Helicopter', category: 'Helicopters', description: 'Helicóptero anti-submarino para defesa naval', role: 'Anti-Submarino', specialties: ['Defesa Naval', 'Sonar'] },
  { id: 'transport-heli', name: 'Transport Helicopter', category: 'Helicopters', description: 'Helicóptero de transporte para movimento de tropas', role: 'Transporte', specialties: ['Mobilidade', 'Capacidade'] },

  // Fighters
  { id: 'air-sup-fighter', name: 'Air Superiority Fighter', category: 'Fighters', description: 'Caça especializado em combate aéreo dogfight', role: 'Superioridade Aérea', specialties: ['Combate Aéreo', 'Agilidade'] },
  { id: 'strike-fighter', name: 'Strike Fighter', category: 'Fighters', description: 'Caça multirole para ataque terrestre e aéreo', role: 'Ataque Multirole', specialties: ['Versatilidade', 'Poder de Fogo'] },
  { id: 'stealth-asf', name: 'Stealth Air Superiority Fighter', category: 'Fighters', description: 'Caça furtivo de superioridade aérea', role: 'Superioridade Aérea Furtiva', specialties: ['Furtividade', 'Combate Aéreo'] },
  { id: 'stealth-sf', name: 'Stealth Strike Fighter', category: 'Fighters', description: 'Caça furtivo multirole para ataque', role: 'Ataque Furtivo', specialties: ['Furtividade', 'Precisão'] },
  { id: 'naval-asf', name: 'Naval Air Superiority Fighter', category: 'Fighters', description: 'Caça naval para defesa de frotas', role: 'Defesa Naval Aérea', specialties: ['Defesa Naval', 'Combate Aéreo'] },
  { id: 'naval-sf', name: 'Naval Strike Fighter', category: 'Fighters', description: 'Caça naval para ataque a alvos terrestres e navais', role: 'Ataque Naval', specialties: ['Ataque Naval', 'Versatilidade'] },

  // Heavies
  { id: 'heavy-bomber', name: 'Heavy Bomber', category: 'Heavies', description: 'Bombardeiro pesado para bombardeio estratégico', role: 'Bombardeio Estratégico', specialties: ['Poder de Fogo', 'Alcance'] },
  { id: 'stealth-bomber', name: 'Stealth Bomber', category: 'Heavies', description: 'Bombardeiro furtivo para operações encoberto', role: 'Bombardeio Furtivo', specialties: ['Furtividade', 'Poder de Fogo'] },
  { id: 'awacs', name: 'AWACS', category: 'Heavies', description: 'Sistema de alerta e controle aéreo avançado', role: 'Comando e Controle', specialties: ['Detecção', 'Coordenação'] },
  { id: 'naval-awacs', name: 'Naval AWACS', category: 'Heavies', description: 'AWACS naval para operações em frotas', role: 'Comando Naval', specialties: ['Detecção Naval', 'Coordenação'] },
  { id: 'naval-patrol', name: 'Naval Patrol Aircraft', category: 'Heavies', description: 'Aeronave de patrulha naval para reconhecimento', role: 'Patrulha Naval', specialties: ['Reconhecimento', 'Alcance'] },

  // Naval
  { id: 'corvette', name: 'Corvette', category: 'Naval', description: 'Navio de guerra pequeno e rápido', role: 'Combate Naval Leve', specialties: ['Velocidade', 'Mobilidade'] },
  { id: 'frigate', name: 'Frigate', category: 'Naval', description: 'Navio de guerra médio versátil', role: 'Combate Naval Médio', specialties: ['Equilíbrio', 'Versatilidade'] },
  { id: 'destroyer', name: 'Destroyer', category: 'Naval', description: 'Navio de guerra pesado com poder de fogo elevado', role: 'Combate Naval Pesado', specialties: ['Poder de Fogo', 'Defesa'] },
  { id: 'cruiser', name: 'Cruiser', category: 'Naval', description: 'Navio de guerra grande e poderoso', role: 'Combate Naval Estratégico', specialties: ['Poder de Fogo', 'Alcance'] },
  { id: 'carrier', name: 'Aircraft Carrier', category: 'Naval', description: 'Porta-aviões para operações aéreas navais', role: 'Suporte Aéreo Naval', specialties: ['Suporte Aéreo', 'Comando'] },

  // Submarines
  { id: 'attack-sub', name: 'Attack Submarine', category: 'Submarines', description: 'Submarino de ataque com torpedos e mísseis', role: 'Combate Submarino', specialties: ['Furtividade', 'Poder de Fogo'] },
  { id: 'ballistic-sub', name: 'Ballistic Missile Submarine', category: 'Submarines', description: 'Submarino lançador de mísseis balísticos', role: 'Dissuasão Estratégica', specialties: ['Mísseis Balísticos', 'Furtividade'] },

  // Missiles
  { id: 'ballistic-missile', name: 'Ballistic Missile', category: 'Missiles', description: 'Míssil balístico para ataque estratégico', role: 'Ataque Estratégico', specialties: ['Alcance Longo', 'Poder Destrutivo'] },
  { id: 'cruise-missile', name: 'Cruise Missile', category: 'Missiles', description: 'Míssil de cruzeiro para ataque de precisão', role: 'Ataque de Precisão', specialties: ['Precisão', 'Alcance'] },
  { id: 'icbm', name: 'ICBM', category: 'Missiles', description: 'Míssil intercontinental para ataque global', role: 'Ataque Global', specialties: ['Alcance Global', 'Poder Destrutivo'] },
  { id: 'bml', name: 'Ballistic Missile Launcher', category: 'Missiles', description: 'Lançador de mísseis balísticos móvel', role: 'Lançamento de Mísseis', specialties: ['Mobilidade', 'Poder de Fogo'] },

  // Officers
  { id: 'infantry-officer', name: 'Infantry Officer', category: 'Officers', description: 'Oficial especializado em operações de infantaria', role: 'Comando de Infantaria', specialties: ['Bônus Infantaria', 'Liderança'] },
  { id: 'armor-officer', name: 'Armor Officer', category: 'Officers', description: 'Oficial especializado em operações blindadas', role: 'Comando Blindado', specialties: ['Bônus Blindado', 'Tática'] },
  { id: 'air-officer', name: 'Air Officer', category: 'Officers', description: 'Oficial especializado em operações aéreas', role: 'Comando Aéreo', specialties: ['Bônus Aéreo', 'Coordenação'] },
  { id: 'naval-officer', name: 'Naval Officer', category: 'Officers', description: 'Oficial especializado em operações navais', role: 'Comando Naval', specialties: ['Bônus Naval', 'Estratégia'] },

  // Deployables
  { id: 'uav', name: 'UAV', category: 'Deployables', description: 'Veículo aéreo não tripulado para reconhecimento', role: 'Reconhecimento', specialties: ['Detecção', 'Furtividade'] },
  { id: 'elite-railgun', name: 'Elite Railgun', category: 'Deployables', description: 'Canhão de trilho elite para defesa de cidade', role: 'Defesa de Cidade', specialties: ['Poder de Fogo', 'Defesa'] },
];

const categories = [
  { id: 'all', name: 'Todas as Unidades', icon: '🎖️' },
  { id: 'Infantry', name: 'Infantaria', icon: '👥', color: 'bg-blue-900/20 border-blue-700' },
  { id: 'Armored', name: 'Blindados', icon: '🛡️', color: 'bg-green-900/20 border-green-700' },
  { id: 'Support', name: 'Suporte', icon: '🎯', color: 'bg-yellow-900/20 border-yellow-700' },
  { id: 'Helicopters', name: 'Helicópteros', icon: '🚁', color: 'bg-purple-900/20 border-purple-700' },
  { id: 'Fighters', name: 'Caças', icon: '✈️', color: 'bg-red-900/20 border-red-700' },
  { id: 'Heavies', name: 'Pesados', icon: '🛩️', color: 'bg-orange-900/20 border-orange-700' },
  { id: 'Naval', name: 'Naval', icon: '⚓', color: 'bg-cyan-900/20 border-cyan-700' },
  { id: 'Submarines', name: 'Submarinos', icon: '🌊', color: 'bg-indigo-900/20 border-indigo-700' },
  { id: 'Missiles', name: 'Mísseis', icon: '🚀', color: 'bg-red-900/20 border-red-700' },
  { id: 'Officers', name: 'Oficiais', icon: '⭐', color: 'bg-yellow-900/20 border-yellow-700' },
  { id: 'Deployables', name: 'Destacáveis', icon: '🎮', color: 'bg-slate-700/20 border-slate-600' },
];

export default function Unidades() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const filteredUnits = useMemo(() => {
    return units.filter(unit => {
      const matchCategory = selectedCategory === 'all' || unit.category === selectedCategory;
      const matchSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         unit.role.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const toggleUnit = (id: string) => {
    setExpandedUnit(expandedUnit === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">🎖️ Unidades do Jogo</h1>
          <p className="text-slate-400">Conheça todas as unidades disponíveis e suas características</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Buscar unidades por nome ou função..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20"
          />
        </div>

        {/* Category Tabs */}
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                selectedCategory === cat.id
                  ? 'bg-lime-400 text-slate-900'
                  : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-lime-400/50'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="mb-6 text-slate-400 text-sm">
          Mostrando <span className="text-lime-400 font-semibold">{filteredUnits.length}</span> de <span className="text-lime-400 font-semibold">{units.length}</span> unidades
        </div>

        {/* Units Grid */}
        <div className="space-y-3">
          {filteredUnits.length > 0 ? (
            filteredUnits.map(unit => (
              <div
                key={unit.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-slate-600/50 transition-colors"
              >
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-lime-400">{unit.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{unit.role}</p>
                  </div>
                  {expandedUnit === unit.id ? (
                    <ChevronUp className="text-lime-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {expandedUnit === unit.id && (
                  <div className="border-t border-slate-700/50 px-6 py-4 bg-slate-900/30 space-y-4">
                    <div>
                      <p className="text-slate-300">{unit.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-lime-400 font-semibold text-sm mb-2">Categoria</p>
                        <p className="text-slate-300 text-sm">{unit.category}</p>
                      </div>
                      <div>
                        <p className="text-lime-400 font-semibold text-sm mb-2">Função</p>
                        <p className="text-slate-300 text-sm">{unit.role}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-lime-400 font-semibold text-sm mb-2">Especialidades</p>
                      <div className="flex flex-wrap gap-2">
                        {unit.specialties.map(specialty => (
                          <span
                            key={specialty}
                            className="px-3 py-1 bg-lime-400/10 border border-lime-400/30 rounded text-lime-400 text-xs font-semibold"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">Nenhuma unidade encontrada</p>
              <p className="text-slate-500 text-sm mt-2">Tente ajustar sua busca ou filtro</p>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">💡 Dica Estratégica</h3>
          <p className="text-slate-300 mb-3">
            Cada tipo de unidade tem um papel específico no jogo. A chave para o sucesso é criar composições equilibradas que se complementem:
          </p>
          <ul className="text-slate-300 text-sm space-y-2 ml-4">
            <li>• <strong>Infantaria:</strong> Base do seu exército, custo-benefício excelente</li>
            <li>• <strong>Blindados:</strong> Poder de fogo pesado e proteção</li>
            <li>• <strong>Suporte:</strong> Defesa aérea e bombardeio à distância</li>
            <li>• <strong>Aéreo:</strong> Superioridade aérea e ataque rápido</li>
            <li>• <strong>Naval:</strong> Controle do mar e bombardeio costeiro</li>
            <li>• <strong>Mísseis:</strong> Arma estratégica com poder destrutivo massivo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
