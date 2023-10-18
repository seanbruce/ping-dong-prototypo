"use client";

import { forwardRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navMenus = [
  {
    id: 1,
    title: "關于工會",
    children: [
      {
        id: 1,
        title: "本會簡介",
      },
      {
        id: 2,
        title: "理事長的話",
      },
      {
        id: 3,
        title: "歷屆理事長",
      },
      {
        id: 4,
        title: "理監事組織表",
      },
      {
        id: 5,
        title: "各委員會施政理念",
      },
    ],
  },
  {
    id: 2,
    title: "消息公告",
    children: [
      {
        id: 1,
        title: "會務公告",
      },
      {
        id: 2,
        title: "醫事公告",
      },
      {
        id: 3,
        title: "友會/校友會公告",
      },
      {
        id: 4,
        title: "大會專區",
      },
      {
        id: 5,
        title: "社福團體活動公告",
      },
      {
        id: 6,
        title: "七院校牙醫學系學生下鄉課輔活動",
      },
      {
        id: 7,
        title: "新型冠狀病毒防疫專區",
      },
      {
        id: 8,
        title: "牙醫師執業執照到期專區",
      },
    ],
  },
  {
    id: 3,
    title: "活動看板",
    children: [
      {
        id: 1,
        title: "行事曆",
      },
      {
        id: 2,
        title: "活動快訊",
      },
      {
        id: 3,
        title: "線上報名",
      },
      {
        id: 4,
        title: "活動花絮",
      },
      {
        id: 5,
        title: "會員專區",
      },
    ],
  },
  {
    id: 4,
    title: "會員專區",
    children: [
      {
        id: 1,
        title: "基本資料",
      },
      {
        id: 2,
        title: "會員福利",
      },
      {
        id: 3,
        title: "繼續教育積分查詢",
      },
      {
        id: 4,
        title: "應繳費用查詢",
      },
      {
        id: 5,
        title: "繳費紀錄查詢",
      },
    ],
  },
  {
    id: 5,
    title: "口衛專案計畫",
  },
  {
    id: 6,
    title: "健保專區",
    children: [
      {
        id: 1,
        title: "輔導追蹤作業流程",
      },
      {
        id: 2,
        title: "健保相關資料查詢",
      },
      {
        id: 3,
        title: "保險公告",
      },
    ],
  },
  {
    id: 7,
    title: "醫療法規",
    children: [
      {
        id: 1,
        title: "法規公告",
      },
      {
        id: 2,
        title: "待審法規",
      },
    ],
  },
  {
    id: 8,
    title: "牙醫助理專區",
    children: [
      {
        id: 1,
        title: "相關辦法",
      },
      {
        id: 2,
        title: "活動訊息",
      },
    ],
  },
  {
    id: 9,
    title: "下載專區",
    children: [
      {
        id: 1,
        title: "公會會籍申辦資料",
      },
      {
        id: 2,
        title: "衛生局執業申辦資料",
      },
      {
        id: 3,
        title: "申請健保特約流程",
      },
      {
        id: 4,
        title: "會費信用卡授權書",
      },
      {
        id: 5,
        title: "其他資料下載",
      },
      {
        id: 6,
        title: "手術同意書表下載",
      },
    ],
  },
  {
    id: 10,
    title: "線上服務",
    children: [
      {
        id: 1,
        title: "線上問卷",
      },
      {
        id: 2,
        title: "線上學習",
      },
    ],
  },
  {
    id: 11,
    title: "北市牙醫雜誌",
  },
];

export default function Header() {
  return (
    <>
      <header className="h-[100px] bg-white"></header>
      <div className="min-h-[40px] bg-emerald-500 ">
        <div className="container mx-auto">
          <NavigationMenu className="w-full max-w-full [&>*]:w-full">
            <NavigationMenuList className="flex flex-nowrap w-full">
              {navMenus.map(({ id, title, children }) => (
                <NavigationMenuItem
                  key={id}
                  value={String(id)}
                  className="flex-auto"
                >
                  {children && children.length > 0 ? (
                    <NavigationMenuTrigger className="rounded-none bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 data-[state=open]:bg-emerald-600 hover:text-white text-white">
                      {title}
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuLink className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 text-white">
                      {title}
                    </NavigationMenuLink>
                  )}
                  {children && children.length > 0 ? (
                    <NavigationMenuContent>
                      <ul className="flex flex-col p-4 w-full">
                        {children?.map(({ id, title }) => (
                          <ListItem key={id} title={title}>
                            {title}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  ) : null}
                </NavigationMenuItem>
              ))}
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none whitespace-nowrap">
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
