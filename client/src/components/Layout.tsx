import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

interface LayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { label: 'Início', href: '/' },
  {
    label: 'Iniciante',
    items: [
      { label: 'Economia', href: '/economia' },
      { label: 'Moral', href: '/moral' },
      { label: 'Anti-Aéreo', href: '/anti-aereo' },
      { label: 'Mísseis', href: '/misseis' },
      { label: 'Espiões', href: '/espioes' },
    ],
  },
  {
    label: 'Avançado',
    items: [
      { label: 'Cálculo de Dano', href: '/calculo-dano' },
      { label: 'Distribuição de Peso', href: '/distribuicao-peso' },
      { label: 'Fórmula de Recursos', href: '/formula-recursos' },
      { label: 'Prioridade de Títulos', href: '/prioridade-titulos' },
    ],
  },
  {
    label: 'Ferramentas',
    items: [
      { label: 'Calculadora', href: '/calculadora' },
      { label: 'Países', href: '/paises' },
      { label: 'Edifícios', href: '/edificios' },
    ],
  },
  {
    label: 'Geral',
    items: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Mapa', href: '/mapa' },
    ],
  },
];

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Iniciante']);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const sidebarClass = sidebarOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-sidebar text-sidebar-foreground transition-transform duration-300 ease-in-out ${sidebarClass} md:relative md:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-6">
          <h1 className="text-xl font-bold text-sidebar-accent">CON Wiki</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="overflow-y-auto p-4">
          {navigationItems.map((item) => (
            <div key={item.label} className="mb-2">
              {item.items ? (
                <>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className="w-full text-left px-4 py-2 rounded hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors font-medium text-sm"
                  >
                    {item.label}
                  </button>
                  {expandedSections.includes(item.label) && (
                    <div className="ml-4 space-y-1">
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm rounded hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-2 rounded hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors font-medium text-sm"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-card shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 md:px-8">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-foreground"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-foreground">Conflict of Nations - Guia Brasileiro</h1>
            <div className="w-6" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
            <p>Conflict of Nations - Guia Brasileiro | Criado pela comunidade de jogadores</p>
            <p className="mt-2">Baseado no CON's Teacher Wiki</p>
          </div>
        </footer>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
