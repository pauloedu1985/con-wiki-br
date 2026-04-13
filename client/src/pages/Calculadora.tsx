import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Calculadora() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Calculadora de Recursos</h1>
          <p className="text-lg text-muted-foreground">
            Calcule a produção e custos de recursos de forma rápida e precisa
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seção em Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta seção está sendo desenvolvida. Em breve você terá uma calculadora interativa para recursos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
