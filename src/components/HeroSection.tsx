import heroImg from "@/assets/bolo-morango.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Bolo artesanal da Catrine Maivald" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/50 to-coffee/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up max-w-3xl mx-auto">
          <p className="text-gold-light text-sm tracking-[0.4em] uppercase mb-4 font-body">
            Doceria Artesanal Premium
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
            Catrine Maivald
          </h1>
          <p className="font-display text-xl md:text-2xl text-cream/80 italic mb-2">
            A Doceria
          </p>
          <p className="text-cream/70 text-base md:text-lg max-w-xl mx-auto mt-6 mb-10 font-light leading-relaxed">
            Bolos artesanais, docinhos gourmet e sobremesas feitas com amor, ingredientes selecionados e um toque de sofisticação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cardapio"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-caramel transition-all duration-300"
            >
              Ver Cardápio
            </a>
            <a
              href="https://wa.me/5548996972756?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream/40 text-cream px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-cream/10 transition-all duration-300"
            >
              Fazer Encomenda
            </a>

            <a
              href="#contato"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-caramel transition-all duration-300"
            >
              Localização e Horário
            </a>


          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
