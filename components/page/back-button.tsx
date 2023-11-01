"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  return (
    <Button
      variant="outline"
      size="lg"
      disabled={clicked}
      onClick={() => {
        setClicked(true);
        router.back();
      }}
    >
      返回
    </Button>
  );
}
