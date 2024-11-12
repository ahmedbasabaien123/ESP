"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme";

const navItems = [
  { href: "/ESP/", label: "Accueil" },
"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme";
import { MobileNav } from "./mobileNav";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  testId: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive,
  testId,
}) => (
  <li>
    <a
      data-testid={testId}
      className={`un rounded-lg md:text-xl lg:text-2xl xl:text-4xl ${
        isActive ? "font-bold text-primary" : ""
      }`}
      href={href}
    >
      {children}
    </a>
  </li>
);

const navItems = [
  { href: "/ESP/", label: "Accueil" },
  { href: "/ESP/#team", label: "Equipe" },
  { href: "/ESP/#solutions", label: "Services" },
  { href: "/ESP/Contact", label: "Contact" },
  { href: "/ESP/#FAQ", label: "FAQ" },
];

export default function Nav() {
  const [activePath, setActivePath] = React.useState<string>("");

  React.useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <header className="fixed-nav bg-background shadow-lg transition-all duration-300">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/ESP/">
          </a>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activePath === item.href}
                testId={`nav-link-${item.label}`}
              >
                {item.label}
              </NavLink>
            ))}
            <li>
              <ThemeToggle data-testid="theme-toggle-desktop" />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
}
  { href: "/ESP/Contact", label: "Contact" },
  { href: "/ESP/#FAQ", label: "FAQ" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePath, setActivePath] = React.useState("/");

  React.useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <div className="relative py-2 text-4xl md:hidden">
      <nav className="my-4 flex items-center justify-between">
        <a href="/">
        </a>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-14 px-4 text-xl lg:h-16 lg:px-3"
                >
                  ☰
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                            activePath === item.href
                              ? "bg-accent text-accent-foreground"
                              : ""
                          }`}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.label}
                          </div>
                        </a>
                      </li>
                    ))}
                    <ThemeToggle />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
}
