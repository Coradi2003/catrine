import cheesecake from "@/assets/cheesecake.jpg";
import tortaMerengue from "@/assets/torta-merengue.jpg";
import boloChocolate from "@/assets/bolo-chocolate.jpg";
import boloMorango from "@/assets/bolo-morango.jpg";
import boloFlocos from "@/assets/bolo-morangos-flocos.jpg";
import docinhosTrad from "@/assets/docinhos-tradicionais.jpg";
import docinhosGourmet from "@/assets/docinhos-gourmet.jpg";
import tortaBanana from "@/assets/torta-banana.jpg";

const images = [
  { src: boloMorango, alt: "Bolo com morangos e chocolate" },
  { src: docinhosGourmet, alt: "Docinhos gourmet variados" },
  { src: cheesecake, alt: "Cheesecake de frutas vermelhas" },
  { src: boloChocolate, alt: "Bolo de chocolate artesanal" },
  { src: tortaBanana, alt: "Torta de banana caseira" },
  { src: tortaMerengue, alt: "Torta merengue com morangos" },
  { src: boloFlocos, alt: "Bolo com morangos e flocos" },
  { src: docinhosTrad, alt: "Docinhos tradicionais" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Nossos Produtos</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Galeria</h2>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid group">
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
