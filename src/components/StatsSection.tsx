import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2,456+", label: "Enrolled Pupils" },
  { value: "52", label: "Dedicated Teachers" },
  { value: "37", label: "School Rooms" },
  { value: "1977", label: "Year Established" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gold-bar py-10" ref={ref}>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.5s ease-out ${i * 100}ms, transform 0.5s ease-out ${i * 100}ms`,
            }}
          >
            <div className="text-3xl font-extrabold text-gold-foreground sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-gold-foreground/80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
