import Link from "next/link";
import Image from "next/image";
import autographVerticalImage from "@/public/assets/autograph-vertical.png";
import { Button } from "@/components/ui/button";
import SaveButton from "./_components/save-button";

export default function Autograph() {
  return (
    <div className="w-full h-full relative">
      <Image src={autographVerticalImage} alt="autograph" fill />
      <div className="flex items-center gap-2 rotate-90 absolute -left-8 bottom-20">
        <Button className="" variant="secondary">
          重置
        </Button>
        <SaveButton />
      </div>
    </div>
  );
}
