import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Economia',
    question: 'Por que minha economia não cresce?',
    answer: 'Sua economia depende de vários fatores: construções de indústria, população, moral e edifícios especializados. Certifique-se de que você está construindo Indústria de Armas e Indústria Local regularmente. Também verifique se sua moral está acima de 50%, pois moral baixa reduz significativamente a produção de recursos.'
  },
  {
    id: 'faq-2',
    category: 'Economia',
    question: 'Qual é a melhor estratégia de construção no início do jogo?',
    answer: 'No início, priorize: 1) Indústria de Armas (melhor retorno), 2) Indústria Local (diversificação), 3) Defesa mínima (bunkers básicos). Evite construir muita defesa cedo - foque em economia. Conforme progride, aumente investimento em defesa e expansão militar.'
  },
  {
    id: 'faq-3',
    category: 'Economia',
    question: 'Como faço para não desperdiçar recursos?',
    answer: 'Sempre invista seus recursos em construções. Não deixe recursos acumularem - eles podem ser perdidos em ataques ou simplesmente desperdiçados. Planeje suas construções com antecedência e mantenha um fluxo constante de investimento.'
  },
  {
    id: 'faq-4',
    category: 'Moral',
    question: 'Como aumentar moral rapidamente?',
    answer: 'Moral aumenta através de: 1) Construções culturais, 2) Economia forte, 3) Vitórias militares. Para aumentar rapidamente, construa edifícios culturais e mantenha sua economia saudável. Evite perdas militares, pois reduzem moral significativamente.'
  },
  {
    id: 'faq-5',
    category: 'Moral',
    question: 'O que acontece se minha moral ficar muito baixa?',
    answer: 'Com moral baixa: 1) Produção de recursos diminui drasticamente, 2) Insurgentes começam a aparecer, 3) Sua economia enfraquece. Se moral cair abaixo de 30%, você terá sérios problemas. Sempre mantenha moral acima de 50% para uma economia saudável.'
  },
  {
    id: 'faq-6',
    category: 'Militar',
    question: 'Qual é a melhor composição de stack?',
    answer: 'Depende da situação, mas geralmente: 1) Para ataque: misture infantaria, tanques e artilharia, 2) Para defesa: use mais defesa aérea e bunkers, 3) Considere o peso das unidades (Echelon) para distribuição de dano. Adapte conforme o inimigo.'
  },
  {
    id: 'faq-7',
    category: 'Militar',
    question: 'Como faço para defender contra ataques aéreos?',
    answer: 'Use defesa anti-aérea: 1) Mobile Anti-Air (MAA) - barato e acessível, 2) Surface-to-Air Missile (SAM) - mais efetivo contra aviões, 3) Fighter Jets - excelente contra mísseis. Combine diferentes tipos para cobertura completa. Mantenha defesa AA em áreas importantes.'
  },
  {
    id: 'faq-8',
    category: 'Militar',
    question: 'Quando devo usar mísseis?',
    answer: 'Mísseis são poderosos mas caros. Use quando: 1) Precisa destruir alvos específicos de longo alcance, 2) Tem economia forte para sustentar, 3) Quer impacto psicológico. Cuidado: mísseis podem ser interceptados por defesa aérea adequada. Planeje bem antes de usar.'
  },
  {
    id: 'faq-9',
    category: 'Estratégia',
    question: 'Devo focar em economia ou militar?',
    answer: 'Equilíbrio é chave: 1) Início: 70% economia, 30% militar, 2) Meio do jogo: 50% economia, 50% militar, 3) Final: 30% economia, 70% militar. Adapte conforme sua situação. Uma economia forte permite militar forte.'
  },
  {
    id: 'faq-10',
    category: 'Estratégia',
    question: 'Como ganhar pontos de vitória rapidamente?',
    answer: 'Pontos de vitória vêm de: 1) Controlar províncias (principal fonte), 2) Destruir inimigos, 3) Completar objetivos especiais. Expanda seu território gradualmente enquanto mantém defesa. Não negligencie economia - ela financia sua expansão.'
  },
  {
    id: 'faq-11',
    category: 'Estratégia',
    question: 'Devo formar alianças?',
    answer: 'Sim! Alianças são muito importantes: 1) Proteção contra inimigos comuns, 2) Coordenação de ataques, 3) Apoio mútuo. Mas cuidado: escolha aliados confiáveis. Traições acontecem. Mantenha comunicação clara e objetivos alinhados.'
  },
  {
    id: 'faq-12',
    category: 'Insurgentes',
    question: 'Como controlar insurgentes?',
    answer: 'Insurgentes aparecem com moral baixa. Para controlar: 1) Mantenha moral acima de 50%, 2) Use artilharia (3.0x efetividade), 3) Patrulhe regularmente, 4) Bloqueie spread para outras províncias. Prevenção é melhor que cura - mantenha moral alta.'
  },
  {
    id: 'faq-13',
    category: 'Dano',
    question: 'Como funciona o cálculo de dano?',
    answer: 'Dano é calculado considerando: 1) ATK (ataque) vs DEF (defesa), 2) Tipo de dano (soft/hard), 3) Distribuição de peso (Echelon), 4) Modificadores de terreno, 5) Fator aleatório. Unidades mais pesadas absorvem mais dano. Leia o guia de Cálculo de Dano para detalhes completos.'
  },
  {
    id: 'faq-14',
    category: 'Dano',
    question: 'O que é Echelon/Weight?',
    answer: 'Echelon (peso) determina como dano é distribuído em um stack. Unidades mais pesadas absorvem mais dano. Exemplo: se você tem infantaria (peso 1) e tanques (peso 5), os tanques absorvem mais dano. Use isso estrategicamente para proteger unidades importantes.'
  },
  {
    id: 'faq-15',
    category: 'Iniciante',
    question: 'Qual é o primeiro passo quando começo uma partida?',
    answer: 'Primeiros passos: 1) Construa Indústria de Armas, 2) Construa Indústria Local, 3) Recrute infantaria básica, 4) Explore o mapa, 5) Planeje expansão. Não gaste muito em defesa ainda. Foco em economia nos primeiros dias.'
  },
  {
    id: 'faq-16',
    category: 'Iniciante',
    question: 'Quanto tempo leva uma partida?',
    answer: 'Depende do mapa e número de jogadores: 1) Mapas pequenos: 1-2 semanas, 2) Mapas médios: 2-4 semanas, 3) Mapas grandes: 4+ semanas. Tempo real, não tempo de jogo. Você pode jogar em seu próprio ritmo, mas ataques acontecem em tempo real.'
  },
  {
    id: 'faq-17',
    category: 'Iniciante',
    question: 'Posso jogar sozinho ou preciso de aliados?',
    answer: 'Você pode jogar sozinho, mas é mais difícil. Com aliados: 1) Proteção contra múltiplos inimigos, 2) Coordenação de ataques, 3) Apoio mútuo. Recomendamos formar alianças, especialmente em mapas grandes. Mas escolha aliados confiáveis.'
  },
  {
    id: 'faq-18',
    category: 'Técnico',
    question: 'Como faço para melhorar meu desempenho?',
    answer: 'Dicas para melhorar: 1) Estude os guias do wiki, 2) Observe jogadores experientes, 3) Jogue várias partidas, 4) Adapte sua estratégia conforme aprende, 5) Mantenha comunicação com aliados. Cada partida é uma lição.'
  },
  {
    id: 'faq-19',
    category: 'Técnico',
    question: 'Quais são os erros mais comuns?',
    answer: 'Erros comuns: 1) Negligenciar economia, 2) Expandir muito rápido sem defesa, 3) Não formar alianças, 4) Ignorar pesquisa, 5) Deixar recursos desperdiçarem, 6) Negligenciar moral. Evite esses e você terá muito mais sucesso.'
  },
  {
    id: 'faq-20',
    category: 'Técnico',
    question: 'Como faço para recuperar de uma derrota?',
    answer: 'Se estiver perdendo: 1) Avalie sua situação, 2) Forme alianças defensivas, 3) Foque em economia para recuperação, 4) Mantenha moral alta, 5) Não desista cedo - viradas acontecem. Aprenda com o erro e aplique na próxima partida.'
  }
];

const categories = ['Todos', 'Economia', 'Moral', 'Militar', 'Estratégia', 'Insurgentes', 'Dano', 'Iniciante', 'Técnico'];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredItems = selectedCategory === 'Todos' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">❓ Perguntas Frequentes</h1>
          <p className="text-slate-400">Respostas para as dúvidas mais comuns de jogadores</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 backdrop-blur-sm sticky top-0 z-30">
        <div className="container py-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-lime-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-lime-400/50 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="text-left">
                  <div className="text-xs text-lime-400 font-semibold mb-1">{item.category}</div>
                  <div className="text-lg font-semibold text-slate-100">{item.question}</div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-lime-400 flex-shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50">
                  <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 pt-12 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">{faqItems.length}</div>
              <div className="text-sm text-slate-400 mt-2">Perguntas Respondidas</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">{categories.length - 1}</div>
              <div className="text-sm text-slate-400 mt-2">Categorias</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">100%</div>
              <div className="text-sm text-slate-400 mt-2">Respostas Úteis</div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-4">Não encontrou sua pergunta?</h3>
          <p className="text-slate-300 mb-4">
            Se sua dúvida não está respondida aqui, consulte o Wiki completo com guias detalhados sobre cada aspecto do jogo. Você também pode encontrar respostas em:
          </p>
          <ul className="text-slate-300 space-y-2">
            <li>• <strong>Wiki Completo:</strong> Guias detalhados sobre economia, militar, dano e muito mais</li>
            <li>• <strong>Comunidade:</strong> Junte-se a outros jogadores brasileiros para trocar experiências</li>
            <li>• <strong>Calculadora:</strong> Use ferramentas interativas para calcular dano e recursos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
