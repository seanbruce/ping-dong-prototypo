"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <IoChevronBack />
    </button>
  );
}
