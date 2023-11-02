interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-emerald-600 font-bold border-l-2 border-emerald-600 pl-2 text-lg tracking-wide mb-3">
      {children}
    </h2>
  );
}
