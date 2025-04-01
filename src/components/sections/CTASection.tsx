'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to be part of this change?</h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Join us in making work better. A future where freelancers can focus on their craft with the same security as full-time employees.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-demo">Request Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
