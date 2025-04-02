"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Network,
  TrendingUp,
  Briefcase,
  Globe,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

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

export default function TeamsSection() {
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
            For Teams & Businesses
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline how you collaborate with and pay independent talent.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-6">
              Built for efficient collaboration
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're a startup scaling quickly, an agency managing
              multiple clients, or an established company embracing flexible
              work - we provide the tools to work effectively with freelancers.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Focus on your business goals, and we'll handle the operational
              overhead of managing external talent.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/request-demo">Request Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg mx-auto lg:mx-0 w-[500px] h-[450px] max-w-full lg:max-w-[600px]"
            variants={fadeInUp}
          >
            <Image
              src="/images/placeholders/teamsImageTop.jpeg"
              alt="Team collaborating in an office"
              width={500}
              height={450}
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
              <TrendingUp size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">For Startups</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Scale your team flexibly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Manage budgets easily</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Simplified contractor payments</span>
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
              <Briefcase size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">For Agencies</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Manage multiple client projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Standardized contractor onboarding</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Efficient payment workflows</span>
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
              <Globe size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              For Enterprises
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Compliance & risk management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Global payment capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Integration with existing systems</span>
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
              Ready to optimize your freelance collaborations?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Request a demo to see how Hoope can help your business work
              smarter with independent talent.
            </p>
            <Button size="lg" asChild>
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
