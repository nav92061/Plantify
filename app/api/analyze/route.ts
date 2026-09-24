import { analyzeLocation } from "@/lib/pipeline";
import type { AnalyzeRequest } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: Request) {
  let body: AnalyzeRequest = {};
  try {
    body = (await request.json()) as AnalyzeRequest;
  } catch {
    body = {};
  }

  try {
    const result = await analyzeLocation(body);
    return Response.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Analysis failed";
    return Response.json({ error: message }, { status: 500 });
  }
}
