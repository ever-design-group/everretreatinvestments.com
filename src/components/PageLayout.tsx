import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  bg?: "black" | "white" | "off-white";
  showCta?: boolean;
  hero?: React.ReactNode;
}

export function PageLayout({
  children,
  title,
  subtitle,
  bg = "white",
  showCta = true,
  hero,
}: PageLayoutProps) {
  const bgClass =
    bg === "black"
      ? "bg-brand-black text-white"
      : bg === "off-white"
        ? "bg-brand-off-white"
        : "bg-brand-white";

  return (
    <>
      <Header />
      <main className={`flex-1 ${bgClass}`}>
        {hero ? (
          hero
        ) : (
          <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-40">
            <div className="mx-auto max-w-[1440px]">
              <h1
                className={`text-4xl font-bold leading-tight md:text-6xl md:leading-tight ${
                  bg === "black" ? "text-white" : "text-black"
                }`}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
                    bg === "black" ? "text-white/70" : "text-brand-gray-600"
                  }`}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </section>
        )}
        {children}
      </main>
      {showCta && <FinalCTA />}
      <Footer />
    </>
  );
}