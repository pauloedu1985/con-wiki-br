// Wiki Content Data Structure
// All content is organized by sections for easy navigation and search

export interface WikiSection {
  id: string;
  title: string;
  icon: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  content: string;
  keywords: string[];
  relatedSections: string[];
}

export const wikiSections: WikiSection[] = [
  {
    id: 'beginners-guide',
    title: 'Guia para Iniciantes',
    icon: '🎯',
    category: 'beginner',
    description: 'Primeiros passos em Conflict of Nations - conceitos básicos e dicas essenciais',
    keywords: ['iniciante', 'tutorial', 'primeiros passos', 'básico', 'conceitos'],
    relatedSections: ['economy', 'moral', 'anti-aircraft'],
    content: `# 🎯 Guia para Iniciantes - Primeiros Passos em Conflict of Nations

## Bem-vindo a Conflict of Nations!

Conflict of Nations é um jogo de estratégia em tempo real onde você comanda uma nação em conflito com outras potências mundiais.

### O Que é Conflict of Nations?

- Você Comanda uma Nação - Escolha um país e construa seu império
- Gerencia Economia - Produza recursos para financiar sua guerra
- Constrói Exército - Recrute e treine unidades militares
- Compete com Outros - Jogue contra jogadores reais ou IA
- Conquista Territórios - Expanda seu domínio através de conquista

### Seus Primeiros Passos

**Dia 1: Estabeleça Sua Economia**
1. Construa Indústria de Armas - Aumenta produção de recursos
2. Construa Indústria Local - Aumenta produção local
3. Mantenha Defesa Mínima - Não gaste muito em defesa ainda
4. Comece a Recrutar - Recrute algumas unidades básicas

**Dia 2-3: Expanda Seu Território**
1. Ataque Províncias Vizinhas - Expanda seu domínio
2. Construa Mais Edifícios - Continue melhorando economia
3. Recrute Mais Unidades - Aumente seu exército
4. Pesquise Tecnologias - Desbloqueie novas unidades

### Dicas para Iniciantes

- Construa Indústria Primeiro - Economia é mais importante que militar no início
- Não Acumule Recursos - Invista recursos em construções
- Diversifique - Não coloque tudo em um tipo de construção
- Mantenha Moral Alta - Moral afeta produção
- Forme Alianças - Trabalhe com outros jogadores`
  },
  {
    id: 'economy',
    title: 'Economia',
    icon: '💲',
    category: 'beginner',
    description: 'Guia estratégico sobre como construir e manter uma economia saudável',
    keywords: ['economia', 'recursos', 'construção', 'produção', 'investimento'],
    relatedSections: ['resources-formula', 'beginners-guide', 'moral'],
    content: `# 💲 Economia - Guia Estratégico

## O Que é Economia

Economia em Conflict of Nations refere-se a como você gerencia seus recursos e como os investe para crescimento.

### Investimento em Economia vs Militar

**Investir em Economia:**
- Pros: Crescimento a longo prazo, mais recursos
- Contras: Vulnerável a ataques militares, crescimento lento

**Investir em Militar:**
- Pros: Defesa imediata, capacidade de atacar
- Contras: Economia fraca, crescimento limitado

### Tipos de Construções Econômicas

**Indústria de Armas (Arms Industry)**
- Benefício: Aumenta produção de múltiplos recursos
- Custo: Barato a Intermediário
- Tempo: Rápido
- Prioridade: Muito Alta

**Indústria Local (Local Industry)**
- Benefício: Aumenta produção de recursos locais
- Custo: Barato a Intermediário
- Tempo: Rápido
- Prioridade: Alta

### Dicas de Economia

1. Priorize Indústria - Sempre construa indústria antes de defesa
2. Diversifique - Não coloque tudo em um tipo de construção
3. Planeje Ahead - Saiba o que vai construir próximo
4. Monitore Recursos - Não deixe recursos desperdiçarem`
  },
  {
    id: 'moral',
    title: 'Moral e Insurgentes',
    icon: '🎭',
    category: 'intermediate',
    description: 'Sistema de moral, gerenciamento de insurgência e estratégias de controle',
    keywords: ['moral', 'insurgentes', 'felicidade', 'rebelião', 'controle'],
    relatedSections: ['insurgents-data', 'economy', 'anti-aircraft'],
    content: `# 🎭 Moral e Insurgentes - Guia Completo

## Introdução

Moral é um dos sistemas mais importantes em Conflict of Nations. Afeta produção, insurgência e estabilidade geral.

### Como Funciona a Moral

Moral é um percentual que varia de 0% a 100%. Quanto maior a moral, melhor sua economia funciona.

### Fatores que Afetam Moral

**Aumentam Moral:**
- Construir edifícios culturais
- Manter economia forte
- Vencer batalhas
- Ter aliados

**Reduzem Moral:**
- Perder batalhas
- Economia fraca
- Ataques inimigos
- Insurgência

### Gerenciando Moral

1. Mantenha moral acima de 50% - Essencial para economia
2. Construa edifícios culturais - Aumentam moral
3. Evite perdas militares - Reduzem moral
4. Mantenha economia forte - Afeta moral positivamente`
  },
  {
    id: 'anti-aircraft',
    title: 'Defesa Anti-Aérea',
    icon: '☂️',
    category: 'intermediate',
    description: 'Mecanismos de defesa aérea, unidades AA e estratégias de proteção',
    keywords: ['anti-aéreo', 'defesa', 'aviação', 'proteção', 'SAM', 'MAA'],
    relatedSections: ['missiles', 'damage-calculation', 'unit-titles'],
    content: `# ☂️ Defesa Anti-Aérea - Guia Completo

## Introdução

A defesa anti-aérea (AA) é um dos mecanismos mais importantes em Conflict of Nations.

### O Que é Anti-Aéreo

Anti-Aéreo (AA) é uma das mecânicas mais críticas do jogo devido à frequência de ataques aéreos e de mísseis.

### Unidades com Capacidade Anti-Aérea

**Mobile Anti-Air Vehicle (MAA)**
- Efetividade contra Asa Fixa: Ok
- Efetividade contra Asa Rotativa: Ok
- Efetividade contra Mísseis: Ruim
- Custo: Baixo a Médio

**Surface-to-Air Missile Launcher (SAM)**
- Efetividade contra Asa Fixa: Excelente
- Efetividade contra Asa Rotativa: Não efetivo
- Efetividade contra Mísseis: Bom
- Custo: Médio-Alto

**Fighter Jet**
- Efetividade contra Mísseis: Excelente
- Custo: Alto
- Especialização: Única unidade confiável para defender contra mísseis

### Estratégias de Defesa

1. Comece com MAA - Mobile Anti-Air Vehicles são acessíveis
2. Transição para SAM - Conforme progride, comece a construir SAM
3. Use Fighter Jets - Para defesa contra mísseis avançados`
  },
  {
    id: 'missiles',
    title: 'Mísseis',
    icon: '🚀',
    category: 'intermediate',
    description: 'Tipos de mísseis, warheads, lançamento e estratégias de defesa',
    keywords: ['mísseis', 'warhead', 'nuclear', 'químico', 'convencional', 'ICBM'],
    relatedSections: ['anti-aircraft', 'damage-calculation', 'victory-points'],
    content: `# 🚀 Mísseis - Guia Completo

## Introdução

Mísseis são uma das armas mais poderosas em Conflict of Nations, oferecendo capacidade de ataque de longo alcance.

### Como Lançar Mísseis

Para lançar um míssil, você precisa de três componentes essenciais:

1. **Warhead como Munição Consumível** - O warhead é consumido quando você lança o míssil
2. **Pesquisa de Mísseis** - Você deve ter pesquisado a tecnologia apropriada
3. **Unidade com Capacidade de Lançamento** - Você precisa de uma unidade que tenha a capacidade

### Tipos de Warheads

**Warhead Convencional**
- Efetividade: Efetivo contra armadura de superfície
- Alvo Primário: Unidades militares e estruturas
- Contaminação: Nenhuma

**Warhead Químico**
- Efetividade: Efetivo contra alvos suaves
- Alvo Primário: Unidades leves e edifícios civis
- Contaminação: Sim - Causa contaminação na área

**Warhead Nuclear**
- Efetividade: Destrói tudo na zona de explosão
- Alvo Primário: Qualquer coisa na área
- Contaminação: Sim - Causa contaminação severa

### Tipos de Mísseis

**Cruise Missile (CM)**
- Alcance: 200-300
- Capacidade: Atingir unidades e províncias
- Acesso: Fácil

**Ballistic Missile (BM)**
- Alcance: Médio
- Capacidade: Atingir alvos em distância média
- Acesso: Requer pesquisa avançada

**Intercontinental Ballistic Missile (ICBM)**
- Alcance: Extremamente longo
- Capacidade: Atingir qualquer lugar no mapa
- Acesso: Requer pesquisa muito avançada`
  },
  {
    id: 'damage-distribution',
    title: 'Distribuição de Dano (Echelon)',
    icon: '📊',
    category: 'advanced',
    description: 'Sistema de pesos de unidades e como o dano é distribuído em stacks',
    keywords: ['dano', 'echelon', 'weight', 'distribuição', 'stack', 'composição'],
    relatedSections: ['damage-calculation', 'unit-titles', 'anti-aircraft'],
    content: `# 📊 Distribuição de Dano (Echelon) - Guia Completo

## Introdução

O sistema de distribuição de dano em Conflict of Nations é um mecanismo crucial que determina como o dano é dividido entre as unidades em um stack.

### O Que é Echelon (Weight/Distribuição de Peso)

Echelon é um valor numérico atribuído a cada unidade no jogo. Este valor determina como o dano recebido é distribuído entre as unidades em um stack.

### Conceito Fundamental

Quando um stack de unidades recebe dano, esse dano não é distribuído igualmente. Em vez disso, o dano é distribuído proporcionalmente ao peso de cada unidade.

### Exemplo Prático

Stack com:
- 1x ASF (Asa Fixa) com peso 1 x 10 = 10
- 4x Strike Fighter com peso 4 x 5 = 20
- Peso total: 30

Se o stack receber 30 pontos de dano:
- ASF receberá: 100% × (10/30) = 33.3% do dano
- Strike Fighter receberá: 100% × (20/30) = 66.7% do dano

### Estratégias de Composição

1. **Proteção de Unidades Leves** - Coloque unidades pesadas na frente
2. **Sacrifício Estratégico** - Use unidades descartáveis para absorver dano
3. **Equilíbrio Ofensivo-Defensivo** - Misture tipos de unidades`
  },
  {
    id: 'damage-calculation',
    title: 'Cálculo Completo de Dano',
    icon: '🎰',
    category: 'advanced',
    description: 'Fórmulas técnicas de cálculo de dano, modificadores e exemplos práticos',
    keywords: ['cálculo', 'dano', 'fórmula', 'modificador', 'armadura', 'RNG'],
    relatedSections: ['damage-distribution', 'anti-aircraft', 'missiles'],
    content: `# 🎰 Cálculo Completo de Dano - Guia Técnico

## Introdução

O sistema de cálculo de dano em Conflict of Nations é complexo e envolve múltiplos fatores.

### Processo de Cálculo de Dano - Passo a Passo

O cálculo de dano segue um processo estruturado:

1. **Distribuição de Dano** - O dano é distribuído entre as unidades baseado em seus pesos
2. **Conversão para Tipo de Armadura** - O dano é convertido para o tipo apropriado
3. **Aplicação de Modificadores** - Modificadores são aplicados baseado em vários fatores
4. **Aplicação de RNG** - Um fator de randomização é aplicado

### Exemplo Prático Completo

Um stack de:
- 5x Motorized Infantry (75 HP total, 15 DDW)
- 5x Combat Recon Vehicle (85 HP total, 10 DDW)

Atacado por um Lv1 Gunship Helicopter com 7 Soft e 2 Hard

**Passo 1: Distribuição de Dano**
- Peso total: 25
- Infantaria: 15/25 = 60%
- Recon: 10/25 = 40%

**Passo 2: Dano Recebido**
- Infantaria: 60% × 7 = 4.2
- Recon: 40% × 7 = 2.8

### Fatores que Afetam o Dano

- **ATK (Ataque)** - Valor de ataque de uma unidade
- **DEF (Defesa)** - Valor de defesa de uma unidade
- **HP (Health Points)** - HP total de uma unidade
- **Alcance** - Distância pode afetar dano`
  },
  {
    id: 'resources-formula',
    title: 'Fórmula de Recursos',
    icon: '🧮',
    category: 'advanced',
    description: 'Fórmulas matemáticas de produção de recursos, edifícios e modificadores',
    keywords: ['recursos', 'fórmula', 'produção', 'edifícios', 'população', 'moral'],
    relatedSections: ['economy', 'moral', 'damage-calculation'],
    content: `# 🧮 Fórmula de Recursos - Guia Técnico

## Introdução

Compreender como os recursos são produzidos em Conflict of Nations é fundamental para otimizar sua economia.

### Produção de Recursos em Cidades

A produção de recursos em uma cidade é determinada por vários parâmetros:

- **Tipo de Recurso** - Cada recurso tem uma produção base diferente
- **Edifícios** - Estruturas que aumentam produção
- **População** - Afeta a produção total
- **Moral** - Influencia a eficiência produtiva

### Tipos de Recursos Base

| Recurso | Produção Base |
|---------|--------------|
| Petróleo | 2100 |
| Minério | 1800 |
| Urânio | 2100 |
| Comida | 1600 |
| Ouro | 1200 |

### Influência da População

| Nível Populacional | Modificador |
|------------------|-------------|
| 1 | -80% |
| 5 | 0% |
| 10 | +25% |

### Influência da Moral

A moral afeta a produção através de um multiplicador:
Multiplicador de Moral = (Moral × 0.8) / 100 + 0.25

### Cálculo Completo de Produção

Produção Final = Produção Base × (1 + Modificador de Edifícios) × (1 + Modificador de População) × Multiplicador de Moral`
  },
  {
    id: 'unit-titles',
    title: 'Prioridade de Títulos de Unidades',
    icon: '📄',
    category: 'intermediate',
    description: 'Sistema de títulos de unidades, formações e prioridades de stack',
    keywords: ['títulos', 'unidades', 'formação', 'prioridade', 'stack', 'sufixo'],
    relatedSections: ['damage-distribution', 'anti-aircraft', 'missiles'],
    content: `# 📄 Prioridade de Títulos de Unidades - Guia Completo

## Introdução

Em Conflict of Nations, quando você possui múltiplas unidades em um stack, o título do stack é determinado pela unidade com maior prioridade.

### Como Funciona o Sistema de Títulos

Quando você agrupa múltiplas unidades diferentes em um stack, o jogo precisa decidir qual título exibir para o grupo.

A unidade com a **maior prioridade** no stack determina o título do stack.

### Regra Básica

Se você tem 1-2 unidades no stack, será considerada uma **formação pequena**. Se tiver mais unidades, será considerada uma **formação grande**.

### Formações e Sufixos

**Unidades Terrestres (Ground)**
| Tamanho | Sufixo |
|--------|--------|
| Pequeno | Battalion |
| Grande | Division |

**Unidades Aéreas (Air)**
| Tamanho | Sufixo |
|--------|--------|
| Pequeno | Squadron |
| Grande | Wing |

**Unidades Navais (Naval)**
| Tamanho | Sufixo |
|--------|--------|
| Pequeno | Task Force |
| Grande | Fleet |

### Estratégias de Nomeação

1. **Organização por Tipo** - Agrupe unidades do mesmo tipo
2. **Formações Mistas** - Quando você mistura tipos, a prioridade determina o nome
3. **Nomes Customizados** - Se uma unidade tem um nome customizado, o sistema pode usar uma prioridade diferente`
  },
  {
    id: 'victory-points',
    title: 'Pontos de Vitória',
    icon: '🏆',
    category: 'intermediate',
    description: 'Requisitos de vitória, mapas e estratégias para ganhar pontos de vitória',
    keywords: ['vitória', 'pontos', 'VP', 'mapas', 'requisitos', 'ganhar'],
    relatedSections: ['economy', 'missiles', 'moral'],
    content: `# 🏆 Pontos de Vitória - Guia Completo

## Introdução

Pontos de Vitória (VP) são a métrica principal para determinar o vencedor em Conflict of Nations.

### O Que São Pontos de Vitória

Pontos de Vitória representam o progresso em direção à vitória em uma partida. Cada mapa tem um número específico de VP necessários para ganhar.

### Mapas Disponíveis e Requisitos de VP

**Mapas de Pequeno Porte**
- Flashpoint Europe (30): Solo 1.500 | Dupla 1.845 | Trio 2.250
- BattleGround USA (32): Solo 1.700 | Dupla 2.091 | Trio 2.250

**Mapas de Médio Porte**
- World Divided (72): Solo 3.600 | Dupla 5.040 | Trio 6.480
- World War 3 (64): Solo 1.850 | Dupla 2.960 | Trio 4.255

**Mapas de Grande Porte**
- WWZ (100): Solo 2.250 | Dupla 5.000 | Trio 7.000
- Overkill (100): Solo 3.700 | Dupla 6.350 | Trio 8.050

### Como Ganhar Pontos de Vitória

1. **Controlar Províncias** - Cada província controlada contribui para VP
2. **Destruir Inimigos** - Derrotar inimigos pode gerar VP
3. **Completar Objetivos** - Alguns mapas têm objetivos especiais
4. **Manter Controle** - VP aumenta passivamente enquanto você controla territórios`
  },
  {
    id: 'insurgents-data',
    title: 'Dados de Insurgentes',
    icon: '💣',
    category: 'intermediate',
    description: 'Comportamento de insurgentes, tipos e estratégias de controle',
    keywords: ['insurgentes', 'rebeldes', 'controle', 'comportamento', 'combate', 'dados'],
    relatedSections: ['moral', 'anti-aircraft', 'damage-calculation'],
    content: `# 💣 Dados de Insurgentes - Guia Técnico

## Introdução

Insurgentes são unidades especiais que aparecem em mapas e representam forças rebeldes.

### Comportamento Geral de Insurgentes

**Regras de Movimento**
- Evitam Água - Insurgentes não atravessam corpos de água
- Encontram Caminhos - Se não conseguem atravessar água, encontram o caminho mais curto alternativo
- Movimento Sincronizado - Todos os insurgentes recebem ordens no mesmo cronograma

### Tipos de Insurgentes

**Insurgente Rioter (Saqueador)**
- HP Máximo: 18
- Tipo de Facção: Insurgência
- Doutrina: Doutrina Oriental
- Assinatura: Alta assinatura no solo

**Características:**
- Pode desembarcar sem porto naval
- Não sofre penalidade de -1/3 de velocidade em território hostil
- Não é muito agressivo
- Ignora entrincheiramento

### Estratégias de Controle

1. **Prevenção** - Mantenha moral alta
2. **Supressão** - Use artilharia para máxima efetividade
3. **Eliminação** - Trabalhe com aliados para limpar áreas

### Dicas de Combate

- Use Artilharia - Tem 3.0x de efetividade
- Evite Blindados - Apenas 0.5x de efetividade
- Evite Aviação - Apenas 0.1x de efetividade
- Infantaria é Boa - 1.0x de efetividade, barata`
  }
];

// Helper function to get section by ID
export const getSectionById = (id: string): WikiSection | undefined => {
  return wikiSections.find(section => section.id === id);
};

// Helper function to search sections
export const searchSections = (query: string): WikiSection[] => {
  const lowerQuery = query.toLowerCase();
  return wikiSections.filter(section =>
    section.title.toLowerCase().includes(lowerQuery) ||
    section.description.toLowerCase().includes(lowerQuery) ||
    section.keywords.some(keyword => keyword.includes(lowerQuery))
  );
};

// Helper function to get sections by category
export const getSectionsByCategory = (category: 'beginner' | 'intermediate' | 'advanced'): WikiSection[] => {
  return wikiSections.filter(section => section.category === category);
};

// Get all categories
export const getAllCategories = () => {
  return ['beginner', 'intermediate', 'advanced'];
};

// Get section navigation
export const getNextSection = (currentId: string): WikiSection | undefined => {
  const currentIndex = wikiSections.findIndex(s => s.id === currentId);
  if (currentIndex < wikiSections.length - 1) {
    return wikiSections[currentIndex + 1];
  }
  return undefined;
};

export const getPreviousSection = (currentId: string): WikiSection | undefined => {
  const currentIndex = wikiSections.findIndex(s => s.id === currentId);
  if (currentIndex > 0) {
    return wikiSections[currentIndex - 1];
  }
  return undefined;
};
