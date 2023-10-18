import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {
  return (
    <div className="bg-gray-200 py-10">
      <div className="flex container">
        <div className="mr-8 flex flex-col">
          <h1 className="text-2xl font-bold mb-3">關于工會</h1>
          <ul className="bg-emerald-500 rounded w-[190px] h-[214px]"></ul>
        </div>
        <Card className="h-[780px] flex-auto">1</Card>
      </div>
    </div>
  );
}
