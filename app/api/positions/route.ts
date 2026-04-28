import { NextRequest, NextResponse } from "next/server";
import { Connection, PublicKey } from "@solana/web3.js";

const JUPITER_PERPS_PROGRAM_ID = "PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu";
const RPC_URL = "https://api.mainnet-beta.solana.com";

const CUSTODY_MINTS: Record<string, string> = {
  SOL: "So11111111111111111111111111111111111111112",
  ETH: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
  BTC: "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const walletAddress = searchParams.get("wallet");

  if (!walletAddress) {
    return NextResponse.json(
      { error: "wallet address is required" },
      { status: 400 }
    );
  }

  try {
    const connection = new Connection(RPC_URL, "confirmed");
    const programId = new PublicKey(JUPITER_PERPS_PROGRAM_ID);

    const accounts = await connection.getProgramAccounts(programId, {
      filters: [
        { dataSize: 216 },
        {
          memcmp: {
            offset: 8,
            bytes: walletAddress,
          },
        },
      ],
    });

    const positions = accounts.map((account) => {
      const data = account.account.data;
      try {
        const sizeUsd = Number(data.readBigInt64LE(40)) / 1e6;
        const collateralUsd = Number(data.readBigInt64LE(48)) / 1e6;
        const entryPrice = Number(data.readBigInt64LE(56)) / 1e6;
        const liquidationPrice = Number(data.readBigInt64LE(64)) / 1e6;
        const unrealisedPnl = Number(data.readBigInt64LE(72)) / 1e6;
        const borrowFeesUsd = Number(data.readBigInt64LE(80)) / 1e6;

        const leverage =
          collateralUsd > 0 ? (sizeUsd / collateralUsd).toFixed(2) : "0";

        return {
          address: account.pubkey.toString(),
          sizeUsd: sizeUsd.toFixed(2),
          collateralUsd: collateralUsd.toFixed(2),
          entryPrice: entryPrice.toFixed(4),
          liquidationPrice: liquidationPrice.toFixed(4),
          unrealisedPnlUsd: unrealisedPnl.toFixed(2),
          borrowFeesUsd: borrowFeesUsd.toFixed(4),
          leverage: `${leverage}x`,
        };
      } catch {
        return {
          address: account.pubkey.toString(),
          error: "Could not parse position data",
        };
      }
    });

    return NextResponse.json({
      wallet: walletAddress,
      positionCount: positions.length,
      positions,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch positions", details: String(error) },
      { status: 500 }
    );
  }
}