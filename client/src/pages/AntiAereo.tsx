import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Info, Zap } from 'lucide-react';

export default function AntiAereo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Anti-Aéreo Explicado</h1>
          <p className="text-lg text-muted-foreground">
            Domine as mecânicas de defesa contra aeronaves e mísseis para proteger suas forças
          </p>
        </div>

        {/* Seção Iniciante */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Como Funciona Anti-Aéreo?</h2>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-accent" />
                Informação Importante
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ataques anti-aéreos <strong>não podem ser controlados manualmente</strong>. Eles acontecem automaticamente em um cronograma.
              </p>
              <p className="text-muted-foreground">
                Aeronaves podem passar através de um envelope de AA sem disparar se o tempo não coincidir com o ciclo de ataque.
              </p>
            </CardContent>
          </Card>

          {/* Unidades com AA */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Unidades com Capacidade Anti-Aéreo</CardTitle>
              <CardDescription>Comparação de efetividade contra diferentes tipos de alvo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Veículo Anti-Aéreo Móvel (MAA)</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Bom contra asa fixa e rotativa | Ruim contra mísseis</p>
                  <p className="mt-2 text-sm text-muted-foreground">Mais acessível, alto HP, pode fazer assaltos aéreos</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Lançador de Mísseis Superfície-Ar (SAM)</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Excelente contra asa fixa | Bom contra mísseis | Não afeta rotativa</p>
                  <p className="mt-2 text-sm text-muted-foreground">Essencial para defesa. Tem seu próprio radar. Pode fazer assaltos aéreos</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Sistema de Defesa de Teatro (TDS)</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Excelente contra mísseis | Ruim contra asa fixa | Não afeta rotativa</p>
                  <p className="mt-2 text-sm text-muted-foreground">Única defesa confiável contra mísseis de alto nível. Alcance muito grande</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Elite Railgun (Stack de 10)</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Excelente contra tudo</p>
                  <p className="mt-2 text-sm text-muted-foreground">Dano muito alto, mas sofre penalidades de terreno</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Seção Avançada */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">Mecânicas Avançadas</h2>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>AA Ofensiva - Ataque Agendado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AA dispara automaticamente a cada 10 minutos em intervalos globais. O minuto específico é aleatório para cada partida.
              </p>
              <div className="rounded-lg bg-accent/10 p-4">
                <p className="font-mono text-sm font-semibold text-foreground">Exemplo:</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Se AA dispara em 15:02, o próximo disparo será em 15:12, depois 15:22, etc.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Entre 15:02 e 15:12, você pode mover aeronaves livremente na área de AA sem risco.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Point Defense (Defesa Pontual)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AA sempre aplica dano defensivo a aeronaves atacando diretamente, <strong>mesmo em recarga</strong>.
              </p>
              <div className="space-y-3 mt-4">
                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Contra Mísseis</h4>
                  <p className="mt-1 text-sm text-muted-foreground">AA dispara ANTES do míssil causar dano. Mísseis com pouco HP são destruídos facilmente.</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground">Contra Aeronaves</h4>
                  <p className="mt-1 text-sm text-muted-foreground">AA e aeronave trocam dano simultaneamente. Menos efetivo que contra mísseis.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Manipulando o Cooldown de AA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Se você sabe quando AA dispara, pode manipular o cooldown para estender a janela de segurança:
              </p>
              <div className="rounded-lg bg-accent/10 p-4 font-mono text-sm">
                <p className="text-foreground">Exemplo de Manipulação:</p>
                <p className="mt-2 text-muted-foreground">AA dispara em 0:00</p>
                <p className="text-muted-foreground">Você ataca em 0:03 (UAV ou míssil de sacrifício)</p>
                <p className="text-muted-foreground">AA entra em cooldown até 0:13 (3 + 10 minutos)</p>
                <p className="text-muted-foreground">Próximo disparo em 0:10 é cancelado (AA em cooldown)</p>
                <p className="text-muted-foreground">Próximo disparo real em 0:20</p>
                <p className="mt-2 text-accent font-semibold">Resultado: 0:03 a 0:19 você voa seguro!</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Interações com Stealth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Unidades stealth são detectadas <strong>apenas no raio de visão</strong>, não por radar.
              </p>
              <p className="text-muted-foreground">
                Isso significa:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Point Defense funciona mesmo contra stealth (sempre causa dano)</li>
                <li>AA Agendada depende se stealth foi revelado</li>
                <li>SAM tem raio de visão de 25, então detecta stealth nessa distância</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Links para próximas seções */}
        <div className="border-t border-border pt-8 mt-12">
          <p className="mb-4 text-muted-foreground">Próximas seções recomendadas:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/misseis" className="rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90 transition-colors">
              Mísseis Explicado
            </a>
            <a href="/economia" className="rounded-lg border border-accent px-4 py-2 text-accent hover:bg-accent/10 transition-colors">
              Economia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
