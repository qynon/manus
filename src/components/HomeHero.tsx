import type { CSSProperties } from "react";
import Link from "next/link";
import { KRUZHOK } from "@/data/kruzhok";
import { Arrow } from "./icons";

const { courses, links } = KRUZHOK;

export function HomeHero() {
  return (
    <section className="hero homeHero gridBg">
      <div className="heroCopy">
        <h1>Клуб по подготовке к олимпиадам по математике.</h1>
        <p className="heroLead">
          Один предмет, одна выверенная программа: теория, практика, кураторы
          и пробники по математике.
        </p>
        <div className="subjectList">
          {courses.map((c) => (
            <Link
              key={c.id}
              href={`/${c.id}`}
              className="subjectLine"
              style={{ ["--c" as string]: c.color } as CSSProperties}
            >
              <Arrow color={c.color} size={52} />
              <b>{c.title}</b>
            </Link>
          ))}
        </div>
        <div className="heroDates">
          <b>июнь</b>
          <Arrow color="#0B84F3" size={42} />
          <b>ноябрь</b>
        </div>
        <div className="olympTags">
          <span>ВсОШ</span>
          <strong>+</strong>
          <span>Перечни</span>
        </div>
        <div className="heroActions">
          <a href="#courses" className="btn primary">
            Выбрать курс
          </a>
          <a
            href={links.bot}
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            Бот записи
          </a>
        </div>
      </div>
      <div className="heroProof">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/brand/logo.png" alt="manus — олимпиадная школа" />
        <ul>
          <li>Математика</li>
          <li>тысячи выпускников, поступивших БВИ в вузы</li>
          <li>преподаватели — жюри и дипломанты олимпиад</li>
        </ul>
      </div>
    </section>
  );
}
