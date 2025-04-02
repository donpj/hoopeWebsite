"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const logoSrc =
    theme === "dark"
      ? "/images/logos/HoopeLogoWhiteTraspFull.png"
      : "/images/logos/HoopeLogoBlackTraspFull.png";

  return (
    <header className="w-full py-4 px-4 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Group Logo and Desktop Navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            {mounted ? (
              <Image
                src={logoSrc}
                alt="Hoope Logo"
                width={120}
                height={36}
                priority
              />
            ) : (
              <div style={{ width: 120, height: 36 }} aria-hidden="true"></div>
            )}
          </Link>

          {/* Desktop Navigation (Moved inside the group) */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/products"
              className={cn(
                "text-base font-semibold transition-colors pb-1",
                pathname === "/products"
                  ? "underline underline-offset-4"
                  : "hover:text-primary"
              )}
            >
              Products
            </Link>
            <Link
              href="/teams"
              className={cn(
                "text-base font-semibold transition-colors pb-1",
                pathname === "/teams"
                  ? "underline underline-offset-4"
                  : "hover:text-primary"
              )}
            >
              Teams
            </Link>
            <Link
              href="/individuals"
              className={cn(
                "text-base font-semibold transition-colors pb-1",
                pathname === "/individuals"
                  ? "underline underline-offset-4"
                  : "hover:text-primary"
              )}
            >
              Individuals
            </Link>
            {/*
            <Link
              href="/about"
              className={cn(
                "text-base font-semibold transition-colors pb-1",
                pathname === "/about"
                  ? "underline underline-offset-4"
                  : "hover:text-primary"
              )}
            >
              About
            </Link>
            */}
            <Link
              href="/team"
              className={cn(
                "text-base font-semibold transition-colors pb-1",
                pathname === "/team"
                  ? "underline underline-offset-4"
                  : "hover:text-primary"
              )}
            >
              Us
            </Link>
          </nav>
        </div>

        {/* CTA Buttons and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/request-demo">Request Demo</Link>
          </Button>
          <Button asChild>
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/products"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/products"
                  ? "underline text-primary"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/teams"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/teams"
                  ? "underline text-primary"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              href="/individuals"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/individuals"
                  ? "underline text-primary"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Individuals
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/about"
                  ? "underline text-primary"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/team"
                  ? "underline text-primary"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Us
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" asChild className="w-full">
                <Link href="/request-demo">Request Demo</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/waitlist">Join Waitlist</Link>
              </Button>
              <div className="pt-4 border-t mt-4 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
