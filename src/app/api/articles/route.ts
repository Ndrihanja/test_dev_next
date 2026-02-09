import { getArticles } from "@/services/article/get-all"
import { NextResponse } from "next/server"

export async function GET() {
  const articles = await getArticles()
  return NextResponse.json(articles)
}
