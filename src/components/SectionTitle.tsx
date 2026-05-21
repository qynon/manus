import type { CSSProperties } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  color?: string;
  hideEyebrow?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  color = "#0B84F3",
  hideEyebrow = false,
}: Props) {
  return (
    <div className="sectionHead">
      {!hideEyebrow && eyebrow && (
        <div
          className="eyebrow"
          style={{ ["--c" as string]: color } as CSSProperties}
        >
          {eyebrow}
        </div>
      )}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
