import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hewan's Event | Elegant Wedding & Event Planning",
  description: "Luxury wedding and event planning services by Hewan's Event",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}