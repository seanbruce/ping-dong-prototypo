"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  return (
    <button
      disabled={clicked}
      onClick={() => {
        setClicked(true);
        router.back();
      }}
    >
      <IoChevronBack />
    </button>
  );
}
