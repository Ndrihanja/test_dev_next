import Link from "next/link"
import Image from "next/image"
import { Article } from "@/types/article"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"
import { formatDate } from "@/lib/formate-date"

interface Props {
  article: Article
}

export default function ArticleCard({ article }: Props) {
  return (
   <Card className="group relative mx-auto w-full overflow-hidden transition-all duration-300 hover:shadow-2xl border border-border/40 bg-card">
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="relative z-0 object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="p-5 space-y-3">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            {formatDate(article.createdAt)}
          </p>
          <CardTitle className="text-xl line-clamp-1 group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
        </div>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed min-h-10">
          {article.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-5 pt-0">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <Link href={`/articles/${article.id}`}>
            Lire l'article
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
