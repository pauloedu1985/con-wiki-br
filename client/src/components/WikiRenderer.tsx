import React from 'react';
import { Streamdown } from 'streamdown';
import { ChevronLeft, ChevronRight, Share2, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WikiRendererProps {
  title: string;
  icon: string;
  content: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  onPrevious?: () => void;
  onNext?: () => void;
  previousTitle?: string;
  nextTitle?: string;
  relatedSections?: { id: string; title: string; icon: string }[];
}

export const WikiRenderer: React.FC<WikiRendererProps> = ({
  title,
  icon,
  content,
  category,
  onPrevious,
  onNext,
  previousTitle,
  nextTitle,
  relatedSections = []
}) => {
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
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-lime-400">{title}</h1>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm border ${categoryColors[category]}`}>
                {categoryLabels[category]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <article className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 backdrop-blur-sm">
                <Streamdown>{content}</Streamdown>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm mb-6">
              <h3 className="text-lg font-bold text-lime-400 mb-4">Ações Rápidas</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 bg-slate-700/50 border-slate-600 hover:bg-slate-600"
                  onClick={() => navigator.share({ title, text: `Confira: ${title}` })}
                >
                  <Share2 size={16} />
                  Compartilhar
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 bg-slate-700/50 border-slate-600 hover:bg-slate-600"
                >
                  <BookmarkPlus size={16} />
                  Salvar
                </Button>
              </div>
            </div>

            {/* Related Sections */}
            {relatedSections.length > 0 && (
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm mb-6">
                <h3 className="text-lg font-bold text-lime-400 mb-4">Seções Relacionadas</h3>
                <div className="space-y-2">
                  {relatedSections.map((section) => (
                    <a
                      key={section.id}
                      href={`/wiki/${section.id}`}
                      className="block p-3 rounded bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-slate-600/50 hover:border-lime-400/50"
                    >
                      <div className="flex items-center gap-2">
                        <span>{section.icon}</span>
                        <span className="text-sm text-slate-300 hover:text-lime-400">{section.title}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Category Info */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-lime-400 mb-2">Nível de Dificuldade</h3>
              <p className="text-sm text-slate-400">
                {category === 'beginner' && 'Perfeito para jogadores novos que estão começando.'}
                {category === 'intermediate' && 'Para jogadores com experiência básica.'}
                {category === 'advanced' && 'Para jogadores experientes que querem dominar o jogo.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm mt-12">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-4">
            {onPrevious && previousTitle ? (
              <Button
                variant="outline"
                className="justify-start gap-2 bg-slate-700/50 border-slate-600 hover:bg-slate-600 h-auto py-4"
                onClick={onPrevious}
              >
                <ChevronLeft size={20} />
                <div className="text-left">
                  <div className="text-xs text-slate-400">Anterior</div>
                  <div className="text-sm font-semibold text-lime-400">{previousTitle}</div>
                </div>
              </Button>
            ) : (
              <div />
            )}

            {onNext && nextTitle ? (
              <Button
                variant="outline"
                className="justify-end gap-2 bg-slate-700/50 border-slate-600 hover:bg-slate-600 h-auto py-4 col-start-2"
                onClick={onNext}
              >
                <div className="text-right">
                  <div className="text-xs text-slate-400">Próximo</div>
                  <div className="text-sm font-semibold text-lime-400">{nextTitle}</div>
                </div>
                <ChevronRight size={20} />
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
