import Decorations from "@/components/Features/Decorations";
import Footer from "@/components/Features/Footer/Footer";
import AboutSection from "@/components/Features/Sections/AboutSection";
import ConnectSection from "@/components/Features/Sections/ConnectSection/ConnectSection";
import ExperienceSection from "@/components/Features/Sections/ExperienceSection";
import HeroSection from "@/components/Features/Sections/HeroSection";
import ProjectsSection from "@/components/Features/Sections/ProjectsSection";
import { NAV_ITEMS } from "@/constants/navigation";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/types/locale";

export const dynamic = "force-static";
export const revalidate = 31536000;

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const homePageSections = NAV_ITEMS.map((item) => ({
    id: item.id,
    title: t(`containers.navBar.links.${item.id}`),
    href: item.href,
  }));

  return (
    <>
      <Decorations sections={homePageSections} />
      <main id="main">
        <HeroSection className="h-auto min-h-[calc(100vh-var(--header-height))] !py-8 md:py-20" />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
