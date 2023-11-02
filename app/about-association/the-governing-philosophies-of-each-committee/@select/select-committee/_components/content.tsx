"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { committees } from "../../../_config/committees";

export default function Content() {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      onOpenChange={(event) => {
        router.back();
      }}
    >
      <DialogContent className="w-[calc(100dvw-4px)] h-[calc(100dvh-4px)] p-0">
        <ScrollArea>
          <div className="grid grid-cols-1 p-6">
            {committees.map((committee) => (
              <Link
                key={committee.url}
                href={`/about-association/the-governing-philosophies-of-each-committee/committee/${committee.url}`}
                className="py-1"
              >
                {committee.name}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
