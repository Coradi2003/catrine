import { CreditCard, Clock, Flower2, MessageCircle } from "lucide-react";

const rules = [
  {
    icon: CreditCard,
    title: "Pagamento",
    desc: "Entrada de 50% obrigatória. Restante na retirada. Pix, transferência, dinheiro ou boleto. Cartão com taxa adicional.",
  },
  {
    icon: Clock,
    title: "Prazo",
    desc: "Encomendas com antecedência mínima. Consulte disponibilidade pelo WhatsApp.",
  },
  {
    icon: Flower2,
    title: "Personalização",
    desc: "Topo de bolo personalizado e flores naturais disponíveis (valor adicional).",
  },
  {
    icon: MessageCircle,
    title: "Alterações",
    desc: "Alterações devem ser solicitadas com antecedência. Consulte nossa política.",
  },
];

const EncomendasSection = () => (
  <section id="encomendas" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Faça seu pedido</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Encomendas
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {rules.map((r) => (
          <div key={r.title} className="flex gap-4 p-6 bg-card rounded-2xl border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/5548996972756?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-caramel transition-colors"
        >
          Fazer Encomenda pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default EncomendasSection;
