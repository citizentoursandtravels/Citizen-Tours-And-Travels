import { motion } from "motion/react";
import { Calendar, ArrowUpRight, BookOpen } from "lucide-react";
import { BLOGS } from "../data";

export function BlogPreview() {
  return (
    <section className="py-24 bg-navy-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
              Travel Chronicles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
              News & <span className="text-gold-600">Travel Guides</span>
            </h2>
            <p className="text-navy-700 text-sm mt-3 font-light leading-relaxed">
              Unlock expert road-trip routing secrets, hidden heritage spots inside Gujarat, and the ultimate tips for group packing and safe travel.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950 border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors"
            >
              <BookOpen size={14} className="text-gold-600" />
              Subscribe To Chronicles
            </a>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl border border-navy-100/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Image Holder */}
                <div className="relative h-48 overflow-hidden bg-navy-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-gold-500/20 text-gold-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-navy-400 text-xs font-mono mb-3 uppercase tracking-wider">
                    <Calendar size={13} className="text-gold-500" />
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-navy-950 text-base md:text-lg tracking-tight mb-2 leading-snug group-hover:text-gold-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-navy-600 text-xs leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action read more link */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors"
                >
                  Read Article
                  <ArrowUpRight size={14} className="text-gold-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
