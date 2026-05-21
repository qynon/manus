import Link from "next/link";
import { ArrowRightIcon, Logo } from "./icons";

export function Header() {
  return (
    <header className="topbar">
      <Link href="/" className="brand" aria-label="На главную">
        <Logo size={23} />
      </Link>
      <nav className="topnav">
        <Link href="/#courses">Курсы</Link>
        <Link href="/#results">Результаты</Link>
        <Link href="/#reviews">Отзывы</Link>
        <Link href="/#contacts">Контакты</Link>
      </nav>
      <Link href="/#courses" className="navCta">
        Записаться <ArrowRightIcon size={20} />
      </Link>
    </header>
  );
}
