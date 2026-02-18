import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Docinhos", href: "#docinhos" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex flex-col items-center leading-none">
          <span className={`font-display text-xl font-bold tracking-wide transition-colors ${scrolled ? "text-primary" : "text-cream"}`}>
            Catrine Maivald
          </span>
          <span className={`text-xs tracking-[0.3em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-cream/80"}`}>
            A Doceria
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide uppercase transition-colors hover:text-gold ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5548996972756"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold tracking-wide hover:bg-caramel transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-primary" : "text-cream"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream/98 backdrop-blur-md border-t border-gold-light animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground text-base tracking-wide uppercase py-2 border-b border-border hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5548996972756"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground text-center py-3 rounded-full font-semibold tracking-wide mt-2"
            >
              Fazer Encomenda via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
