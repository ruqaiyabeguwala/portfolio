import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getPresentation = tool({
  description: `It is used to answer the question "Who is ${COMMON_DATA.owner}?"`,
  inputSchema: z.object({}),
  execute: async () => {
    return {
      presentation: `${COMMON_DATA.owner} is a full-stack software developer based in Indore, India, with 6+ years of experience building secure, scalable applications. She specializes in ReactJS, Node.js, Express, and SQL Server, and has delivered products in insurance and internal audit domains with strong API integrations and micro frontend architecture. She values clean code, testing, and pragmatic delivery — and is available for freelance full-stack work.`,
    };
  },
});
