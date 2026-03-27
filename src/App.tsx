import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Search } from './components/features/Search';
import { CharacterDashboard } from './components/features/CharacterDashboard';
import { Library } from './components/features/Library';
import { ParvaReader } from './components/features/ParvaReader';
import { AnalyticsDashboard } from './components/features/analytics/AnalyticsDashboard';
import { characters } from './data/characters';
import type { Character } from './types';

type View = 'home' | 'library' | 'analytics';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedParvaSlug, setSelectedParvaSlug] = useState<string | null>(null);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedCharacter(null);
    setSelectedParvaSlug(null);
  };

  const handleReadParvaFromCharacter = (slug: string) => {
    setSelectedParvaSlug(slug);
    setCurrentView('library');
  };

  if (currentView === 'analytics') {
    return (
      <AnalyticsDashboard 
        onBack={() => handleNavigate('home')} 
        onSelectCharacter={(id) => {
           const char = characters.find(c => c.id === id);
           if (char) {
              setSelectedCharacter(char);
              setCurrentView('home');
           }
        }}
      />
    );
  }

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {selectedCharacter ? (
        <CharacterDashboard
          character={selectedCharacter}
          onBack={() => setSelectedCharacter(null)}
          onReadParva={handleReadParvaFromCharacter}
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
        <div className="flex flex-col items-center pt-2 animate-fade-in w-full mb-8">
          <Search onSelectCharacter={setSelectedCharacter} />
        </div>
      )}
    </Layout>
  );
}

export default App;
