"use client";

import { navItems } from "@/database/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="relative top-0 left-0 right-0">
      <div className="container max-w-3xl">
        <div className="flex items-center justify-between py-6">
          <div className="brand">
            <Link href="/" className="block text-xl font-bold text-tprimary">
              <Image
                src="/images/avatar.webp"
                width={40}
                height={40}
                alt="Logo"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href === "/home" ? "/" : item.href}
                className={`${buttonVariants({
                  variant: item.href.startsWith(
                    `/${segment === null ? "home" : segment}`
                  )
                    ? "secondary"
                    : "ghost",
                  size: "sm",
                })} ${cn("font-semibold")}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
