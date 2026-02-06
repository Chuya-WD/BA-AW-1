import Image from "next/image";
import NewsCard from "../componentes/NewsCard";
import ServiceCard from "../componentes/ServiceCard";
import OtherServiceCard from "../componentes/OtherServiceCard";
import ContestCard from "../componentes/ContestCard";
import ProjectCard from "../componentes/ProjectCard";
import ProjectCarousel from "../componentes/ProjectCarousel";
import SentenceButton from "../componentes/SentenceButton";
import InterestLink from "../componentes/InterestLink";
import TestimonialCard from "../componentes/TestimonialCard";

export default function Home() {
  // 1. NOTICIAS
  const newsData = [
    {
      id: 1,
      title: "Gran Congreso Internacional ANEUPI 2025: Innovación Financiera",
      date: "Feb 2, 2026",
      image: "/noticias/CongresoInternacional.png",
    },
    {
      id: 2,
      title: "¡Cómo mejorar tus finanzas personales!",
      date: "Ene 30, 2026",
      image: "/noticias/noticia1.png",
    },
    {
      id: 3,
      title: "Crecimiento financiero sostenido para nuestros accionistas",
      date: "Ene 29, 2026",
      image: "/noticias/noticia2.png",
    },
    {
      id: 4,
      title: "Actualización de servicios",
      date: "Ene 27, 2026",
      image: "/noticias/noticia3.png",
    },
    {
      id: 5,
      title: "Revise nuestros nuevos convenios corporativos",
      date: "Ene 26, 2026",
      image: "/noticias/noticia4.png",
    },
    {
      id: 6,
      title: "¡Sea parte de nuestros accionistas!",
      date: "Ene 26, 2026",
      image: "/noticias/noticia5.png",
    },
  ];
  const [mainNews, ...secondaryNews] = newsData;

  // 2. SERVICIOS EN LÍNEA
  const servicesData = [
    {
      title: "Accionista",
      path: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>
    },
    {
      title: "Empleos y Vacantes",
      path: <><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>
    },
    {
      title: "Créditos",
      path: <><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>
    },
    {
      title: "Prácticas",
      path: <><path d="M22 10v6M2 10v6" /><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m22 7-10 5-10-5" /></>
    },
    {
      title: "Atención al Cliente",
      path: <><path d="M21 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.21.47 2.39 1.03 3.5a2 2 0 0 1-.45 2.11L10 11a16 16 0 0 0 6 6l1.67-1.6a2 2 0 0 1 2.11-.45c1.11.56 2.29.91 3.5 1.03A2 2 0 0 1 21 16.92z" /></>
    },
    {
      title: "Consultas Judiciales",
      path: <><circle cx="11" cy="11" r="6" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>
    },
    {
      title: "Registro de Actos",
      path: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h6" /></>
    },
    {
      title: "Citas y Agendamiento",
      path: <><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></>
    },
    {
      title: "Normativa y Leyes",
      path: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" /></>
    },
  ];

  // 3. Otros Servicios
  const otherServicesData = [
    { title: "Universidad Leceni", image: "/logos/Universidad_Leceni.png" },
    { title: "Red Social ANEUPI", image: "/logos/Gatitoplis.png" },
    { title: "Constructora", image: "/logos/Leceni_inmobiliaria.png" },
    { title: "Fundación Social", image: "/logos/Fundacion_Internacional.png" },
    { title: "TV y Medios", image: "/logos/ANEUPI_TV.png" },
  ];

  // 4. Sistemas de concursos
  const contestsData = [
    {
      title: "",
      description: "¡Transforma tus finanzas con nosotros!",
      image: "/logos/dineroAneupi.png",
      link: "#"
    },
    {
      title: "",
      description: "Aprende a gestionar tus finanzas con las mejores estrategias. No es solo ahorro, es crecimiento.",
      image: "/logos/finanzasAneupi1.png",
      link: "#"
    }
  ];

  // 5. PROYECTOS
  const projectsData = [
    { title: "Transparencia Total", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600" },
    { title: "Sostenibilidad", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600" },
    { title: "Educación Financiera", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600" },
    { title: "Innovación Digital", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600" },
    { title: "Inclusión Financiera", image: "https://images.unsplash.com/photo-1553729779-ede193e69d60?q=80&w=600" },
    { title: "Seguridad Cibernética", image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8094e?q=80&w=600" },
    { title: "Responsabilidad Social", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" },
    { title: "Transformación Ágil", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" }
  ];

  // 6. TESTIMONIOS
  const testimonialsData = [
    {
      name: "Danny S. Mendoza",
      role: "Accionista y Empresario",
      location: "Guayaquil",
      quote: "Como inversionista, siempre busco empresas con estabilidad y proyección de crecimiento.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    },
    {
      name: "Luis A. Heredia",
      role: "Accionista y Cliente",
      location: "Balsas",
      quote: "No solo soy accionista de ANEUPI, sino también cliente, y puedo decir que la calidad de sus servicios es excepcional.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
    },
    {
      name: "Joel W. Erraez",
      role: "Accionista y Empresario",
      location: "Cuenca",
      quote: "ANEUPI ha demostrado una gestión impecable, incluso en tiempos de incertidumbre económica.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
    },
    {
      name: "Daniel S. Espinoza",
      role: "Accionista e Inversionista",
      location: "Susudel",
      quote: "Su transparencia y crecimiento continuo han generado grandes beneficios para mi portafolio de inversiones.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    }
  ];

  // 6. BOTONES AZULES
  const sentenciasData = [
    "Iniciar Sesión Accionistas",
    "Iniciar Sesión Clientes",
    "Agencias y Cajeros",
    "Simulador de Crédito",
    "Tasas de Interés",
    "Denuncias y Reclamos",
  ];

  // 7. LINKS DE INTERÉS
  const linksData = [
    { title: "Universidad LECENI", initials: "UL", imageSrc: "/logos/Universidad_Leceni.png" },
    { title: "Gatito Plis", initials: "BCE", imageSrc: "/logos/Gatitoplis.png" },
    { title: "LECENI Constructura Inmobiliaria", initials: "SRI", imageSrc: "/logos/Leceni_inmobiliaria.png" },
    { title: "ANEUPI Fundación Internacional", initials: "AFI", imageSrc: "/logos/Fundacion_Internacional.png" },
    { title: "ANEUPI TV internacional", initials: "TV", imageSrc: "/logos/ANEUPI_TV.png" },
  ];

  return (
    <main className="min-h-screen bg-white pb-20 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide text-center">

      {/* 0. SECCIÓN HEADER GESTIÓN */}
      <div className="w-full relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" // Imagen de negocios/edificios alta calidad
          alt="Gestión 2026"
          fill
          className="object-cover object-center"
          priority
        />
        <a
          href="#"
          className="absolute bottom-4 right-6 text-white font-bold text-shadow-md text-base md:text-xl lg:text-2xl flex items-center gap-2 hover:underline"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          #Gestión2026 👇
        </a>
      </div>

      {/* 1. SECCIÓN NOTICIAS */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Noticias
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-6 flex flex-col">
              <NewsCard news={mainNews} isFeatured={true} />
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
                {secondaryNews.slice(0, 4).map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <a href="#" className="inline-block bg-[#0c476b] text-white px-6 py-2 rounded-md text-sm md:text-base">
              Todas las noticias
            </a>
          </div>
        </div>
      </div>

      {/* 2. SERVICIOS EN LÍNEA */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Servicios en linea
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                href="#"
                iconPath={service.path}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <a href="#" className="inline-block bg-[#0c476b] text-white px-6 py-2 rounded-md text-sm md:text-base">
              Todos los servicios en linea
            </a>
          </div>
        </div>
      </div>

      {/* 3. MARCAS CORPORATIVAS */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Otros servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherServicesData.map((service, index) => (
              <OtherServiceCard
                key={index}
                title={service.title}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4. FINANZAS */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Sistema de Concursos
          </h2>
          <div className="contest-section" style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '4px' }}>
            <ContestCard
              title={contestsData[0].title}
              description={contestsData[0].description}
              image={contestsData[0].image}
            />
            <ContestCard
              title={contestsData[1].title}
              description={contestsData[1].description}
              image={contestsData[1].image}
            />
          </div>
        </div>
      </div>

      {/* 5. VALORES INSTITUCIONALES */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Proyectos Institucionales
          </h2>
          <ProjectCarousel projects={projectsData} />
        </div>
      </div>


      {/* 7. ACCESOS RÁPIDOS */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Cumplimiento de Sentencias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sentenciasData.map((texto, index) => (
              <SentenceButton key={index} text={texto} />
            ))}
          </div>
        </div>
      </div>

      {/* 8. LINKS DE INTERÉS */}
      <div className="py-6 md:py-8 lg:py-10 px-10 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto p-0 md:p-0 lg:p-0">
          {/* H2 ESTANDARIZADO */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 text-left">
            Enlaces de Interés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full justify-items-center">
            {linksData.map((link, index) => (
              <InterestLink
                key={index}
                title={link.title}
                initials={link.initials}
                imageSrc={link.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}