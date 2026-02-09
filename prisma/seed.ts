import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.article.deleteMany({}) // Nettoyage pour éviter les doublons

  await prisma.article.createMany({
    data: [
      {
        title: "Le Guide du Café Parfait",
        description: "Apprenez les secrets d'un expresso réussi à la maison.",
        content: "Le café est bien plus qu'une boisson, c'est une science. De la mouture du grain à la température de l'eau...",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Randonnée en Haute Montagne",
        description: "Les 5 sommets à gravir cette année en Europe.",
        content: "Rien ne vaut l'air pur de la montagne. Voici notre sélection des sentiers les plus spectaculaires...",
        image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Le Bureau Minimaliste",
        description: "Optimisez votre espace de travail pour plus de productivité.",
        content: "Un bureau encombré est un esprit encombré. Découvrez comment épurer votre setup de télétravail...",
        image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Street Food à Tokyo",
        description: "Un voyage culinaire au cœur de Shibuya.",
        content: "Des ramens fumants aux sushis les plus frais, Tokyo est le paradis des gourmets...",
        image: "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Introduction à la Domotique",
        description: "Rendre sa maison intelligente en 2026.",
        content: "L'Internet des objets (IoT) simplifie notre quotidien. Voici par où commencer...",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }
    ],
  })
  console.log("✅ Nouveau Seed généré avec succès !")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })