"use client";

import { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuIcon, Facebook, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import { usePreventScroll } from "react-aria";
import Link from "next/link";
import { BsLine } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [offset, setOffset] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const [value, setValue] = useState("0");
  const [activeTrigger, setActiveTrigger] = useState<HTMLButtonElement | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  usePreventScroll({ isDisabled: !menuOpen });
  const isWide = useMedia("(min-width: 1262px)", false);

  useEffect(() => {
    setMenuOpen(false);
  }, [isWide]);

  const scrollMenuToTop = useCallback(() => {
    console.log(
      scrollAreaRef.current
        ?.querySelector(`[data-radix-scroll-area-viewport]`)
        ?.scrollTo(0, 0)
    );
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (activeTrigger && list) {
      const listWidth = list.offsetWidth;
      const listCenter = listWidth / 2;

      const triggerOffsetRight =
        listWidth -
        activeTrigger.offsetLeft -
        activeTrigger.offsetWidth +
        activeTrigger.offsetWidth / 2;

      setOffset(Math.round(listCenter - triggerOffsetRight));
    } else if (value === "") {
      setOffset(null);
    }
  }, [activeTrigger, value]);

  const CustomItemClasses =
    "rounded-none bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:text-white data-[state=open]:bg-emerald-600 hover:text-white text-white";

  return (
    <>
      <header className="h-[60px] bg-emerald-500 flex items-center px-4 min-[1262px]:hidden fixed top-0 inset-x-0 w-full z-30"></header>
      <div className="h-[60px] min-[1262px]:hidden" />
      <header className="h-[100px] bg-white hidden min-[1262px]:block"></header>
      <div className="min-h-[40px] bg-emerald-500 hidden min-[1262px]:block">
        <div className="container mx-auto">
          <NavigationMenu
            className="flex justify-center relative"
            value={value}
            onValueChange={setValue}
          >
            <NavigationMenuList
              className="flex flex-nowrap list-none "
              ref={listRef}
            >
              {navMenus.map(({ id, title, children }) => (
                <NavigationMenuItem
                  key={id}
                  value={String(id)}
                  className="flex-auto"
                >
                  {children && children.length > 0 ? (
                    <NavigationMenuTrigger
                      className={CustomItemClasses}
                      ref={(node) => {
                        if (String(id) === value && activeTrigger !== node) {
                          setActiveTrigger(node);
                        }
                        return node;
                      }}
                    >
                      {title}
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        CustomItemClasses
                      )}
                    >
                      {title}
                    </NavigationMenuLink>
                  )}

                  {children && children.length > 0 ? (
                    <NavigationMenuContent>
                      <ul className="flex flex-col">
                        {children?.map(({ id, title }) => (
                          <ListItem
                            key={id}
                            title={title}
                            className={cn(CustomItemClasses)}
                          >
                            {title}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  ) : null}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <div className="absolute left-0 top-full w-full flex justify-center">
              <NavigationMenuViewport
                style={{
                  // Avoid transitioning from initial position when first opening
                  display: !offset ? "none" : undefined,
                  transform: `translateX(${offset}px)`,
                  top: "100%",
                  width: `var(--radix-navigation-menu-viewport-width)`,
                  minWidth: activeTrigger?.offsetWidth,
                  transition: "all 0.5s ease",
                }}
                className="bg-emerald-500 mt-0 rounded-t-none [&>*]:min-w-full border-0 border-t-2 border-amber-300"
              />
            </div>
          </NavigationMenu>
        </div>
      </div>
      <div
        className={cn(
          "h-[100dvh] bg-emerald-500 fixed inset-0 z-40 min-[1262px]:hidden min-[1262px]:pointer-events-none transition-all duration-500 origin-top-left transform-gpu",
          menuOpen ? "opacity-100" : "opacity-0",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
          menuOpen ? "skew-x-0" : " -skew-x-6",
          menuOpen ? "translate-x-0" : "-translate-x-10"
        )}
      >
        <ScrollArea
          className="h-full absolute inset-0"
          type="scroll"
          ref={scrollAreaRef}
        >
          <div className="bg-emerald-700 px-5 pt-14 pb-0">
            <Button className="mx-auto block mb-4 font-bold" variant="outline">
              登入
            </Button>
            <div className="flex items-center">
              <Link
                href="/"
                className="py-3 flex-auto text-center text-white font-bold"
              >
                首頁
              </Link>
              <Link
                href="/"
                className="py-3 flex-auto text-center text-white font-bold"
              >
                聯絡我們
              </Link>
              <Link
                href="/"
                className="py-3 flex-auto text-center text-white font-bold inline-flex justify-center"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="py-3 flex-auto text-center text-white font-bold inline-flex justify-center"
              >
                <BsLine className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="px-5">
            <Accordion
              type="multiple"
              className="w-full"
              value={expandedMenu}
              onValueChange={(value) => setExpandedMenu(value)}
            >
              {navMenus.map(({ id, title, children }) => (
                <AccordionItem value={String(id)} key={id}>
                  {children ? (
                    <>
                      <AccordionTrigger className="hover:no-underline text-white">
                        {title}
                      </AccordionTrigger>
                      <AccordionContent className="bg-emerald-600 text-white">
                        {children.map(({ id, title }) => (
                          <p
                            key={id}
                            className="flex flex-1 items-center justify-between py-4 pl-5 font-medium transition-all"
                          >
                            {title}
                          </p>
                        ))}
                      </AccordionContent>
                    </>
                  ) : (
                    <div className="flex flex-1 items-center justify-between py-4 font-medium transition-all text-white">
                      {title}
                      <ChevronRight className="text-white w-4 h-4" />
                    </div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
      <Button
        variant="ghost"
        onClick={() =>
          setMenuOpen((prev) => {
            if (!prev) {
              scrollMenuToTop();
              setExpandedMenu([]);
            }
            return !prev;
          })
        }
        className="fixed left-3 top-2.5 z-50 block min-[1262px]:hidden bg-emerald-500 hover:bg-emerald-600 p-2 rounded-full"
      >
        <MenuIcon className="text-white" />
      </Button>
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
