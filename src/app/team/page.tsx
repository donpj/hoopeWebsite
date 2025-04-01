'use client'

import MainLayout from '@/components/layout/MainLayout'
import TeamSection from '@/components/sections/TeamSection'
import CTASection from '@/components/sections/CTASection'
import { Toaster } from 'sonner'

export default function Team() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <TeamSection />
      <CTASection />
    </MainLayout>
  )
}
