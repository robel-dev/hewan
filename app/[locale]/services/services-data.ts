import { type ServicePageData } from "@/components/service-page"

export type ServiceCardData = ServicePageData & {
  cardImage: string
}

type Translator = (key: string) => string

export const getServices = (t: Translator): ServiceCardData[] => [
  {
    id: "weddings",
    title: t("services.wedding.title"),
    description: t("services.wedding.description"),
    cardImage: "/refined-wedding-moment.png",
    heroImage: {
      src: "/refined-wedding-moment.png",
      alt: t("services.wedding.title"),
    },
    gallery: [
      { src: "/refined-garden-wedding.png", alt: t("services.wedding.title") },
      { src: "/refined-wedding-feast.png", alt: t("services.wedding.title") },
      { src: "/softly-lit-wedding.png", alt: t("services.wedding.title") },
    ],
  },
  {
    id: "festivities",
    title: t("services.festivities.title"),
    description: t("services.festivities.description"),
    cardImage: "/softly-lit-wedding.png",
    heroImage: {
      src: "/images/hewan-venue.jpg",
      alt: t("services.festivities.title"),
    },
    gallery: [
      { src: "/images/hewan-venue.jpg", alt: t("services.festivities.title") },
      { src: "/images/home-3.jpg", alt: t("services.festivities.title") },
      { src: "/hewan-photos/hewans-event-2.jpg", alt: t("services.festivities.title") },
    ],
  },
  {
    id: "memorials",
    title: t("services.memorials.title"),
    description: t("services.memorials.description"),
    cardImage: "/images/hewan-memorial.png",
    heroImage: {
      src: "/images/hewan-memorial.png",
      alt: t("services.memorials.title"),
    },
    gallery: [
      { src: "/images/hewan-memorial.png", alt: t("services.memorials.title") },
      { src: "/images/home-4.jpg", alt: t("services.memorials.title") },
      { src: "/hewan-photos/hewan-photo-11.jpg", alt: t("services.memorials.title") },
    ],
  },
  {
    id: "catering",
    title: t("services.catering.title"),
    description: t("services.catering.description"),
    cardImage: "/catering-hewan.jpg",
    heroImage: {
      src: "/catering-hewan.jpg",
      alt: t("services.catering.title"),
    },
    gallery: [
      { src: "/catering-hewan.jpg", alt: t("services.catering.title") },
      { src: "/hewan-photos/hewan-7.jpg", alt: t("services.catering.title") },
      { src: "/hewan-photos/hewan-8.jpg", alt: t("services.catering.title") },
    ],
  },
  {
    id: "birthdays",
    title: t("services.birthdays.title"),
    description: t("services.birthdays.description"),
    cardImage: "/refined-wedding-feast.png",
    heroImage: {
      src: "/refined-wedding-feast.png",
      alt: t("services.birthdays.title"),
    },
    gallery: [
      { src: "/refined-wedding-feast.png", alt: t("services.birthdays.title") },
      { src: "/images/home-1.jpg", alt: t("services.birthdays.title") },
      { src: "/hewan-photos/hewan-6.jpg", alt: t("services.birthdays.title") },
    ],
  },
  {
    id: "graduation",
    title: t("services.graduation.title"),
    description: t("services.graduation.description"),
    cardImage: "/hewan-photos/hewans-event-3.jpg",
    heroImage: {
      src: "/hewan-photos/hewans-event-3.jpg",
      alt: t("services.graduation.title"),
    },
    gallery: [
      { src: "/hewan-photos/hewans-event-3.jpg", alt: t("services.graduation.title") },
      { src: "/hewan-photos/20230723_145451.jpg", alt: t("services.graduation.title") },
      { src: "/hewan-photos/20230723_145614.jpg", alt: t("services.graduation.title") },
    ],
  },
  {
    id: "anniversaries",
    title: t("services.anniversaries.title"),
    description: t("services.anniversaries.description"),
    cardImage: "/images/hewan-summer-party-.jpg",
    heroImage: {
      src: "/images/hewan-summer-party-.jpg",
      alt: t("services.anniversaries.title"),
    },
    gallery: [
      { src: "/images/hewan-summer-party-.jpg", alt: t("services.anniversaries.title") },
      { src: "/hewan-photos/hewans-event.jpg", alt: t("services.anniversaries.title") },
      { src: "/hewan-photos/20230723_150401.jpg", alt: t("services.anniversaries.title") },
    ],
  },
  {
    id: "baptism",
    title: t("services.baptism.title"),
    description: t("services.baptism.description"),
    cardImage: "/hewan-photos/hewan-photo-10.jpg",
    heroImage: {
      src: "/hewan-photos/hewan-photo-10.jpg",
      alt: t("services.baptism.title"),
    },
    gallery: [
      { src: "/hewan-photos/hewan-photo-10.jpg", alt: t("services.baptism.title") },
      { src: "/hewan-photos/IMG-20230513-WA0014.jpg", alt: t("services.baptism.title") },
      { src: "/images/home-2.jpg", alt: t("services.baptism.title") },
    ],
  },
]
