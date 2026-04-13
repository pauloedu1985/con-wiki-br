import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, TrendingUp, Zap } from 'lucide-react';

export default function Economia() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Economia</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda a construir uma economia saudável e gerenciar recursos eficientemente para dominar o jogo
          </p>
        </div>

        {/* Seção Iniciante */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Guia para Iniciantes</h2>
          </div>

          {/* Para que serve economia */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Para que serve a Economia?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A economia em Conflict of Nations é a base para todas as suas operações militares. Ela é usada para:
              </p>
              <div className="space-y-3">
                <div className="rounded-lg bg-accent/10 p-4">
                  <h4 className="font-semibold text-foreground">Investir de volta na economia</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Construir edifícios de indústria para aumentar produção</p>
                </div>
                <div className="rounded-lg bg-accent/10 p-4">
                  <h4 className="font-semibold text-foreground">Investir em militar</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Pesquisa, construção e manutenção de unidades</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recomendações por fase */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recomendações por Fase do Jogo</CardTitle>
              <CardDescription>Estratégias recomendadas em cada estágio da partida</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Fase Inicial (Primeira Semana)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Construir Indústria de Armas Nível 1-3 (Excelente retorno)</li>
                    <li>• Construir Indústria Local Nível 1 (Rápido e eficiente)</li>
                    <li>• Focar em expandir militarmente com habilidade</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Fase Intermediária (2-3 Semanas)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Construir Indústria de Armas Nível 4-5</li>
                    <li>• Construir Indústria Local Nível 2-3</li>
                    <li>• Considerar Postos de Observação e Hospitais de Campo</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Fase Tardia (4+ Semanas)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Construir Bunkers Nível 1-4</li>
                    <li>• Anexar cidades + Indústria de Armas Nível 5</li>
                    <li>• Focar em defesa e consolidação</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aviso importante */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                Dica Importante para Iniciantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-900">
                <strong>NÃO acumule mais de -30 de penalidade de moral global.</strong> Isso pode levar a revoltas em cascata que são muito difíceis de controlar. Sempre mantenha sua moral sob controle!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Seção Avançada */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Gestão Avançada de Recursos</h2>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Distribuição de Recursos por Tipo de Unidade</CardTitle>
              <CardDescription>Como distribuir seus recursos entre diferentes tipos de unidades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Infantaria Motorizada / Mecanizada</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Usa principalmente Mão de Obra. Cuidado para não ficar sem recursos!</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Artilharia / Lançadores de Foguetes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Usa Suprimentos e Materiais Raros. Ótimo para diversificar gastos.</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Tanques / Veículos Blindados</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Usa Armadura e Componentes. Mais caros, mas muito efetivos.</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Aviação / UAV</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Usa Suprimentos e Componentes. Excelente para ataques aéreos.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dica Profissional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Evite focar em um único tipo de recurso. Varie seus tipos de unidades para não ficar com recursos ociosos. Um combo bem balanceado de infantaria, artilharia e tanques é geralmente mais eficiente do que especializar em um único tipo.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Links para próximas seções */}
        <div className="border-t border-border pt-8">
          <p className="mb-4 text-muted-foreground">Próximas seções recomendadas:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/moral" className="rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90 transition-colors">
              Moral & Insurgência
            </a>
            <a href="/anti-aereo" className="rounded-lg border border-accent px-4 py-2 text-accent hover:bg-accent/10 transition-colors">
              Anti-Aéreo Explicado
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
