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
import clsx from "clsx";

const navMenus = [
  {
    id: 1,
    title: "關於工會",
    children: [
      {
        id: 1,
        title: "本會簡介",
        url: "/about-association/about-us",
      },
      {
        id: 2,
        title: "理事長的話",
        url: "/about-association/chairperson-remark",
      },
      {
        id: 3,
        title: "歷屆理事長",
        url: "/about-association/former-chairpersons",
      },
      {
        id: 4,
        title: "理監事組織表",
        url: "/about-association/board-of-directors",
      },
      {
        id: 5,
        title: "各委員會施政理念",
        url: "/about-association/the-governing-philosophies-of-each-committee",
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
        url: "/news-and-notices?type=1",
      },
      {
        id: 2,
        title: "醫事公告",
        url: "/news-and-notices?type=2",
      },
      {
        id: 3,
        title: "友會/校友會公告",
        url: "/news-and-notices?type=3",
      },
      {
        id: 4,
        title: "大會專區",
        url: "/news-and-notices?type=4",
      },
      {
        id: 5,
        title: "社福團體活動公告",
        url: "/news-and-notices?type=5",
      },
      {
        id: 6,
        title: "七院校牙醫學系學生下鄉課輔活動",
        url: "/news-and-notices?type=6",
      },
      {
        id: 7,
        title: "新型冠狀病毒防疫專區",
        url: "/news-and-notices?type=7",
      },
      {
        id: 8,
        title: "醫師執業執照到期專區",
        url: "/news-and-notices?type=8",
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
        url: "/",
      },
      {
        id: 2,
        title: "活動快訊",
        url: "/",
      },
      {
        id: 3,
        title: "線上報名",
        url: "/",
      },
      {
        id: 4,
        title: "活動花絮",
        url: "/",
      },
      {
        id: 5,
        title: "會員專區",
        url: "/",
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
        url: "/",
      },
      {
        id: 2,
        title: "會員福利",
        url: "/",
      },
      {
        id: 3,
        title: "繼續教育積分查詢",
        url: "/",
      },
      {
        id: 4,
        title: "應繳費用查詢",
        url: "/",
      },
      {
        id: 5,
        title: "繳費紀錄查詢",
        url: "/",
      },
    ],
  },
  {
    id: 5,
    title: "口衛專案計畫",
    url: "/",
  },
  {
    id: 6,
    title: "重要公文公告",
    children: [
      {
        id: 1,
        title: "輔導追蹤作業流程",
        url: "/",
      },
      {
        id: 2,
        title: "健保相關資料查詢",
        url: "/",
      },
      {
        id: 3,
        title: "保險公告",
        url: "/",
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
        url: "/",
      },
      {
        id: 2,
        title: "待審法規",
        url: "/",
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
        url: "/",
      },
      {
        id: 2,
        title: "活動訊息",
        url: "/",
      },
    ],
  },
  {
    id: 9,
    title: "表格下載",
    children: [
      {
        id: 1,
        title: "公會會籍申辦資料",
        url: "/",
      },
      {
        id: 2,
        title: "衛生局執業申辦資料",
        url: "/",
      },
      {
        id: 3,
        title: "申請健保特約流程",
        url: "/",
      },
      {
        id: 4,
        title: "會費信用卡授權書",
        url: "/",
      },
      {
        id: 5,
        title: "其他資料下載",
        url: "/",
      },
      {
        id: 6,
        title: "手術同意書表下載",
        url: "/",
      },
    ],
  },
  {
    id: 10,
    title: "學術活動",
    url: "/",
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
    scrollAreaRef.current
      ?.querySelector(`[data-radix-scroll-area-viewport]`)
      ?.scrollTo(0, 0);
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
              {navMenus.map(({ id, title, url, children }) => (
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
                    <Link href={url ?? ""} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          CustomItemClasses
                        )}
                      >
                        {title}
                      </NavigationMenuLink>
                    </Link>
                  )}

                  {children && children.length > 0 ? (
                    <NavigationMenuContent>
                      <ul className="flex flex-col w-min">
                        {children?.map(({ id, title, url }) => (
                          <ListItem
                            key={id}
                            title={title}
                            className={cn(CustomItemClasses)}
                            href={url}
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
        onClick={() => setMenuOpen(false)}
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
              {navMenus.map(({ id, title, url, children }) => (
                <AccordionItem value={String(id)} key={id}>
                  {children ? (
                    <>
                      <AccordionTrigger
                        className="hover:no-underline text-white"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        {title}
                      </AccordionTrigger>
                      <AccordionContent className="bg-emerald-600 text-white">
                        {children.map(({ id, title, url }) => (
                          <Link
                            key={id}
                            href={url}
                            className="flex flex-1 items-center justify-between py-4 pl-5 font-medium transition-all"
                          >
                            {title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={url}
                      className="flex flex-1 items-center py-4 font-medium transition-all text-white"
                    >
                      {title}
                      <ChevronRight className="text-white w-4 h-4" />
                    </Link>
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
        className={clsx(
          "fixed left-3 top-2.5 z-50 block min-[1262px]:hidden hover:bg-emerald-600 p-2 rounded-full",
          menuOpen ? "bg-emerald-700" : "bg-emerald-500"
        )}
      >
        <MenuIcon className="text-white" />
      </Button>
    </>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
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
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
