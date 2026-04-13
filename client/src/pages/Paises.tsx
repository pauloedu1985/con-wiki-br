import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Paises() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Lista de Países Jogáveis</h1>
          <p className="text-lg text-muted-foreground">
            Consulte informações sobre todos os países disponíveis no jogo
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seção em Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta seção está sendo desenvolvida. Em breve você terá uma lista completa de países com suas características.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
