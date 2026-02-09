import { db } from "@/lib/db"
import { Article } from "@/types/article"

export const getArticleById = async (
  id: string
): Promise<Article | null> => {
  try {
    return await db.article.findUniqueOrThrow({
      where: { id },
    })
  } catch {
    return null
  }
}
