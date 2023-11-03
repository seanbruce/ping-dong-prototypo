"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SaveButton() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  return (
    <Button
      disabled={clicked}
      onClick={() => {
        setClicked(true);
        router.back();
      }}
    >
      存檔
    </Button>
  );
}
