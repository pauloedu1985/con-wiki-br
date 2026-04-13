import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Espioes() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Espiões Explicado</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda o sistema de espionagem e contra-espionagem
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seção em Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta seção está sendo desenvolvida. Em breve você terá informações completas sobre espionagem, tipos de missões e defesa.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
