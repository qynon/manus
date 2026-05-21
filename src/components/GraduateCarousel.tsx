"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Graduate } from "@/data/kruzhok";
import { Arrow } from "./icons";

function GraduateCard({ g, color }: { g: Graduate; color: string }) {
  return (
    <article
      className="graduateCard"
      style={{ ["--c" as string]: color } as CSSProperties}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/${g.photo}`} alt={g.name} loading="lazy" />
      <div>
        <h3>{g.name}</h3>
        <b>{g.university}</b>
        <p>{g.program}</p>
      </div>
    </article>
  );
}

export function GraduateCarousel({
  items,
  color,
}: {
  items: Graduate[];
  color: string;
}) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    down: false,
    pointerType: "",
    x: 0,
    left: 0,
    moved: false,
  });
  const loopItems = useMemo(() => [...items, ...items, ...items], [items]);

  const step = useCallback((dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".graduateCard");
    const delta = card
      ? (card as HTMLElement).getBoundingClientRect().width + 18
      : 420;
    rail.scrollBy({ left: delta * dir, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const middle = rail.scrollWidth / 3;
    rail.scrollLeft = middle;
    const id = window.setInterval(() => step(1), 10000);
    const onScroll = () => {
      const part = rail.scrollWidth / 3;
      if (rail.scrollLeft < part * 0.35) rail.scrollLeft += part;
      if (rail.scrollLeft > part * 2.35) rail.scrollLeft -= part;
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(id);
      rail.removeEventListener("scroll", onScroll);
    };
  }, [step]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail) return;
    dragRef.current = {
      down: true,
      pointerType: e.pointerType || "mouse",
      x: e.clientX,
      left: rail.scrollLeft,
      moved: false,
    };
    rail.classList.add("dragging");
    if ((e.pointerType || "mouse") !== "touch") {
      try {
        rail.setPointerCapture?.(e.pointerId);
      } catch {}
    }
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || !dragRef.current.down) return;
    if (dragRef.current.pointerType === "touch") return;
    const dx = e.clientX - dragRef.current.x;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    rail.scrollLeft = dragRef.current.left - dx;
  };
  const onPointerUp = () => {
    dragRef.current.down = false;
    railRef.current?.classList.remove("dragging");
  };

  return (
    <div className="graduateCarousel">
      <button
        type="button"
        className="carouselBtn prev"
        onClick={() => step(-1)}
        aria-label="Предыдущий выпускник"
      >
        <Arrow color={color} size={34} />
      </button>
      <div
        className="graduateRail"
        ref={railRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {loopItems.map((g, i) => (
          <GraduateCard key={`${g.name}-${i}`} g={g} color={color} />
        ))}
      </div>
      <button
        type="button"
        className="carouselBtn next"
        onClick={() => step(1)}
        aria-label="Следующий выпускник"
      >
        <Arrow color={color} size={34} />
      </button>
    </div>
  );
}
