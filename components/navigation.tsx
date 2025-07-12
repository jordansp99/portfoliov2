"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Dr. Sarah Chen
          </Link>

          <div className="flex items-center space-x-1">
            {navigation.map((item) => (
              <Button key={item.name} variant={pathname === item.href ? "default" : "ghost"} asChild size="sm">
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    pathname === item.href ? "text-white" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
