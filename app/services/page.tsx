import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf9f8] pt-24">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-12 text-center font-serif text-3xl tracking-wide md:text-4xl">OUR SERVICES</h1>

        <div className="mb-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 font-serif text-xl tracking-wide">WEDDING PLANNING</h2>
              <p className="mb-6 text-xs leading-relaxed text-neutral-600">
                Our wedding planning service is designed to transform your vision into reality. From venue selection to
                the final farewell, we handle every detail with precision and care. Our team works closely with you to
                understand your preferences, style, and budget to create a celebration that truly reflects your love
                story.
              </p>
              <p className="mb-8 text-xs leading-relaxed text-neutral-600">
                We offer full planning, partial planning, and day-of coordination packages to suit your needs. Each
                service includes personalized attention, vendor management, timeline creation, and on-site coordination
                to ensure your day unfolds seamlessly.
              </p>
              <Link href="/services/weddings">
                <Button
                  variant="outline"
                  className="border-neutral-300 bg-transparent text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800&query=elegant wedding ceremony setup with floral decorations"
                alt="Wedding Planning"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/refined-wedding-feast.png"
                alt="Catering Services"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 font-serif text-xl tracking-wide">CATERING</h2>
              <p className="mb-6 text-xs leading-relaxed text-neutral-600">
                Our catering service offers exquisite culinary experiences tailored to your taste and event style. We
                collaborate with top chefs to create custom menus that delight the senses and complement your
                celebration. From elegant plated dinners to interactive food stations, we ensure every bite is
                memorable.
              </p>
              <p className="mb-8 text-xs leading-relaxed text-neutral-600">
                We source the finest seasonal ingredients and accommodate dietary restrictions with creativity and care.
                Our service includes menu development, tastings, professional service staff, and beautiful presentation
                to enhance your event's aesthetic.
              </p>
              <Link href="/services/catering">
                <Button
                  variant="outline"
                  className="border-neutral-300 bg-transparent text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="#contact">
            <Button
              variant="outline"
              className="border-neutral-300 bg-transparent px-8 text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
            >
              INQUIRE ABOUT OUR SERVICES
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
