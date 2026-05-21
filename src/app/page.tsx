import { Header } from "@/components/Header";
import { HomeHero } from "@/components/HomeHero";
import { AboutKruzhok } from "@/components/AboutKruzhok";
import { OlympiadIntro } from "@/components/OlympiadIntro";
import { CourseCards } from "@/components/CourseCards";
import { AppSection } from "@/components/AppSection";
import { Trust } from "@/components/Trust";
import { ResultsBlock } from "@/components/ResultsBlock";
import { Admissions } from "@/components/Admissions";
import { Reviews } from "@/components/Reviews";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "Organization"],
      "@id": "/#organization",
      name: "manus | Олимпиадная школа",
      alternateName: "manus",
      url: "/",
      logo: "/assets/brand/logo.png",
      description:
        "Онлайн-школа олимпиадной подготовки по математике.",
      email: "hello@manus.school",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "/#website",
      url: "/",
      name: "manus | Олимпиадная школа",
      inLanguage: "ru-RU",
      publisher: { "@id": "/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <HomeHero />
      <AboutKruzhok />
      <OlympiadIntro />
      <CourseCards />
      <AppSection />
      <Trust />
      <ResultsBlock />
      <Admissions />
      <Reviews />
      <Contacts />
      <Footer />
    </>
  );
}
