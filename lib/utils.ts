import { NextRequest } from "next/server";

export async function jsonParse(req: NextRequest) {
  let jsonBody: any = {};
  try {
    jsonBody = await req.json();
  } catch (error) {
    jsonBody = {};
  }
  return jsonBody;
}
