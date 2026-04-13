import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Info, Zap, Shield } from 'lucide-react';

export default function Misseis() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-accent">🚀 MÍSSEIS EXPLICADO</h1>
          <p className="text-lg text-muted-foreground">
            Guia completo sobre lançamento, tipos de mísseis, warheads e estratégias de defesa
          </p>
        </div>

        {/* Seção Iniciante */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Como Lançar Mísseis?</h2>
          </div>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-accent" />
                Requisitos Necessários
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">1. Warhead como Munição</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Você precisa ter warheads em seu armazém</p>
                </div>

                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">2. Pesquisa de Mísseis</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Pesquisar o tipo de míssil desejado</p>
                </div>

                <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent">3. Unidade Capaz</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Ter uma unidade com capacidade de lançar mísseis</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-accent/10 p-4 border border-accent/30">
                <p className="text-sm text-foreground">
                  <strong>Como lançar:</strong> Selecione a unidade, clique no botão de mísseis, escolha o tipo de warhead e o alvo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tipos de Warheads */}
          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Tipos de Warheads</CardTitle>
              <CardDescription>Cada warhead tem efeitos diferentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Convencional</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Efetivo contra armaduras, navios de superfície e edifícios. Sem efeitos secundários.
                  </p>
                </div>

                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Químico</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Efetivo contra alvos moles e população. Causa contaminação. Causa dano a unidades amigas.
                  </p>
                </div>

                <div className="rounded-lg border border-accent/20 p-4">
                  <h4 className="font-semibold text-accent">Nuclear</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Destrói tudo na zona de explosão. Deixa contaminação pesada. Causa dano a unidades amigas com raio maior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tipos de Mísseis */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Tipos de Mísseis</h2>
          </div>

          {/* Cruise Missile */}
          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="text-accent">Cruise Missile (CM)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Muitas unidades podem lançar</li>
                    <li>• Pode alvejar unidades e províncias</li>
                    <li>• Todos os tipos de warhead</li>
                    <li>• Alcance: 200-300</li>
                    <li>• Não visível, alto radar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vantagens/Desvantagens:</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>✓</strong> Mais barato e versátil<br/>
                    <strong>✗</strong> HP inicial baixo (3), suscetível a defesa AA<br/>
                    <strong>✓</strong> Gen 2: HP aumenta para 11
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ballistic Missile */}
          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="text-accent">Ballistic Missile (BM)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apenas 3 unidades podem lançar</li>
                    <li>• Pode alvejar unidades e províncias</li>
                    <li>• Ignora bônus de trincheira</li>
                    <li>• Alcance: 1.000-1.750</li>
                    <li>• Sempre visível após disparo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vantagens/Desvantagens:</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>✓</strong> HP e velocidade decentes<br/>
                    <strong>✓</strong> Menos flexível que CM<br/>
                    <strong>✓</strong> Funciona como ICBM barato com warheads nucleares
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ICBM */}
          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="text-accent">Intercontinental Ballistic Missile (ICBM)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apenas 1 unidade pode lançar</li>
                    <li>• Pode alvejar unidades e províncias</li>
                    <li>• Apenas warheads nucleares</li>
                    <li>• Alcance: 5.000-20.000</li>
                    <li>• Sempre visível após disparo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vantagens/Desvantagens:</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>✓</strong> Rápido, muito HP, devastador<br/>
                    <strong>✗</strong> Custo extremamente alto<br/>
                    <strong>✗</strong> Apenas warheads nucleares<br/>
                    <strong>✓</strong> Ideal para late game
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mecânicas Avançadas */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Mecânicas Avançadas</h2>
          </div>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Contaminação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ocorre em cidades atingidas por warheads químicos/nucleares (símbolo de caveira). A contaminação <strong>NÃO</strong> causa dano a tropas, mas impede construção e mobilização.
              </p>
              <div className="rounded-lg bg-secondary/20 p-4 border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Solução:</h4>
                <p className="text-sm text-muted-foreground">Construir um descontaminador para remover contaminação</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>⚠️ Aviso:</strong> Warheads químicos/nucleares causam dano massivo à população, resultando em penalidades de moral por vítimas civis.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Splash Damage (Dano de Explosão)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Todos os mísseis têm raio de dano que afeta múltiplas unidades sem redução de dano.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="rounded-lg bg-secondary/20 p-3 border border-accent/20">
                  <p className="text-xs text-accent font-semibold">Mísseis Normais</p>
                  <p className="text-sm text-muted-foreground mt-1">Raio: 5-15</p>
                </div>
                <div className="rounded-lg bg-secondary/20 p-3 border border-accent/20">
                  <p className="text-xs text-accent font-semibold">Chem/Nuclear</p>
                  <p className="text-sm text-muted-foreground mt-1">Raio: 10-35</p>
                </div>
                <div className="rounded-lg bg-secondary/20 p-3 border border-accent/20">
                  <p className="text-xs text-accent font-semibold">ICBM</p>
                  <p className="text-sm text-muted-foreground mt-1">Raio: 50-75</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Dica:</strong> ICBMs podem usar splash damage para evitar Point-Defense AA
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-card border-accent/30">
            <CardHeader>
              <CardTitle>Tabela de Capacidade de Mísseis</CardTitle>
              <CardDescription>Unidades terrestres, aéreas e navais</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-accent/30">
                      <th className="px-3 py-2 text-left text-accent">Unidade</th>
                      <th className="px-3 py-2 text-left text-accent">Nível</th>
                      <th className="px-3 py-2 text-left text-accent">Tipo</th>
                      <th className="px-3 py-2 text-left text-accent">Capacidade</th>
                      <th className="px-3 py-2 text-left text-accent">Recarga (h)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="px-3 py-2">Cruise Missile Launcher</td>
                      <td className="px-3 py-2">1-6</td>
                      <td className="px-3 py-2">CM</td>
                      <td className="px-3 py-2">1</td>
                      <td className="px-3 py-2">8</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2">Ballistic Missile Launcher</td>
                      <td className="px-3 py-2">1-6</td>
                      <td className="px-3 py-2">BM</td>
                      <td className="px-3 py-2">1-2</td>
                      <td className="px-3 py-2">12-14</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2">ICBM Launcher</td>
                      <td className="px-3 py-2">1-4</td>
                      <td className="px-3 py-2">ICBM</td>
                      <td className="px-3 py-2">1</td>
                      <td className="px-3 py-2">28</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2">Air Superiority Fighter</td>
                      <td className="px-3 py-2">4-7</td>
                      <td className="px-3 py-2">CM</td>
                      <td className="px-3 py-2">1</td>
                      <td className="px-3 py-2">12</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Heavy Bomber</td>
                      <td className="px-3 py-2">1-7</td>
                      <td className="px-3 py-2">CM/BM</td>
                      <td className="px-3 py-2">2-3</td>
                      <td className="px-3 py-2">8-10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Defesa contra Mísseis */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Defesa contra Mísseis</h2>
          </div>

          <Card className="bg-card border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Unidades Anti-Mísseis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-accent/20 p-4">
                <h4 className="font-semibold text-accent">SAM (Surface-to-Air Missile)</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Excelente contra mísseis. Tem seu próprio radar. Pode fazer assaltos aéreos.
                </p>
              </div>

              <div className="rounded-lg border border-accent/20 p-4">
                <h4 className="font-semibold text-accent">TDS (Theater Defense System)</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Única defesa confiável contra mísseis de alto nível. Alcance muito grande.
                </p>
              </div>

              <div className="rounded-lg border border-accent/20 p-4">
                <h4 className="font-semibold text-accent">Elite Railgun (Stack de 10)</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Excelente contra tudo, incluindo mísseis. Dano muito alto.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Links para próximas seções */}
        <div className="border-t border-border pt-8">
          <p className="mb-4 text-muted-foreground">Próximas seções recomendadas:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/anti-aereo" className="rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium">
              Anti-Aéreo Explicado
            </a>
            <a href="/economia" className="rounded-lg border border-accent px-4 py-2 text-accent hover:bg-accent/10 transition-colors text-sm font-medium">
              Economia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
