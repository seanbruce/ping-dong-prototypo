import SectionParagraph from "../../../_components/section-paragraph";

export default async function Page(props: {
  params: {
    id: string;
  };
}) {
  return (
    <div id="content">
      <div className="bg-teal-50 px-2 py-3 lg:px-5 lg:py-6 flex flex-col lg:flex-row border-b border-teal-600 mb-6">
        <div className="flex-auto order-last lg:order-first">
          <p className="text-teal-600 font-bold mb-2 text-lg  text-center lg:text-left">
            監事會
          </p>
          <p className="text-sm font-bold grid grid-cols-[100px_1fr]">
            <span className="text-teal-600">監事召集人</span>
            <span>許仕聰</span>

            <span className="text-teal-600">常務監事</span>
            <span>王俊勝、李建雄</span>

            <span className="text-teal-600">監事</span>
            <span>王哲訓、林春長、孫奕貞、許榮庭、黃舜德、鄭翔宇</span>
          </p>
        </div>
        <div className="w-full max-w-[300px] mx-auto aspect-square lg:w-40 lg:h-40 bg-slate-400 mb-4 lg:mb-0"></div>
      </div>
      <SectionParagraph className="mb-4">
        本會自
        35年成立以來，下設理事會暨監事會，目前監事會置常務監事3人，由監事互選之，另由常務監事互選1人為監事會召集人，監事會成員合計9名。
      </SectionParagraph>
      <SectionParagraph className="mb-4">
        本人8月在同袍之薦舉下接任監事會召集人乙職，深感責任重大，在各北市公會會員醫師會所推之菁英集聚相挺為後盾，本人將善盡監督管理之責，並依循前輩們的步伐更向前邁進，以不負所托。
      </SectionParagraph>
      <SectionParagraph indent={false} className="mb-2">
        監事會召集人之職權如下：
      </SectionParagraph>
      <ol className="list-decimal list-outside pl-4 tracking-wide mb-4">
        <li>召開監事會</li>
        <li>綜理監督本會會務</li>
      </ol>
      <SectionParagraph indent={false} className="mb-2">
        監事會之職權如下：
      </SectionParagraph>
      <ol className="list-decimal list-outside pl-4 tracking-wide mb-4">
        <li>監察理事會工作之執行</li>
        <li>審核年度決算</li>
        <li>稽查、監督本會財產</li>
        <li>行使會員提請覆議、罷免之事項</li>
        <li>選舉或罷免常務監事</li>
        <li>議決監事或常務監事之辭職</li>
        <li>行使本會各項選舉之監督權</li>
        <li>函請理事長召開（臨時）會員（會員代表）大會</li>
        <li>其他應監察事項</li>
      </ol>
    </div>
  );
}
