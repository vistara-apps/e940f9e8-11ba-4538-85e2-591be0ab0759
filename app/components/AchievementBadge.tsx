'use client';

import { Trophy } from 'lucide-react';

interface AchievementBadgeProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  level?: number;
}

export default function AchievementBadge({ size = 'medium', level = 1 }: AchievementBadgeProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-32 h-32',
    xlarge: 'w-40 h-40',
  };

  const iconSizes = {
    small: 20,
    medium: 28,
    large: 56,
    xlarge: 72,
  };

  return (
    <div className={`achievement-badge ${sizeClasses[size]} flex items-center justify-center`}>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 flex items-center justify-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
        
        {/* Icon */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Trophy size={iconSizes[size]} className="text-white drop-shadow-lg" />
          {level > 1 && (
            <span className="text-white font-bold text-xs mt-1">{level}</span>
          )}
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
      </div>
    </div>
  );
}
