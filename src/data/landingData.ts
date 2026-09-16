import { BonusItem, FaqItem, ProductDeliverable, ProtocolStep, TestimonialItem } from '../types';

export const CHECKOUT_URL = 'https://pay.cakto.com.br/n6fwbtu_1002095';

export const HERO_CAROUSEL = [
  {
    src: '/mockup-novo.png',
    alt: 'Mockup oficial do Guia da Crise Sensorial, Bônus Exclusivos e Kit de Rotina Visual',
    label: 'Guia Completo + Materiais Complementares',
    badge: 'Kit Completo',
  },
  {
    src: '/bonus1-novo.jpeg',
    alt: 'Bônus 1 — Frases Prontas para a Crise: 10 frases que acalmam e 10 que pioram',
    label: 'Bônus 1 — Frases Prontas para a Crise',
    badge: 'Bônus Gratuito',
  },
  {
    src: '/bonus2-novo.jpeg',
    alt: 'Bônus 2 — Checklist de Saída de Casa Sem Pânico',
    label: 'Bônus 2 — Checklist de Saída de Casa',
    badge: 'Bônus Gratuito',
  },
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    number: '01',
    timeRange: 'Segundo 0 ao 60',
    title: 'Cessação de Estímulos & Segurança Imediata',
    description: 'Como desativar a sobrecarga sensorial do ambiente sem puxar a criança, sem forçar contato visual e sem gritar. A postura corporal neutra que transmite calma biológica.',
    keyAction: 'Reduzir luz/ruído, criar barreira visual suave e manter distância de segurança sem abandono.',
    avoidTip: 'NUNCA tente argumentar, fazer perguntas ou dizer "olha pra mim" neste minuto.',
  },
  {
    number: '02',
    timeRange: 'Minuto 1 ao 5',
    title: 'Descompressão Sensorial Guiada',
    description: 'O método prático para ajudar o cérebro da criança a diminuir a rotação do estado de fuga ou luta. Uso de ancoragem sensorial e as 10 frases que acalmam o sistema nervoso.',
    keyAction: 'Aplicar respiração espelho, oferecer estímulo proprioceptivo ou objeto de transição regulatório.',
    avoidTip: 'Evite toques inesperados por trás ou restringir movimentos sem consentimento.',
  },
  {
    number: '03',
    timeRange: 'Minuto 5 ao 10',
    title: 'Reconexão Afetiva & Prevenção do Rebote',
    description: 'Como finalizar o ciclo da crise com dignidade, restabelecendo a confiança da criança e evitando que uma nova crise aconteça 20 minutos depois.',
    keyAction: 'Oferecer água fria, acolhimento sem julgamentos e transição suave para uma atividade de baixo estímulo.',
    avoidTip: 'Não comece a dar sermões ou repreender o comportamento logo após a acalmação.',
  },
];

export const TANTRUM_VS_MELTDOWN = [
  {
    criteria: 'Objetivo / Causa',
    tantrum: 'Quer obter um objeto, comida, atenção ou escapar de uma regra imediata.',
    meltdown: 'Colapso involuntário do sistema nervoso por excesso de luz, barulho, cheiro ou estresse acumulado.',
  },
  {
    criteria: 'Comportamento com plateia',
    tantrum: 'A criança espia para ver se os pais ou pessoas estão olhando e reagindo.',
    meltdown: 'Não importa quem está olhando. A criança perde a capacidade de perceber o público ao redor.',
  },
  {
    criteria: 'Se você ceder o que ela quer',
    tantrum: 'A birra cessa quase instantaneamente ao conseguir a concessão.',
    meltdown: 'Piora ou continua inalterada, pois o problema não é um desejo, mas uma dor neurológica real.',
  },
  {
    criteria: 'Como encerrar',
    tantrum: 'Precisa de limites firmes, coerência e redirecionamento de foco.',
    meltdown: 'Precisa de protocolo de descompressão sensorial, redução de estímulos e segurança.',
  },
];

export const DELIVERABLES: ProductDeliverable[] = [
  {
    iconName: 'BookOpen',
    title: 'E-book Completo (16 Páginas Direto ao Ponto)',
    description: 'O protocolo de 3 passos explicado de forma 100% prática, sem termos médicos difíceis, feito para você consultar em 5 minutos.',
    badge: 'Principal',
  },
  {
    iconName: 'Sparkles',
    title: 'Cards Visuais de Emergência',
    description: 'O passo a passo resumido em cards compactos de alta resolução para salvar na galeria do celular ou imprimir e levar na bolsa.',
    badge: 'Apoio Rápido',
  },
  {
    iconName: 'Compass',
    title: 'Guia de Mapeamento de Gatilhos',
    description: 'Roteiro de perguntas e planilha visual para rastrear a carga sensorial do seu filho e prever a crise horas antes que ela aconteça.',
    badge: 'Prevenção',
  },
  {
    iconName: 'Home',
    title: 'Checklist de Preparação de Ambientes',
    description: 'Ajustes práticos de iluminação, ruídos e rotinas para transformar o quarto, a sala e a saída de casa em espaços seguros.',
    badge: 'Organização',
  },
];

export const GUIDE_TOPICS = [
  'Como diferenciar em 10 segundos se é birra comportamental ou crise sensorial',
  'A relação oculta entre sons agudos, lâmpadas fluorescentes, tecidos e a explosão de raiva',
  'Os 4 micro-sinais corporais que a criança dá 15 minutos antes de explodir',
  'O que você NUNCA deve falar durante o colapso (e as frases que pioram tudo)',
  'Como agir nos primeiros 60 segundos cruciais quando a crise começa',
  'A técnica para a mãe/pai não entrar em desespero e manter o autocontrole biológico',
  'Manual de sobrevivência em público: como lidar com olhares de julgamento de estranhos',
  'O que dizer para parentes e professores quando a criança entra em crise',
  'O passo a passo da reconexão afetiva para não traumatizar a criança nem você',
  'Ajustes simples na rotina matinal e noturna para reduzir as crises em até 70%',
];

export const AUDIENCE_TARGETS = [
  'Mães de crianças com TEA (autismo níveis 1, 2 e 3)',
  'Pais que querem saber agir com firmeza e carinho na hora H',
  'Avós e familiares cuidadores que convivem com a criança',
  'Professoras, educadoras e mediadoras escolares',
  'Terapeutas ocupacionais, psicopedagogas e fonoaudiólogas',
  'Famílias que ainda estão no processo de investigação diagnóstica',
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    tag: 'BÔNUS EXCLUSIVO 1',
    title: 'Frases Prontas para a Crise Sensorial',
    subtitle: 'O que dizer (e o que evitar) nos momentos mais difíceis',
    description: 'Guia de bolso com 10 frases que transmitem segurança neurológica imediata e 10 frases comuns que disparam ainda mais o estresse da criança.',
    value: 'R$ 37,00',
    image: '/bonus1-novo.jpeg',
    highlights: [
      '10 frases de validação e desescalada rápida',
      '10 armadilhas verbais que os pais usam sem perceber',
      'Frases para responder comentários de estranhos na rua',
    ],
  },
  {
    id: 'bonus-2',
    tag: 'BÔNUS EXCLUSIVO 2',
    title: 'Checklist de Saída de Casa Sem Pânico',
    subtitle: 'Mochila sensorial e previsibilidade para passeios tranquilos',
    description: 'Checklist ilustrado para preparar a ida ao supermercado, consultas médicas, festas e passeios sem medo de colapsos sensoriais inesperados.',
    value: 'R$ 29,00',
    image: '/bonus2-novo.jpeg',
    highlights: [
      'Os 5 itens de socorro sensorial para ter sempre na bolsa',
      'Como criar o mapa de previsibilidade do passeio',
      'Estratégia de saída rápida com dignidade',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Carla Vasconcelos',
    role: 'Mãe do Theo (5 anos, autista)',
    city: 'Curitiba, PR',
    rating: 5,
    quote: 'Eu entrava em pânico junto com meu filho no meio do supermercado. Chorava no carro de vergonha dos olhares. O protocolo dos 3 passos me deu a segurança que nenhum laudo médico me deu. Semana passada ele começou a sobrecarregar, apliquei o passo 1 e em 7 minutos ele estava calmo segurando minha mão.',
    highlight: 'Em 7 minutos ele estava calmo segurando minha mão.',
    avatarText: 'CV',
  },
  {
    name: 'Renata Mendonça',
    role: 'Mãe da Alice (4 anos)',
    city: 'Belo Horizonte, MG',
    rating: 5,
    quote: 'O que mais me abriu os olhos foi a diferença de birra e crise sensorial. Eu brigava achando que era teimosia e só piorava o sofrimento dela. As 10 frases prontas mudaram completamente o clima da nossa casa. Valeu cada centavo, pagaria 10 vezes mais.',
    highlight: 'As 10 frases prontas mudaram completamente a nossa casa.',
    avatarText: 'RM',
  },
  {
    name: 'Dr. Leonardo Paiva',
    role: 'Pai do Lucas (7 anos) e Pediatra',
    city: 'São Paulo, SP',
    rating: 5,
    quote: 'Mesmo sendo médico, quando a crise do meu próprio filho acontecia dentro de casa eu me sentia impotente. Este guia é o material mais objetivo, respeitoso e prático que já tive acesso. Deveria ser entregue a todos os pais no momento do diagnóstico.',
    highlight: 'Deveria ser entregue a todos os pais no diagnóstico.',
    avatarText: 'LP',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Para quem é este material?',
    answer: 'Para mães, pais, avós, cuidadores e educadores que convivem com crianças autistas ou com sensibilidade sensorial e querem um roteiro prático para saber exatamente o que fazer nos momentos mais desafiadores, sem desespero e sem improvisos.',
  },
  {
    question: 'O que exatamente vou receber ao adquirir?',
    answer: 'Você recebe o E-book Guia da Crise Sensorial com o Protocolo de 3 Passos detalhado, os Cards Visuais de Emergência para salvar no celular, o Guia de Mapeamento de Gatilhos, o Checklist de Preparação de Ambientes, mais os 2 Bônus Exclusivos (Frases Prontas e Checklist de Saída de Casa).',
  },
  {
    question: 'Como recebo o acesso? É imediato?',
    answer: 'Sim! Imediatamente após a aprovação do pagamento (PIX ou cartão), você receberá um e-mail com os links para download instantâneo de todos os materiais em PDF de alta qualidade. Você pode ler no celular, tablet ou imprimir.',
  },
  {
    question: 'É um produto físico ou digital?',
    answer: 'É 100% digital. Nada é enviado pelos Correios, o que significa que você não paga frete e tem acesso imediato, direto no seu celular ou computador em menos de 2 minutos após a compra.',
  },
  {
    question: 'Preciso ter algum conhecimento prévio em medicina ou psicologia?',
    answer: 'Não! O guia foi escrito com linguagem totalmente simples, humanizada e prática. Sem termos técnicos desnecessários, apenas orientações claras do que fazer a cada minuto.',
  },
  {
    question: 'O material substitui acompanhamento profissional?',
    answer: 'Não. Este material tem finalidade prática de apoio familiar e educação parental, servindo como uma ferramenta cotidiana indispensável, sem substituir terapias e avaliações especializadas.',
  },
  {
    question: 'Como funciona a garantia incondicional de 7 dias?',
    answer: 'Você tem 7 dias inteiros para testar o protocolo. Se achar que o conteúdo não trouxe mais calma e segurança para os momentos de crise da sua família, basta pedir reembolso na Cakto com um único clique e você recebe 100% do seu dinheiro de volta.',
  },
  {
    question: 'Como funciona o Kit de Rotina Visual opcional?',
    answer: 'É uma oferta especial que você pode adicionar marcando a caixinha na página de pagamento por apenas R$ 19,90. Ele contém dezenas de cards visuais para estruturar a rotina diária da criança (acordar, escovar dentes, escola, banho), diminuindo a ansiedade por imprevisibilidade.',
  },
];

export const RECENT_BUYERS = [
  { name: 'Ana Paula M.', city: 'São Paulo, SP', time: 'há 2 minutos' },
  { name: 'Juliana R.', city: 'Belo Horizonte, MG', time: 'há 5 minutos' },
  { name: 'Mariana S.', city: 'Rio de Janeiro, RJ', time: 'há 8 minutos' },
  { name: 'Fernanda C.', city: 'Curitiba, PR', time: 'há 11 minutos' },
  { name: 'Patrícia D.', city: 'Porto Alegre, RS', time: 'há 14 minutos' },
  { name: 'Carla T.', city: 'Brasília, DF', time: 'há 18 minutos' },
];
