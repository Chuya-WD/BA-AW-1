import Image from "next/image";
import NewsCard from "../componentes/NewsCard";
import ServiceCard from "../componentes/ServiceCard";
import OtherServiceCard from "../componentes/OtherServiceCard";
import ContestCard from "../componentes/ContestCard";
import ProjectCard from "../componentes/ProjectCard";
import SentenceButton from "../componentes/SentenceButton";
import InterestLink from "../componentes/InterestLink";

export default function Home() {
  // 1. NOTICIAS (Actualizadas con temas de ANEUPI)
  const newsData = [
    {
      id: 1,
      title: "Gran Congreso Internacional ANEUPI 2025: Innovación Financiera",
      date: "Feb 2, 2026",
      image: "https://images.unsplash.com/photo-1544531696-60c384e9c1c4?q=80&w=1000", // Conferencia
    },
    {
      id: 2,
      title: "¡Cómo mejorar tus finanzas personales en 5 pasos!",
      date: "Ene 30, 2026",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800", // Dinero/Ahorro
    },
    {
      id: 3,
      title: "Crecimiento financiero sostenido para nuestros accionistas",
      date: "Ene 29, 2026",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800", // Gráficos stock
    },
    {
      id: 4,
      title: "Actualización de servicios: Nueva App Móvil disponible",
      date: "Ene 27, 2026",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800", // Banca móvil
    },
    {
      id: 5,
      title: "Revise nuestros nuevos convenios corporativos",
      date: "Ene 26, 2026",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800", // Apretón de manos
    },
  ];
  const [mainNews, ...secondaryNews] = newsData;

  // 2. SERVICIOS EN LÍNEA (Iconos Bancarios: Tarjetas, Usuarios, Maletines)
  const servicesData = [
    {
      title: "Hágase Accionista",
      path: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></> // Usuario con más (+)
    },
    {
      title: "Empleos y Vacantes",
      path: <><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> // Maletín
    },
    {
      title: "Solicitud de Créditos",
      path: <><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></> // Tarjeta de crédito
    },
    {
      title: "Prácticas Profesionales",
      path: <><path d="M22 10v6M2 10v6"/><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m22 7-10 5-10-5"/></> // Birrete graduación
    },
    {
      title: "Cuenta de Ahorros",
      path: <><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2.5 0-3.9-3.6-7-7-8Z"/><path d="M8 11h.01"/><path d="M16 11h.01"/></> // Chanchito alcancía
    },
    {
      title: "Multicrédito Empresarial",
      path: <><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M17 21v-8H7v8"/><line x1="9" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="15" y2="10"/></> // Edificio/Empresa
    },
    {
      title: "Banca Virtual 24/7",
      path: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></> // Monitor
    },
    {
      title: "Centro de Ayuda y Reclamos",
      path: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></> // Teléfono
    },
    {
      title: "Seguridad y Transparencia",
      path: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></> // Candado
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
      title: "Créditos para Emprendedores",
      description: "Aprende a gestionar tus finanzas con las mejores estrategias. No es solo ahorro, es crecimiento.",
      image: "/logos/finanzasAneupi1.png", // Pago con tarjeta/negocio
      link: "#"
    }
  ];

  // 5. PROYECTOS (Valores Institucionales)
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
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] pb-20">
      
      {/* 1. SECCIÓN NOTICIAS */}
      <div className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#002f5d] dark:text-white mb-8 border-l-4 border-[#002f5d] pl-4">
            Noticias ANEUPI
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
             <div className="lg:col-span-5 flex flex-col">
                <NewsCard news={mainNews} isFeatured={true} />
             </div>
             <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                  {secondaryNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. SERVICIOS EN LÍNEA */}
      <div className="bg-gray-100 dark:bg-[#111] p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-8">
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

      {/* 3. MARCAS CORPORATIVAS (OTRO SERVICIOS) */}
      <div className="bg-gray-100 dark:bg-[#111] px-8 pb-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-8">
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

      {/* 4. CAMPAÑAS DESTACADAS (ANTES CONCURSOS) */}
      <div className="bg-white dark:bg-[#0a0a0a] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-6 border-l-4 border-[#002f5d] pl-4">
            Finanzas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
             <ContestCard 
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

      {/* 5. VALORES INSTITUCIONALES (ANTES PROYECTOS) */}
      <div className="bg-gray-50 dark:bg-[#111] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-8">
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
           {/* Puntos del carrusel simulado */}
           <div className="flex justify-center gap-2 mt-8">
            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            <div className="h-2 w-2 rounded-full bg-[#002f5d]"></div>
            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* 6. ACCESOS RÁPIDOS (ANTES SENTENCIAS) */}
      <div className="bg-gray-100 dark:bg-[#111] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-8">
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
      <div className="bg-gray-200/50 dark:bg-[#1a1a1a] py-12 px-4 md:px-8">
        <h2 className="text-3xl font-extrabold text-[#002f5d] dark:text-white mb-10 text-left">
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