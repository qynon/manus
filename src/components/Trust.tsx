import { SectionTitle } from "./SectionTitle";

const ITEMS: Array<[string, string]> = [
  ["Год", "клубу по подготовке к олимпиадам по математике"],
  ["БВИ", "дипломы олимпиад открывают топовые вузы"],
];

export function Trust() {
  return (
    <section className="section trustSection">
      <SectionTitle
        eyebrow="Почему manus"
        title="Система, где всё уже собрано"
        text="Записи, конспекты, тесты, практика, кураторы, пробники и личный кабинет с дедлайнами — всё вокруг математики."
        color="#08C84B"
      />
      <div className="trustGrid">
        {ITEMS.map(([a, b], i) => (
          <div className="trustBox" key={i}>
            <b>{a}</b>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
