import { ServicesSubNav } from "@/components/ServicesSubNav";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServicesSubNav />
      {children}
    </>
  );
}
