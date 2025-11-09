import GetInTouch from "@/components/Features/GetInTouch/GetInTouch";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type ConnectSectionProps = {
  className?: string;
};

const ConnectSection = ({ className }: ConnectSectionProps) => {
  const t = useTranslations();

  return (
    <ContentContainer
      sectionId="connect"
      className={cn("flex flex-col gap-12 md:gap-16 md:!pb-40", className)}
    >
      <SectionTitle title={t("connectSection.title") as string} number={4} />
      <div className="flex flex-col gap-14 md:gap-24">
        <GetInTouch />
      </div>
    </ContentContainer>
  );
};

export default ConnectSection;
