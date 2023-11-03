"use client";
import { useState, useRef } from "react";
import { Plus, Siren, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SpeedDial() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen((prev) => prev && false);
  });
  return (
    <TooltipProvider delayDuration={20}>
      <div
        className="absolute right-2 bottom-2 group flex flex-col items-center gap-2"
        ref={ref}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              className={cn(
                "rounded-full w-12 h-12 transition-all delay-100 ease-in-out",
                open ? "opacity-100" : "opacity-0"
              )}
            >
              <Siren />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>緊急通報</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              className={cn(
                "rounded-full w-12 h-12 transition-all delay-75 ease-in-out",
                open ? "opacity-100" : " opacity-0 "
              )}
            >
              <Upload />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>上傳</p>
          </TooltipContent>
        </Tooltip>
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
    </TooltipProvider>
  );
}
