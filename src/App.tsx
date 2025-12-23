import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Search } from './components/features/Search';
import { CharacterDashboard } from './components/features/CharacterDashboard';
import { Library } from './components/features/Library';
import { ParvaReader } from './components/features/ParvaReader';
import type { Character } from './types';

type View = 'home' | 'library';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedParvaSlug, setSelectedParvaSlug] = useState<string | null>(null);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedCharacter(null);
    setSelectedParvaSlug(null);
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {selectedCharacter ? (
        <CharacterDashboard
          character={selectedCharacter}
          onBack={() => setSelectedCharacter(null)}
        />
      ) : currentView === 'library' ? (
        selectedParvaSlug ? (
          <ParvaReader
            slug={selectedParvaSlug}
            onBack={() => setSelectedParvaSlug(null)}
          />
        ) : (
          <Library onSelectParva={setSelectedParvaSlug} />
        )
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
          <div className="max-w-3xl text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-100 mb-6">
              O Grande Épico da Humanidade
            </h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Explore os arquétipos, destinos e dilemas do Dharma através das figuras imortais do Mahabharata.
            </p>
          </div>

          <Search onSelectCharacter={setSelectedCharacter} />

          <div className="mt-16 grid grid-cols-3 gap-8 text-center text-slate-600 uppercase text-xs tracking-widest opacity-60">
            <div>100.000 Versos</div>
            <div>18 Dias de Guerra</div>
            <div>1 Verdade</div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
