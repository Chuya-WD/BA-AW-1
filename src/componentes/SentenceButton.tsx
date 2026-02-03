interface SentenceButtonProps {
  text: string;
  href?: string;
}

export default function SentenceButton({ text, href = "#" }: SentenceButtonProps) {
  return (
    <a
      href={href}
      className="flex items-center justify-center bg-[#0f2c4c] px-6 py-8 rounded-2xl shadow-md border border-transparent transition-all hover:bg-[#163a63] hover:shadow-xl hover:scale-[1.02] active:scale-95"
    >
      <span className="text-white font-bold text-center underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all text-sm md:text-base">
        {text}
      </span>
    </a>
  );
}