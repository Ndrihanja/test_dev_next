import { getArticleById } from "@/services/article/get-by-id"
import { formatDate } from "@/lib/formate-date"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getArticles } from "@/services/article/get-all"

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  if (!articles || articles.length === 0) return []

  return articles.map(article => ({ id: article.id }))
}

export const revalidate = 60

export async function generateMetadata(props: Props): Promise<Metadata> {
  const article = await getArticleById(props.params.id)

  if (!article) {
    return { title: "Article introuvable" }
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  }
}


export default async function ArticlePage({ params }: Props) {
  const article = await getArticleById(params.id)

  if (!article) notFound()

  return (
    <article className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      <p className="text-sm text-muted-foreground mb-6">
        {formatDate(article.createdAt)}
      </p>

      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={400}
        fill
        className="rounded-md mb-6 object-cover"
      />

      <p className="leading-relaxed">{article.content}</p>
    </article>
  )
}
