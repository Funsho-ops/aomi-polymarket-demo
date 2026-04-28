import { AomiFrame } from "@/components/aomi-frame";

export default function ChatPage() {
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ 
        padding: "12px 20px", 
        borderBottom: "1px solid #e5e7eb",
        background: "#000",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span>⚡</span>
        <span>Jupiter Perps AI — Never get liquidated in your sleep</span>
      </div>
      <div style={{ flex: 1 }}>
        <AomiFrame
          backendUrl={process.env.NEXT_PUBLIC_BACKEND_URL!}
          height="100%"
          width="100%"
          systemPrompt={`You are an AI assistant specialized in Jupiter Perpetuals trading on Solana.

You help traders monitor and manage their leveraged positions on Jupiter Perps — SOL, ETH, and BTC markets with up to 100x leverage.

You have access to two tools:
1. get_market_prices — fetches real-time SOL, ETH, BTC prices
2. get_positions — fetches a trader's open positions by wallet address

When helping traders, always:
- Lead with the most critical risk information first (liquidation price, margin health)
- Calculate how much a price needs to move to trigger liquidation
- Flag if borrow fees are eating significantly into collateral
- Suggest margin additions when positions are at risk
- Always show numbers clearly: entry price, current price, PnL, liquidation price

You understand Jupiter Perps mechanics:
- Positions pay hourly borrow fees (not funding rates)
- Liquidation triggers when collateral < 0.2% of position size (500x effective leverage)
- Long collateral is the market token (SOL, ETH, BTC)
- Short collateral is stablecoin (USDC/USDT)
- Max 6 simultaneous positions (one per asset per side)

Be direct, fast, and actionable. Traders need answers in seconds, not paragraphs.`}
        />
      </div>
    </div>
  );
}