"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

// Animation Variants (reuse or define locally)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjust stagger delay as needed
    },
  },
};

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sam",
      role: "Co-founder & Co-CEO",
      bio: "With a background in freelance design and business operations, Sam understands the challenges independent professionals face every day.",
      avatar: "/images/founders/samuele.jpg",
    },
    {
      name: "Gigi",
      role: "Co-founder & Co-CEO",
      bio: "Gigi brings years of experience in business development and has worked with countless freelancers to build successful partnerships.",
      avatar: "/images/founders/gigi.jpg",
    },
    {
      name: "Alex Chen",
      role: "Head of Product",
      bio: "Former freelancer turned product leader, Alex is passionate about creating tools that make independent work more sustainable.",
      avatar: "",
    },
    {
      name: "Maya Johnson",
      role: "Head of Engineering",
      bio: "With expertise in payment systems and workflow automation, Maya leads our engineering team to build reliable, scalable solutions.",
      avatar: "",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            We're creators, freelancers, and business owners ourselves. We've
            felt the same frustrations and wished for a better way to work.
          </p>
        </motion.div>

        {/* Team Members Grid with Stagger Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full overflow-hidden">
                <CardHeader className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    {member.avatar && (
                      <AvatarImage src={member.avatar} alt={member.name} />
                    )}
                    <AvatarFallback className="text-lg">
                      {member.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                We believe independent professionals deserve better. Better ways
                to work, better ways to get paid, and better ways to grow. And
                businesses deserve an easier way to work with amazing talent.
                It's not just about making things more efficient - it's about
                creating the conditions where both freelancers and businesses
                can thrive together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section with Stagger Animation and Hover Effect */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="text-center p-6"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We're constantly exploring new ways to make independent work
              better, more secure, and more rewarding.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              We believe in the power of working together to create solutions
              that benefit everyone in the ecosystem.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Simplicity</h3>
            <p className="text-muted-foreground">
              We strive to make complex processes simple, so you can focus on
              what you do best.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
