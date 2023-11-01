import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const committees = [
  {
    name: "監事會",
    url: "board-of-supervisors",
  },
  {
    name: "出版委員會",
    url: "publications-committee",
  },
  {
    name: "醫事委員會",
    url: "medical-affairs-committee",
  },
  {
    name: "口腔醫療委員會",
    url: "dental-medical-committee",
  },
  {
    name: "財務委員會",
    url: "finance-committee",
  },
  {
    name: "學術委員會",
    url: "academic-committee",
  },
  {
    name: "福利委員會",
    url: "welfare-committee",
  },
  {
    name: "財源開發計劃委員會",
    url: "resource-development-planning-committee",
  },
  {
    name: "公共關係事務委員會",
    url: "public-relations-affairs-committee",
  },
  {
    name: "大陸事務委員會",
    url: "mainland-affairs-committee",
  },
  {
    name: "資訊委員會",
    url: "information-committee",
  },
  {
    name: "牙體技術事務委員會",
    url: "dental-technology-affairs-committee",
  },
  {
    name: "牙醫助理認證事務委員會",
    url: "dental-assistant-certification-committee",
  },
  {
    name: "牙科感染管制委員會",
    url: "dental-infection-control-committee",
  },
  {
    name: "國際事務委員會",
    url: "international-affairs-committee",
  },
  {
    name: "特殊需求者口腔照護委員會",
    url: "special-needs-oral-care-committee",
  },
  {
    name: "法令制度委員會",
    url: "legal-and-regulatory-affairs-committee",
  },
  {
    name: "會務人員考核委員會",
    url: "membership-assessment-committee",
  },
  {
    name: "會員服務委員會",
    url: "membership-services-committee",
  },
  {
    name: "發展計劃委員會",
    url: "development-planning-committee",
  },
  {
    name: "保險業務委員會",
    url: "insurance-business-committee",
  },
  {
    name: "會館基金管理委員會",
    url: "building-fund-management-committee",
  },
  {
    name: "社會運動基金管理委員會",
    url: "social-action-fund-management-committee",
  },
  {
    name: "社會公益基金管理委員會",
    url: "social-welfare-fund-management-committee",
  },
  {
    name: "會員福利基金管理委員會",
    url: "member-welfare-fund-management-committee",
  },
];

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="border-b-2 border-emerald-500">
        <CardTitle>各委員會施政理念</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <ul className="border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-gray-200 rounded overflow-hidden mb-8">
          {committees.map((committee) => (
            <li key={committee.name}>
              <Link
                href={`/about-association/the-governing-philosophies-of-each-committee/${committee.url}`}
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
  );
}
