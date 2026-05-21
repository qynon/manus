import type { CSSProperties } from "react";

export const ArrowCircle = ({
  color = "#1E7BFF",
  size = 64,
}: {
  color?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    style={{ flexShrink: 0 }}
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="32" fill={color} />
    <path
      d="M17 28.5h23.7L31.8 19.6 36.7 15 53 31.5 36.7 48 31.8 43.4l8.9-8.9H17z"
      fill="#fff"
    />
  </svg>
);

export const Arrow = ArrowCircle;

export const ArrowRightIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    className="lucideArrow"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 5 7 7-7 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExternalIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    className="lucideArrow"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 17 17 7"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 7h9v9"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo = ({
  size = 28,
  mono = false,
  style,
}: {
  size?: number;
  mono?: boolean;
  style?: CSSProperties;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/brand/logo.png"
    alt="manus — олимпиадная школа"
    style={{
      height: size * 1.6,
      width: "auto",
      display: "block",
      filter: mono ? "brightness(0) invert(1)" : "none",
      ...style,
    }}
  />
);
