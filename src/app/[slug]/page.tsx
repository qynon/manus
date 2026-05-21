import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { KRUZHOK } from "@/data/kruzhok";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contacts } from "@/components/Contacts";
import { SectionTitle } from "@/components/SectionTitle";
import { Arrow, ArrowRightIcon, ExternalIcon } from "@/components/icons";

const { courses, links } = KRUZHOK;

type Slug = string;

const findCourse = (slug: Slug) => courses.find((c) => c.id === slug);

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: Slug }> },
): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) return { title: "manus" };
  const title = `${course.titleCap} — manus`;
  return {
    title,
    description: course.promise ?? `Курс manus по направлению «${course.titleCap}».`,
    openGraph: {
      title,
      description: course.promise ?? `Курс manus по направлению «${course.titleCap}».`,
    },
  };
}

function get<T = unknown>(obj: unknown, key: string): T | undefined {
  if (obj && typeof obj === "object" && key in (obj as Record<string, unknown>)) {
    return (obj as Record<string, T>)[key];
  }
  return undefined;
}

export default async function CoursePage(
  { params }: { params: Promise<{ slug: Slug }> },
) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) {
    notFound();
  }

  const color = course.color;
  const soft = course.soft;
  const includes = get<string[]>(course, "includes") ?? [];
  const olympiads =
    get<Array<{ name: string; url?: string; text?: string }>>(course, "olympiads") ?? [];
  const schedule = get<string[]>(course, "schedule") ?? [];
  const team = get<Array<[string, string, string]>>(course, "team") ?? [];
  const results = get<string[]>(course, "results") ?? [];
  const homework = get<string[]>(course, "homework") ?? [];
  const homeworkTitle = get<string>(course, "homeworkTitle");
  const teacherLead = get<string>(course, "teacherLead");
  const teacherText = get<string>(course, "teacherText");
  const heroLead = get<string>(course, "heroLead");
  const tags = get<string[]>(course, "tags") ?? ["ВсОШ", "Перечни"];
  const schedulePdf = get<string>(course, "schedulePdf");
  const payLink = get<string>(course, "payLink");

  return (
    <>
      <Header />
      <main
        className="coursePage"
        style={
          {
            ["--c" as string]: color,
            ["--soft" as string]: soft,
          } as CSSProperties
        }
      >
        <section className="hero homeHero gridBg coursePageHero">
          <div className="heroCopy">
            <div
              className="eyebrow"
              style={{ ["--c" as string]: color } as CSSProperties}
            >
              Направление manus
            </div>
            <h1 style={{ color }}>{course.titleCap}</h1>
            {heroLead ? (
              <p className="heroLead">{heroLead}</p>
            ) : (
              <p className="heroLead">
                {course.promise ??
                  `Курс manus по направлению «${course.titleCap}».`}
              </p>
            )}
            <div className="olympTags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="miniFacts">
              <span>{course.classes}</span>
              <span>{course.dates}</span>
              <span>{course.lessons}</span>
            </div>
            <div className="heroActions">
              {payLink && payLink !== "#" ? (
                <a
                  href={payLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                  style={{ ["--c" as string]: color } as CSSProperties}
                >
                  Записаться <ArrowRightIcon size={20} />
                </a>
              ) : (
                <a
                  href={links.bot}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                  style={{ ["--c" as string]: color } as CSSProperties}
                >
                  Записаться через бот <ArrowRightIcon size={20} />
                </a>
              )}
              <Link href="/" className="btn ghost">
                Все направления
              </Link>
            </div>
          </div>
          <div className="heroProof">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brand/logo.png" alt="manus" />
            <ul>
              <li>{course.lectures}</li>
              <li>{course.lessons}</li>
              <li>{course.classes}</li>
              <li>{course.dates}</li>
            </ul>
          </div>
        </section>

        {(teacherLead || teacherText) && (
          <section className="section">
            <SectionTitle
              eyebrow="Преподаватель"
              title={teacherLead ?? "Команда направления"}
              text={teacherText}
              color={color}
            />
            {team.length > 0 && (
              <div className="teamGrid">
                {team.map(([name, bio, photo]) => (
                  <article
                    key={name}
                    className="teamCard"
                    style={
                      {
                        ["--c" as string]: color,
                        ["--soft" as string]: soft,
                      } as CSSProperties
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {photo && <img src={`/${photo}`} alt={name} loading="lazy" />}
                    <div>
                      <b>{name}</b>
                      <p>{bio}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {includes.length > 0 && (
          <section className="section">
            <SectionTitle
              eyebrow="Что входит в курс"
              title="Внутри программы"
              color={color}
            />
            <ul
              className="includesList"
              style={{ ["--c" as string]: color } as CSSProperties}
            >
              {includes.map((item, i) => (
                <li key={i}>
                  <Arrow color={color} size={28} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {schedule.length > 0 && (
          <section className="section">
            <SectionTitle
              eyebrow="Расписание"
              title="Программа по неделям"
              color={color}
            />
            <ol
              className="scheduleList"
              style={{ ["--c" as string]: color } as CSSProperties}
            >
              {schedule.map((item, i) => (
                <li key={i}>
                  <span className="scheduleNum">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            {schedulePdf && (
              <a
                href={schedulePdf.startsWith("http") ? schedulePdf : `/${schedulePdf}`}
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
                style={{ marginTop: 24, display: "inline-flex" }}
              >
                Полное расписание PDF <ExternalIcon size={18} />
              </a>
            )}
          </section>
        )}

        {olympiads.length > 0 && (
          <section className="section">
            <SectionTitle
              eyebrow="Олимпиады"
              title="К каким олимпиадам готовим"
              color={color}
            />
            <div className="olympiadList">
              {olympiads.map((o) => (
                <a
                  key={o.name}
                  href={o.url ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="olympiadCard"
                  style={
                    {
                      ["--c" as string]: color,
                      ["--soft" as string]: soft,
                    } as CSSProperties
                  }
                >
                  <b>{o.name}</b>
                  {o.text && <p>{o.text}</p>}
                  <ExternalIcon size={18} />
                </a>
              ))}
            </div>
          </section>
        )}

        {homework.length > 0 && (
          <section className="section">
            <SectionTitle
              eyebrow="Домашка"
              title={homeworkTitle ?? "Как устроена практика"}
              color={color}
            />
            <ul
              className="includesList"
              style={{ ["--c" as string]: color } as CSSProperties}
            >
              {homework.map((item, i) => (
                <li key={i}>
                  <Arrow color={color} size={28} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {results.length > 0 && (
          <section className="section">
            <SectionTitle
              eyebrow="Результаты"
              title="Чего достигают ученики"
              color={color}
            />
            <ul
              className="includesList"
              style={{ ["--c" as string]: color } as CSSProperties}
            >
              {results.map((item, i) => (
                <li key={i}>
                  <Arrow color={color} size={28} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Contacts />
      </main>
      <Footer />
    </>
  );
}
