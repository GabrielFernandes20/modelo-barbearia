/**
 * ============================================================
 * DADOS DA BARBEARIA — arquivo único de configuração
 * ============================================================
 * Edite os dados abaixo para personalizar o site para qualquer cliente.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: "cabelo" | "barba" | "combos" | "tratamentos";
  description: string;
  durationMinutes: number;
  durationLabel: string;
  price: number;
  highlight?: string;
  benefits: string[];
}

export interface Differential {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  comment: string;
  rating: number;
  timeAgo: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "fade" | "barba" | "classico" | "lounge";
  categoryLabel: string;
  imageUrl: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const company = {
  name: "Dom Barba Club",
  shortName: "Dom Barba",
  tagline: "Barbearia Clássica, Visagismo Masculino & Lounge Premium",
  city: "Itatiba",
  state: "SP",
  phoneDisplay: "(19) 99999-9999",
  whatsappNumber: "5519999999999",
  whatsappDefaultMessage:
    "Olá! Gostaria de agendar um horário na Dom Barba Club.",
  instagramHandle: "@dombarbaclub",
  instagramUrl: "https://instagram.com",

  address: {
    street: "Av. Marechal Deodoro, 450",
    neighborhood: "Centro",
    city: "Itatiba",
    state: "SP",
    zip: "13250-000",
    reference: "Ao lado do Banco do Brasil — Estacionamento conveniado e gratuito no local",
    mapsUrl: "https://maps.google.com/?q=Av+Marechal+Deodoro+Itatiba+SP",
  },

  hours: [
    { days: "Terça a Sexta", hours: "09:00 às 20:00" },
    { days: "Sábado", hours: "08:30 às 18:30" },
    { days: "Domingo e Segunda", hours: "Fechado" },
  ],

  stats: {
    rating: "4.9",
    totalReviews: "+1.850",
    experienceYears: "7 anos",
    cutsDone: "+18.000",
  },

  trustBadges: [
    "Cerveja Artesanal e Café Espresso Cortesia",
    "Atendimento Pontual com Hora Marcada",
    "Visagismo que Valoriza o Seu Rosto",
    "Toalha Quente & Ozonioterapia Tradicional",
  ],

  services: [
    {
      id: "corte-visagista",
      name: "Corte Masculino & Visagismo",
      category: "cabelo",
      description:
        "Corte personalizado de acordo com o formato craniano e estilo de vida. Inclui lavagem com shampoo mentolado, finalização e styling com pomada premium.",
      durationMinutes: 45,
      durationLabel: "45 min",
      price: 60,
      highlight: "Mais Procurado",
      benefits: [
        "Análise visagista prévia",
        "Lavagem refrescante com massagem",
        "Acabamento impecável na navalha",
        "Styling e orientação de manutenção diária",
      ],
    },
    {
      id: "barboterapia-premium",
      name: "Barboterapia Tradicional com Toalha Quente",
      category: "barba",
      description:
        "O ritual clássico do cavalheiro: vapor de ozônio para abrir os poros, toalha aromática aquecida, óleos emolientes, navalhar preciso e pós-barba refrescante.",
      durationMinutes: 40,
      durationLabel: "40 min",
      price: 55,
      highlight: "Experiência Relaxante",
      benefits: [
        "Vapor de ozônio purificante",
        "Toalhas quentes com óleos essenciais",
        "Navalhete descartável de alta precisão",
        "Hidratação profunda e bálsamo calmante",
      ],
    },
    {
      id: "combo-imperial",
      name: "Combo Imperial (Cabelo + Barboterapia)",
      category: "combos",
      description:
        "A experiência completa Dom Barba: Corte com visagismo, ritual completo de barboterapia com toalha quente e massagem facial relaxante. Acompanha chopp artesanal gelado.",
      durationMinutes: 75,
      durationLabel: "1h 15min",
      price: 105,
      highlight: "O Campeão de Vendas",
      benefits: [
        "Corte completo + Barboterapia",
        "Economia de R$ 10 no combo",
        "Chopp artesanal ou espresso de cortesia",
        "Alinhamento milimétrico de contornos",
      ],
    },
    {
      id: "selagem-alinhamento",
      name: "Alinhamento Térmico & Selagem Capilar",
      category: "tratamentos",
      description:
        "Redução de volume e controle do frizz sem aspecto artificial. Cabelo alinhado, macio e de fácil penteabilidade no dia a dia.",
      durationMinutes: 50,
      durationLabel: "50 min",
      price: 85,
      benefits: [
        "Fórmula sem formol aprovada pela Anvisa",
        "Aspecto natural e movimento solto",
        "Duração de 60 a 90 dias",
        "Brilho intenso e fios blindados",
      ],
    },
    {
      id: "corte-acabamento-barba",
      name: "Corte + Alinhamento Rápido de Barba",
      category: "combos",
      description:
        "Ideal para quem está com tempo curto e quer manter visual afiado: corte de cabelo completo mais alinhamento e desenho de contorno da barba na navalha.",
      durationMinutes: 55,
      durationLabel: "55 min",
      price: 90,
      benefits: [
        "Corte visagista completo",
        "Desenho e contorno navalhado da barba",
        "Finalização rápida e prática",
      ],
    },
    {
      id: "sobrancelha-masculina",
      name: "Design de Sobrancelha Masculina",
      category: "tratamentos",
      description:
        "Limpeza de excessos mantendo o formato masculino e natural do olhar, sem afinar ou arquear exageradamente.",
      durationMinutes: 15,
      durationLabel: "15 min",
      price: 25,
      benefits: [
        "Preserva traços masculinos",
        "Alivia a expressão e o peso do olhar",
        "Acabamento na pinça e navalha",
      ],
    },
    {
      id: "camuflagem-grisalhos",
      name: "Camuflagem de Fios Brancos (Cabelo ou Barba)",
      category: "tratamentos",
      description:
        "Tonalização discreta para atenuar o grisalho de forma sutil e natural em apenas 15 minutos na cadeira, sem manchar a pele.",
      durationMinutes: 25,
      durationLabel: "25 min",
      price: 50,
      benefits: [
        "Resultado 100% discreto e natural",
        "Não deixa avermelhado ao desbotar",
        "Ação rápida sem amônia",
      ],
    },
    {
      id: "dia-do-noivo",
      name: "Dia do Noivo & Pacote VIP Gentlemen",
      category: "combos",
      description:
        "Espaço reservado para o noivo e seus padrinhos. Corte, barboterapia, massagem relaxante, hidratação profunda, cervejas e petiscos especiais.",
      durationMinutes: 180,
      durationLabel: "3 horas",
      price: 320,
      highlight: "Exclusivo",
      benefits: [
        "Sala lounge VIP reservada",
        "Corte, barba e limpeza de pele suave",
        "Open cerveja artesanal e charuto",
        "Fotos e suporte na vestimenta do noivo",
      ],
    },
  ] as ServiceItem[],

  differentials: [
    {
      id: "visagismo",
      number: "01",
      title: "Visagismo Personalizado",
      description:
        "Não aplicamos um corte padrão. Analisamos a geometria do seu rosto, linhas de expressão e estilo profissional para realçar sua melhor versão.",
    },
    {
      id: "lounge",
      number: "02",
      title: "Lounge Bar & Experiência",
      description:
        "Chegue mais cedo e relaxe. Chopp artesanal bem gelado, café espresso moído na hora, mesa de sinuca e trilha sonora selecionada.",
    },
    {
      id: "toalha-quente",
      number: "03",
      title: "Barboterapia Tradicional",
      description:
        "O legítimo ritual de navalha: vapor de ozônio para abrir os poros, toalha aquecida com óleo de eucalipto e pós-barba mentolado.",
    },
    {
      id: "pontualidade",
      number: "04",
      title: "Pontualidade Britânica",
      description:
        "Seu tempo é precioso. Agendamento 100% digitalizado com hora marcada e respeito rigoroso aos minutos reservados na cadeira.",
    },
  ] as Differential[],

  testimonials: [
    {
      id: "1",
      name: "Rodrigo Almeida",
      role: "Empresário",
      service: "Combo Imperial",
      comment:
        "A barboterapia é de outro planeta. O ambiente é sensacional, tomo um chopp gelado e saio renovado para as reuniões da semana. Não troco por nada.",
      rating: 5,
      timeAgo: "há 3 dias",
    },
    {
      id: "2",
      name: "Lucas Mendonça",
      role: "Arquiteto",
      service: "Corte Fade & Visagismo",
      comment:
        "O visagismo realmente faz diferença. O barbeiro me explicou qual tipo de degradê combinava com o formato do meu maxilar. O acabamento ficou cirúrgico.",
      rating: 5,
      timeAgo: "há 1 semana",
    },
    {
      id: "3",
      name: "Guilherme Santos",
      role: "Advogado",
      service: "Barboterapia & Sobrancelha",
      comment:
        "Pontualidade impecável! Cheguei no horário e sentei na cadeira na mesma hora. Toalha quente muito relaxante e navalha sem irritar a pele.",
      rating: 5,
      timeAgo: "há 2 semanas",
    },
    {
      id: "4",
      name: "Marcos Vinícius",
      role: "Engenheiro de Software",
      service: "Dia do Noivo",
      comment:
        "Passei o Dia do Noivo com meus padrinhos na Dom Barba. Foi a melhor decisão! Relaxamos, tomamos cerveja artesanal e fomos pro altar impecáveis.",
      rating: 5,
      timeAgo: "há 1 mês",
    },
  ] as Testimonial[],

  gallery: [
    {
      id: "gal-1",
      title: "Fade Mid Clássico & Linhas Precisas",
      category: "fade",
      categoryLabel: "Corte Degradê",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      alt: "Corte masculino degradê fade bem estruturado",
    },
    {
      id: "gal-2",
      title: "Barboterapia Tradicional com Toalha Quente",
      category: "barba",
      categoryLabel: "Barboterapia",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      alt: "Cliente recebendo tratamento de barba com toalha aquecida",
    },
    {
      id: "gal-3",
      title: "Lounge Bar & Cadeiras Retrô de Couro",
      category: "lounge",
      categoryLabel: "Ambiente Lounge",
      imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      alt: "Interior da barbearia com iluminação âmbar e cadeiras clássicas",
    },
    {
      id: "gal-4",
      title: "Acabamento Navalhado na Linha do Pescoço",
      category: "barba",
      categoryLabel: "Barboterapia",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
      alt: "Barbeiro realizando acabamento e contorno milimétrico com navalha clássica",
    },
    {
      id: "gal-5",
      title: "Corte Pompadour Texturizado",
      category: "classico",
      categoryLabel: "Clássicos",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
      alt: "Penteado masculino clássico finalizado com pomada matte",
    },
    {
      id: "gal-6",
      title: "Cerveja Artesanal e Atendimento Amigável",
      category: "lounge",
      categoryLabel: "Ambiente Lounge",
      imageUrl: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=800&q=80",
      alt: "Cerveja artesanal servida de cortesia no balcão de madeira",
    },
  ] as GalleryItem[],

  faqs: [
    {
      question: "Preciso agendar com antecedência ou posso ser atendido por ordem de chegada?",
      answer:
        "Trabalhamos prioritariamente com agendamento com hora marcada pelo WhatsApp para garantir que você não perca tempo esperando na recepção. Caso haja um horário vago no momento em que você chegar, teremos prazer em atendê-lo, mas recomendamos fortemente agendar antes.",
    },
    {
      question: "O que está incluído na Barboterapia?",
      answer:
        "É um ritual completo: aplicação de óleos essenciais pré-barba, vapor de ozônio para higienização e abertura dos poros, toalha aquecida e aromatizada, navalhete descartável para contorno e raspagem suave, hidratação profunda da pele e loção pós-barba calmante.",
    },
    {
      question: "A cerveja artesanal e o café são realmente gratuitos?",
      answer:
        "Sim, 100% por nossa conta! Ao chegar para o seu atendimento, você pode escolher entre um chopp artesanal bem gelado, café espresso especial ou água mineral gaseificada.",
    },
    {
      question: "Como funciona a garantia de pontualidade?",
      answer:
        "Valorizamos a sua agenda. Nosso sistema calcula a duração de cada serviço para que a cadeira esteja livre e higienizada exatamente no minuto marcado para você.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos Pix, cartões de crédito e débito (todas as principais bandeiras) e dinheiro.",
    },
    {
      question: "Tem estacionamento no local?",
      answer:
        "Sim, contamos com convênio com estacionamento seguro bem ao lado da barbearia, gratuito durante todo o seu atendimento.",
    },
  ] as FAQItem[],
};
