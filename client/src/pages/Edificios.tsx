import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Edificios() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Informações de Edifícios</h1>
          <p className="text-lg text-muted-foreground">
            Saiba tudo sobre edifícios de cidades e províncias
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seção em Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta seção está sendo desenvolvida. Em breve você terá informações completas sobre todos os edifícios do jogo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
