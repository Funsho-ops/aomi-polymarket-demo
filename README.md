# Aomi Polymarket Assistant

An AI-powered prediction market assistant built with [Aomi](https://aomi.dev) — the agentic AI infrastructure for blockchains.

Ask questions in plain language. Get real-time market intelligence. Preview trades before you sign anything.

---

## What This Is

Prediction markets are one of the most powerful tools in crypto — but most retail traders are outgunned. They lack the tooling to process dozens of open markets simultaneously, read order books efficiently, or assess probability movements before committing capital.

This demo connects Aomi's agentic AI infrastructure to Polymarket's public APIs, giving any trader a conversational edge:

- Search live prediction markets by topic, category, or keyword
- Get AI analysis on current probabilities and market sentiment
- Preview trade execution before signing — see exact token changes and costs
- Ask follow-up questions across a persistent conversation thread

Built on Aomi's simulation-first pipeline: the AI proposes, you verify, your wallet signs. Nothing executes without your confirmation.

---

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router
- [Aomi React SDK](https://www.npmjs.com/package/@aomi-labs/react) — agentic AI runtime
- [Aomi Widget](https://aomi.dev/r/aomi-frame.json) — embedded chat UI via shadcn
- [Polymarket Gamma API](https://docs.polymarket.com) — market data
- [Tailwind CSS](https://tailwindcss.com) — styling
- TypeScript throughout

---

## Setup in Under 5 Minutes

### Prerequisites

- Node.js 18+
- npm or pnpm
- An Aomi API key (get one at [aomi.dev](https://aomi.dev))

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/aomi-polymarket-demo
cd aomi-polymarket-demo

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
```

### Environment Variables

Add your Aomi backend URL to `.env.local`:

```bash
NEXT_PUBLIC_BACKEND_URL=https://api.aomi.dev
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Configure Your API Key

Once the widget loads, click the **key icon** in the top control bar and paste your Aomi API key. Select your configured app from the dropdown. You are live.

---

## How It Works

### The User Problem

A retail Polymarket trader opens the platform, sees 50+ active markets, and has to manually assess probability, liquidity, order book depth, and sentiment — all before placing a trade. Most of the time, they guess. They lose to better-informed participants who have tooling they don't.

### The Aomi Solution

This assistant wraps Polymarket's public APIs as Aomi tools. When a user asks "what's the probability on the US recession market and is smart money buying YES or NO?", the AI:

1. Calls the Polymarket Gamma API to fetch the relevant market
2. Pulls order book data from the CLOB API
3. Analyzes current probability, volume, and liquidity conditions
4. Returns a clear, conversational answer with actionable context
5. If the user wants to trade, builds a transaction preview — simulated against live chain state before any wallet interaction

### The Safety Layer

Every on-chain action runs through Aomi's simulation-first pipeline:

```text
User intent → AI constructs transaction → Anvil simulation → 
User sees exact outcome → User confirms → Wallet signs
```

The AI never executes anything the user did not explicitly approve.

---

## Project Structure

```text
aomi-polymarket-demo/
├── app/
│   ├── layout.tsx          # Root layout with TooltipProvider
│   └── page.tsx            # Main chat page mounting AomiFrame
├── components/
│   ├── aomi-frame.tsx      # Core Aomi widget (installed via shadcn)
│   ├── control-bar.tsx     # API key, app selector, network controls
│   ├── connect-button.tsx  # Wallet connection
│   └── ...                 # Additional Aomi UI primitives
├── lib/
│   └── aomi-auth-adapter.ts # Wallet auth interface
├── .env.local              # Environment variables (not committed)
└── README.md
```

---

## Example Prompts

Once configured, try these in the chat:

```text
"Find me the highest volume prediction markets right now"
"What's the current probability on Trump winning the 2026 midterms?"
"Show me crypto markets with the most movement today"
"Is the order book on the US recession market showing accumulation?"
"I want to place 50 USDC on YES for this market — show me a preview"
```

---

## Why Prediction Markets

Prediction markets are uniquely suited for AI assistance because the core challenge is information synthesis at speed. A trader who can process 20 markets simultaneously, cross-reference order book depth with probability movement, and assess sentiment signals has a structural edge.

Aomi makes that edge accessible to anyone with a conversation.

I built this vertical specifically because I've lived the user problem. At Orra, an on-chain prediction market protocol on Solana, I onboarded 28 users live in a single session and watched where the friction was in real time. The gap between "I have a strong opinion on this outcome" and "I know how to express that opinion effectively on-chain" is exactly where this assistant lives.

---

## What I'd Build Next

**Cross-market correlation engine.** If you're holding YES on a crypto regulation market, the AI detects related markets moving against your position in real time and surfaces hedge opportunities. Essentially: an AI risk manager for retail prediction market traders, built on Aomi's simulation pipeline.

**Telegram bot deployment.** Aomi's native Telegram integration means the same assistant — same tools, same simulation safety — deploys without any frontend code. Prediction market communities live on Telegram. Meet them there.

**Portfolio health scoring.** Track open positions across all active markets, model expected value against current probabilities, and surface rebalancing opportunities before resolution.

---

## Built By

Funsho Akinbile — Web3 Growth & Ecosystem Operator  
[X](https://x.com/funshoakinbile) · [LinkedIn](https://linkedin.com/in/funsho-akinbile-ops)

Built as a take-home submission for [Aomi](https://aomi.dev).  
Started: Thursday, April 24, 2026.
