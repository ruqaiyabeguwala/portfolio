"use client";

import { Project } from "@/types/project";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Skeleton } from "../Primitives/Skeleton";
import TailedButton from "./Buttons/TailedButton";
import ImageWithGridBg from "./ImageWithGridBg";
import TechnologiesList from "./TechnologiesList";

const PROJECT_CARD_ANIMATION_CLASS = "project-card-animated";
const PROJECT_GRID_CONTAINER_CLASS = "project-grid-container";

export const ProjectsGridLoading = ({ className }: { className?: string }) => {
  const fakeCards = Array.from({ length: 4 });

  return (
    <div
      className={cn(
        "grid gap-9 md:gap-12",
        "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(23rem,1fr))]",
        className
      )}
    >
      {fakeCards.map((_, i) => (
        <div key={i} className="flex flex-col gap-5 md:gap-8">
          {/* Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Skeleton className="h-full w-full" />
            <Skeleton className="absolute top-4 left-4 h-6 w-6 rounded" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-3">
            {/* Title */}
            <Skeleton className="h-6 w-32 md:h-7 md:w-40" />

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-12 rounded-full" />
            </div>

            {/* Description */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />

            {/* Explore link */}
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

type ProjectsGridProps = {
  className?: string;
  projects: Project[];
  cardClassName?: string;
  enableAnimation?: boolean;
};

const ProjectsGrid = ({
  className,
  projects,
  cardClassName,
  enableAnimation = false,
}: ProjectsGridProps) => {
  const t = useTranslations("projectsSection");

  useGSAP(() => {
    if (enableAnimation) {
      gsap.to(`.${PROJECT_CARD_ANIMATION_CLASS}`, {
        top: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.15,
        delay: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.${PROJECT_GRID_CONTAINER_CLASS}`,
          start: "top 75%",
        },
      });
    }
  }, [enableAnimation]);

  return (
    <div
      className={cn(
        "grid gap-9  md:gap-12",
        "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(23rem,1fr))]",
        enableAnimation && PROJECT_GRID_CONTAINER_CLASS,
        className
      )}
    >
      {projects.map((project) => (
        <div
          key={project.slug}
          className={cn(
            "flex flex-col gap-5 md:gap-8",
            enableAnimation && `${PROJECT_CARD_ANIMATION_CLASS} from-bottom-sm`,
            cardClassName
          )}
        >
          <ImageWithGridBg
            href={project.slug}
            image={project.image}
            logo={project.logo}
            logoAlt={t(`projects.${project.slug}.title`)}
            alt={t(`projects.${project.slug}.title`)}
          />
          <div className="flex flex-col gap-3">
            <h3 className="subheading mb-1 md:mb-2">
              {t(`projects.${project.slug}.title`)}
            </h3>
            <TechnologiesList technologies={project.technologies} />
            <p className="text-muted-foreground line-clamp-2">
              {t(`projects.${project.slug}.description`)}
            </p>
            <TailedButton href={project.slug} label={t("explore")} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
