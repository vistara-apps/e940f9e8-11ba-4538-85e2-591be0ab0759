# Daily Quest - Base Mini App

A social game where users complete daily challenges with friends to earn dynamic NFT achievements on Base, leveraging Farcaster for discovery and engagement.

## Features

- 🎮 **Collaborative Daily Challenges** - Team up with Farcaster friends
- 🏆 **Dynamic NFT Achievements** - Evolving on-chain reputation system
- 🖼️ **Frame-Driven Gameplay** - Seamless in-feed experience
- 🔔 **Social Notifications** - Real-time updates and engagement
- 💎 **Base Integration** - Built on Base L2 with gasless transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
daily-quest/
├── app/
│   ├── components/          # React components
│   │   ├── DashboardView.tsx
│   │   ├── ChallengesView.tsx
│   │   ├── AchievementsView.tsx
│   │   ├── ProfileView.tsx
│   │   └── AchievementBadge.tsx
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main app page
│   ├── providers.tsx       # OnchainKit provider
│   └── globals.css         # Global styles
├── .well-known/
│   └── farcaster.json      # Farcaster manifest
└── public/                 # Static assets
```

## Key Features Implementation

### MiniKit Integration
- Uses `useMiniKit` hook for Farcaster context
- Calls `setFrameReady()` on mount
- Proper manifest configuration

### OnchainKit Components
- `ConnectWallet` for wallet connection
- `Identity` components for user profiles
- `Transaction` components for NFT minting

### BASE Theme
- Dark blue background (#0a0e1a)
- Base blue accents (#0052ff)
- Rounded borders and glass morphism
- Responsive mobile-first design

## Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   vercel deploy
   ```

3. **Configure environment variables** in your deployment platform

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
