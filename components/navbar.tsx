"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Branding */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="h-8 w-auto"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.nav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === item.href
                  ? "text-white font-semibold"
                  : "text-gray-400"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open Menu"
              className="md:hidden text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] bg-gray-900 text-gray-400"
            onCloseAutoFocus={() => setIsOpen(false)}
          >
            <div className="flex flex-col space-y-6 mt-4">
              {siteConfig.nav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    pathname === item.href
                      ? "text-white font-semibold"
                      : "text-gray-400"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
