import { getArticleById } from "@/services/article/get-by-id"
import { formatDate } from "@/lib/formate-date"
import Image from "next/image"
import Link from "next/link" // 
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getArticles } from "@/services/article/get-all"
import { ArrowLeft } from "lucide-react" 

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const articles = await getArticles()
  if (!articles || articles.length === 0) return []

  return articles.map(article => ({ id: article.id }))
}

export const revalidate = 60

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params 
  const article = await getArticleById(params.id)

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
  const resolvedParams = await params 
  const article = await getArticleById(resolvedParams.id)

  if (!article) notFound() 

  return (
    <article className="container max-w-3xl py-10 mx-auto px-4">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux articles
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">{article.title}</h1>
        <p className="text-sm text-muted-foreground">
          {formatDate(article.createdAt)}
        </p>
      </header>

      <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-xl shadow-sm">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        /> 
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="leading-relaxed whitespace-pre-wrap text-lg">
          {article.content}
        </p>
      </div>
    </article>
  )
}