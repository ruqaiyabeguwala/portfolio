import GhostButton from "@/components/UI/Buttons/GhostButton";
import { SimonCamacho } from "@/components/UI/Icons/Logos";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type LogoLinkProps = {
  className?: string;
};

const LogoLink = ({ className }: LogoLinkProps) => {
  const t = useTranslations("common");

  return (
    <GhostButton className={cn(className)} asChild>
      <Link href="/" prefetch>
        <div>
          <SimonCamacho className="fill-accent size-8 md:size-10" />
          <span className="sr-only">{t("navigateToHome")}</span>
        </div>
      </Link>
    </GhostButton>
  );
};

export default LogoLink;
