"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const placeholderImages = [
  "/images/placeholders/1.png ",
  "/images/placeholders/2.png",
  "/images/placeholders/3.png",
  "/images/placeholders/4.png",
  "/images/placeholders/5.png",
  "/images/placeholders/6.png",
  "/images/placeholders/7.jpg",
];

// Create a motion-compatible Image component
const MotionImage = motion(Image);

export default function HeroSection() {
  // Comment out state and effect for rotation
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex(
  //       (prevIndex) => (prevIndex + 1) % placeholderImages.length
  //     );
  //   }, 3000); // Change image every 3 seconds

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Just work. we'll handle the rest.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Streamlined collaboration, evaluation, and payments for SMEs and
              independent professionals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/waitlist">Join Waitlist</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/request-demo">Request Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[350px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden">
            <MotionImage
              // key={currentImageIndex} // Commented out for static image
              src={placeholderImages[0]} // Set src directly to the first image
              alt={`Placeholder Illustration 1`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "left center",
              }}
              priority={true} // Prioritize loading the static image
              // initial={{ opacity: 0 }} // Commented out
              // animate={{ opacity: 1 }} // Commented out
              // transition={{ duration: 0.8 }} // Commented out
            />
          </div>
        </div>
      </div>
    </section>
  );
}
