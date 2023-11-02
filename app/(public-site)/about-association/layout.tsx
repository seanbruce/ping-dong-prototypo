import StyledLink from "./_components/styled-link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
            簡介
          </h1>
          <ScrollArea className="w-full lg:w-[190px]">
            <ul className="flex flex-row justify-center lg:flex-col whitespace-nowrap">
              <StyledLink
                href="/about-association/about-us"
                className="lg:rounded-t-md"
              >
                本會簡介
              </StyledLink>

              <StyledLink href="/about-association/chairperson-remark">
                理事長的話
              </StyledLink>

              <StyledLink href="/about-association/former-chairpersons">
                歷届理事長
              </StyledLink>

              <StyledLink href="/about-association/board-of-directors">
                理監事組織表
              </StyledLink>

              <StyledLink
                href="/about-association/the-governing-philosophies-of-each-committee"
                className="lg:rounded-b-md"
              >
                各委員會施政理念
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
