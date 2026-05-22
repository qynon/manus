import { SectionTitle } from "./SectionTitle";

export function AboutKruzhok() {
  return (
    <section className="section aboutKruzhok">
      <SectionTitle
        eyebrow="Что такое manus?"
        title="Клуб по подготовке к олимпиадам по математике"
        text="manus — это системный клуб: одна программа, команда из олимпиадной среды, выверенная практика."
        color="#08C84B"
      />
      <div className="aboutLayout">
        <div className="aboutText">
          <p>
            manus — это не набор разрозненных вебинаров, а одна выверенная
            траектория по математике: теория, практика, кураторы, дедлайны и
            пробники.
          </p>
          <p>
            Миссия простая: сделать олимпиадную математику доступной для
            любого ученика, вне зависимости от региона и школьной среды.
          </p>
        </div>
        <div className="aboutPhotos">
          {[1, 2, 3, 4].map((i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={`/assets/about/about-${i}.jpg`}
              alt="manus"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
