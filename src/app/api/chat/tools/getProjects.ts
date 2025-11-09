import { COMMON_DATA } from "@/data/common";
import { SOCIALS } from "@/data/socials";
import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description: `This tool will show a list of all projects made by ${COMMON_DATA.owner}`,
  inputSchema: z.object({}),
  execute: async () => {
    const linkedinLink = SOCIALS.find((s) => s.id === "linkedin")?.href;

    return `${COMMON_DATA.owner} has delivered full-stack solutions across insurance and internal audit domains — focusing on ReactJS, Node.js, Express, SQL Server, and robust API integrations. Browse the Projects section here for highlights, and connect on LinkedIn to discuss work samples, case studies, or freelance collaborations: ${linkedinLink}`;
  },
});
