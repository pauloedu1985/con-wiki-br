import React, { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { wikiSections, searchSections, getSectionsByCategory } from '@/data/wikiContent';

export default function WikiIndex() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredSections = useMemo(() => {
    let results = wikiSections;

    // Filter by search query
    if (searchQuery) {
      results = searchSections(searchQuery);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(s => s.category === selectedCategory);
    }

    return results;
  }, [searchQuery, selectedCategory]);

  const categoryColors = {
    beginner: 'bg-green-900/20 border-green-700/50 text-green-400',
    intermediate: 'bg-yellow-900/20 border-yellow-700/50 text-yellow-400',
    advanced: 'bg-red-900/20 border-red-700/50 text-red-400'
  };

  const categoryLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2">📚 Wiki Conflict of Nations</h1>
          <p className="text-slate-400">Guia completo para jogadores brasileiros</p>
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
                placeholder="Buscar seções (ex: economia, dano, moral)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-lime-400 placeholder:text-slate-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className={selectedCategory === 'all' ? 'bg-lime-600 hover:bg-lime-700' : 'bg-slate-700/50 border-slate-600 hover:bg-slate-600'}
                onClick={() => setSelectedCategory('all')}
              >
                <Filter size={16} className="mr-2" />
                Todas
              </Button>
              {(['beginner', 'intermediate', 'advanced'] as const).map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  className={selectedCategory === cat ? 'bg-lime-600 hover:bg-lime-700' : 'bg-slate-700/50 border-slate-600 hover:bg-slate-600'}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {categoryLabels[cat]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        {filteredSections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Nenhuma seção encontrada para sua busca.</p>
            <Button
              variant="outline"
              className="mt-4 bg-slate-700/50 border-slate-600 hover:bg-slate-600"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSections.map((section) => (
              <div
                key={section.id}
                className="group cursor-pointer bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-lime-400/50 transition-all hover:shadow-lg hover:shadow-lime-400/10"
                onClick={() => setLocation(`/wiki/${section.id}`)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{section.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs border ${categoryColors[section.category]}`}>
                    {categoryLabels[section.category]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-lime-400 mb-2 group-hover:text-lime-300 transition-colors">
                  {section.title}
                </h3>

                <p className="text-sm text-slate-400 mb-4">
                  {section.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {section.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                  {section.keywords.length > 3 && (
                    <span className="inline-block px-2 py-1 text-xs text-slate-500">
                      +{section.keywords.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 pt-12 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">{wikiSections.length}</div>
              <div className="text-sm text-slate-400 mt-2">Seções Disponíveis</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">25K+</div>
              <div className="text-sm text-slate-400 mt-2">Palavras de Conteúdo</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lime-400">40+</div>
              <div className="text-sm text-slate-400 mt-2">Tabelas e Exemplos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
