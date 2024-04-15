import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
