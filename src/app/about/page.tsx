"use client";

import MainLayout from "@/components/layout/MainLayout";
import {
  CircleDollarSign,
  CheckCircle2,
  Clock,
  MessageSquare,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 }, // Container itself is visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <motion.div
        className="max-w-4xl mx-auto py-16 px-4 md:px-8 space-y-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={fadeInUp}
        >
          About Hoope
        </motion.h1>

        {/* Minimalist Introduction Section */}
        <motion.div className="p-6 rounded-lg" variants={fadeInUp}>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Founder Images with Names */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 flex-shrink-0"
              variants={staggerContainer}
            >
              {/* Sam's picture group */}
              <motion.div
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/founders/samuele.jpg"
                  alt="Samuele Piscitelli"
                  width={122}
                  height={122}
                  className="rounded-full object-cover mx-auto"
                />
                <p className="mt-3 font-semibold text-lg">Samuele Piscitelli</p>
                <p className="text-sm text-primary">Co-Founder & Co-CEO</p>
              </motion.div>
              {/* Gigi's picture group */}
              <motion.div
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/founders/gigi.jpg"
                  alt="Gigi Piscitelli"
                  width={122}
                  height={122}
                  className="rounded-full object-cover mx-auto"
                />
                <p className="mt-3 font-semibold text-lg">Gigi Piscitelli</p>
                <p className="text-sm text-primary">Co-Founder & Co-CEO</p>
              </motion.div>
            </motion.div>

            {/* Intro Text */}
            <motion.p
              className="text-xl text-muted-foreground text-center lg:text-left leading-relaxed"
              variants={fadeInUp}
            >
              Hey there! We're Sam and Gigi, Co-founders and Co-CEOs at hoope.
              We're building Hoope because we've lived the freelancer life and
              know the challenges firsthand. Our mission is simple: make
              independent work seamless and rewarding for everyone involved.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <motion.div className="space-y-8" variants={fadeInUp}>
          <p className="text-lg leading-relaxed">
            <strong className="font-semibold text-primary">
              We know you're amazing at what you do.
            </strong>{" "}
            We know because we've been there - we are creators, freelancers, and
            business owners ourselves. We've felt the same frustrations, chased
            the same payments, and wished for a better way to work. That's
            exactly why we built Hoope.
          </p>

          <p className="text-lg leading-relaxed">
            <strong className="font-semibold text-primary">
              We believe independent professionals deserve better.
            </strong>{" "}
            Better ways to work, better ways to get paid, and better ways to
            grow. And businesses deserve an easier way to work with amazing
            talent. It's not just about making things more efficient - it's
            about creating the conditions where both freelancers and businesses
            can thrive together.
          </p>

          <p className="text-lg leading-relaxed">
            While you're out there doing what you do best, we'll be quietly
            taking care of everything else. Think of us as your backstage crew -
            handling payments, smoothing out approvals, tracking time, and
            keeping all your paperwork in order. No fuss, no stress, just
            everything running like it should.
          </p>

          <p className="text-lg leading-relaxed">
            <strong className="font-semibold text-primary">
              This is for everyone who puts their heart into their work
            </strong>
            . Whether you're a DJ making the night unforgettable, a developer
            bringing ideas to life, a designer creating beautiful things, or a
            contractor building dreams - we get it, because we've lived it. You
            keep being brilliant at what you do, and we'll handle all the rest.
          </p>
        </motion.div>

        {/* Stylized Divider */}
        <motion.div
          className="relative flex py-5 items-center"
          variants={fadeInUp}
        >
          <div className="flex-grow border-t border-border"></div>
          <span className="flex-shrink mx-4 text-muted-foreground">
            <Heart size={24} className="text-primary" />
          </span>
          <div className="flex-grow border-t border-border"></div>
        </motion.div>

        {/* Features Section */}
        <motion.div className="space-y-12" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-center">
            Here's how we make life easier:
          </h2>

          <motion.ul
            className="space-y-10 list-none pl-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible" // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
          >
            {/* Feature Item 1 */}
            <motion.li
              className="flex flex-col md:flex-row items-start gap-6"
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <CircleDollarSign size={24} />
              </div>
              <div className="space-y-1">
                <strong className="block text-xl font-semibold">
                  Payments that just happen
                </strong>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Remember chasing payments? Neither do we. You do great work,
                  and we make it automated for your client to pay you on time,
                  every time. Because your talent deserves respect, and respect
                  starts with reliable payment.
                </p>
              </div>
            </motion.li>
            {/* Feature Item 2 */}
            <motion.li
              className="flex flex-col md:flex-row items-start gap-6"
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div className="space-y-1">
                <strong className="block text-xl font-semibold">
                  Approvals that flow
                </strong>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No more back-and-forth confusion. Once you and your client are
                  happy, we take care of all the details. It's like magic, but
                  better - it's automation that actually works for both sides.
                </p>
              </div>
            </motion.li>
            {/* Feature Item 3 */}
            <motion.li
              className="flex flex-col md:flex-row items-start gap-6"
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Clock size={24} />
              </div>
              <div className="space-y-1">
                <strong className="block text-xl font-semibold">
                  Time tracking that makes sense
                </strong>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've made it as simple as possible. You tell us when you're
                  working, and we'll keep track of everything. No complicated
                  systems, just clarity when you need it.
                </p>
              </div>
            </motion.li>
            {/* Feature Item 4 */}
            <motion.li
              className="flex flex-col md:flex-row items-start gap-6"
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare size={24} />
              </div>
              <div className="space-y-1">
                <strong className="block text-xl font-semibold">
                  Communication that connects
                </strong>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Share ideas, updates, and feedback your way with your team or
                  your clients. We'll keep everything organized and easy to
                  find, so everyone's always on the same page.
                </p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Final Paragraph */}
        <motion.p
          className="text-lg leading-relaxed text-center border-t pt-10 mt-10"
          variants={fadeInUp}
        >
          We've started to build the future of independent work, let's do this
          together. A future where freelancers can focus on their craft with the
          same security as full-time employees. Where businesses can work with
          amazing talent without drowning in paperwork and time-consuming
          complications. Where great work gets the recognition - and
          compensation - it deserves.
        </motion.p>

        {/* Add CTA Section at the end */}
        <motion.div variants={fadeInUp}>
          <CTASection />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
