import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    id: "1",
    model: "CMC Veryca A190",
    plateNo: "KEA-0001",
  },
  {
    id: "2",
    model: "DFSK KingCab",
    plateNo: "KEA-0002",
  },
  {
    id: "3",
    model: "Mitsubishi Delica",
    plateNo: "KEA-0003",
  },
];

export default function Page() {
  return (
    <div className="p-4">
      {vehicles.map((vehicle, index, array) => (
        <Fragment key={index}>
          <div className="p-4 bg-white flex flex-col gap-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="font-bold">品牌型號:</span>
              <span>{vehicle.model}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold">車牌號碼:</span>
              <span>{vehicle.plateNo}</span>
            </p>
          </div>
          {index < array.length - 1 && <Separator />}
        </Fragment>
      ))}
      <Button className="w-full mt-2">添加車輛</Button>
    </div>
  );
}
