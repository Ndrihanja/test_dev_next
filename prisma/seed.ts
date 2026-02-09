// prisma/seed.ts
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: "Découvrir Next.js",
        description: "Introduction à Next.js et à ses fonctionnalités principales",
        content: "Next.js est un framework React permettant de créer des applications web performantes avec SSR et SSG.",
        image: "https://images.unsplash.com/photo-1612831455541-96f0d136f9f5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "L'Art de la Photographie",
        description: "Conseils pour améliorer vos photos",
        content: "La photographie est un art qui demande pratique et patience. Découvrez nos conseils pour capturer des images incroyables.",
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cuisine: Recettes du Monde",
        description: "Explorez des saveurs venues d'ailleurs",
        content: "Découvrez des recettes faciles et délicieuses provenant de différentes cultures.",
        image: "https://images.unsplash.com/photo-1512058564366-c9e9b0c9d8f3?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Voyage en Islande",
        description: "Itinéraire et conseils pour un voyage inoubliable",
        content: "L'Islande est une destination incroyable pour les amoureux de la nature et des paysages spectaculaires.",
        image: "https://images.unsplash.com/photo-1526779259212-9b6d6c78b3b1?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Les Bienfaits du Yoga",
        description: "Améliorez votre corps et votre esprit",
        content: "Le yoga aide à réduire le stress, améliorer la flexibilité et renforcer le corps tout en apaisant l'esprit.",
        image: "https://images.unsplash.com/photo-1554284126-ef3b22a5f2f0?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Technologies Émergentes",
        description: "Comprendre l'IA et la blockchain",
        content: "L'intelligence artificielle et la blockchain révolutionnent le monde des technologies modernes.",
        image: "https://images.unsplash.com/photo-1581091215368-4d8c2f518a68?auto=format&fit=crop&w=800&q=80",
      },
    ],
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
