import type { CSSProperties } from "react";
import { KRUZHOK } from "@/data/kruzhok";
import { SectionTitle } from "./SectionTitle";
import { GraduateCarousel } from "./GraduateCarousel";

const { universities, graduates } = KRUZHOK;

export function Admissions({ color = "#0B84F3" }: { color?: string } = {}) {
  return (
    <section
      id="admissions"
      className="section"
      style={{ ["--c" as string]: color } as CSSProperties}
    >
      <SectionTitle
        eyebrow="Поступления"
        title="Куда поступили выпускники manus"
        text="Дипломы олимпиад открывают двери в лучшие вузы страны."
        color={color}
      />
      <div className="uniLogos">
        {universities.map((u) => (
          <div
            className="uniLogo"
            key={u.short}
            style={{ ["--c" as string]: color } as CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/${u.logo}`} alt={u.name} />
            <span>
              <b>{u.short}</b>
              <small>{u.name}</small>
            </span>
          </div>
        ))}
      </div>
      <GraduateCarousel items={graduates} color={color} />
    </section>
  );
}
