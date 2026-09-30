import {
  Home,
  HeartHandshake,
  Users,
  Stethoscope,
  MessageCircle,
  ClipboardList,
  CalendarCheck,
} from "lucide-react";

export const WHATSAPP_NUMBER = "5517991146934";

export const WHATSAPP_CONSULTA_MSG =
  "Olá, Dra. Raquel! Gostaria de agendar uma consulta domiciliar.";
export const WHATSAPP_PALESTRA_MSG =
  "Olá, Dra. Raquel! Gostaria de agendar uma palestra com a senhora.";

export const WHATSAPP_CONSULTA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CONSULTA_MSG
)}`;
export const WHATSAPP_PALESTRA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PALESTRA_MSG
)}`;

// mantido para compatibilidade (usado onde só precisamos de um link genérico)
export const WHATSAPP_LINK = WHATSAPP_CONSULTA_LINK;

export const INSTAGRAM_LINK = "https://www.instagram.com/draraquelcs/";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cuidados", label: "Cuidados" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export const SERVICES = [
  {
    icon: Stethoscope,
    title: "Medicina de família",
    text: "Acompanhamento contínuo da sua saúde e da sua família, olhando para a pessoa como um todo não só para a doença do momento.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado paliativo",
    text: "Suporte médico e emocional para quem enfrenta doenças graves, com foco em conforto, dignidade e qualidade de vida.",
  },
  {
    icon: Home,
    title: "Consulta domiciliar",
    text: "Atendimento no ambiente mais familiar possível sem deslocamento, sem sala de espera, com toda a atenção que a casa permite.",
  },
  {
    icon: Users,
    title: "Orientação à família",
    text: "Conversas claras sobre diagnóstico, tratamento e cuidados, para que a família decida com informação e tranquilidade.",
  },
];

export const STEPS = [
  {
    icon: MessageCircle,
    title: "Contato",
    text: "Você chama no WhatsApp e conta um pouco da situação de saúde.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação",
    text: "Conversamos sobre as necessidades e definimos o melhor plano de cuidado.",
  },
  {
    icon: Home,
    title: "Visita domiciliar",
    text: "Vou até você, no dia e horário combinados, com toda a estrutura necessária.",
  },
  {
    icon: CalendarCheck,
    title: "Acompanhamento",
    text: "O cuidado continua com retornos e orientação contínua, no seu tempo.",
  },
];

export const DOCTOR = {
  name: "Dra. Raquel C. de Sousa",
  crm: "CRM 163798",
  rqe: "RQE 997121",
  city: "São José do Rio Preto, SP",
};
