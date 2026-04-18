import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Country {
  id: string;
  name: string;
  flag: string;
  region: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  strategy: string;
}

const countries: Country[] = [
  {
    id: 'usa',
    name: 'Estados Unidos',
    flag: '🇺🇸',
    region: 'América do Norte',
    description: 'Superpotência global com economia forte e capacidades militares avançadas.',
    strengths: ['Economia forte', 'Tecnologia avançada', 'Poder aéreo', 'Recursos abundantes'],
    weaknesses: ['Custo de manutenção alto', 'Expansão territorial limitada'],
    strategy: 'Foque em tecnologia avançada e poder aéreo. Mantenha economia forte para sustentar exército caro.'
  },
  {
    id: 'russia',
    name: 'Rússia',
    flag: '🇷🇺',
    region: 'Europa/Ásia',
    description: 'Potência militar com vasto território e recursos naturais abundantes.',
    strengths: ['Território vasto', 'Recursos naturais', 'Poder terrestre', 'Defesa robusta'],
    weaknesses: ['Economia mais fraca', 'Tecnologia inferior'],
    strategy: 'Use seu vasto território para defesa. Foque em poder terrestre e recursos naturais para economia.'
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    region: 'Ásia',
    description: 'Potência econômica emergente com população grande e crescimento rápido.',
    strengths: ['Economia em crescimento', 'População grande', 'Produção eficiente', 'Flexibilidade'],
    weaknesses: ['Tecnologia em desenvolvimento', 'Poder militar moderado'],
    strategy: 'Aproveite economia eficiente para crescimento rápido. Foque em expansão territorial e economia.'
  },
  {
    id: 'germany',
    name: 'Alemanha',
    flag: '🇩🇪',
    region: 'Europa',
    description: 'Potência industrial europeia com tecnologia avançada e economia forte.',
    strengths: ['Tecnologia avançada', 'Indústria forte', 'Eficiência', 'Poder militar equilibrado'],
    weaknesses: ['Território limitado', 'Recursos moderados'],
    strategy: 'Use tecnologia para vantagem. Foque em eficiência e poder militar equilibrado. Forme alianças.'
  },
  {
    id: 'france',
    name: 'França',
    flag: '🇫🇷',
    region: 'Europa',
    description: 'Potência europeia com influência global e capacidades militares equilibradas.',
    strengths: ['Influência diplomática', 'Poder militar equilibrado', 'Tecnologia', 'Recursos moderados'],
    weaknesses: ['Território limitado', 'Economia moderada'],
    strategy: 'Use influência diplomática para alianças. Mantenha poder militar equilibrado e defesa forte.'
  },
  {
    id: 'uk',
    name: 'Reino Unido',
    flag: '🇬🇧',
    region: 'Europa',
    description: 'Potência naval histórica com economia forte e tecnologia avançada.',
    strengths: ['Poder naval', 'Tecnologia avançada', 'Economia forte', 'Influência global'],
    weaknesses: ['Território limitado', 'Isolamento geográfico'],
    strategy: 'Aproveite poder naval para controle de mares. Foque em tecnologia e economia forte.'
  },
  {
    id: 'japan',
    name: 'Japão',
    flag: '🇯🇵',
    region: 'Ásia',
    description: 'Potência tecnológica com economia avançada e poder naval forte.',
    strengths: ['Tecnologia de ponta', 'Economia avançada', 'Poder naval', 'Eficiência'],
    weaknesses: ['Território limitado', 'Recursos naturais limitados'],
    strategy: 'Use tecnologia para vantagem. Foque em poder naval e economia eficiente. Busque recursos externos.'
  },
  {
    id: 'india',
    name: 'Índia',
    flag: '🇮🇳',
    region: 'Ásia',
    description: 'Potência emergente com população grande, economia em crescimento e recursos naturais.',
    strengths: ['População grande', 'Economia em crescimento', 'Recursos naturais', 'Flexibilidade'],
    weaknesses: ['Tecnologia em desenvolvimento', 'Poder militar em desenvolvimento'],
    strategy: 'Aproveite população grande para crescimento. Foque em economia e expansão territorial gradual.'
  },
  {
    id: 'brazil',
    name: 'Brasil',
    flag: '🇧🇷',
    region: 'América do Sul',
    description: 'Potência regional com economia forte, recursos naturais abundantes e população grande.',
    strengths: ['Recursos naturais abundantes', 'Economia em crescimento', 'População grande', 'Flexibilidade'],
    weaknesses: ['Tecnologia moderada', 'Poder militar moderado'],
    strategy: 'Use recursos naturais para economia forte. Foque em crescimento gradual e poder regional.'
  },
  {
    id: 'mexico',
    name: 'México',
    flag: '🇲🇽',
    region: 'América do Norte',
    description: 'Potência regional com economia moderada, posição geográfica estratégica e recursos.',
    strengths: ['Posição geográfica estratégica', 'Recursos naturais', 'Economia moderada', 'Proximidade a superpotências'],
    weaknesses: ['Poder militar limitado', 'Tecnologia moderada'],
    strategy: 'Use posição geográfica para vantagem. Forme alianças com vizinhos. Foque em defesa e economia.'
  },
  {
    id: 'canada',
    name: 'Canadá',
    flag: '🇨🇦',
    region: 'América do Norte',
    description: 'Potência desenvolvida com economia forte, recursos naturais abundantes e tecnologia avançada.',
    strengths: ['Recursos naturais abundantes', 'Economia forte', 'Tecnologia avançada', 'Estabilidade'],
    weaknesses: ['Território vasto mas população pequena', 'Clima desafiador'],
    strategy: 'Aproveite recursos naturais para economia. Use tecnologia para vantagem. Mantenha alianças.'
  },
  {
    id: 'australia',
    name: 'Austrália',
    flag: '🇦🇺',
    region: 'Oceania',
    description: 'Potência regional desenvolvida com economia forte, recursos naturais e isolamento geográfico.',
    strengths: ['Recursos naturais abundantes', 'Economia forte', 'Tecnologia avançada', 'Isolamento defensivo'],
    weaknesses: ['Distância de outros continentes', 'Poder militar limitado'],
    strategy: 'Use isolamento para defesa. Aproveite recursos naturais. Foque em poder naval e alianças regionais.'
  },
  {
    id: 'southkorea',
    name: 'Coreia do Sul',
    flag: '🇰🇷',
    region: 'Ásia',
    description: 'Potência tecnológica com economia avançada, poder militar forte e localização estratégica.',
    strengths: ['Tecnologia de ponta', 'Economia avançada', 'Poder militar forte', 'Eficiência'],
    weaknesses: ['Território limitado', 'Ameaça do norte'],
    strategy: 'Use tecnologia para vantagem. Mantenha defesa forte. Foque em economia e poder militar equilibrado.'
  },
  {
    id: 'iran',
    name: 'Irã',
    flag: '🇮🇷',
    region: 'Oriente Médio',
    description: 'Potência regional com recursos naturais abundantes, localização estratégica e poder militar.',
    strengths: ['Recursos naturais (petróleo)', 'Localização estratégica', 'Poder militar', 'Resistência'],
    weaknesses: ['Tecnologia limitada', 'Isolamento internacional'],
    strategy: 'Use recursos naturais para economia. Mantenha defesa forte. Foque em poder regional e alianças.'
  },
  {
    id: 'egypt',
    name: 'Egito',
    flag: '🇪🇬',
    region: 'África/Oriente Médio',
    description: 'Potência regional africana com localização estratégica, população grande e poder militar.',
    strengths: ['Localização estratégica (Suez)', 'População grande', 'Poder militar regional', 'Influência africana'],
    weaknesses: ['Economia moderada', 'Tecnologia moderada'],
    strategy: 'Use localização estratégica para vantagem. Foque em poder regional e influência africana.'
  },
  {
    id: 'southafrica',
    name: 'África do Sul',
    flag: '🇿🇦',
    region: 'África',
    description: 'Potência regional africana com economia desenvolvida, recursos naturais e poder militar.',
    strengths: ['Economia desenvolvida', 'Recursos naturais abundantes', 'Poder militar regional', 'Influência africana'],
    weaknesses: ['Território limitado', 'Desigualdade econômica'],
    strategy: 'Use recursos naturais para economia. Mantenha poder militar regional. Foque em influência africana.'
  },
  {
    id: 'turkey',
    name: 'Turquia',
    flag: '🇹🇷',
    region: 'Europa/Ásia',
    description: 'Potência regional com localização estratégica, economia moderada e poder militar forte.',
    strengths: ['Localização estratégica (Estreito de Bósforo)', 'Poder militar forte', 'Influência regional', 'Economia em crescimento'],
    weaknesses: ['Tecnologia moderada', 'Recursos naturais limitados'],
    strategy: 'Use localização estratégica. Mantenha poder militar forte. Foque em influência regional.'
  },
  {
    id: 'israel',
    name: 'Israel',
    flag: '🇮🇱',
    region: 'Oriente Médio',
    description: 'Potência regional com tecnologia avançada, poder militar forte e localização estratégica.',
    strengths: ['Tecnologia de ponta', 'Poder militar forte', 'Eficiência', 'Inovação'],
    weaknesses: ['Território muito limitado', 'Recursos naturais limitados'],
    strategy: 'Use tecnologia para vantagem decisiva. Mantenha poder militar forte. Foque em defesa e alianças.'
  }
];

export default function Paises() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = Array.from(new Set(countries.map(c => c.region)));

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         country.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = !selectedRegion || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">🌍 Países Jogáveis</h1>
          <p className="text-slate-400">Escolha sua nação e domine o mundo</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 backdrop-blur-sm sticky top-0 z-30">
        <div className="container py-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
              <Input
                placeholder="Buscar país (ex: Brasil, Japão, USA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-lime-400 placeholder:text-slate-500"
              />
            </div>

            {/* Region Filters */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedRegion(null)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  !selectedRegion
                    ? 'bg-lime-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Todas Regiões
              </button>
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedRegion === region
                      ? 'bg-lime-600 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-lime-400/50 transition-colors"
            >
              {/* Country Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-lime-400">{country.name}</h3>
                  <p className="text-xs text-slate-400">{country.region}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-4">{country.description}</p>

              {/* Strengths */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-lime-400 mb-2">✅ Pontos Fortes</h4>
                <ul className="text-xs text-slate-300 space-y-1">
                  {country.strengths.map((strength, idx) => (
                    <li key={idx}>• {strength}</li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">⚠️ Fraquezas</h4>
                <ul className="text-xs text-slate-300 space-y-1">
                  {country.weaknesses.map((weakness, idx) => (
                    <li key={idx}>• {weakness}</li>
                  ))}
                </ul>
              </div>

              {/* Strategy */}
              <div className="bg-slate-900/50 border border-slate-700/50 rounded p-3">
                <h4 className="text-sm font-semibold text-lime-400 mb-2">🎯 Estratégia Recomendada</h4>
                <p className="text-xs text-slate-300">{country.strategy}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Nenhum país encontrado para sua busca.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 pt-12 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">{countries.length}</div>
              <div className="text-sm text-slate-400 mt-2">Países Disponíveis</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">{regions.length}</div>
              <div className="text-sm text-slate-400 mt-2">Regiões do Mundo</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">∞</div>
              <div className="text-sm text-slate-400 mt-2">Possibilidades de Jogo</div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">Como Escolher Seu País</h3>
          <p className="text-slate-300 mb-4">
            Cada país tem seus próprios pontos fortes e fraquezas. Considere:
          </p>
          <ul className="text-slate-300 space-y-2">
            <li>• <strong>Seu Estilo de Jogo:</strong> Prefere economia forte ou poder militar?</li>
            <li>• <strong>Localização Estratégica:</strong> Alguns países têm vantagens geográficas</li>
            <li>• <strong>Recursos Naturais:</strong> Importantes para economia a longo prazo</li>
            <li>• <strong>Tecnologia:</strong> Alguns países têm acesso a tecnologia mais avançada</li>
            <li>• <strong>Alianças:</strong> Considere a localização de aliados potenciais</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
