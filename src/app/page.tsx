import { getArticles } from "@/services/article/get-all"
import ArticleCard from "@/components/ArticleCard"

export const revalidate = 60

export default async function HomePage() {
  const articles = await getArticles()

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Explorez le Monde des Idées
        </h1>
        <p className="text-muted-foreground text-lg">
          Des articles inspirants et informatifs couvrant tous les sujets, partout dans le monde.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  )
}
