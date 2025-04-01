'use client'

import MainLayout from '@/components/layout/MainLayout'
import RequestDemoForm from '@/components/sections/RequestDemoForm'
import { Toaster } from 'sonner'

export default function RequestDemo() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Request a Demo</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Hoope can transform your workflow with a personalized demonstration.
          </p>
        </div>
        <RequestDemoForm />
      </div>
    </MainLayout>
  )
}
