import { motion } from 'framer-motion'
import { ArrowRight, Newspaper, Users } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArticlePosterCard } from '../components/ArticlePosterCard'
import { useCommunityAction } from '../components/CommunityModal'
import { OrnamentalDivider } from '../components/OrnamentalDivider'
import { ARTICLE_CATEGORIES, ARTICLES, type ArticleCategory } from '../data/articles'

export function InformasiPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All Posts' | ArticleCategory>(
    'All Posts',
  )
  const { handleJoinCommunity } = useCommunityAction()

  const filteredArticles =
    selectedCategory === 'All Posts'
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-cream">
      {/* Header (matches Shafiyah Journey Postingan Informasi header) */}
      <div className="pt-28 pb-8 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-deep/10 text-emerald-deep px-4 py-2 rounded-full mb-5">
              <Newspaper className="w-4 h-4" />
              <span className="font-sans text-sm font-semibold">Informasi &amp; Edukasi</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mb-4">
              REVIVE Insights &amp; Updates
            </h1>
            <p className="font-sans text-lg text-gold font-semibold mb-2">
              Informasi, inspirasi, dan wawasan seputar dunia usaha Muslim.
            </p>
            <p className="font-sans text-emerald-deep/65 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Temukan berbagai informasi terbaru mengenai REVIVE #3, edukasi bisnis, prinsip
              muamalah, dan pengembangan usaha.
            </p>
          </motion.div>
        </div>
      </div>

      <OrnamentalDivider className="py-4" />

      {/* Category Filter Pills */}
      <div className="px-6 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {ARTICLE_CATEGORIES.map((category) => {
              const active = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`font-body text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-deep text-cream border-emerald-deep shadow-sm'
                      : 'bg-white/60 text-emerald-deep/75 border-emerald-deep/15 hover:border-emerald-deep/35 hover:text-emerald-deep'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Zig-zag Article Cards (exact style from Shafiyah Journey Informasi page) */}
      <div className="px-6 pb-12">
        <div className="container mx-auto max-w-5xl space-y-10 md:space-y-14">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.2) }}
              className="grid md:grid-cols-2 gap-6 md:gap-10 items-center bg-white/60 border border-emerald-deep/10 rounded-2xl overflow-hidden shadow-sm"
            >
              <Link
                to={`/informasi/${article.slug}`}
                className={idx % 2 === 1 ? 'md:order-2 block' : 'block'}
              >
                <ArticlePosterCard article={article} />
              </Link>

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-deep/10 text-emerald-deep font-body text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="font-body text-xs text-emerald-deep/55">
                    {article.date} · {article.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep mb-4 leading-snug">
                  {article.title}
                </h2>

                <p className="font-sans text-sm md:text-base text-emerald-deep/75 leading-relaxed mb-6 line-clamp-4">
                  {article.paragraphs[0]} {article.paragraphs[1] ?? ''}
                </p>

                <Link
                  to={`/informasi/${article.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-emerald-deep hover:text-gold transition-colors"
                >
                  Lihat Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Dark Emerald Community CTA Card */}
      <div className="px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-deep text-cream rounded-2xl p-6 md:p-10 text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Siap Bertumbuh Bersama Komunitas REVIVE?
            </h2>
            <p className="font-sans text-cream/80 mb-6 max-w-md mx-auto text-sm md:text-base">
              Dapatkan artikel edukasi bisnis, prinsip muamalah, dan pengumuman resmi pembukaan
              pendaftaran REVIVE #3 langsung di WhatsApp Community.
            </p>
            <button
              type="button"
              onClick={handleJoinCommunity}
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors cursor-pointer"
            >
              <Users className="w-5 h-5" />
              Join Our Community
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

