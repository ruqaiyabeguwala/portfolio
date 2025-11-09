import { openai } from "@ai-sdk/openai";
import { env } from "@/env";
import { MockLanguageModelV2 } from "ai/test";
import { simulateReadableStream } from "ai";
import { getResponseChunksByPrompt } from "./utils";

// Use OpenAI when an API key is available; otherwise fall back to a mock model
export const model = env.OPENAI_API_KEY
  ? openai("gpt-4o")
  : new MockLanguageModelV2({
      doGenerate: async () => ({
        rawCall: { rawPrompt: null, rawSettings: {} },
        finishReason: "stop",
        usage: { inputTokens: 10, outputTokens: 20, totalTokens: 30 },
        content: [{ type: "text", text: "AI is disabled locally (no API key)." }],
        warnings: [],
      }),
      doStream: async ({ prompt }) => ({
        stream: simulateReadableStream({
          chunkDelayInMs: 30,
          initialDelayInMs: 0,
          chunks: getResponseChunksByPrompt(prompt),
        }),
        rawCall: { rawPrompt: null, rawSettings: {} },
      }),
    });
