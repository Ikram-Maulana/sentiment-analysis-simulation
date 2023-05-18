"use client";

import { navItems } from "@/database/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
            {navItems.map((item, index) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`${buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    size: "sm",
                  })} ${isActive ? cn("navActive") : null}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
