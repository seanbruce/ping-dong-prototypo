import { cn } from "@/lib/utils";

type SectionParagraphProps =
  | {
      highlight: true;
      highlightCount?: number;
      indent?: false;
      className?: string;
      children: string;
    }
  | {
      indent: true;
      highlight?: false;
      highlightCount?: number;
      className?: string;
      children: string;
    }
  | {
      indent?: false;
      highlight?: false;
      highlightCount?: number;
      className?: string;
      children: string;
    };

export default function SectionParagraph({
  indent = true,
  highlight = false,
  highlightCount = 2,
  className,
  children,
}: SectionParagraphProps) {
  if (highlight) {
    const highLightContent = children.slice(0, highlightCount);
    const normalContent = children.slice(highlightCount);
    return (
      <p className={cn("leading-7 tracking-wide", className)}>
        <span className="float-left text-teal-500 font-bold text-3xl lg:text-5xl leading-none mr-1 mt-2.5 lg:mr-2">
          {highLightContent}
        </span>
        {normalContent}
      </p>
    );
  }
  return (
    <p
      className={cn(
        "leading-7 tracking-wide",
        indent && "indent-[4ch]",
        className
      )}
    >
      {children}
    </p>
  );
}
