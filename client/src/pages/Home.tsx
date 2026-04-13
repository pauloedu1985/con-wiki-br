import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Zap, Target, Rocket, Users, BarChart3 } from 'lucide-react';

export default function Home() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Economia',
      description: 'Aprenda a construir uma economia saudável e gerenciar recursos eficientemente',
      href: '/economia',
      level: 'Iniciante',
      color: 'text-blue-600',
    },
    {
      icon: Zap,
      title: 'Moral & Insurgência',
      description: 'Entenda o sistema de moral e como evitar revoltas em suas cidades',
      href: '/moral',
      level: 'Iniciante',
      color: 'text-purple-600',
    },
    {
      icon: Target,
      title: 'Anti-Aéreo Explicado',
      description: 'Domine as mecânicas de defesa contra aeronaves e mísseis',
      href: '/anti-aereo',
      level: 'Iniciante',
      color: 'text-red-600',
    },
    {
      icon: Rocket,
      title: 'Mísseis Explicado',
      description: 'Conheça os tipos de mísseis, alcance e estratégias de defesa',
      href: '/misseis',
      level: 'Iniciante',
      color: 'text-orange-600',
    },
    {
      icon: Users,
      title: 'Espiões Explicado',
      description: 'Aprenda o sistema de espionagem e contra-espionagem',
      href: '/espioes',
      level: 'Iniciante',
      color: 'text-green-600',
    },
    {
      icon: BarChart3,
      title: 'Cálculo de Dano',
      description: 'Entenda os cálculos complexos de dano e distribuição de peso',
      href: '/calculo-dano',
      level: 'Avançado',
      color: 'text-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sidebar to-background py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031254618/XexewP5SLXff9QBX72PdKo/hero-military-strategy-3AqL7Do28gruVvKiDsbJGq.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center md:px-8">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Conflict of Nations
          </h1>
          <p className="mb-8 text-xl text-gray-200 md:text-2xl">
            Guia Completo para Jogadores Brasileiros
          </p>
          <p className="mb-12 text-lg text-gray-300">
            Aprenda estratégias, mecânicas avançadas e domine o jogo com nossos guias detalhados
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/economia">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground sm:w-auto">
                Começar Guia
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Seções para Iniciantes</h2>
          <div className="h-1 w-24 bg-accent"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.slice(0, 5).map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.href} href={section.href}>
                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-accent">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${section.color}`} />
                      <span className="inline-block rounded bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {section.level}
                      </span>
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{section.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Advanced Section */}
      <section className="border-t border-border bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Mecânicas Avançadas</h2>
            <div className="h-1 w-24 bg-accent"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.slice(5).map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.href} href={section.href}>
                  <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-accent">
                    <CardHeader>
                      <div className="mb-4 flex items-center gap-3">
                        <Icon className={`h-8 w-8 ${section.color}`} />
                        <span className="inline-block rounded bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                          {section.level}
                        </span>
                      </div>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{section.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ferramentas Úteis</h2>
          <div className="h-1 w-24 bg-accent"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/calculadora">
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-accent">
              <CardHeader>
                <CardTitle>Calculadora de Recursos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Calcule a produção e custos de recursos de forma rápida e precisa</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/paises">
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-accent">
              <CardHeader>
                <CardTitle>Lista de Países</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Consulte informações sobre todos os países jogáveis</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/edificios">
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-accent">
              <CardHeader>
                <CardTitle>Informações de Edifícios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Saiba tudo sobre edifícios de cidades e províncias</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
