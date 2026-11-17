import type { Article } from '../data/articles'

interface ArticlePosterCardProps {
  article: Article
  aspectClass?: string
}

export function ArticlePosterCard({
  article,
  aspectClass = 'aspect-[4/5]',
}: ArticlePosterCardProps) {
  const isDarkTheme = article.posterTheme === 'emerald' || article.posterTheme === 'botanical'

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-emerald-deep/5 group`}>
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />

      {/* Editorial overlay matching Shafiyah Journey dark-green & cream poster look */}
      <div
        className={`absolute inset-0 ${
          isDarkTheme
            ? 'bg-gradient-to-t from-[#122618]/95 via-[#183320]/65 to-[#122618]/45'
            : 'bg-gradient-to-t from-[#142b1b]/95 via-[#142b1b]/40 to-transparent'
        }`}
      />

      {/* Top Tag Badge */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-deep/90 border border-gold/40 text-cream font-body text-[10px] font-semibold uppercase tracking-[0.16em]">
          {article.posterTag}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-cream/90 text-emerald-deep font-body text-[10px] font-semibold">
          REVIVE #3
        </span>
      </div>

      {/* Bottom Editorial Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-left">
        <p className="font-body text-[11px] uppercase tracking-[0.2em] text-gold mb-1.5 font-semibold">
          {article.category}
        </p>
        <p className="font-display text-lg md:text-xl text-cream font-bold leading-snug drop-shadow-sm line-clamp-3">
          {article.title}
        </p>
        <div className="mt-3 flex items-center gap-2 text-cream/70 font-body text-[11px]">
          <span>Scale with Soul</span>
          <span className="text-gold">✦</span>
          <span>30 Jan 2027</span>
        </div>
      </div>
    </div>
  )
}

