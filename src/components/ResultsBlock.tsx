import type { CSSProperties } from "react";
import { KRUZHOK } from "@/data/kruzhok";
import { Arrow, ExternalIcon } from "./icons";
import { SectionTitle } from "./SectionTitle";

const { courses, links } = KRUZHOK;

const featuredPosts = [
  {
    title: "Результаты сезона",
    url: "https://t.me/kruzhok_olimp/6750",
    image: "/assets/results/result-01.png",
    artWidth: "58%",
    artHeight: "86%",
    artZone: "48%",
  },
  {
    title: "Результаты РАНХиГС",
    url: "https://t.me/kruzhok_olimp/6734",
    image: "/assets/results/result-02.png",
    artWidth: "52%",
    artHeight: "66%",
    artZone: "40%",
  },
  {
    title: "Истории учеников",
    url: "https://t.me/kruzhok_olimp/5610",
    image: "/assets/results/result-03.png",
    artWidth: "38%",
    artHeight: "86%",
    artZone: "30%",
  },
];

const homePhotos = ["r1.jpg", "r2.jpg", "r3.jpg", "r4.jpg", "r5.jpg", "r6.jpg"];

export function ResultsBlock() {
  const rows = [
    "Десятки дипломов заключительного этапа олимпиад по математике у выпускников manus",
    "Сотни дипломов перечневых олимпиад: ВП, Ломоносов, СПбГУ, Турнир им. Савина",
    "Выпускники поступают в МГУ, ВШЭ, МФТИ, СПбГУ и ИТМО",
  ];
  return (
    <section id="results" className="section resultsSection">
      <SectionTitle
        eyebrow="Наши победы"
        title="Результаты учеников"
        color="#0B84F3"
      />
      <div className="resultGrid">
        {rows.map((r, i) => {
          const post = featuredPosts[i] ?? null;
          const fallback =
            links.resultLinks[i % links.resultLinks.length] ?? "#";
          const href = post?.url ?? fallback;
          const color = courses[i % courses.length].color;
          return (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="resultTile"
              key={i}
              style={
                {
                  ["--c" as string]: color,
                  ["--art-w" as string]: post?.artWidth ?? "0%",
                  ["--art-h" as string]: post?.artHeight ?? "0%",
                  ["--art-zone" as string]: post?.artZone ?? "0%",
                } as CSSProperties
              }
            >
              <div className="resultTileBody">
                <p>{r}</p>
              </div>
              <span>
                {post?.title ?? "Результаты учеников"} <ExternalIcon size={18} />
              </span>
              {post?.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="resultTileArt"
                  src={post.image}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </a>
          );
        })}
      </div>
      <div className="photoStrip homePhotoStrip">
        {homePhotos.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p}
            src={`/assets/results/${p}`}
            alt="Ученики manus"
            loading="lazy"
          />
        ))}
      </div>
      <a
        href="#courses"
        className="nextResultCta"
        style={{ ["--c" as string]: "#0B84F3" } as CSSProperties}
      >
        <span>Будешь следующим?</span>
        <Arrow color="#0B84F3" size={54} />
      </a>
    </section>
  );
}
