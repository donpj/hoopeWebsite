'use client'

import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import MainLayout from '@/components/layout/MainLayout'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  )
}
