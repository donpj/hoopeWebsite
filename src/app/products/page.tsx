'use client'

import MainLayout from '@/components/layout/MainLayout'
import ProductsSection from '@/components/sections/ProductsSection'
import CTASection from '@/components/sections/CTASection'
import { Toaster } from 'sonner'

export default function Products() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <ProductsSection />
      <CTASection />
    </MainLayout>
  )
}
