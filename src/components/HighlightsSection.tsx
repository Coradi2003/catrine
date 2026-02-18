import boloChocolate from "@/assets/bolo-chocolate.jpg";
import docinhos from "@/assets/docinhos-gourmet.jpg";
import tortaBanana from "@/assets/torta-banana.jpg";

const highlights = [
  {
    img: boloChocolate,
    title: "Bolos Artesanais",
    desc: "Receitas exclusivas com cobertura impecável e sabores irresistíveis.",
  },
  {
    img: docinhos,
    title: "Docinhos Gourmet",
    desc: "Brigadeiros, beijinhos e trufas com ingredientes premium.",
  },
  {
    img: tortaBanana,
    title: "Tortas & Sobremesas",
    desc: "Tortas caseiras e sobremesas que encantam pelo sabor e apresentação.",
  },
];

const HighlightsSection = () => (
  <section className="py-20 bg-warm-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Nossas Especialidades</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Feito com Amor & Qualidade
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {highlights.map((item) => (
          <div key={item.title} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
