import Link from "next/link"
import Image from "next/image"
import { Article } from "@/types/article"
import { Card, CardContent } from "@/components/ui/card"

interface Props {
  article: Article
}

export default function ArticleCard({ article }: Props) {
  return (
    <Card className="hover:shadow-md transition">
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={200}
        className="rounded-t-md object-cover"
      />

      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-sm text-muted-foreground mb-3">
          {article.description}
        </p>

        <Link
          href={`/articles/${article.id}`}
          className="text-indigo-600 text-sm hover:underline"
        >
          Lire l’article →
        </Link>
      </CardContent>
    </Card>
  )
}
