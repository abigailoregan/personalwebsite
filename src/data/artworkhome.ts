export interface ArtworkHome {
  title: string
  medium: string
  description: string
  image: string
  hiRes?: string
  dimensions?: string
}

export const artworks: ArtworkHome[] = [
  {
    title: "Ingested",
    medium: "Oil, Acrylic, and pieces of food on canvas, each 18” x 24”.",
    description: "Each painting uses color and a textural dictionary to represent how anxieties about an eating disorder feels in the body.",
    image: "/images/home/abigail_ingested.png",
    hiRes: "/images/hi-resolution/abstract/abigail_ingested.png",
  },
  {
    title: "Flowers",
    medium: "Oil on canvas, 24” x 36”.",
    description: "A lesson in covering up old work and letting go. This painting explores evolution and the surrealist qualities of imagination.",
    image: "/images/home/abigail_flowers.png",
    hiRes: "/images/hi-resolution/abstract/abigail_flowers.jpg",
  },
  {
    title: "Heaven and Hell",
    medium: "Oil on canvas, 40” x 30”.",
    description: "A study of emotional opposites through color and abstraction. One painting depicting a descent into chaos and unrest, and the other shows an orderly, yet eerie serenity.",
    image: "/images/home/abigail_heaven_hell.png",
    hiRes: "/images/hi-resolution/landscapes/abigail_heaven_hell.png",
  },
  {
    title: "Cosmic Symphony",
    medium: "Oil on canvas, 24” x 24”.",
    description: "A visualization of the emotional scale of existence and what it feels like to exist within an ever-expanding cosmic drama of being alive and caught in haunting silence of space.",
    image: "/images/home/abigail_galaxy.png",
    hiRes: "/images/hi-resolution/abstract/abigail_galaxy.jpg",
  },
  {
    title: "Santa's Helpers",
    medium: "Oil on Canvas, 30” x 22”.",
    description: "A satirical commentary on the commercialization and exhaustion embedded in modern holiday culture.",
    image: "/images/home/abigail_zombies.png",
    hiRes: "/images/hi-resolution/figures/abigail_zombies.jpg",
  },
  {
    title: "Testament of Light",
    medium: "Acrylic on canvas, 12” x 16”.",
    description: "Based off of the Monumento a Girolamo Savonarola (piazza Savonarola, Firenze, Italia).",
    image: "/images/home/abigail_religious.png",
    hiRes: "/images/hi-resolution/landscapes/abigail_religious.jpg",
  },
  {
    title: "Veils of the Self",
    medium: "Oil on canvas, triptych (36” x 24” 36” x 36” 36” x 24”).",
    description: "Explores identity through ghosts in a forest, each representing a fragmented self. Reflects on hybrid identity, ancestry, and presence.",
    image: "/images/home/abigail_tryptich.png",
    hiRes: "/images/hi-resolution/figures/abigail_tryptich.png",
  },
]