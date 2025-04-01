"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">hoope</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/products"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Team
          </Link>
          <Link
            href="/individuals"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Individuals
          </Link>
        </nav>

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
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/individuals"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Individuals
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
