"use client";

import {
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { KRUZHOK } from "@/data/kruzhok";
import { ArrowRightIcon } from "./icons";
import { SectionTitle } from "./SectionTitle";

const { courses, reviews: allReviews, oldReviews, links } = KRUZHOK;

const homePhotoOrder = ["hist1", "soc3", "law1", "lit1"];

const courseColor = courses[0]?.color || "#0B84F3";

const colorFor = () => courseColor;

function pickHomeReviews() {
  const mathCourse = courses[0];
  if (!mathCourse) return [];
  const pool = allReviews.length ? allReviews : [];
  return pool.slice(0, 4).map((review, i) => ({
    ...review,
    courseInfo: mathCourse,
    photoIndex: i + 1,
  }));
}

export function Reviews() {
  const cards = pickHomeReviews();
  const marqueeItems = oldReviews.length ? oldReviews : allReviews;

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    down: false,
    pointerType: "",
    x: 0,
    left: 0,
    moved: false,
  });
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = marqueeRef.current;
    if (!el) return;
    dragRef.current = {
      down: true,
      pointerType: e.pointerType || "mouse",
      x: e.clientX,
      left: el.scrollLeft,
      moved: false,
    };
    el.classList.add("dragging");
    if ((e.pointerType || "mouse") !== "touch") {
      try {
        el.setPointerCapture?.(e.pointerId);
      } catch {}
    }
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = marqueeRef.current;
    if (!el || !dragRef.current.down) return;
    if (dragRef.current.pointerType === "touch") return;
    const dx = e.clientX - dragRef.current.x;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.left - dx;
  };
  const onPointerUp = () => {
    dragRef.current.down = false;
    marqueeRef.current?.classList.remove("dragging");
  };

  return (
    <section id="reviews" className="section reviewSection homeReviews">
      <SectionTitle
        eyebrow="Отзывы"
        title="Что говорят ученики"
        color="#A23DF2"
      />
      <div className="reviewMosaic">
        {cards.map((review, index) => (
          <div
            className={`reviewPair${index > 1 ? " isFlipped" : ""}`}
            key={`${review.subject}-${review.name}`}
          >
            <figure className={`reviewPhoto reviewPhoto${index + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/assets/reviews/${homePhotoOrder[index]}.jpg`}
                alt=""
                loading="lazy"
              />
            </figure>
            <article
              className="reviewCard"
              style={
                {
                  ["--c" as string]: review.courseInfo.color,
                  ["--soft" as string]: review.courseInfo.soft,
                } as CSSProperties
              }
            >
              <header>
                <h3>{review.name}</h3>
                <p>{review.course}</p>
              </header>
              <div className="reviewTags">
                <span>{review.subject}</span>
              </div>
              <p className="reviewText" lang="ru">
                {review.text}
              </p>
            </article>
          </div>
        ))}
      </div>
      <div
        className="reviewMarquee"
        ref={marqueeRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="reviewTrack">
          {[...marqueeItems, ...marqueeItems].map((r, i) => (
            <blockquote
              key={`${r.subject}-${r.name}-${i}`}
              style={{ ["--c" as string]: colorFor() } as CSSProperties}
            >
              <p>«{r.text}»</p>
              <cite>{r.name}</cite>
              <span>
                {r.subject}
                {r.course ? ` (${r.course})` : ""}
              </span>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="reviewsMoreWrap">
        <a
          href={links.feedback}
          target="_blank"
          rel="noreferrer"
          className="reviewsMore btn ghost"
        >
          Все отзывы в Telegram <ArrowRightIcon size={20} />
        </a>
      </div>
    </section>
  );
}
