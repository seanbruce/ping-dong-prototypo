import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const priorToTheReorganization = [
  {
    term: "第一屆",
    year: "35~36",
    name: "陳發得",
  },
  {
    term: "第二屆",
    year: "37~38",
    name: "陳增全",
  },
  {
    term: "第三屆",
    year: "39~40",
    name: "余樹",
  },
  {
    term: "第四屆",
    year: "41~42",
    name: "余樹",
  },
  {
    term: "第五屆",
    year: "43~44",
    name: "陳發得",
  },
  {
    term: "第六屆",
    year: "45~46",
    name: "陳發得",
  },
  {
    term: "第七屆",
    year: "47~48",
    name: "張玉琪",
  },
  {
    term: "第八屆",
    year: "49~50",
    name: "王錦秀",
  },
  {
    term: "第九屆",
    year: "51~52",
    name: "王錦秀",
  },
  {
    term: "第十屆",
    year: "53~54",
    name: "廖水清",
  },
];

const afterToTheReorganization = [
  {
    term: "第一屆",
    year: "56~58",
    name: "廖水清",
    camping: "",
  },
  {
    term: "第二屆",
    year: "59~61",
    name: "葉信德",
    camping: "",
  },
  {
    term: "第三屆",
    year: "62~64",
    name: "葉信德",
    camping: "",
  },
  {
    term: "第四屆",
    year: "65~67",
    name: "李英祥",
    camping: "中山",
  },
  {
    term: "第五屆",
    year: "68~69",
    name: "陳信甫",
    camping: "高醫",
  },
  {
    term: "第六屆",
    year: "70~71",
    name: "王國陽",
    camping: "北醫",
  },
  {
    term: "第七屆",
    year: "72~73",
    name: "賴海元",
    camping: "中山",
  },
  {
    term: "第八屆",
    year: "74~75",
    name: ["王永哲", "姚振華"],
    camping: ["高醫", "國防"],
  },
  {
    term: "第九屆",
    year: "76~77",
    name: "張信彥",
    camping: "中山",
  },
  {
    term: "第十屆",
    year: "78~79",
    name: "王宏仁",
    camping: "北醫",
  },
  {
    term: "第十一屆",
    year: "80~81",
    name: "楊俊杰",
    camping: "台大",
  },
  {
    term: "第十二屆",
    year: "82~84",
    name: "陳時中",
    camping: "北醫",
  },
  {
    term: "第十三屆",
    year: "85~87",
    name: "王誠良",
    camping: "中山",
  },
  {
    term: "第十四屆",
    year: "88~90",
    name: "蘇鴻輝",
    camping: "高醫",
  },
  {
    term: "第十五屆",
    year: "91~93",
    name: "葛建埔",
    camping: "北醫",
  },
  {
    term: "第十六屆",
    year: "94~96",
    name: ["黃建文", "陳世岳"],
    camping: ["中山", "高醫"],
  },
  {
    term: "第十七屆",
    year: "97~99",
    name: ["陳彥廷", "林世榮"],
    camping: ["陽明", "台大"],
  },
  {
    term: "第十八屆",
    year: "100~102",
    name: ["陳義聰", "黃明裕", "李明憲"],
    camping: ["北醫", "北醫", "北醫"],
  },
  {
    term: "第十九屆",
    year: "103~105",
    name: ["蔡珍重", "劉賢哲", "吳永隆"],
    camping: ["中山", "高醫", "中山"],
  },
  {
    term: "第二十屆",
    year: "106~109",
    name: ["陳日生", "潘建誠"],
    camping: ["國防", "中國"],
  },
  {
    term: "第二十一屆",
    year: ["109/8/31~110/8/30", "110/8/31~111/6/27", "111/6/28~112/3/19"],
    name: ["賴德欽", "顏志忠", "蕭仰嶔"],
    camping: ["中山", "高醫", "台大"],
  },
];

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-teal-500">
        <CardTitle>歷屆理事長</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <h2 className="text-teal-600 font-bold border-l-2 border-teal-600 pl-2 text-lg tracking-wide mb-3">
          改制前
        </h2>
        <Table>
          <TableCaption>改制前理事長列表</TableCaption>
          <TableHeader className="border-b-2 border-teal-600">
            <TableRow className="bg-teal-50 hover:bg-teal-50">
              <TableHead className="text-teal-600 font-bold text-center">
                屆次
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center">
                年度(民國)
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center">
                姓名
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {priorToTheReorganization.map((term, index) => (
              <TableRow
                key={term.term}
                className={cn(
                  index % 2 === 0 && "bg-slate-50",
                  "hover:bg-teal-50"
                )}
              >
                <TableCell className="p-2 text-center">{term.term}</TableCell>
                <TableCell className="p-2 text-center border-l">
                  {term.year}
                </TableCell>
                <TableCell className="p-2 text-center border-l">
                  {term.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h2 className="text-teal-600 font-bold border-l-2 border-teal-600 pl-2 text-lg tracking-wide mb-3">
          改制后
        </h2>
        <Table>
          <TableCaption>改制后理事長列表</TableCaption>
          <TableHeader className="border-b-2 border-teal-600">
            <TableRow className="bg-teal-50 hover:bg-teal-50">
              <TableHead className="text-teal-600 font-bold text-center">
                屆次
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center">
                年度(民國)
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center">
                姓名
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center">
                校別
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {afterToTheReorganization.map((term, index) => {
              return (
                <TableRow
                  key={term.term}
                  className={cn(
                    index % 2 === 0 && "bg-slate-50",
                    "hover:bg-teal-50"
                  )}
                >
                  <TableCell className="p-2 text-center">{term.term}</TableCell>
                  <TableCell
                    className={cn(
                      "text-center",
                      "border-l",
                      Array.isArray(term.year) ? "p-0" : "p-2"
                    )}
                  >
                    {Array.isArray(term.year) ? (
                      <div className="flex flex-col">
                        {term.year.map((y, i, array) => (
                          <p
                            key={i}
                            className={cn(
                              "py-1.5",
                              i < array.length - 1 && "border-b"
                            )}
                          >
                            {y}
                          </p>
                        ))}
                      </div>
                    ) : (
                      term.year
                    )}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "text-center",
                      "border-l",
                      Array.isArray(term.name) ? "p-0" : "p-2"
                    )}
                  >
                    {Array.isArray(term.name) ? (
                      <div className="flex flex-col">
                        {term.name.map((n, i, array) => (
                          <p
                            key={i}
                            className={cn(
                              "py-1.5",
                              i < array.length - 1 && "border-b"
                            )}
                          >
                            {n}
                          </p>
                        ))}
                      </div>
                    ) : (
                      term.name
                    )}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "text-center",
                      "border-l",
                      Array.isArray(term.camping) ? "p-0" : "p-2"
                    )}
                  >
                    {Array.isArray(term.camping) ? (
                      <div className="flex flex-col">
                        {term.camping.map((c, i, array) => (
                          <p
                            key={i}
                            className={cn(
                              "py-1.5",
                              i < array.length - 1 && "border-b"
                            )}
                          >
                            {c}
                          </p>
                        ))}
                      </div>
                    ) : (
                      term.camping
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
