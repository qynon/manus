import type { CSSProperties } from "react";
import { KRUZHOK } from "@/data/kruzhok";
import { ArrowRightIcon } from "./icons";

const { links } = KRUZHOK;

export function Contacts() {
  return (
    <section
      id="contacts"
      className="section contactSection"
      style={{ ["--c" as string]: "#0B84F3" } as CSSProperties}
    >
      <div>
        <h2>Записаться на курс</h2>
        <p>
          Записаться на курс можно на сайте, а задать вопрос или уточнить
          детали — в боте.
        </p>
      </div>
      <div className="contactActions">
        <a href="#courses" className="btn primary">
          Записаться <ArrowRightIcon size={22} />
        </a>
        <a
          href={links.help}
          target="_blank"
          rel="noreferrer"
          className="btn white"
        >
          Задать вопрос
        </a>
      </div>
    </section>
  );
}
