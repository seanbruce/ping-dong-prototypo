import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-teal-500">
        <CardTitle>理監事組織表</CardTitle>
      </CardHeader>
      <CardContent className="py-8"></CardContent>
    </Card>
  );
}
