"use client"

import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import ServicePage from "@/components/service-page"
import { getServices } from "@/app/[locale]/services/services-data"

export default function ServiceDetailPage() {
  const t = useTranslations()
  const params = useParams<{ service: string }>()
  const services = getServices(t)
  const rawService = params?.service
  const serviceId = Array.isArray(rawService) ? rawService[0] : rawService
  const service = services.find((item) => item.id === serviceId)

  if (!service) {
    return (
      <main className="min-h-screen bg-[#faf9f8] px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-sm text-neutral-600 md:text-base">
            {t("servicePage.fallbacks.notFound")}
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#faf9f8]">
      <ServicePage service={service} />
    </main>
  )
}
