import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Perguntas Frequentes</h1>
          <p className="text-lg text-muted-foreground">
            Respostas para as dúvidas mais comuns de jogadores
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seção em Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta seção está sendo desenvolvida. Em breve você terá respostas para as perguntas mais frequentes da comunidade.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
