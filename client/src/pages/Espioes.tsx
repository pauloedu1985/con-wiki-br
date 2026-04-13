import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Eye, Shield, Zap } from 'lucide-react';

export default function Espioes() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-accent">👤 ESPIÕES EXPLICADO</h1>
          <p className="text-lg text-muted-foreground">
            Guia sobre o sistema de espionagem e contra-espionagem em Conflict of Nations
          </p>
        </div>

        {/* Seção Iniciante */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Fundamentos de Espionagem</h2>
          </div>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                O que é Espionagem?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Espionagem em Conflict of Nations é um sistema que permite aos jogadores coletar informações sobre seus inimigos, sabotá-los ou roubar recursos. É uma ferramenta estratégica poderosa que pode virar o rumo de uma partida.
              </p>
              <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Funções Principais:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Coletar inteligência sobre posições de tropas</li>
                  <li>• Roubar recursos de inimigos</li>
                  <li>• Sabotar edifícios e pesquisas</li>
                  <li>• Realizar operações encobiertas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tipos de Missões */}
          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Tipos de Missões de Espionagem</CardTitle>
              <CardDescription>Diferentes operações disponíveis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Reconhecimento</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Coleta informações sobre posições de tropas, edifícios e recursos inimigos. Risco baixo, resultado imediato.
                  </p>
                </div>

                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Roubo de Recursos</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tenta roubar recursos do inimigo. Risco moderado, recompensa significativa se bem-sucedido.
                  </p>
                </div>

                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Sabotagem</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Danifica edifícios ou interrompe pesquisas inimigas. Risco alto, impacto estratégico significativo.
                  </p>
                </div>

                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Desinformação</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Engana o inimigo com informações falsas. Risco muito alto, resultado imprevisível.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Seção Avançada */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Contra-Espionagem</h2>
          </div>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Defendendo-se de Espiões
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Você pode se defender contra operações de espionagem inimiga através de várias estratégias:
              </p>
              <div className="space-y-3">
                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">Agências de Inteligência</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Construir agências aumenta a segurança e reduz sucesso de operações inimigas</p>
                </div>

                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">Contra-Inteligência</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Enviar espiões para detectar e neutralizar operações inimigas</p>
                </div>

                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">Dispersão de Tropas</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Manter tropas dispersas reduz efetividade de operações de reconhecimento</p>
                </div>

                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">Segurança de Pesquisa</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Proteger laboratórios e centros de pesquisa contra sabotagem</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Fatores que Afetam Sucesso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent mb-2">Aumentam Sucesso:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Espiões de nível alto</li>
                    <li>• Pesquisa de espionagem avançada</li>
                    <li>• Múltiplos espiões na operação</li>
                    <li>• Alvo desprotegido</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent mb-2">Reduzem Sucesso:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Agências de inteligência inimigas</li>
                    <li>• Contra-espionagem ativa</li>
                    <li>• Pesquisa de segurança avançada</li>
                    <li>• Detecção por espiões inimigos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Estratégias */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Estratégias de Espionagem</h2>
          </div>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Operações Ofensivas Efetivas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Fase Inicial</h4>
                <p className="text-sm text-muted-foreground">
                  Focar em reconhecimento para entender a estrutura inimiga. Roubo de recursos pequenos para testar defesas.
                </p>
              </div>

              <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Fase Intermediária</h4>
                <p className="text-sm text-muted-foreground">
                  Aumentar volume de operações. Sabotar pesquisas críticas. Roubar recursos em maior escala.
                </p>
              </div>

              <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Fase Tardia</h4>
                <p className="text-sm text-muted-foreground">
                  Operações coordenadas com ataques militares. Sabotagem de defesas antes de invasão. Roubo de warheads.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Dica Profissional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Combine espionagem com operações militares para máxima efetividade. Sabote defesas aéreas antes de ataques aéreos, ou roubo de munição antes de assaltos terrestres. A espionagem é mais poderosa quando coordenada com sua estratégia geral.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Links para próximas seções */}
        <div className="border-t border-border pt-8 mt-12">
          <p className="mb-4 text-muted-foreground">Próximas seções recomendadas:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/economia" className="rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium">
              Economia
            </a>
            <a href="/misseis" className="rounded-lg border border-accent px-4 py-2 text-accent hover:bg-accent/10 transition-colors text-sm font-medium">
              Mísseis Explicado
            </a>
            <a href="/anti-aereo" className="rounded-lg border border-accent px-4 py-2 text-accent hover:bg-accent/10 transition-colors text-sm font-medium">
              Anti-Aéreo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
