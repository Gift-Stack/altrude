import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-4">
      <div className="flex iitems-center justify-between w-full">
        <p className="text-2xl font-semibold">Hello world, Altrude here </p>
        {/* <WalletButton wallet="metamask" /> */}
        <ConnectButton />
      </div>
    </main>
  );
}
