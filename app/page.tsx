const uuid = () => Math.random().toString(36).slice(2);

const navMenus = [
  {
    id: uuid(),
    title: "關于工會",
    children: [
      {
        id: uuid(),
        title: "本會簡介",
      },
      {
        id: uuid(),
        title: "理事長的話",
      },
      {
        id: uuid(),
        title: "歷屆理事長",
      },
      {
        id: uuid(),
        title: "理監事組織表",
      },
      {
        id: uuid(),
        title: "各委員會施政理念",
      },
    ],
  },
  {
    id: uuid(),
    title: "消息公告",
    children: [
      {
        id: uuid(),
        title: "會務公告",
      },
      {
        id: uuid(),
        title: "醫事公告",
      },
      {
        id: uuid(),
        title: "友會/校友會公告",
      },
      {
        id: uuid(),
        title: "大會專區",
      },
      {
        id: uuid(),
        title: "社福團體活動公告",
      },
      {
        id: uuid(),
        title: "七院校牙醫學系學生下鄉課輔活動",
      },
      {
        id: uuid(),
        title: "新型冠狀病毒防疫專區",
      },
      {
        id: uuid(),
        title: "牙醫師執業執照到期專區",
      },
    ],
  },
  {
    id: uuid(),
    title: "活動看板",
    children: [
      {
        id: uuid(),
        title: "行事曆",
      },
      {
        id: uuid(),
        title: "活動快訊",
      },
      {
        id: uuid(),
        title: "線上報名",
      },
      {
        id: uuid(),
        title: "活動花絮",
      },
      {
        id: uuid(),
        title: "會員專區",
      },
    ],
  },
  {
    id: uuid(),
    title: "會員專區",
    children: [
      {
        id: uuid(),
        title: "基本資料",
      },
      {
        id: uuid(),
        title: "會員福利",
      },
      {
        id: uuid(),
        title: "繼續教育積分查詢",
      },
      {
        id: uuid(),
        title: "應繳費用查詢",
      },
      {
        id: uuid(),
        title: "繳費紀錄查詢",
      },
    ],
  },
  {
    id: uuid(),
    title: "口衛專案計畫",
  },
  {
    id: uuid(),
    title: "健保專區",
    children: [
      {
        id: uuid(),
        title: "輔導追蹤作業流程",
      },
      {
        id: uuid(),
        title: "健保相關資料查詢",
      },
      {
        id: uuid(),
        title: "保險公告",
      },
    ],
  },
  {
    id: uuid(),
    title: "醫療法規",
    children: [
      {
        id: uuid(),
        title: "法規公告",
      },
      {
        id: uuid(),
        title: "待審法規",
      },
    ],
  },
  {
    id: uuid(),
    title: "牙醫助理專區",
    children: [
      {
        id: uuid(),
        title: "相關辦法",
      },
      {
        id: uuid(),
        title: "活動訊息",
      },
    ],
  },
  {
    id: uuid(),
    title: "下載專區",
    children: [
      {
        id: uuid(),
        title: "公會會籍申辦資料",
      },
      {
        id: uuid(),
        title: "衛生局執業申辦資料",
      },
      {
        id: uuid(),
        title: "申請健保特約流程",
      },
      {
        id: uuid(),
        title: "會費信用卡授權書",
      },
      {
        id: uuid(),
        title: "其他資料下載",
      },
      {
        id: uuid(),
        title: "手術同意書表下載",
      },
    ],
  },
  {
    id: uuid(),
    title: "線上服務",
    children: [
      {
        id: uuid(),
        title: "線上問卷",
      },
      {
        id: uuid(),
        title: "線上學習",
      },
    ],
  },
  {
    id: uuid(),
    title: "北市牙醫雜誌",
  },
];

export default function Home() {
  return (
    <>
      <header className="h-[100px] bg-gray-100"></header>
      <nav className="min-h-[40px] bg-emerald-500 container mx-auto"></nav>
    </>
  );
}
