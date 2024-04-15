import { ConnectButton } from "@rainbow-me/rainbowkit";
import SubmitTransactionButton from "./_components/submitTransactions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-4">
      <div className="flex iitems-center justify-between w-full">
        <p className="text-2xl font-semibold">Hey, Altrude here </p>
        <ConnectButton />
      </div>

      <div className="border rounded-xl p-8 mt-10 w-full">
        <kbd>
          This is a dummy description of what my transaction is about Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident
          earum nisi! Cum explicabo rerum reiciendis sequi! Sit odit ab suscipit
          laboriosam doloremque magni veniam explicabo tempora cumque? Laborum,
          quaerat?
        </kbd>
        <div className="flex pt-5 gap-2">
          <SubmitTransactionButton />
          <button className="rounded-xl px-4 h-11 border border-gray-900">
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}
