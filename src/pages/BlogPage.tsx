import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { BLOGS } from "../data";
import { BlogPost } from "../types";
import { Search, Calendar, User, ArrowRight, X, BookOpen, Share2, Tag, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "Travel Guides", "Road Trips", "Itineraries"];

  const filteredBlogs = BLOGS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Travel Chronicles & Road Trip Guides"
        subtitle="Discover expert road trip routing secrets, hidden heritage gems in Gujarat, best times to visit Statue of Unity & Rann of Kutch, and essential tips for family group travel."
        breadcrumbs={[{ name: "Blog" }]}
      />

      {/* Filter & Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-amber-400 shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 text-slate-900 text-xs font-medium rounded-full pl-10 pr-4 py-2.5 border border-slate-200 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col justify-between text-left group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Article Banner Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 text-amber-400 text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-md border border-slate-700">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-orange-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={13} className="text-orange-500" />
                        Citizen Travel Desk
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span>Read Full Article</span>
                  <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-left relative p-6 sm:p-8"
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                <Tag size={14} />
                <span>{activePost.category}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase leading-snug mb-4">
                {activePost.title}
              </h2>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-6 pb-4 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-orange-500" />
                  {activePost.date}
                </span>
                <span>•</span>
                <span>By Citizen Travels Editorial Desk</span>
              </div>

              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 bg-slate-900">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p className="font-semibold text-slate-900 text-lg">
                  {activePost.excerpt}
                </p>

                <p>
                  Planning a memorable highway journey from Ahmedabad requires choosing the right vehicle, timing your departure to bypass peak traffic hours, and securing punctual, experienced drivers.
                </p>

                <h3 className="font-display font-bold text-xl text-slate-900 pt-2 uppercase">
                  Key Travel Tips & Recommendations
                </h3>

                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Best Travel Window:</strong> October through March offers pleasant daytime temperatures and cool nights across Gujarat & Rajasthan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Group Travel Advantage:</strong> Hiring a 12 to 17-seater Tempo Traveller or Force Urbania keeps family members together while cutting per-person transit costs by up to 40%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Doorstep Convenience:</strong> Book with verified chauffeurs who handle Fastag tolls and local parking hassle-free.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/book-my-ride"
                  onClick={() => setActivePost(null)}
                  className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md"
                >
                  Book Cab For This Route
                </Link>
                <button
                  onClick={() => setActivePost(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-full text-xs uppercase tracking-wider"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
