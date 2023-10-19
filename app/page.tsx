import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Card className="col-span-full lg:col-span-2 aspect-video lg:aspect-auto">
          Carousel
        </Card>
        <div className="aspect-video lg:aspect-square flex flex-col gap-5">
          <Card className="hidden lg:block bg-emerald-500 h-[100px]">2-1</Card>
          <Card className=" flex-auto">2-2</Card>
        </div>
        <Card className=" h-[475px]">
          <CardHeader>
            <CardTitle>最新消息</CardTitle>
          </CardHeader>
        </Card>
        <Card className=" h-[475px]">
          <CardHeader>
            <CardTitle>活動快訊</CardTitle>
          </CardHeader>
        </Card>
        <Card className=" h-[475px]">
          <CardHeader>
            <CardTitle>福利活動</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="h-[162px] bg-white"></div>
    </div>
  );
}
