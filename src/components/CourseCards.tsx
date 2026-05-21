import type { CSSProperties } from "react";
import Link from "next/link";
import { KRUZHOK } from "@/data/kruzhok";
import { Arrow, ArrowRightIcon } from "./icons";
import { SectionTitle } from "./SectionTitle";

const { courses } = KRUZHOK;

export function CourseCards() {
  return (
    <section id="courses" className="section">
      <SectionTitle
        eyebrow="Курс"
        title="Олимпиадная математика"
        text="Один предмет, одна выверенная программа: теория, практика, кураторы, дедлайны и пробники в формате ВсОШ и перечневых."
      />
      <div className="courseCards">
        {courses.map((c) => (
          <Link
            key={c.id}
            href={`/${c.id}`}
            className="courseCard"
            style={
              {
                ["--c" as string]: c.color,
                ["--soft" as string]: c.soft,
              } as CSSProperties
            }
          >
            <div className="cardTop">
              <Arrow color={c.color} size={44} />
              <span>{c.lessons}</span>
            </div>
            <h3>{c.titleCap}</h3>
            <p>{c.promise}</p>
            <div className="miniFacts">
              <span>{c.classes}</span>
              <span>{c.dates}</span>
            </div>
            <strong>
              Подробнее <ArrowRightIcon size={22} />
            </strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
