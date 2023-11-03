interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-teal-600 font-bold border-l-2 border-teal-600 pl-2 text-lg tracking-wide mb-3">
      {children}
    </h2>
  );
}
