import dynamic from "next/dynamic";

const Content = dynamic(() => import("./_components/content"), { ssr: false });

export default function Page() {
  return <Content />;
}
