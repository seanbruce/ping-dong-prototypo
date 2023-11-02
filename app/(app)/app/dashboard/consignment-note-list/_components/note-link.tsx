"use client";
import { useRouter } from "next/navigation";
import { TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function NoteLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <TableRow
      className={cn("cursor-pointer", className)}
      onClick={() => router.push(`/app/dashboard/consignment-note`)}
    >
      {children}
    </TableRow>
  );
}
