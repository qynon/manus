import { SectionTitle } from "./SectionTitle";

export function AppSection() {
  return (
    <section className="section appSection">
      <SectionTitle
        eyebrow="Приложение"
        title="Прогресс, дедлайны и статус работ в одном месте"
        text="У ученика есть личный кабинет: видно домашки, ближайшие занятия, средний балл, дедлайны и уже сданные работы."
        color="#A23DF2"
      />
      <div className="appScreens">
        {[1, 2, 3].map((i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={`/assets/app/app-${i}.jpg`}
            alt="Скриншот приложения"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
