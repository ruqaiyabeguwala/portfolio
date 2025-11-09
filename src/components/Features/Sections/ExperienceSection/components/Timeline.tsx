"use client";

import TechnologiesList from "@/components/UI/TechnologiesList";
import { EXPERIENCES } from "@/data/experiences";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { CalendarIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EXPERIENCE_TIMELINE_ITEM_CLASS = "experience-timeline-item";

type TimelineProps = {
  className?: string;
};

const Timeline = ({ className }: TimelineProps) => {
  const t = useTranslations("experienceSection");

  return (
    <ol className={cn("flex flex-col gap-6 md:gap-10", className)}>
      {EXPERIENCES.map((experience) => (
        <li
          key={experience.key}
          className={cn(
            EXPERIENCE_TIMELINE_ITEM_CLASS,
            "group border-b-border first:border-t-border flex gap-18 border-b pb-6 first:border-t first:pt-6 md:pb-10 md:first:pt-10"
          )}
        >
          <div className="shrink-0 basis-[7.1875rem] max-md:hidden">
            {t(`experiences.${experience.key}.date`)}
          </div>
          <div className="flex w-full flex-col gap-6">
            <div className="flex gap-4 max-md:flex-row-reverse max-md:justify-between">
              <Image
                src={experience.company.logo}
                alt={t(`experiences.${experience.key}.companyName`)}
                width={100}
                height={100}
                className="border-border size-14 rounded-xl border sm:size-18 md:size-20"
              />
              <div className="flex flex-col gap-1 md:gap-2">
                <div className="flex items-center gap-1 md:hidden">
                  <CalendarIcon className="stroke-foreground-2 size-5" />
                  <span>{t(`experiences.${experience.key}.date`)}</span>
                </div>
                <h2 className="subheading">
                  {t(`experiences.${experience.key}.title`)}
                </h2>
                <Link
                  href={experience.company.url}
                  className="font-oswald text-accent text-lg md:text-xl"
                  prefetch
                >
                  <span>
                    {t("atCompany", {
                      companyName: t(
                        `experiences.${experience.key}.companyName`
                      ),
                    })}
                  </span>
                </Link>
              </div>
            </div>
            <TechnologiesList technologies={experience.technologies} />
            <ul className="flex flex-col">
              {t
                .raw(`experiences.${experience.key}.descriptions`)
                .map((description: string) => (
                  <li key={description} className="flex items-start gap-2">
                    <PaperAirplaneIcon className="stroke-accent size-5 flex-shrink-0 pt-1 sm:size-6" />
                    <span>{description}</span>
                  </li>
                ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
