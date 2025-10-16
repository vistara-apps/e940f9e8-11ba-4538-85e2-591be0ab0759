'use client';

import { Users, Clock, Star } from 'lucide-react';
import AchievementBadge from './AchievementBadge';

const challenges = [
  { id: 1, name: 'Hourly', category: 'daily', level: 1, participants: 2, timeLeft: '45m' },
  { id: 2, name: 'Daily', category: 'daily', level: 2, participants: 3, timeLeft: '5h' },
  { id: 3, name: 'Daily', category: 'daily', level: 3, participants: 5, timeLeft: '12h' },
  { id: 4, name: 'Sponsor', category: 'special', level: 2, participants: 4, timeLeft: '2d' },
  { id: 5, name: 'Daily', category: 'daily', level: 1, participants: 2, timeLeft: '1d' },
  { id: 6, name: 'Continue', category: 'ongoing', level: 3, participants: 6, timeLeft: '3d' },
  { id: 7, name: 'Furia', category: 'challenge', level: 2, participants: 3, timeLeft: '5d' },
  { id: 8, name: 'Festive', category: 'special', level: 4, participants: 8, timeLeft: '7d' },
  { id: 9, name: 'Loyalty', category: 'ongoing', level: 5, participants: 10, timeLeft: '14d' },
];

export default function ChallengesView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-1">Yooloo NFT</h2>
          <p className="text-sm text-fg/60">Dashboard</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
          <span className="text-red-500 text-xl">×</span>
        </button>
      </div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-3 gap-3">
        {challenges.map((challenge) => (
          <button
            key={challenge.id}
            className="glass-card p-3 rounded-lg hover:bg-white/10 transition-all duration-200 relative group"
          >
            <div className="flex flex-col items-center gap-2">
              <AchievementBadge size="medium" level={challenge.level} />
              <p className="text-xs font-medium">{challenge.name}</p>
            </div>
            
            {/* Hover Info */}
            <div className="absolute inset-0 bg-surface/95 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1 p-2">
              <div className="flex items-center gap-1 text-xs">
                <Users size={12} />
                <span>{challenge.participants}</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <Clock size={12} />
                <span>{challenge.timeLeft}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="glass-card p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Coins className="text-yellow-400" size={20} />
            <span className="text-xl font-bold">16.46</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
              Mint
            </button>
            <button className="px-3 py-1 rounded-full bg-white/10 text-fg/60 text-xs">
              Sell
            </button>
            <button className="px-3 py-1 rounded-full bg-white/10 text-fg/60 text-xs">
              CRCL
            </button>
            <button className="px-3 py-1 rounded-full bg-white/10 text-fg/60 text-xs">
              VP
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="text-primary" size={16} />
              <span className="text-lg font-bold">1000</span>
            </div>
            <p className="text-xs text-fg/60">Liquidity</p>
            <p className="text-xs text-fg/40">Flex Mint/Burn</p>
          </div>
          
          <div className="glass-card p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Star className="text-yellow-400" size={16} />
              <span className="text-lg font-bold">Pass x1</span>
            </div>
            <p className="text-xs text-fg/60">Buy 100</p>
            <p className="text-xs text-fg/40">Focus power activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
