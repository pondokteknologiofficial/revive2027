interface BrandMarkProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function ReviveLogo({ variant = 'light', className = '' }: BrandMarkProps) {
  const mainColor = variant === 'light' ? 'text-cream' : 'text-emerald-deep'
  const subColor = variant === 'light' ? 'text-gold' : 'text-emerald-dark'

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
          variant === 'light'
            ? 'bg-cream/10 border-gold/50 text-gold'
            : 'bg-emerald-deep text-cream border-emerald-deep'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3L19 7v10l-7 4-7-4V7l7-4z" />
          <path d="M12 8v8" />
          <path d="M8.5 11.5L12 8l3.5 3.5" />
        </svg>
      </div>
      <div className="leading-none">
        <span className={`block font-display text-base md:text-lg font-bold tracking-wide ${mainColor}`}>
          REVIVE <span className="text-gold">#3</span>
        </span>
        <span className={`block font-body text-[9px] md:text-[10px] tracking-[0.22em] uppercase mt-0.5 ${subColor}`}>
          Scale with Soul
        </span>
      </div>
    </div>
  )
}

export function ShafiyahPreneurLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="w-9 h-9 rounded-xl bg-emerald-deep text-gold flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L15 8l6 1-4.5 4.2L17.8 20 12 16.8 6.2 20l1.3-6.8L3 9l6-1 3-6z" />
        </svg>
      </div>
      <div className="text-left leading-tight">
        <span className="block font-display text-lg font-bold text-emerald-deep tracking-tight">
          Shafiyah Preneur
        </span>
        <span className="block font-body text-[10px] uppercase tracking-[0.18em] text-emerald-deep/60">
          by Shafiyah Shalehah
        </span>
      </div>
    </div>
  )
}

