import { clsx } from "clsx";

type MDXParagraphProps = { children: React.ReactNode; indent?: boolean };

export default function MDXParagraph({
  indent = true,
  children,
}: MDXParagraphProps) {
  return (
    <div
      className={clsx(
        "text-gray-800 text-lg leading-relaxed mb-5",
        indent && "indent-9"
      )}
    >
      {children}
    </div>
  );
}

export function Highlighted({ children }: { children: React.ReactNode }) {
  return (
    <span className="float-left text-emerald-500 font-bold text-5xl leading-none mt-1 mb-1 mr-1">
      {children}
    </span>
  );
}
