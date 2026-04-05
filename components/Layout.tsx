import React from 'react';
import { Leaf, Map, BookOpen, Users } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Leaf },
    { id: 'map', label: 'Mapa Virtual', icon: Map },
    { id: 'learn', label: 'Aprende', icon: BookOpen },
    { id: 'community', label: 'Comunidad', icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-950 text-stone-200">
      {/* Navbar */}
      <nav className="bg-stone-900 border-b border-stone-800 sticky top-0 z-50 h-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-jungle-mid rounded-tr-lg rounded-bl-lg group-hover:bg-jungle-light transition-colors"></div>
            <span className="font-serif font-bold text-xl text-stone-100 tracking-tight">
              Explora<span className="text-jungle-mid group-hover:text-jungle-light transition-colors">Nativa</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-bold tracking-wide
                  ${activeView === item.id 
                    ? 'text-jungle-light bg-stone-800' 
                    : 'text-stone-400 hover:text-jungle-mid hover:bg-stone-900'
                  }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Nav Trigger (Simple placeholder) */}
          <div className="md:hidden text-gray-500">
             {/* In a real app, a hamburger menu would go here */}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-stone-800 z-50 pb-safe">
        <div className="flex justify-around items-center p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center p-2 w-full transition-colors
                ${activeView === item.id ? 'text-jungle-mid' : 'text-stone-500'}`}
            >
              <item.icon size={24} />
              <span className="text-[10px] mt-1 font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;