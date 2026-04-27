import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Home, BookOpen, Zap, Target, Rocket, Users, BarChart3, HelpCircle, Calculator, Globe, Building2, Book, ChevronLeft, Sword, Compass } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

interface NavSection {
  title: string;
  items: Array<{
    icon: any;
    label: string;
    href: string;
  }>;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationSections: NavSection[] = [
    {
      title: 'PRINCIPAL',
      items: [
        { icon: Home, label: 'Início', href: '/' },
        { icon: Book, label: 'Wiki', href: '/wiki' },
      ]
    },
    {
      title: 'GUIAS BÁSICOS',
      items: [
        { icon: BookOpen, label: 'Economia', href: '/economia' },
        { icon: Zap, label: 'Moral', href: '/moral' },
        { icon: Target, label: 'Anti-Aéreo', href: '/anti-aereo' },
        { icon: Rocket, label: 'Mísseis', href: '/misseis' },
        { icon: Users, label: 'Espiões', href: '/espioes' },
      ]
    },
    {
      title: 'ANÁLISE & TÁTICA',
      items: [
        { icon: BarChart3, label: 'Cálculo Dano', href: '/calculo-dano' },
        { icon: Compass, label: 'Estratégias', href: '/estrategias' },
        { icon: Sword, label: 'Unidades', href: '/unidades' },
        { icon: Globe, label: 'Países', href: '/paises' },
        { icon: Building2, label: 'Edifícios', href: '/edificios' },
        { icon: Building2, label: 'Edif. Prov.', href: '/edificios-provincia' },
        { icon: HelpCircle, label: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'FERRAMENTAS',
      items: [
        { icon: Calculator, label: 'Calculadora', href: '/calculadora' },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className={`hidden md:flex fixed md:relative inset-y-0 left-0 z-50 bg-sidebar border-r border-sidebar-border flex-col py-4 transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'}`}>
        {/* Header with Logo and Toggle */}
        <div className="w-full px-2 mb-4 flex items-center justify-between">
          <Link href="/">
            <div className="text-center cursor-pointer flex-1">
              <div className="text-accent font-bold text-sm text-center px-1 break-words">
                {sidebarExpanded ? '⚔️ CON WIKI' : '⚔️'}
              </div>
            </div>
          </Link>
          
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="p-1.5 hover:bg-sidebar-accent/10 rounded transition-colors text-sidebar-accent flex-shrink-0"
            title={sidebarExpanded ? 'Recolher menu' : 'Expandir menu'}
          >
            <ChevronLeft size={20} className={`transition-transform duration-300 ${sidebarExpanded ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full px-2 mb-4">
          <div className="h-px bg-sidebar-border"></div>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 w-full flex flex-col gap-6 px-1 overflow-y-auto">
          {navigationSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="flex flex-col gap-2">
              {sidebarExpanded && (
                <div className="px-3 py-1">
                  <p className="text-xs font-bold text-sidebar-accent/60 uppercase tracking-wider">{section.title}</p>
                </div>
              )}
              <div className="flex flex-col gap-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href}>
                      <div 
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent/10 transition-colors cursor-pointer text-sidebar-foreground hover:text-sidebar-accent group whitespace-nowrap" 
                        title={item.label}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0 text-sidebar-accent" />
                        {sidebarExpanded && (
                          <span className="text-sm font-medium transition-opacity duration-300">{item.label}</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Info */}
        <div className="w-full px-2 pt-4 border-t border-sidebar-border text-center">
          <div className="text-xs text-sidebar-foreground/50 transition-opacity duration-300">
            {sidebarExpanded ? 'SYSTEM STATUS: NOMINAL' : 'OK'}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3 flex items-center justify-between md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-sm font-bold text-accent">⚔️ CON WIKI</h1>
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground md:hidden"
            title={sidebarExpanded ? 'Recolher' : 'Expandir'}
          >
            <ChevronLeft size={20} className={`transition-transform duration-300 ${sidebarExpanded ? '' : 'rotate-180'}`} />
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-sidebar border-b border-sidebar-border max-h-96 overflow-y-auto">
            <nav className="flex flex-col gap-2 p-3">
              {navigationSections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="flex flex-col gap-1">
                  <div className="px-2 py-1 mt-2">
                    <p className="text-xs font-bold text-sidebar-accent/60 uppercase tracking-wider">{section.title}</p>
                  </div>
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.href} href={item.href}>
                        <div 
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent/10 transition-colors cursor-pointer text-sidebar-foreground hover:text-sidebar-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon className="w-5 h-5 text-sidebar-accent" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-sidebar border-t border-sidebar-border px-4 py-3 text-center text-xs text-sidebar-foreground/60">
          <p>© 2024 CONFLICT_INTEL_SYSTEM // CLASSIFIED</p>
        </footer>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
