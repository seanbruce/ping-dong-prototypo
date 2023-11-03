"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { committees } from "../_config/committees";
import { ChevronDownSquare } from "lucide-react";

export default function SelectCommitteeLink() {
  const [_, committeeUrl] = useSelectedLayoutSegments();
  const matchedCommittee = committees.find(
    (committee) => committee.url === committeeUrl
  );
  return (
    <div className="mb-8 lg:hidden">
      <Link
        href="/about-association/the-governing-philosophies-of-each-committee/select-committee"
        className="text-teal-600 flex items-center gap-1"
      >
        {matchedCommittee ? matchedCommittee.name : "選擇委員會"}
        <ChevronDownSquare className="w-4 h-4" />
      </Link>
    </div>
  );
}
