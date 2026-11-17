interface OrnamentalDividerProps {
  className?: string
  variant?: 'dots' | 'center-ring'
}

export function OrnamentalDivider({
  className = 'py-6',
  variant = 'dots',
}: OrnamentalDividerProps) {
  if (variant === 'center-ring') {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-emerald-deep/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          <div className="w-8 h-px bg-emerald-deep/10" />
          <div className="w-2.5 h-2.5 rounded-full border border-gold/40" />
          <div className="w-8 h-px bg-emerald-deep/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          <div className="w-16 h-px bg-emerald-deep/10" />
        </div>
      </div>
    )
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-px bg-emerald-deep/15" />
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="w-24 h-px bg-emerald-deep/15" />
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="w-12 h-px bg-emerald-deep/15" />
      </div>
    </div>
  )
}

