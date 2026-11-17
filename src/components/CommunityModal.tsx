import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, X } from 'lucide-react'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../data/siteConfig'

interface CommunityModalContextValue {
  openCommunityModal: () => void
  handleJoinCommunity: () => void
}

const CommunityModalContext = createContext<CommunityModalContextValue | null>(null)

export function useCommunityAction() {
  const ctx = useContext(CommunityModalContext)
  if (!ctx) {
    throw new Error('useCommunityAction must be used inside CommunityModalProvider')
  }
  return ctx
}

export function CommunityModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openCommunityModal = () => setOpen(true)

  const handleJoinCommunity = () => {
    if (SITE_CONFIG.isCommunityLinkConfigured) {
      window.open(SITE_CONFIG.communityUrl, '_blank', 'noopener,noreferrer')
    } else {
      setOpen(true)
    }
  }

  return (
    <CommunityModalContext.Provider value={{ openCommunityModal, handleJoinCommunity }}>
      {children}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-emerald-deep/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-md rounded-2xl bg-[#ebe7e0] border-2 border-primary/20 p-6 sm:p-8 shadow-2xl text-center"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-emerald-deep/10 text-emerald-deep flex items-center justify-center hover:bg-emerald-deep/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 bg-emerald-deep/10 text-emerald-deep px-3.5 py-1.5 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                  REVIVE Community (Pre-Launch)
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-emerald-deep mb-2">
                Join Our Community
              </h3>
              <p className="font-body text-sm text-emerald-deep/75 leading-relaxed mb-5">
                Terhubung bersama pengusaha Muslim &amp; Muslimah dalam ekosistem pembelajaran{' '}
                <strong className="text-emerald-deep">REVIVE #3 — Scale with Soul</strong>.
              </p>

              <div className="rounded-xl bg-white/70 border border-emerald-deep/10 p-4 text-left space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-xs sm:text-sm text-emerald-deep/85">
                    Informasi resmi &amp; update persiapan 30 Januari 2027
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-xs sm:text-sm text-emerald-deep/85">
                    Business insights &amp; edukasi prinsip muamalah
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-xs sm:text-sm text-emerald-deep/85">
                    Notifikasi prioritas saat pendaftaran resmi dibuka
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-emerald-deep/[0.06] border border-emerald-deep/15 px-4 py-3 mb-5 text-left">
                <p className="font-body text-[11px] uppercase tracking-wider font-semibold text-gold mb-1">
                  Status Tautan Komunitas
                </p>
                <p className="font-body text-xs text-emerald-deep/75 leading-relaxed">
                  Slot tautan resmi WhatsApp Community telah disiapkan pada{' '}
                  <code className="px-1.5 py-0.5 rounded bg-emerald-deep/10 text-emerald-deep font-mono text-[11px]">
                    src/data/siteConfig.ts
                  </code>
                  . Setelah link resmi panitia tersedia, seluruh tombol Join otomatis mengarah langsung ke grup.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={SITE_CONFIG.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-lg bg-emerald-deep text-cream hover:bg-emerald-dark transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  Masuk Kanal WhatsApp (Preview)
                </a>
                <Link
                  to="/cara-bergabung"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 font-body text-xs font-semibold text-emerald-deep/80 hover:text-emerald-deep py-2"
                >
                  Lihat Panduan Cara Bergabung
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </CommunityModalContext.Provider>
  )
}

