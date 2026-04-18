import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Home, BookOpen, Zap, Target, Rocket, Users, BarChart3, HelpCircle, Calculator, Globe, Building2, Book, ChevronLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { icon: Home, label: 'Início', href: '/', category: 'main' },
    { icon: Book, label: 'Wiki', href: '/wiki', category: 'main' },
    { icon: BookOpen, label: 'Economia', href: '/economia', category: 'beginner' },
    { icon: Zap, label: 'Moral', href: '/moral', category: 'beginner' },
    { icon: Target, label: 'Anti-Aéreo', href: '/anti-aereo', category: 'beginner' },
    { icon: Rocket, label: 'Mísseis', href: '/misseis', category: 'beginner' },
    { icon: Users, label: 'Espiões', href: '/espioes', category: 'beginner' },
    { icon: BarChart3, label: 'Cálculo Dano', href: '/calculo-dano', category: 'advanced' },
    { icon: HelpCircle, label: 'FAQ', href: '/faq', category: 'tools' },
    { icon: Calculator, label: 'Calculadora', href: '/calculadora', category: 'tools' },
    { icon: Globe, label: 'Países', href: '/paises', category: 'tools' },
    { icon: Building2, label: 'Edifícios', href: '/edificios', category: 'tools' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 gap-2 md:relative md:z-auto transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'}`}>
        {/* Header with Logo and Toggle */}
        <div className="w-full px-2 mb-2 flex items-center justify-between">
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
            className="p-1 hover:bg-sidebar-accent/10 rounded transition-colors text-sidebar-accent hidden md:block"
            title={sidebarExpanded ? 'Recolher menu' : 'Expandir menu'}
          >
            <ChevronLeft size={18} className={`transition-transform duration-300 ${sidebarExpanded ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full px-2 mb-2">
          <div className="h-px bg-sidebar-border"></div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 w-full flex flex-col gap-1 px-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <div 
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-sidebar-accent/10 transition-colors cursor-pointer text-sidebar-foreground hover:text-sidebar-accent group whitespace-nowrap" 
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
        </nav>

        {/* Bottom Info */}
        <div className="w-full px-2 pt-4 border-t border-sidebar-border text-center">
          <div className="text-xs text-sidebar-foreground/50 transition-opacity duration-300">
            {sidebarExpanded ? 'SYSTEM STATUS: NOMINAL' : 'OK'}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3 flex items-center justify-between md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <h1 className="text-sm font-bold text-accent">CON WIKI</h1>
          <div className="w-5" />
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-sidebar border-b border-sidebar-border">
            <nav className="flex flex-col gap-1 p-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <div 
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-sidebar-accent/10 transition-colors cursor-pointer text-sidebar-foreground hover:text-sidebar-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5 text-sidebar-accent" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
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
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
