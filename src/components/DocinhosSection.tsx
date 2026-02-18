import docinhosTrad from "@/assets/docinhos-tradicionais.jpg";
import docinhosFinos from "@/assets/docinhos-finos.jpg";
import docinhosGourmet from "@/assets/docinhos-gourmet.jpg";

const packages = [
  {
    title: "Tradicionais",
    img: docinhosTrad,
    prices: ["Caixa 50 un — R$100", "Caixa 100 un — R$180"],
  },
  {
    title: "Gourmet",
    img: docinhosGourmet,
    prices: ["Caixa 50 un — R$160", "Caixa 100 un — R$290"],
  },
  {
    title: "Doces Finos",
    img: docinhosFinos,
    prices: ["R$4,50 / unidade", "Mini sobremesas: R$7,50 / un", "Mínimo: 20 un por sabor"],
  },
];

const DocinhosSection = () => (
  <section id="docinhos" className="py-20 bg-warm-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Doçura em cada detalhe</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Docinhos & Sobremesas
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.title} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={pkg.img}
                alt={`Docinhos ${pkg.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">{pkg.title}</h3>
              <ul className="space-y-2">
                {pkg.prices.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://wa.me/5548996972756?text=Olá!%20Gostaria%20de%20encomendar%20docinhos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-caramel transition-colors"
        >
          Encomendar Docinhos
        </a>
      </div>
    </div>
  </section>
);

export default DocinhosSection;
