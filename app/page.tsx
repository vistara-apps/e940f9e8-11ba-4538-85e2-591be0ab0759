'use client';

import { useEffect, useState } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Home, Users, Trophy, User } from 'lucide-react';
import DashboardView from './components/DashboardView';
import ChallengesView from './components/ChallengesView';
import AchievementsView from './components/AchievementsView';
import ProfileView from './components/ProfileView';

type View = 'dashboard' | 'challenges' | 'achievements' | 'profile';

export default function Page() {
  const { setFrameReady } = useMiniKit();
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setFrameReady();
    setIsReady(true);
  }, [setFrameReady]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg/60">Loading Daily Quest...</p>
        </div>
      </div>
    );
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'challenges':
        return <ChallengesView />;
      case 'achievements':
        return <AchievementsView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-screen-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gradient">Daily Quest</h1>
          <ConnectWallet />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-md mx-auto px-4 py-6">
        {renderView()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-white/10">
        <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-around">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
              currentView === 'dashboard' ? 'text-primary' : 'text-fg/60'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setCurrentView('challenges')}
            className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
              currentView === 'challenges' ? 'text-primary' : 'text-fg/60'
            }`}
          >
            <Users size={24} />
            <span className="text-xs">Challenges</span>
          </button>
          <button
            onClick={() => setCurrentView('achievements')}
            className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
              currentView === 'achievements' ? 'text-primary' : 'text-fg/60'
            }`}
          >
            <Trophy size={24} />
            <span className="text-xs">Achievements</span>
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
              currentView === 'profile' ? 'text-primary' : 'text-fg/60'
            }`}
          >
            <User size={24} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
