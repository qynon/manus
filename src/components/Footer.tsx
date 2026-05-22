import { KRUZHOK } from "@/data/kruzhok";

const { links } = KRUZHOK;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerMeta">
          <span>© 2026 manus — Олимпиадная школа</span>
          <span>Клуб по подготовке к олимпиадам по математике</span>
          <span>hello@manus.school</span>
        </div>
        <div className="footerLinks">
          <a href={links.feedback} target="_blank" rel="noreferrer">
            Отзывы
          </a>
          <a href="#contacts">Политика обработки персональных данных</a>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="footerMegaLogo"
        src="/assets/brand/logo-footer.png"
        alt="manus — Олимпиадная школа"
      />
    </footer>
  );
}
