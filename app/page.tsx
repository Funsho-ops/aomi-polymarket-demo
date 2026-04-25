import { AomiFrame } from "@/components/aomi-frame";

export default function ChatPage() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <AomiFrame
        backendUrl={process.env.NEXT_PUBLIC_BACKEND_URL!}
        height="100%"
        width="100%"
      />
    </div>
  );
}