import { db } from "@/lib/db"
import { Article } from "@/types/article"

export const getArticles = async (): Promise<Article[]> => {
  return db.article.findMany({
    orderBy: { createdAt: "desc" },
  })
}