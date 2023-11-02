import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import StyledLink from "../about-association/_components/styled-link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 py-10">
      <div className="px-2 md:px-4 lg:container mx-auto flex flex-col lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-col">
          <h1 className="text-2xl font-bold mb-3 text-center lg:text-left pl-3">
            最新消息
          </h1>
          <ScrollArea className="w-full lg:w-[280px]">
            <ul className="flex flex-row justify-center lg:flex-col whitespace-nowrap shadow-lg rounded-md">
              <StyledLink
                href="/news-and-notices?type=1"
                className="rounded-l-md lg:rounded-bl-none lg:rounded-t-md"
              >
                會務公告
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">醫事公告</StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                友會／校友會公告
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                口衛專案計劃
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                健保相關資料查詢
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">健保公告</StyledLink>
              <StyledLink href="/news-and-notices?type=1">法規公告</StyledLink>
              <StyledLink href="/news-and-notices?type=1">待審法規</StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                牙醫助理專區
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">大會專區</StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                社福團體活動公告
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                七院校牙醫學系學生下鄉課輔活動
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                新型冠狀病毒防疫專區
              </StyledLink>
              <StyledLink
                href="/news-and-notices?type=1"
                className="rounded-r-md lg:rounded-tr-none lg:rounded-b-md"
              >
                牙醫師執業執照到期專區
              </StyledLink>
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex-auto break-all">{children}</div>
      </div>
    </div>
  );
}
