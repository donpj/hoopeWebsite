"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

// Define Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 }, // Start parent container as visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ProductsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools designed to make independent work better for everyone.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Tabs defaultValue="freelancers" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="freelancers">For Freelancers</TabsTrigger>
              <TabsTrigger value="businesses">For Businesses</TabsTrigger>
            </TabsList>

            <TabsContent value="freelancers">
              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                  variants={fadeInUp}
                >
                  <div>
                    <h3 className="text-2xl font-bold">
                      Get paid on time, every time
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      No more chasing payments or awkward conversations. Our
                      automated payment system ensures you get paid promptly for
                      your great work.
                    </p>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Automated payment processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Multiple payment methods</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Instant notifications</span>
                      </li>
                    </ul>
                  </div>
                  <motion.div
                    className="bg-muted/50 rounded-lg h-[400px] flex items-center justify-center overflow-hidden relative"
                    variants={fadeInUp}
                  >
                    <Image
                      src="/images/placeholders/paymentLaptopScreen2.png"
                      alt="Payment Dashboard on Laptop Screen"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                  variants={fadeInUp}
                >
                  <motion.div
                    className="order-2 md:order-1 bg-muted/50 rounded-lg h-[400px] flex items-center justify-center overflow-hidden relative"
                    variants={fadeInUp}
                  >
                    <Image
                      src="/images/placeholders/TimeTrackingScreenPhone.png"
                      alt="Time Tracking on Phone Screen"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold">Simple time tracking</h3>
                    <p className="mt-4 text-muted-foreground">
                      Track your hours without the hassle. Our intuitive time
                      tracking system makes it easy to log your work and get
                      paid accurately.
                    </p>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>One-click time tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Project categorization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Detailed reports</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="businesses">
              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                  variants={fadeInUp}
                >
                  <div>
                    <h3 className="text-2xl font-bold">
                      Streamlined contractor management
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      Manage all your freelancers and contractors in one place.
                      Simplify approvals, payments, and communication.
                    </p>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Centralized contractor database</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Automated payment scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Performance tracking</span>
                      </li>
                    </ul>
                  </div>
                  <motion.div
                    className="bg-muted/50 rounded-lg h-[400px] flex items-center justify-center overflow-hidden relative"
                    variants={fadeInUp}
                  >
                    <Image
                      src="/images/placeholders/ganttChartLaptop.png"
                      alt="Gantt Chart on Laptop Screen"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                  variants={fadeInUp}
                >
                  <motion.div
                    className="order-2 md:order-1 bg-muted/50 rounded-lg h-[400px] flex items-center justify-center overflow-hidden relative"
                    variants={fadeInUp}
                  >
                    <Image
                      src="/images/placeholders/managementMobile.png"
                      alt="Management screen on Mobile"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold">Powerful analytics</h3>
                    <p className="mt-4 text-muted-foreground">
                      Gain insights into your freelancer spending, project
                      timelines, and budget allocation with detailed analytics.
                    </p>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Real-time spending dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Budget forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>Customizable reports</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
