/**
 * @file ProjectCarousel.tsx
 * @description Carrusel de proyectos institucionales con desplazamiento táctil y de mouse.
 * Utiliza lógica personalizada para el drag-and-drop y paginación.
 */

'use client';

import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';

interface ProjectItem {
  title: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: ProjectItem[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, projects.length - itemsPerPage);
  const translateX = -(currentIndex * (100 / itemsPerPage));

  // Manejo de mouse down
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragCurrent(e.clientX);
  };

  // Manejo de mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragCurrent(e.clientX);
  };

  // Manejo de mouse up
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = dragStart - dragCurrent;
    const threshold = 50; // Mínimo píxeles para registrar como drag

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Arrastrar hacia la izquierda = siguiente
        if (currentIndex < maxIndex) {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        // Arrastrar hacia la derecha = anterior
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  };

  // Manejo de touch (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = dragStart - dragCurrent;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        if (currentIndex < maxIndex) {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  };

  // Calcular desplazamiento temporal mientras se arrastra
  const dragOffset = isDragging ? ((dragCurrent - dragStart) / (carouselRef.current?.offsetWidth || 1)) * 100 : 0;

  return (
    <div className="w-full">
      {/* Contenedor del carrusel */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ userSelect: 'none' }}
      >
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(calc(${translateX}% + ${dragOffset}%))`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          {projects.map((proj, i) => (
            <div key={i} className="flex-shrink-0 pointer-events-none" style={{ width: `calc(25% - 1.5rem)` }}>
              <ProjectCard
                title={proj.title}
                image={proj.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores (puntos) */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${i === currentIndex
              ? 'bg-[#0c476b] w-8'
              : 'bg-gray-300 w-2'
              }`}
            aria-label={`Ir a página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

