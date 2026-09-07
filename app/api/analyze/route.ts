import { analyzeLocation } from "@/lib/pipeline";
import type { AnalyzeRequest } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 10;

export async function POST(request: Request) {
  let body: AnalyzeRequest = {};
  try {
    body = (await request.json()) as AnalyzeRequest;
  } catch {
    body = {};
  }

  const result = await analyzeLocation(body);
  return Response.json(result);
}
