import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="py-20 bg-warm-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Venha nos visitar</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Contato</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Rua Vinte e Quatro de Abril, 3057 – Centro<br />
                Palhoça – SC | CEP 88131-030
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">WhatsApp</h3>
              <a href="https://wa.me/5548996972756" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-caramel transition-colors">
                (48) 99697-2756
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Instagram</h3>
              <a href="https://instagram.com/catrinemaivald.adoceria" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-caramel transition-colors">
                @catrinemaivald.adoceria
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Horário</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 08:00 – 18:40<br />
                Sábado: até ~13:00<br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-auto">
          <iframe
            title="Localização Catrine Maivald"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5!2d-48.6686!3d-27.6453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM4JzQzLjEiUyA0OMKwNDAnMDcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
