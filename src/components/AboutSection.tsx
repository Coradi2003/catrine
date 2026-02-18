import fachada from "@/assets/fachada.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-warm-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={fachada} alt="Fachada da Catrine Maivald – A Doceria" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Nossa História</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre a Doceria
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">Catrine Maivald – A Doceria</strong> é uma doceria artesanal focada em qualidade, 
              sabor e experiência premium. Cada produto é feito com produção própria, ingredientes cuidadosamente 
              selecionados e muito carinho.
            </p>
            <p>
              Nosso conceito une a tradição da confeitaria com a sofisticação dos sabores modernos, 
              oferecendo bolos decorados, docinhos gourmet, tortas caseiras e sobremesas que encantam 
              pelo visual e pelo paladar.
            </p>
            <p>
              Acreditamos que cada doce conta uma história. Por isso, investimos em atendimento humanizado, 
              personalização e uma estética impecável em cada criação.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
