"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function StyledLink({
  href,
  children,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <li
      className={cn(
        " text-white text-sm flex justify-between items-center font-bold transition-colors hover:bg-teal-700 focus:bg-teal-700 focus:ring-1 focus:ring-orange-400 focus:outline-none ",
        pathname === href ? "bg-teal-700" : "bg-teal-500",
        className
      )}
    >
      <Link
        href={href}
        className="w-full flex flex-row justify-between items-center py-3 px-4 "
      >
        {children}
        <FaChevronRight className="hidden lg:block" />
      </Link>
    </li>
  );
}
