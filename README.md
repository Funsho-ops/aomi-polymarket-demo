# Jupiter Perps AI — Never Get Liquidated In Your Sleep

An AI-powered perpetual position manager built with [Aomi](https://aomi.dev) — the agentic AI infrastructure for blockchains.

Connect your wallet. Ask questions in plain language. Manage your risk before the market does it for you.

---

## What This Is

Perpetual traders on Solana get liquidated not because they were wrong — but because they weren't watching.

They open a leveraged position on Jupiter, go to sleep, and wake up to zero. Or they miss the window to add margin before borrow fees eat into their collateral. Or they don't catch the liquidation price creeping closer as funding compounds hourly.

The edge in perp trading isn't just conviction. It's information infrastructure — knowing your exact risk exposure at any moment, in plain language, without doing the math yourself.

This assistant connects Aomi's agentic AI infrastructure to Jupiter Perpetuals' on-chain data, giving any trader a real-time risk co-pilot:

- View all open positions across SOL, ETH, and BTC markets
- Get your exact liquidation price and how far the market needs to move to hit it
- See accrued borrow fees eating into your collateral in real time
- Calculate how much margin to add to survive a price drop
- Get current SOL, ETH, BTC prices instantly

Built on Aomi's simulation-first pipeline: the AI proposes, you verify, your wallet signs. Nothing executes without your confirmation.

---

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router
- [Aomi React SDK](https://www.npmjs.com/package/@aomi-labs/react) — agentic AI runtime
- [Aomi Widget](https://aomi.dev/r/aomi-frame.json) — embedded chat UI via shadcn
- [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) — on-chain position data
- [CoinGecko API](https://coingecko.com) — real-time price feeds
- [Tailwind CSS](https://tailwindcss.com) — styling
- TypeScript throughout

---

## Setup in Under 5 Minutes

### Prerequisites

- Node.js 18+
- npm
- An Aomi API key (get one at [aomi.dev](https://aomi.dev))

### Installation

```bash
git clone https://github.com/funsho-ops/aomi-polymarket-demo
cd aomi-polymarket-demo
npm install
cp .env.example .env.local
```

### Environment Variables

```bash
NEXT_PUBLIC_BACKEND_URL=https://api.aomi.dev
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Configure Your API Key

Once the widget loads, click the key icon in the top control bar and paste your Aomi API key. You are live.

---

## How It Works

### The User Problem

A Jupiter Perps trader opens a 10x SOL long. They know their entry price. They do not know their exact liquidation price right now, how much borrow fees have accrued since they opened, how much margin they need to add to survive a 15% SOL drop, or whether their collateral health is deteriorating in real time.

Before this assistant, they had to manually check Jupiter's UI, do the math themselves, and hope they caught it in time.

### The Solution

This assistant wraps Jupiter Perpetuals on-chain data as Aomi tools. When a trader asks "what's my liquidation price and how much margin do I need to be safe if SOL drops 20%?", the AI fetches all open positions from the Solana blockchain, pulls current prices, calculates liquidation distance and margin health, and returns a plain-language risk assessment with a specific action recommendation.

### The Safety Layer

Every on-chain action runs through Aomi's simulation-first pipeline:

```plaintext
User intent → AI constructs transaction → Anvil simulation →
User sees exact outcome → User confirms → Wallet signs
```

The AI never executes anything the user did not explicitly approve.

---

## API Routes

### GET /api/market-price

Returns real-time prices for SOL, ETH, BTC.

```text
/api/market-price?tokens=SOL,ETH,BTC
```

---

### GET /api/positions

Reads open Jupiter Perps positions from the Solana blockchain.

```text
/api/positions?wallet=YOUR_WALLET_ADDRESS
```

---

## Example Prompts

```text
"What are my open positions right now?" [paste wallet address]
"What's my liquidation price on my SOL long?"
"How much margin do I need to add to survive a 20% SOL drop?"
"How much are borrow fees costing me per hour?"
"If SOL drops to $70, which of my positions get liquidated first?"
```

---

## Why Perpetual Traders

I trade perps and futures on Jupiter actively. I know this problem firsthand. The gap between "I have a position open" and "I know exactly how much risk I'm carrying right now" is where traders get liquidated. Not because they were wrong about the market — but because they didn't have the right information at the right moment.

---

## What I'd Build Next

**Liquidation alert system via Telegram.** Aomi's native Telegram bot integration means the same assistant deploys without frontend code. The bot monitors your positions continuously and messages you when your liquidation price is within 10% of current market price.

**Cross-position margin optimization.** The AI calculates your total portfolio margin health, identifies which positions are most at risk, and recommends the most capital-efficient way to redistribute collateral across all positions simultaneously.

**Borrow fee forecasting.** Projects your borrow fee burden 24h, 72h, and 7 days forward so you can see exactly how long you can hold a position before fees eat into your thesis.

---

## Built By

Funsho Akinbile — Web3 Growth & Ecosystem Operator
[X](https://x.com/funshoakinbile) · [LinkedIn](https://linkedin.com/in/funsho-akinbile-ops)

Built as a take-home submission for [Aomi](https://aomi.dev).
Started: Thursday, April 24, 2026.
Submitted: Tuesday, April 28, 2026.
