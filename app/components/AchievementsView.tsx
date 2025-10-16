'use client';

import { Star, TrendingUp } from 'lucide-react';
import AchievementBadge from './AchievementBadge';

const achievements = [
  { id: 1, name: 'NY Earlow', description: 'Unlocking social challenges and activities', points: 15000, level: 5, rarity: 4 },
  { id: 2, name: 'Flail Mair', description: 'Your easy and successful path', points: 12000, level: 4, rarity: 3 },
];

const socialChallenges = [
  { id: 1, name: 'Social Hoops', progress: 75, timeLeft: '5d 7hrs', participants: 5 },
  { id: 2, name: 'Pixel Friend NFT', progress: 60, timeLeft: 'Sunday', participants: 3 },
  { id: 3, name: 'Daily Diaries', progress: 45, timeLeft: '8 Votes', participants: 8 },
];

export default function AchievementsView() {
  return (
    <div className="space-y-6">
      {/* Hero Achievement */}
      <div className="text-center py-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AchievementBadge size="xlarge" level={5} />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-2xl"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp className="text-primary" size={20} />
          <span className="text-3xl font-bold">15,000</span>
        </div>
        
        <p className="text-sm text-fg/60 max-w-xs mx-auto mb-4">
          User a cutting and excellent playthrough story and blunt understanding these points can omnis in aritas
          velum flap elite fila affectend.
        </p>
        
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">●</span>
            <span>Cert: Monthly</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">●</span>
            <span>Reward</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Top Achievements */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Top Achievements</h3>
        {achievements.map((achievement) => (
          <div key={achievement.id} className="glass-card p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <AchievementBadge size="medium" level={achievement.level} />
              <div className="flex-1">
                <h4 className="font-semibold">{achievement.name}</h4>
                <p className="text-xs text-fg/60">{achievement.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end mb-1">
                  {[...Array(achievement.rarity)].map((_, i) => (
                    <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Challenges */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Social Challenges</h3>
        {socialChallenges.map((challenge) => (
          <div key={challenge.id} className="glass-card p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <AchievementBadge size="small" level={3} />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{challenge.name}</h4>
                <p className="text-xs text-fg/60">{challenge.timeLeft}</p>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${challenge.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
