import { Settings, Home } from "lucide-react";
import Link from "next/link";
import LayoutTitle from "./_components/layout-title";
import { ScrollArea } from "@/components/ui/scroll-area";
import BackButton from "./_components/back-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container h-full relative flex flex-col">
      <header className="h-[56px] bg-emerald-500 text-white font-bold grid grid-cols-[56px_1fr_56px] items-center	 py-2 px-1 gap-1">
        <div>
          <BackButton />
        </div>
        <LayoutTitle />
        <div />
      </header>
      <ScrollArea className="h-[calc(100%-56px-60px)] bg-gray-100">
        {children}
      </ScrollArea>
      <footer className="h-[60px] bg-white border-t flex justify-evenly items-center gap-2">
        <Link
          href="/app/dashboard"
          className="py-2 flex flex-col items-center gap-0.5"
        >
          <Home className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold">首頁</span>
        </Link>
        <Link
          href="/app/dashboard/settings"
          className="py-2 flex flex-col items-center gap-0.5"
        >
          <Settings className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold">設置</span>
        </Link>
      </footer>
    </div>
  );
}
