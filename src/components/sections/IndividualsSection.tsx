"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Palette, Code, PenTool, CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function IndividualsSection() {
  return (
    <section className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            For Independent Professionals
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Focus on your craft while we handle the business side of things.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 items-center"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-6">
              This is for everyone who puts their heart into their work
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're a DJ making the night unforgettable, a developer
              bringing ideas to life, a designer creating beautiful things, or a
              contractor building dreams - we get it, because we've lived it.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              You keep being brilliant at what you do, and we'll handle all the
              rest.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/waitlist">Join Waitlist</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg mx-auto lg:mx-0 w-[500px] h-[450px] max-w-full lg:max-w-[600px]"
            variants={fadeInUp}
          >
            <Image
              src="/images/placeholders/IndividualsImageTop.jpeg"
              alt="Diverse group of freelancers collaborating"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="bg-background p-8 rounded-lg shadow-sm"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-center text-primary mb-4">
              <Palette size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              For Designers
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Streamlined client approvals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Reliable payment schedules</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Portfolio showcase</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-background p-8 rounded-lg shadow-sm"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-center text-primary mb-4">
              <Code size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              For Developers
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Project milestone tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Automated invoicing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Client communication tools</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-background p-8 rounded-lg shadow-sm"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-center text-primary mb-4">
              <PenTool size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              For Content Creators
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Content delivery system</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Revision management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Usage rights tracking</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-muted/50 p-10 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Ready to transform how you work?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join our waitlist to be among the first to experience a better way
              to manage your independent career.
            </p>
            <Button size="lg" asChild>
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
