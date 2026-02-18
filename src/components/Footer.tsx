import { Instagram, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-coffee py-12">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-display text-2xl font-bold text-cream mb-1">Catrine Maivald</h3>
      <p className="text-cream/60 text-xs tracking-[0.3em] uppercase mb-6">A Doceria</p>

      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://instagram.com/catrinemaivald.adoceria"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-cream" />
        </a>
        <a
          href="https://wa.me/5548996972756"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
          aria-label="WhatsApp"
        >
          <Phone className="w-5 h-5 text-cream" />
        </a>
      </div>

      <p className="text-cream/40 text-xs">
        © {new Date().getFullYear()} Catrine Maivald – A Doceria. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
