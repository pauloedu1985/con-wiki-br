import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, TrendingDown } from 'lucide-react';

export default function Moral() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Moral & Insurgência</h1>
          <p className="text-lg text-muted-foreground">
            Entenda o sistema de moral e como evitar revoltas que podem destruir suas conquistas
          </p>
        </div>

        {/* Seção Iniciante */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="text-2xl font-bold text-foreground">O que é Moral?</h2>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Como a Moral Afeta o Jogo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A moral afeta vários aspectos importantes do seu jogo:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 rounded-lg bg-accent/10 p-4">
                  <TrendingDown className="h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">Produção de Recursos</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Moral baixa reduz significativamente sua produção</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-lg bg-accent/10 p-4">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">Chance de Insurgência</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Moral baixa aumenta drasticamente a chance de revoltas</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-lg bg-accent/10 p-4">
                  <Shield className="h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">Tempo de Construção</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Moral baixa aumenta tempo de construção e mobilização</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aviso crítico */}
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                Armadilha de Moral Baixa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-900">
                Você pode ficar preso em um <strong>ciclo infinito</strong> onde moral baixa causa revoltas, revoltas causam mais dano, o que reduz ainda mais a moral. Sempre mantenha moral acima de 34% para evitar revoltas!
              </p>
            </CardContent>
          </Card>

          {/* Como gerenciar moral */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Como Gerenciar Moral Efetivamente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <h4 className="font-semibold text-foreground">Estacionar Unidades em Cidades</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Coloque 2 infantarias motorizadas em cada cidade com moral baixa. Isso reduz significativamente a chance de revolta.
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="font-semibold text-foreground">Construir Bunkers</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bunkers aumentam a moral local. Nível 1 = +5, Nível 4 = +35 de moral!
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="font-semibold text-foreground">Evitar Combate em Cidades</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Combate em uma província reduz moral de -1 a -5 dependendo do dano. Tente manter combates longe de suas cidades.
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="font-semibold text-foreground">Não Matar Civis</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cada civil morto causa -1 de moral, com máximo de -30. Evite ataques indiscriminados.
                </p>
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
              <CardTitle>Valores Base de Moral</CardTitle>
              <CardDescription>Moral inicial por tipo de território</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Tipo</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Pátria</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Ocupada</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Anexada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 text-muted-foreground">Cidade</td>
                      <td className="px-4 py-2 font-semibold text-foreground">90%</td>
                      <td className="px-4 py-2 font-semibold text-foreground">75%</td>
                      <td className="px-4 py-2 font-semibold text-foreground">75%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-muted-foreground">Província</td>
                      <td className="px-4 py-2 font-semibold text-foreground">100%</td>
                      <td className="px-4 py-2 font-semibold text-foreground">100%</td>
                      <td className="px-4 py-2 font-semibold text-foreground">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Chance de Revolta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Revoltas começam em 34% de moral e aumentam linearmente conforme a moral cai:
              </p>
              <div className="rounded-lg bg-accent/10 p-4">
                <p className="font-semibold text-foreground">Em 25% de moral = 50% de chance de revolta</p>
              </div>
              <p className="text-sm text-muted-foreground">
                A chance de revolta é reduzida pelo dano total das unidades estacionadas na cidade. Quanto maior o dano, menor a chance de revolta.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Links para próximas seções */}
        <div className="border-t border-border pt-8">
          <p className="mb-4 text-muted-foreground">Próximas seções recomendadas:</p>
          <div className="flex flex-wrap gap-3">
            <a href="/economia" className="rounded-lg border border-accent px-4 py-2 text-accent hover:bg-accent/10 transition-colors">
              Economia
            </a>
            <a href="/anti-aereo" className="rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90 transition-colors">
              Anti-Aéreo Explicado
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
