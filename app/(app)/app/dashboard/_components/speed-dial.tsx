"use client";
import { useState, useRef } from "react";
import { Plus, Siren, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";

export default function SpeedDial() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen((prev) => prev && false);
  });
  return (
    <div
      className="absolute right-2 bottom-2 group flex flex-col items-center gap-2"
      ref={ref}
    >
      <Button
        size="sm"
        className={cn(
          "rounded-full w-12 h-12 transition-all delay-100 ease-in-out",
          open ? "opacity-100" : "opacity-0"
        )}
      >
        <Siren />
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full w-12 h-12 transition-all delay-75 ease-in-out",
          open ? "opacity-100" : " opacity-0 "
        )}
      >
        <Upload />
      </Button>
      <Button
        className={cn(
          "rounded-full w-14 h-14 shadow transition-all ease-in-out",
          open ? "rotate-45" : "rotate-0"
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Plus />
      </Button>
    </div>
  );
}
