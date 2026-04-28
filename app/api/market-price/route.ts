export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tokens = searchParams.get("tokens") || "SOL,ETH,BTC";

  try {
    const tokenList = tokens.split(",").map((t) => t.trim().toUpperCase());

    const tokenIds: Record<string, string> = {
      SOL: "solana",
      ETH: "ethereum",
      BTC: "bitcoin",
    };

    const ids = tokenList
      .filter((t) => tokenIds[t])
      .map((t) => tokenIds[t])
      .join(",");

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    const text = await response.text();
    const data = JSON.parse(text);

    const prices: Record<string, { price: string }> = {};
    tokenList.forEach((token) => {
      const id = tokenIds[token];
      if (id && data[id]) {
        prices[token] = {
          price: data[id].usd.toFixed(2),
        };
      }
    });

    return NextResponse.json({
      prices,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch prices", details: String(error) },
      { status: 500 }
    );
  }
}