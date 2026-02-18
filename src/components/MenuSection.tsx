import { useState } from "react";

type Category = {
  name: string;
  description?: string;
  items: { name: string; detail?: string; price?: string }[];
  sizes?: { label: string; price: string }[];
};

const menuCategories: Category[] = [
  {
    name: "Bolos Tradicionais",
    description: "Sabores clássicos com massa fofinha e recheio generoso",
    sizes: [
      { label: "15cm (1,7kg)", price: "R$149,90" },
      { label: "18cm (2,2kg)", price: "R$189,90" },
      { label: "20cm (2,7kg)", price: "R$229,90" },
      { label: "25cm (3,4kg)", price: "R$339,90" },
    ],
    items: [
      { name: "Brigadeiro Branco" },
      { name: "Brigadeiro Ninho" },
      { name: "Brigadeiro Coco Queimado" },
      { name: "Beijinho" },
      { name: "Doce de Leite Cremoso" },
      { name: "Amendoim" },
      { name: "Cinco Leites" },
      { name: "Brigadeiro Preto" },
    ],
  },
  {
    name: "Bolos Gourmet",
    description: "Combinações sofisticadas para paladares exigentes",
    sizes: [
      { label: "15cm", price: "R$185,90" },
      { label: "18cm", price: "R$209,90" },
      { label: "20cm", price: "R$279,90" },
      { label: "25cm", price: "R$399,90" },
    ],
    items: [
      { name: "Cinco Leites com Morangos" },
      { name: "Red Velvet" },
      { name: "Cream Cheese com Frutas Vermelhas" },
      { name: "Torta Mineira" },
      { name: "Mousse de Flocos" },
      { name: "Brigadeiro de Nutella" },
      { name: "Brigadeiro de Maracujá" },
      { name: "Creme de Alpino" },
      { name: "Creme Suíço de Morango" },
      { name: "Nozes Caramelizadas" },
      { name: "Rafaello Trufado" },
      { name: "Delícia de Ameixa" },
    ],
  },
  {
    name: "Bolos Caseirinhos",
    description: "O aconchego do sabor caseiro",
    items: [
      { name: "Cenoura", price: "a partir de R$45" },
      { name: "Brulée", price: "a partir de R$50" },
      { name: "Chocolate", price: "a partir de R$50" },
      { name: "Nozes", price: "a partir de R$65" },
      { name: "Laranja", price: "a partir de R$45" },
      { name: "Café", price: "a partir de R$50" },
      { name: "Amendoim", price: "a partir de R$50" },
      { name: "Red Velvet", price: "a partir de R$65" },
      { name: "Limão", price: "a partir de R$45" },
      { name: "Pistache", price: "a partir de R$88" },
    ],
  },
  {
    name: "Vulcões",
    items: [
      { name: "Vulcão Choconinho", detail: "Explosão de brigadeiro de ninho com chocolate" },
      { name: "Vulcão Cappuccino", detail: "Sabor intenso de café com cremosidade" },
    ],
  },
  {
    name: "Bolos Fit",
    description: "Sem culpa, com todo sabor",
    items: [
      { name: "Banana com Nozes e Amêndoas", price: "Mini R$15 | Peq R$35 | Méd R$70" },
      { name: "Funcional de Especiarias e Maçã", price: "Mini R$15 | Peq R$35 | Méd R$70" },
      { name: "Cacau e Coco", price: "Mini R$15 | Peq R$35 | Méd R$70" },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Nosso Cardápio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Bolos & Tortas
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category */}
        <div className="max-w-3xl mx-auto animate-fade-in" key={active}>
          {menuCategories[active].description && (
            <p className="text-center text-muted-foreground italic mb-6">
              {menuCategories[active].description}
            </p>
          )}

          {/* Size table */}
          {menuCategories[active].sizes && (
            <div className="mb-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gold-light">
                    <th className="text-left py-3 font-display text-foreground">Tamanho</th>
                    <th className="text-right py-3 font-display text-foreground">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {menuCategories[active].sizes!.map((s) => (
                    <tr key={s.label} className="border-b border-border">
                      <td className="py-3 text-foreground">{s.label}</td>
                      <td className="py-3 text-right font-semibold text-primary">{s.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Flavors */}
          <div className="grid sm:grid-cols-2 gap-3">
            {menuCategories[active].items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-start p-4 bg-card rounded-xl border border-border hover:border-gold-light hover:shadow-sm transition-all duration-300"
              >
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  {item.detail && <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>}
                </div>
                {item.price && (
                  <span className="text-sm font-semibold text-primary whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5548996972756?text=Olá!%20Gostaria%20de%20ver%20o%20cardápio%20completo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-caramel transition-colors"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
