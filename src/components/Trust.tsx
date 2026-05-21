import { SectionTitle } from "./SectionTitle";

const ITEMS: Array<[string, string]> = [
  ["5 лет", "готовим к олимпиадам, тысячи выпускников поступили БВИ"],
  ["1000+", "отзывов ученики оставили в канале и ВК"],
  ["−13%", "можно вернуть через налоговый вычет"],
  ["БВИ", "дипломы олимпиад открывают топовые вузы"],
];

export function Trust() {
  return (
    <section className="section trustSection">
      <SectionTitle
        eyebrow="Почему manus"
        title="Система, где всё уже собрано"
        text="Записи, конспекты, тесты, практика, кураторы, пробники и личный кабинет с дедлайнами — всё вокруг одного предмета."
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
