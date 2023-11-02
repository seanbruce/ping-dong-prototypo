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
            表格下載
          </h1>
          <ScrollArea className="w-full lg:w-[280px]">
            <ul className="flex flex-row justify-center lg:flex-col whitespace-nowrap shadow-lg rounded-md">
              <StyledLink
                href="/download-section?type=1"
                className="rounded-l-md lg:rounded-bl-none lg:rounded-t-md"
              >
                公會會籍申辦資料
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                衛生局執業申辦資料
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                申請健保特約流程
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                會費信用卡授權書
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                其他資料下載
              </StyledLink>
              <StyledLink
                href="/download-section?type=1"
                className="rounded-r-md lg:rounded-tr-none lg:rounded-b-md"
              >
                手術同意書表下載
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
