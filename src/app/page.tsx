import Image from "next/image";
import NewsCard from "../componentes/NewsCard";
import ServiceCard from "../componentes/ServiceCard";
import OtherServiceCard from "../componentes/OtherServiceCard";
import ContestCard from "../componentes/ContestCard";
import ProjectCard from "../componentes/ProjectCard";
import SentenceButton from "../componentes/SentenceButton";
import InterestLink from "../componentes/InterestLink";
import TestimonialCard from "../componentes/TestimonialCard";

export default function Home() {
  // 1. NOTICIAS (Actualizadas con temas de ANEUPI)
  const newsData = [
    {
      id: 1,
      title: "Gran Congreso Internacional ANEUPI 2025: Innovación Financiera",
      date: "Feb 2, 2026",
      image: "/noticias/CongresoInternacional.png", // Conferencia
    },
    {
      id: 2,
      title: "¡Cómo mejorar tus finanzas personales!",
      date: "Ene 30, 2026",
      image: "/noticias/noticia1.png", // Dinero/Ahorro
    },
    {
      id: 3,
      title: "Crecimiento financiero sostenido para nuestros accionistas",
      date: "Ene 29, 2026",
      image: "/noticias/noticia2.png", // Gráficos stock
    },
    {
      id: 4,
      title: "Actualización de servicios",
      date: "Ene 27, 2026",
      image: "/noticias/noticia3.png", //Actualización de servicios
    },
    {
      id: 5,
      title: "Revise nuestros nuevos convenios corporativos",
      date: "Ene 26, 2026",
      image: "/noticias/noticia4.png", // Apretón de manos
    },
    {
      id: 6,
      title: "¡Sea parte de nuestros accionistas!",
      date: "Ene 26, 2026",
      image: "/noticias/noticia5.png", // Apretón de manos
    },
  ];
  const [mainNews, ...secondaryNews] = newsData;

  // 2. SERVICIOS EN LÍNEA (Iconos Bancarios: Tarjetas, Usuarios, Maletines)
  const servicesData = [
    {
      title: "Accionista",
      path: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></> // Usuario con más (+)
    },
    {
      title: "Empleos y Vacantes",
      path: <><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> // Maletín
    },
    {
      title: "Créditos",
      path: <><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></> // Tarjeta de crédito
    },
    {
      title: "Prácticas",
      path: <><path d="M22 10v6M2 10v6"/><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m22 7-10 5-10-5"/></> // Birrete graduación
    },
  ];

  // 3. MARCAS CORPORATIVAS (Otros Servicios) - Sacado de su web
  const otherServicesData = [
    {
      title: "Universidad Leceni",
      image: "/logos/Universidad_Leceni.png"
    },
    {
      title: "Red Social ANEUPI",
      image: "/logos/Gatitoplis.png"
    },
    {
      title: "Constructora",
      image: "/logos/Leceni_inmobiliaria.png"
    },
    {
      title: "Fundación Social",
      image: "/logos/Fundacion_Internacional.png"
    },
    {
      title: "TV y Medios",
      image: "/logos/ANEUPI_TV.png"
    },
  ];

  // 4. BANNERS GRANDES (Concursos -> Campañas)
  const contestsData = [
    {
      title: "Sea parte de nuestros Accionistas",
      description: "¡Transforma tus finanzas con nosotros!",
      image: "/logos/dineroAneupi.png", // Reunión ejecutiva
      link: "#"
    },
    {
      title: "Aprende a gestionar tus finanzas con las mejores estrategias. No es solo ahorro, es crecimiento.",
      description: "Finanzas",
      image: "/logos/finanzasAneupi1.png", // Pago con tarjeta/negocio
      link: "#"
    }
  ];

  // 5. PROYECTOS (Valores Institucionales) también podría ser Lo que dicen nuestros
  const projectsData = [
    {
      title: "Transparencia Total",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
    },
    {
      title: "Sostenibilidad",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600", // Planta/Dinero
    },
    {
      title: "Educación Financiera",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600",
    },
    {
      title: "Innovación Digital",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600", // Tech
    }
  ];

  // 6. TESTIMONIOS (Lo que dicen nuestros accionistas)
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

  // 6. BOTONES AZULES (Accesos Rápidos)
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
    { 
      title: "Universidad LECENI", 
      initials: "UL", 
      imageSrc: "/logos/Universidad_Leceni.png"
    },
    { 
      title: "Gatito Plis", 
      initials: "BCE", 
      imageSrc: "/logos/Gatitoplis.png" 
    },
    { 
      title: "LECENI Constructura Inmobiliaria", 
      initials: "SRI", 
      imageSrc: "/logos/Leceni_inmobiliaria.png" 
    },
    { 
      title: "ANEUPI Fundación Internacional", 
      initials: "AFI", 
      imageSrc: "/logos/Fundacion_Internacional.png" 
    },
    { 
      title: "ANEUPI TV internacional", 
      initials: "TV", 
      imageSrc: "/logos/ANEUPI_TV.png" 
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-20 font-serif text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide text-center">
      
      {/* 1. SECCIÓN NOTICIAS */}

      <div className="bg-white p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* CAMBIO: Colores aplicados (#0c476b y #eab356) */}
          <h2 className="text-4xl font-extrabold text-[#0c476b] mb-8 border-l-4 border-[#eab356] pl-4 text-left">
            Noticias ANEUPI
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
             <div className="lg:col-span-5 flex flex-col">
                <NewsCard news={mainNews} isFeatured={true} />
             </div>
             <div className="lg:col-span-7">
                {/* RESTAURADO: gap-3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
                  {secondaryNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. SERVICIOS EN LÍNEA */}
      {/* RESTAURADO: p-8 md:p-12 */}
      <div className="bg-white p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0c476b] mb-8 text-left">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                href="#"
                iconPath={service.path}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. MARCAS CORPORATIVAS */}

      <div className="bg-white px-8 pb-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0c476b] mb-8 text-left">
            Marcas Corporativas
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

      {/* 4. FINANZAS (ANTES BANNERS) */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-extrabold text-[#0c476b] mb-6 border-l-4 border-[#eab356] pl-4 text-left">
            Finanzas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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
      <div className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0c476b] mb-8 text-left">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectsData.map((proj, i) => (
              <ProjectCard 
                key={i}
                title={proj.title}
                image={proj.image}
              />
            ))}
          </div>
           {/* Puntos del carrusel simulado con nuevos colores */}
           <div className="flex justify-center gap-2 mt-8">
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-[#0c476b]"></div>
            <div className="h-2 w-2 rounded-full bg-[#eab356]"></div>
          </div>
        </div>
      </div>

      {/* 6. TESTIMONIOS DE NUESTROS ACCIONISTAS */}
      <div className="bg-white dark:bg-[#0a0a0a] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-8">
            Testimonios de Nuestros Accionistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((testimonial, i) => (
              <TestimonialCard 
                key={i}
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>


      {/* 6. ACCESOS RÁPIDOS */}
      <div className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0c476b] mb-8 text-left">
            Accesos Rápidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sentenciasData.map((texto, index) => (
              <SentenceButton key={index} text={texto} />
            ))}
          </div>
        </div>
      </div>

      {/* 7. LINKS DE INTERÉS */}
      <div className="bg-white py-12 px-4 md:px-8">
        <h2 className="text-3xl font-extrabold text-[#0c476b] mb-10 text-left">
          Enlaces de Interés
        </h2>
        <div className="max-w-7xl mx-auto">
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