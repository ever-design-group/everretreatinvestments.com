export function StatsBar() {
  const stats = [
    { value: "200+", label: "Villas Built" },
    { value: "160+", label: "Team Members" },
    { value: "10+", label: "Years Building in Rwanda" },
    { value: "95%", label: "Avg Occupancy" },
  ];

  return (
    <section className="bg-brand-black py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
