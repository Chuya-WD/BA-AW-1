interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({ name, role, location, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-[#0f2c4c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      {/* Imagen del accionista */}
      <div className="flex justify-center mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-4 border-[#002f5d]"
        />
      </div>
      
      {/* Comillas y cita */}
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
          "{quote}"
        </p>
      </div>
      
      {/* Información del accionista */}
      <div className="text-center border-t border-gray-200 dark:border-gray-600 pt-4">
        <h3 className="font-bold text-[#002f5d] dark:text-white text-base">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {role}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          📍 {location}
        </p>
      </div>
    </div>
  );
}