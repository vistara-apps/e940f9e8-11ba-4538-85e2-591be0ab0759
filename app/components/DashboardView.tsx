'use client';

import { Clock, Coins, Heart } from 'lucide-react';
import AchievementBadge from './AchievementBadge';

export default function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Hero Section with Time */}
      <div className="text-center py-8">
        <h2 className="text-lg font-medium text-fg/80 mb-2">Dashboard</h2>
        <div className="text-6xl font-bold mb-8 glow-text">45:41</div>
        
        {/* Main Achievement Badge */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <AchievementBadge size="large" level={5} />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Coins className="text-yellow-400" size={20} />
            <span className="text-2xl font-bold">746</span>
          </div>
          <p className="text-sm text-fg/60">Friend Achievements</p>
        </div>
        
        <div className="glass-card p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="text-red-400" size={20} />
            <span className="text-2xl font-bold">Daily</span>
          </div>
          <p className="text-sm text-fg/60">Bonus Coin</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <Clock size={20} />
          Copy Master
        </button>
        
        <button className="btn-secondary w-full flex items-center justify-center gap-2">
          <Trophy size={20} />
          View All Challenges
        </button>
      </div>

      {/* Active Challenges Preview */}
      <div className="glass-card p-4 rounded-lg">
        <h3 className="font-semibold mb-3">Active Challenges</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AchievementBadge size="small" level={3} />
              <div>
                <p className="font-medium">Social Hoops</p>
                <p className="text-xs text-fg/60">5d 7hrs</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">3/5</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AchievementBadge size="small" level={2} />
              <div>
                <p className="font-medium">Pixel Friend NFT</p>
                <p className="text-xs text-fg/60">Sunday</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">2/3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
