'use client'

import MainLayout from '@/components/layout/MainLayout'
import IndividualsSection from '@/components/sections/IndividualsSection'
import CTASection from '@/components/sections/CTASection'
import { Toaster } from 'sonner'

export default function Individuals() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <IndividualsSection />
      <CTASection />
    </MainLayout>
  )
}
