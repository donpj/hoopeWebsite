"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to be part of this change?
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in making work better. A future where freelancers can focus
            on their craft with the same security as full-time employees.
          </p>
        </motion.div>

        {/* Animate buttons sequentially */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }} // First button delay
          >
            <Button size="lg" asChild>
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }} // Second button delay (slightly longer)
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
