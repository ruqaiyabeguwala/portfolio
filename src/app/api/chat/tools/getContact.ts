import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getContact = tool({
  description: `This tool shows ${COMMON_DATA.owner}'s contact information.`,
  inputSchema: z.object({}),
  execute: async () => {
    return "Reach out on LinkedIn or email for collaborations, consulting, or freelance full-stack work. Happy to discuss React, Node.js, Express, SQL Server, and API-driven apps.";
  },
});
