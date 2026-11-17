import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Share2, Users } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticlePosterCard } from '../components/ArticlePosterCard'
import { useCommunityAction } from '../components/CommunityModal'
import { getArticleBySlug, getRelatedArticles } from '../data/articles'

export function InformasiDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug)
  const { handleJoinCommunity } = useCommunityAction()

  if (!article) {
    return <Navigate to="/informasi" replace />
  }

  const relatedArticles = getRelatedArticles(article, 3)
  const shareText = encodeURIComponent(
    `${article.title} — REVIVE #3: Scale with Soul\nBaca selengkapnya di: ${window.location.href}`,
  )
  const whatsappShareUrl = `https://wa.me/?text=${shareText}`

  return (
    <div className="min-h-screen bg-cream">
      <div className="pt-28 pb-12 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <Link
              to="/informasi"
              className="inline-flex items-center gap-2 font-body text-sm text-emerald-deep/70 hover:text-emerald-deep transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Informasi
            </Link>
          </motion.div>

          {/* Category + Title + Date */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-deep/10 text-emerald-deep px-4 py-1.5 rounded-full mb-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                {article.category}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-emerald-deep mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="inline-flex items-center gap-3 font-body text-xs md:text-sm text-emerald-deep/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold" />
                {article.date}
              </span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-8 rounded-2xl overflow-hidden border border-emerald-deep/10 shadow-md bg-white"
          >
            <ArticlePosterCard article={article} aspectClass="aspect-[16/10]" />
          </motion.div>

          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/60 border border-emerald-deep/10 rounded-2xl p-6 md:p-10 shadow-sm mb-8"
          >
            <div className="space-y-5 font-body text-sm md:text-base text-emerald-deep/85 leading-relaxed">
              {article.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {article.highlights && (
              <div className="mt-8 rounded-xl bg-emerald-deep/[0.04] border border-emerald-deep/10 p-5 md:p-6">
                <h2 className="font-display text-xl font-bold text-emerald-deep mb-3">
                  {article.highlights.title}
                </h2>
                <ul className="space-y-2.5">
                  {article.highlights.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="font-body text-sm md:text-base text-emerald-deep/85 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {article.supportingImage && (
              <div className="mt-8 rounded-xl overflow-hidden border border-emerald-deep/10">
                <img
                  src={article.supportingImage}
                  alt="Suasana arsitektur dan ruang kolaborasi REVIVE #3 di Yogyakarta"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {/* Social Sharing (WhatsApp) */}
            <div className="mt-8 pt-6 border-t border-emerald-deep/10 flex flex-wrap items-center justify-between gap-4">
              <p className="font-body text-xs md:text-sm text-emerald-deep/65">
                Bermanfaat? Bagikan artikel ini kepada sesama pengusaha Muslim.
              </p>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg bg-[#599254] text-white hover:bg-[#4a7d46] transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Bagikan via WhatsApp
              </a>
            </div>
          </motion.article>

          {/* CTA Join Our Community */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-deep text-cream rounded-2xl p-6 md:p-8 text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Join Our Community
            </h2>
            <p className="font-body text-sm md:text-base text-cream/80 max-w-md mx-auto mb-6">
              Jadilah bagian dari komunitas REVIVE dan dapatkan informasi terbaru mengenai kegiatan
              REVIVE #3 — Scale with Soul.
            </p>
            <button
              type="button"
              onClick={handleJoinCommunity}
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors cursor-pointer"
            >
              <Users className="w-4 h-4" />
              Join Our Community
            </button>
          </motion.div>

          {/* Related Articles */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep mb-6 text-center">
              Artikel Terkait
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  to={`/informasi/${related.slug}`}
                  className="bg-white/60 border border-emerald-deep/10 rounded-2xl overflow-hidden shadow-sm hover:border-emerald-deep/25 transition-all flex flex-col"
                >
                  <ArticlePosterCard article={related} aspectClass="aspect-[4/3]" />
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="font-body text-[11px] uppercase tracking-wider text-gold font-semibold mb-1">
                      {related.category}
                    </p>
                    <h3 className="font-display text-base font-bold text-emerald-deep mb-2 leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 font-body text-xs font-semibold text-emerald-deep">
                      Baca Artikel
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

