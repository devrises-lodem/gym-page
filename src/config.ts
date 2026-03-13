// Site Configuration
// FitCoach Pro - Plataforma de Entrenamiento Fitness

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  siteTitle: "FitCoach Pro - Entrenamiento con Propósito",
  siteDescription: "Transforma tu manera de entrenar con tecnología inteligente y acompañamiento real. Entrena con mejor técnica, evita lesiones y construye disciplina con dirección.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "ENTRENA",
  heroImage: "/hero-athlete.png",
  heroImageAlt: "Atleta profesional entrenando con FitCoach Pro",
  overlayText: "Tecnología que potencia tu entrenamiento",
  brandName: "FitCoach Pro",
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Programas", href: "#programs" },
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#about" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Entrena con",
  titleLine2: "propósito",
  description: "No buscamos crear otra app de rutinas. Buscamos crear una herramienta que eleve la calidad del entrenamiento personal, combinando tecnología inteligente con cercanía humana para que cada persona entrene con mejor técnica, evite lesiones y se sienta acompañada en su proceso.",
  portfolioImages: [
    { src: "/training-1.jpg", alt: "Mujer realizando ejercicio de pesas" },
    { src: "/training-2.jpg", alt: "Entrenador guiando a cliente" },
    { src: "/training-3.jpg", alt: "Técnica de agarre en barra" },
    { src: "/training-4.jpg", alt: "Atleta descansando después de entrenar" },
    { src: "/training-5.jpg", alt: "Revisando progreso en app móvil" },
  ],
  accentText: "Experiencia FitCoach - 2024",
};

// Featured Projects Section (Programs)
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Nuestros Programas",
  titleRegular: "Entrenamiento",
  titleItalic: "Especializado",
  viewAllText: "Ver Todos los Programas",
  viewAllHref: "#programs",
  viewProjectText: "Ver Programa",
  projects: [
    {
      id: 1,
      title: "Fuerza y Resistencia",
      category: "Programa Premium",
      year: "2024",
      image: "/program-strength.jpg",
      description: "Desarrolla fuerza funcional con técnicas correctivas y seguimiento de progreso en tiempo real.",
    },
    {
      id: 2,
      title: "HIIT Cardio",
      category: "Programa Intensivo",
      year: "2024",
      image: "/program-hiit.jpg",
      description: "Maximiza tu quema de calorías con intervalos de alta intensidad supervisados.",
    },
    {
      id: 3,
      title: "Movilidad y Recuperación",
      category: "Programa Esencial",
      year: "2024",
      image: "/program-mobility.jpg",
      description: "Mejora tu rango de movimiento y previene lesiones con rutinas guiadas.",
    },
    {
      id: 4,
      title: "Nutrición y Bienestar",
      category: "Programa Integral",
      year: "2024",
      image: "/program-nutrition.jpg",
      description: "Complementa tu entrenamiento con planes nutricionales personalizados.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "Qué Ofrecemos",
  titleLine1: "Servicios que",
  titleLine2Italic: "transforman",
  description: "Combinamos tecnología inteligente con cercanía humana para ofrecerte una experiencia de entrenamiento completa y personalizada.",
  services: [
    {
      iconName: "Camera",
      title: "Análisis de Técnica",
      description: "Corrección en tiempo real de tu forma mediante visión por computadora y feedback instantáneo.",
    },
    {
      iconName: "Diamond",
      title: "Entrenamiento Personalizado",
      description: "Rutinas adaptadas a tus objetivos, nivel físico y disponibilidad horaria.",
    },
    {
      iconName: "Users",
      title: "Comunidad y Soporte",
      description: "Conecta con otros atletas y recibe apoyo de entrenadores certificados 24/7.",
    },
    {
      iconName: "Sparkles",
      title: "Seguimiento de Progreso",
      description: "Visualiza tu evolución con métricas detalladas y celebración de hitos.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Por Qué Elegirnos",
  titleRegular: "Tecnología y",
  titleItalic: "acompañamiento",
  statsLabel: "Nuestros Números",
  stats: [
    { value: 50, suffix: "K+", label: "Usuarios Activos" },
    { value: 98, suffix: "%", label: "Satisfacción" },
    { value: 500, suffix: "K+", label: "Entrenamientos Guiados" },
    { value: 85, suffix: "%", label: "Mejora en Técnica" },
  ],
  featureCards: [
    {
      image: "/feature-technique.jpg",
      imageAlt: "Análisis de técnica de entrenamiento",
      title: "Técnica Perfecta",
      description: "Nuestro sistema de visión artificial detecta errores de postura y te guía hacia movimientos más seguros y efectivos.",
    },
    {
      image: "/feature-community.jpg",
      imageAlt: "Comunidad fitness celebrando",
      title: "Comunidad Unida",
      description: "Forma parte de una comunidad que te motiva, celebra tus logros y te acompaña en cada paso del camino.",
    },
  ],
  wideImage: "/wide-gym.jpg",
  wideImageAlt: "Gimnasio moderno y equipado",
  wideTitle: "Tu gimnasio, tu ritmo, tu progreso",
  wideDescription: "FitCoach Pro se adapta a cualquier entorno de entrenamiento, desde gimnasios profesionales hasta tu sala de estar.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Historias de Éxito",
  titleRegular: "Lo que dicen",
  titleItalic: "nuestros atletas",
  testimonials: [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Miembro desde 2023",
      image: "/testimonial-1.jpg",
      quote: "FitCoach Pro cambió mi forma de entrenar. La corrección de técnica en tiempo real me ayudó a eliminar dolores de espalda que tenía por años.",
    },
    {
      id: 2,
      name: "Ana Rodríguez",
      role: "Miembro desde 2024",
      image: "/testimonial-2.jpg",
      quote: "Por primera vez siento que entreno con propósito. El seguimiento de progreso me mantiene motivada y la comunidad es increíble.",
    },
    {
      id: 3,
      name: "Roberto Silva",
      role: "Miembro desde 2023",
      image: "/testimonial-3.jpg",
      quote: "A mis 45 años pensaba que era tarde para ponerme en forma. FitCoach Pro me demostró que con la técnica correcta, todo es posible.",
    },
    {
      id: 4,
      name: "María González",
      role: "Miembro desde 2024",
      image: "/testimonial-4.jpg",
      quote: "La combinación de tecnología y apoyo humano es perfecta. Nunca me había sentido tan acompañada en mi proceso fitness.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Preguntas Frecuentes",
  titleRegular: "Resolvemos",
  titleItalic: "tus dudas",
  ctaText: "¿Tienes más preguntas?",
  ctaButtonText: "Contáctanos",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "¿Necesito equipo especial para usar FitCoach Pro?",
      answer: "No, FitCoach Pro funciona con cualquier smartphone. Para el análisis avanzado de técnica, recomendamos usar un trípode simple o pedirle a alguien que te grabe durante el entrenamiento.",
    },
    {
      id: "faq-2",
      question: "¿La app reemplaza a un entrenador personal?",
      answer: "No, nuestra filosofía es diferente: la tecnología potencia al entrenador, no lo reemplaza. Ofrecemos herramientas que antes solo estaban disponibles con entrenadores de élite.",
    },
    {
      id: "faq-3",
      question: "¿Puedo usar FitCoach Pro en cualquier gimnasio?",
      answer: "¡Absolutamente! FitCoach Pro está diseñado para funcionar en cualquier entorno: gimnasios comerciales, caseros, al aire libre o incluso en tu sala de estar.",
    },
    {
      id: "faq-4",
      question: "¿Cómo funciona el análisis de técnica?",
      answer: "Nuestro sistema utiliza visión por computadora para detectar puntos clave de tu cuerpo y compararlos con modelos biomecánicos óptimos. Recibes feedback instantáneo sobre ángulos, alineación y rango de movimiento.",
    },
    {
      id: "faq-5",
      question: "¿Hay prueba gratuita disponible?",
      answer: "Sí, ofrecemos 14 días de prueba gratuita con acceso completo a todas las funciones. No requiere tarjeta de crédito para comenzar.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "FITCOACH",
  contactLabel: "Contáctanos",
  email: "hola@fitcoachpro.com",
  locationText: "Madrid, España\nDisponible worldwide",
  navigationLabel: "Navegación",
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Programas", href: "#programs" },
    { label: "Servicios", href: "#services" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  socialLabel: "Síguenos",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com/fitcoachpro", label: "Instagram" },
    { iconName: "Twitter", href: "https://twitter.com/fitcoachpro", label: "Twitter" },
    { iconName: "Linkedin", href: "https://linkedin.com/company/fitcoachpro", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:hola@fitcoachpro.com", label: "Email" },
  ],
  tagline: "Tecnología que potencia\nTu entrenamiento",
  copyright: "© 2024 FitCoach Pro. Todos los derechos reservados.",
  bottomLinks: [
    { label: "Privacidad", href: "#privacy" },
    { label: "Términos", href: "#terms" },
    { label: "Cookies", href: "#cookies" },
  ],
};
