import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Google Form Configuration
    GOOGLE_FORM_URL: z.string().url().optional(),
    GOOGLE_FORM_NAME_ENTRY_ID: z.string().min(1).optional(),
    GOOGLE_FORM_EMAIL_ENTRY_ID: z.string().min(1).optional(),
    GOOGLE_FORM_MESSAGE_ENTRY_ID: z.string().min(1).optional(),
    GOOGLE_FORM_USP: z.string().default("pp_url"),
    GOOGLE_FORM_SUBMIT_LABEL: z.string().default("Submit"),

    // OpenAI API
    OPENAI_API_KEY: z.string().min(1).optional(),

    // Mux Configuration
    MUX_TOKEN_ID: z.string().min(1).optional(),
    MUX_TOKEN_SECRET: z.string().min(1).optional(),

    // KV/R2 Storage (Vercel)
    KV_URL: z.string().min(1).optional(),
    KV_REST_API_URL: z.string().min(1).optional(),
    KV_REST_API_TOKEN: z.string().min(1).optional(),
    KV_REST_API_READ_ONLY_TOKEN: z.string().min(1).optional(),

    // Redis
    REDIS_URL: z.string().url().optional(),
  },
  client: {
    // Site URL
    NEXT_PUBLIC_SITE_URL: z.string().min(1).default("http://localhost:3000"),
  },
  runtimeEnv: {
    // Google Form
    GOOGLE_FORM_URL: process.env.GOOGLE_FORM_URL || undefined,
    GOOGLE_FORM_NAME_ENTRY_ID:
      process.env.GOOGLE_FORM_NAME_ENTRY_ID || undefined,
    GOOGLE_FORM_EMAIL_ENTRY_ID:
      process.env.GOOGLE_FORM_EMAIL_ENTRY_ID || undefined,
    GOOGLE_FORM_MESSAGE_ENTRY_ID:
      process.env.GOOGLE_FORM_MESSAGE_ENTRY_ID || undefined,
    GOOGLE_FORM_USP: process.env.GOOGLE_FORM_USP || undefined,
    GOOGLE_FORM_SUBMIT_LABEL: process.env.GOOGLE_FORM_SUBMIT_LABEL || undefined,

    // OpenAI
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || undefined,

    // Mux
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID || undefined,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET || undefined,

    // KV
    KV_URL: process.env.KV_URL || undefined,
    KV_REST_API_URL: process.env.KV_REST_API_URL || undefined,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN || undefined,
    KV_REST_API_READ_ONLY_TOKEN:
      process.env.KV_REST_API_READ_ONLY_TOKEN || undefined,

    // Redis
    REDIS_URL: process.env.REDIS_URL || undefined,

    // Client
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  },
  // Make local development resilient: skip strict validation in non-production
  // and treat empty strings from .env as undefined so defaults apply.
  skipValidation: process.env.NODE_ENV !== "production",
  emptyStringAsUndefined: true,
});
