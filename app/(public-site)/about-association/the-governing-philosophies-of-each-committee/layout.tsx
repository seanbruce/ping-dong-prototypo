import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import SelectCommitteeLink from "./_components/select-committee-link";
import { committees } from "./_config/committees";

export default async function Layout({
  children,
  select,
}: {
  children: React.ReactNode;
  select: React.ReactNode;
}) {
  return (
    <>
      <Card>
        <CardHeader className="border-b-2 border-emerald-500">
          <CardTitle>各委員會施政理念</CardTitle>
        </CardHeader>
        <CardContent className="py-8">
          <SelectCommitteeLink />
          <ul className="hidden border border-gray-200 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-gray-200 rounded overflow-hidden mb-8">
            {committees.map((committee) => (
              <li key={committee.name}>
                <Link
                  href={`/about-association/the-governing-philosophies-of-each-committee/committee/${committee.url}`}
                  className="group flex items-center gap-2 px-2 py-1.5 text-sm transition-colors bg-white hover:bg-emerald-500 hover:text-white"
                >
                  <FaChevronRight className="text-emerald-500 w-3 h-3 group-hover:text-white" />
                  {committee.name}
                </Link>
              </li>
            ))}
            <li className="col-span-full  md:col-span-1 lg:col-span-2 xl:col-span-3 bg-white" />
          </ul>
          {children}
        </CardContent>
      </Card>
      {select}
    </>
  );
}
