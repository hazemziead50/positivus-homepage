import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../../assets/Logo/logo.svg";

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex max-w-7xl items-center justify-between mx-auto px-5 py-6">
        
        {/* Logo */}
        <div>
          <img src={Logo} alt="positivus home" className="w-52 h-9" />
        </div>

        {/* Desktop Navigation */}
        <div className="flex justify-end gap-12">
          <ul className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xl font-normal text-positivus-dark transition-colors hover:text-positivus-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild variant="outline" className="hidden lg:inline-flex">
            <a href="#contact">Request a quote</a>
          </Button>
        </div>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="p-2 text-positivus-dark hover:text-positivus-green transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] flex flex-col justify-between p-6">
              
              <SheetHeader className="text-left border-b pb-4">
                <SheetTitle className="text-xl font-medium text-positivus-dark">
                  Menu
                </SheetTitle>
              </SheetHeader>

              {/* Links*/}
              <div className="flex-1 py-6">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-positivus-dark hover:text-positivus-green transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* contact button */}
              <div className="pt-6 border-t">
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Request a quote
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;