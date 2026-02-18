import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5548996972756?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-white" fill="white" />
  </a>
);

export default WhatsAppFloat;
