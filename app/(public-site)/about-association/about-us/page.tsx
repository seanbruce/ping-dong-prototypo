import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SectionParagraph from "../_components/section-paragraph";

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-emerald-500">
        <CardTitle>活動快訊</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <SectionParagraph className="mb-4" highlight={true} highlightCount={6}>
          屏東醫師公會，沿革民國35年本縣隸屬高雄州分會，屏東市醫師公會直到民國39年間。
          政府改制本市為縣轄市後，由本縣部份醫界先進，在郭一清醫師努力奔走之下，共同籌組屏東縣醫師公會，同年
          11月27日屏東縣政府核准立案於焉成立屏東縣醫師公會。郭一清醫師擔任首屆理事長，本會行政區域為
          33 鄉鎮，
          劃分為5個行政區，即屏東區、東港區、潮州區、恆春區、里港區，為提升行政效率，民國89年間，經理監事會議
          通過改為4區，里港併入屏東區，但理事名額保留1席，初始每屆會員代表大會選舉9名理事、3名監事、組成理監事會，任期3年，
          推行一切會務。
        </SectionParagraph>
        <SectionParagraph className="mb-4">
          民國65年因會員驟聚依據人民團體組織法規修正，改為會員代表制，召開會員代表大會，理事為15名、監事5名。
          民國91年7月13日，第18屆第10次理監事聯席會提出，為強化公會組織功能，依據醫師法第37條第1項規定，通過同
          意增加理事6名、監事2名，合計28名，並於民國92年4月27日第19屆第1次會員代表大會通過實施，並增設四個委員
          會分工為會員服務， (一）學術委員會 (二）醫療政策委員會
          (三）社區醫療促進委員會 (四）醫療疏失防制委員會。
        </SectionParagraph>
        <SectionParagraph className="mb-4">
          從第 1 屆至第 9
          屆，本會居無定所，辦公處所由每屆理事長當選人負責提供，十分簡陋，直到第10屆有鑑於會員快
          數成長，經理監事會議一致同意，設置固定會址，於民國 65
          年集資購買座落屏東市仁愛路 75-6 號，佔地 23.5 坪三
          樓透天店面，作為辦公處所，由於公會會務及活動與日俱增，重要的醫師繼續教育，依規定應持續辦理，經
          10 年
          後，迫於現實環境需求，舊會館功能明顯不足，再尋覓更大空間，由第12屆黃榮耀當選理事長主導，全體理監事一
          致通過，覓地興建 5 層大樓，佔地 155
          坪的現址，原會館先變賣集資金先行購地，而後黃理事長率理監事及總幹事
          到各鄉鎮，挨家挨戶募款，會員踴躍捐獻。
        </SectionParagraph>
        <SectionParagraph>
          民國73年間，經數次理監事會決議，從購地、挑選興建藍圖、工程招標，建造大樓等一連串程序，於民國74年10月
          大樓完工啟用，由地下室至頂樓共5層，每層建坪80坪，一樓為辦公室及會客大廳，二樓小型會議室、圖書室，三
          樓大禮堂設置為慶典宴客餐廳，四樓為可容納150人的大型會議禮堂、音響及冷氣設備齊全，地下樓為桌球、撞球
          室另增加卡啦OK設備為會員聯誼室，另設停車場可容納會員及集會及洽公停放。
        </SectionParagraph>
      </CardContent>
    </Card>
  );
}