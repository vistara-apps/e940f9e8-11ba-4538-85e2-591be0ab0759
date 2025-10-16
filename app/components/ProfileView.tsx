'use client';

import { Identity, Avatar, Name, Address } from '@coinbase/onchainkit/identity';
import { Trophy, Users, Star, TrendingUp } from 'lucide-react';
import AchievementBadge from './AchievementBadge';

export default function ProfileView() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="glass-card p-6 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Avatar className="w-20 h-20" />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <AchievementBadge size="small" level={5} />
            </div>
          </div>
        </div>
        
        <Identity>
          <Name className="text-xl font-bold mb-1" />
          <Address className="text-sm text-fg/60" />
        </Identity>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-lg text-center">
          <Trophy className="text-yellow-400 mx-auto mb-2" size={24} />
          <p className="text-2xl font-bold">42</p>
          <p className="text-xs text-fg/60">Achievements</p>
        </div>
        
        <div className="glass-card p-4 rounded-lg text-center">
          <Users className="text-primary mx-auto mb-2" size={24} />
          <p className="text-2xl font-bold">156</p>
          <p className="text-xs text-fg/60">Friends</p>
        </div>
        
        <div className="glass-card p-4 rounded-lg text-center">
          <Star className="text-accent mx-auto mb-2" size={24} />
          <p className="text-2xl font-bold">8,420</p>
          <p className="text-xs text-fg/60">Total Points</p>
        </div>
        
        <div className="glass-card p-4 rounded-lg text-center">
          <TrendingUp className="text-green-400 mx-auto mb-2" size={24} />
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-fg/60">Day Streak</p>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Recent Achievements</h3>
        <div className="grid grid-cols-4 gap-3">
          {[5, 4, 3, 2, 5, 4, 3, 1].map((level, i) => (
            <div key={i} className="glass-card p-2 rounded-lg flex justify-center">
              <AchievementBadge size="small" level={level} />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="btn-primary w-full">Share Profile</button>
        <button className="btn-secondary w-full">View on Basescan</button>
      </div>
    </div>
  );
}
