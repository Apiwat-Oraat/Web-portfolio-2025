import { motion } from "framer-motion";

export default function EventSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-10 items-center py-16 border-b border-zinc-800"
    >
      {/* Left Image */}
      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000"
          alt="Creative Conference"
          className="rounded-2xl object-cover w-full h-72 md:h-96 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
      </div>

      {/* Right Content */}
      <div className="space-y-4 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Creative Conference 2025
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
          A gathering for designers and developers sharing best practices in
          UI/UX, frontend performance, and creative technology. Learn from
          leaders in design systems and innovation.
        </p>
        <p className="text-zinc-500 text-sm">April 2025 • Tokyo</p>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium 
                     text-zinc-200 border border-zinc-700 rounded-full px-5 py-2.5
                     hover:text-white hover:border-white transition-all duration-300"
        >
          Learn More →
        </a>
      </div>
    </motion.div>
  );
}
