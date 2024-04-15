import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "7726a18009e1545c6f26711c62c9d25c",
  chains: [arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
