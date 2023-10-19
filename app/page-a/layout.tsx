import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container flex flex-col lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-col">
          <h1 className="text-2xl font-bold mb-3 text-center lg:text-left">
            關于工會
          </h1>
          <ul className="bg-emerald-500 w-full lg:w-[190px]">
            <li className="w-full flex flex-row justify-center lg:flex-col ">
              <StyledLink href="/page-a/article-1">Article1</StyledLink>
              <StyledLink href="/page-a/article-1">Article1</StyledLink>
              <StyledLink href="/page-a/article-1">Article1</StyledLink>
              <StyledLink href="/page-a/article-1">Article1</StyledLink>
              <StyledLink href="/page-a/article-1">Article1</StyledLink>
            </li>
          </ul>
        </div>
        <div className="flex-auto ">{children}</div>
      </div>
    </div>
  );
}

function StyledLink({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="w-32 lg:w-full text-white flex justify-between items-center py-2 px-4 font-bold transition-colors hover:bg-emerald-600 focus:bg-emerald-600 focus:ring-1 focus:ring-orange-400 focus:outline-none"
    >
      {children}
      <FaChevronRight />
    </Link>
  );
}
