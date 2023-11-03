import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "../_components/section-title";
import SectionParagraph from "../_components/section-paragraph";

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-teal-500">
        <CardTitle>理事長的話</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <div className="bg-teal-50 px-2 py-3 lg:px-5 lg:py-6 flex flex-col lg:flex-row border-b border-teal-600 mb-6">
          <div className="flex-auto order-last lg:order-first">
            <p className="text-teal-600 font-bold mb-2 text-center lg:text-left">
              台北市牙醫師公會理事長
              <span className="text-xl text-black mx-2">温斯勇</span>醫師
            </p>
            <p className="font-bold">學歷</p>
            <ul className="list-disc list-outside pl-4 mb-2 tracking-wide">
              <li>國立陽明大學牙醫學士</li>
            </ul>
            <p className="font-bold">經歷</p>
            <ul className="list-disc list-outside pl-4 tracking-wide">
              <li>中華民國牙醫師公會全國聯合會第11屆首席副秘書長</li>
              <li>陽明大學牙醫校友總會副會長</li>
              <li>牙醫門診醫療服務台北區審查分會第10、11、12屆常務委員</li>
              <li>台北市牙醫師公會執行長</li>
              <li>台北市牙醫師公會醫事委員會主委</li>
              <li>2023大台北國際牙展暨學術年會總幹事</li>
              <li>台大醫院牙科部醫師</li>
            </ul>
          </div>
          <div className="w-full max-w-[300px] mx-auto aspect-square lg:w-40 lg:h-40 bg-slate-400 mb-4 lg:mb-0"></div>
        </div>
        <div>
          <h2 className="text-teal-600 font-bold border-l-2 border-teal-600 pl-2 text-lg tracking-wide mb-3">
            凡事豈能盡如人意，但求無愧我心
          </h2>
          <SectionParagraph>
            從牙醫系畢業後不久，熱心公益的陽明學長、中華民國牙醫師公會全國聯合會理事長陳彥廷醫師（時任財務主委），引領我進入校友會以及公會服務的大門。當年我選擇最感興趣的醫事委員會擔任委員，學習六年之後，進入理事會。此次承蒙前輩先進提攜與後輩支持，被委以台北市牙醫師公會大家長的重責，最要緊的核心任務，仍鎖定在完善會員服務與持續爭取會員福祉。
          </SectionParagraph>
        </div>
        <Separator className="my-8" />
        <div>
          <SectionTitle>爭取更合理的非健保給付項目成本核定</SectionTitle>
          <SectionParagraph>
            牙醫師臨床操作醫療的執業內容，性質更接近於外科，然而國稅局對於牙科非健保給付項目的成本核定，卻是比照內科，採最低標的40%計算。醫療成本正逐年提高，尤其在新冠疫情後更為顯著，牙醫界為提升感染管制的品質，做足了功夫，遺憾的是努力似乎並未受到應有的肯定。
          </SectionParagraph>
          <SectionParagraph>
            我們都樂於善盡國民的納稅義務，只不過我輩期待繳稅多是因為收入提高，而不是因為醫療成本被低估。我多年來主張透過公會的力量，經由正規管道，持續溝通和爭取，籲請衛生當局和相關主管機關重新審視，給予牙科更為合理的成本核定標準。
          </SectionParagraph>
        </div>
        <Separator className="my-8" />
        <div>
          <p>針對攸關公會未來前景的發展策略，特別擬定四大方向</p>
          <p className="font-bold">
            「公共政策主動出擊，擴大參與拓展視野，同業整合異業結盟，行銷雙北耀眼台灣」
          </p>
        </div>
        <Separator className="my-8" />
        <p>
          理事長專訪詳見{" "}
          <a
            href="https://reurl.cc/WDQ9qL"
            target="_blank"
            className="text-blue-500"
          >
            https://reurl.cc/WDQ9qL
          </a>
        </p>
      </CardContent>
    </Card>
  );
}
