'use client'

import MainLayout from '@/components/layout/MainLayout'
import WaitlistForm from '@/components/sections/WaitlistForm'
import { Toaster } from 'sonner'

export default function Waitlist() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Join Our Waitlist</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of independent work.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </MainLayout>
  )
}
