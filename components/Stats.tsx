import { useState } from "react";
import svgPaths from "../imports/svg-uuz93z7oy3";

const stats = [
  { value: "500+", label: "Zorgverstrekkers" },
  { value: "2.000+", label: "Matches gemaakt" },
  { value: "<2h", label: "Response tijd" },
  { value: "98%", label: "Kwaliteitscore" },
];

export function Stats() {
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  return (
    <div
      className="border-t-[3px] border-b-[3px] border-black py-8 relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308 308'%3E%3Cpath d='${encodeURIComponent(svgPaths.p1dafdd00)}' fill='%23F26F8D' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: "308px 308px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, index) => {
          const colors = [
            "#FF1493",
            "#4ADE80",
            "#FCD34D",
            "#2DD4BF",
          ];
          const color = colors[index];

          return (
            <div
              key={index}
              className="text-center transition-all duration-300"
              style={{
                transform:
                  hoveredIndex === index
                    ? "scale(1.05)"
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  fontSize: "3.5rem",
                  color: color,
                  letterSpacing: "0.02em",
                  textShadow: "3px 3px 0px rgb(0,0,0)",
                  lineHeight: "1",
                  marginBottom: "0.5rem",
                  fontWeight: "700",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-black uppercase"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}