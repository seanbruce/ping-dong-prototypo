import googleMapVertical from "@/public/assets/google-map-vertical.png";
import googleMapHorizontal from "@/public/assets/google-map-horizontal.png";
import Image from "next/image";
import { Circle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <>
      <div>
        <Image
          src={googleMapVertical}
          alt="google map"
          className="@md:hidden"
        />
        <Image
          src={googleMapHorizontal}
          alt="google map"
          className="hidden @md:block"
        />
      </div>
      <div className="px-6 pt-4 pb-2 bg-white flex flex-col gap-2 border-b">
        <h1 className="tracking-wider font-bold">
          <span className="inline-block w-20">訂單標題:</span>
          2023/11/02XXXX處理單
        </h1>
        <p className="font-bold">
          <span className="inline-block w-20">訂單編號:</span>091231512387712
        </p>
        <p className="font-bold">
          <span className="inline-block w-20">車號:</span>2387712
        </p>
      </div>
      <div className="p-4 bg-white flex flex-row gap-2">
        <div className="flex flex-col justify-center items-center">
          <Circle className="w-3 h-3" />
          <div
            style={{ writingMode: "vertical-rl" }}
            className="relative left-1 mt-1 mb-0.5 text-gray-600 tracking-widest"
          >
            ...
          </div>
          <MapPin className="w-4 h-4" />
        </div>
        <div className="grow flex flex-col gap-2">
          <div className="text-sm font-bold flex justify-between items-center">
            <span className="line-clamp-1">
              高雄巨蛋 813高雄市左營區博愛二路757號
            </span>
            <Button size="sm" variant="secondary" className="whitespace-nowrap">
              起運地申報
            </Button>
          </div>
          <div className="text-sm font-bold flex justify-between items-center">
            <span className="line-clamp-1">高雄市鳳山區青年路二段317-2號</span>
            <Button size="sm" variant="secondary" className="whitespace-nowrap">
              迄運地申報
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
