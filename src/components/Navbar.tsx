import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Users, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReviveLogo } from './BrandMarks'
import { useCommunityAction } from './CommunityModal'

const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Informasi', href: '/informasi' },
  { label: 'Cara Bergabung', href: '/cara-bergabung' },
  { label: 'S&K', href: '/syarat-ketentuan' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { handleJoinCommunity } = useCommunityAction()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-4 right-4 md:left-6 md:right-6 z-50"
      >
        <div className="relative rounded-xl overflow-hidden h-14 flex items-center justify-between px-4 md:px-6 shadow-sm border border-emerald-deep/10">
          <img
            src="/images/navbar-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none"
          />

          <Link to="/" className="relative z-10 shrink-0" onClick={() => setMobileOpen(false)}>
            <ReviveLogo variant="light" />
          </Link>

          <div className="hidden md:flex relative z-10 items-center gap-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-sans text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-emerald-deep font-semibold'
                    : 'text-emerald-deep/70 hover:text-emerald-deep'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleJoinCommunity}
              className="inline-flex items-center gap-1.5 font-body font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-lg bg-emerald-deep text-cream hover:bg-emerald-dark transition-colors cursor-pointer"
            >
              <Users className="w-3.5 h-3.5 text-gold" />
              Join Our Community
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-10 md:hidden text-emerald-deep p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden bg-emerald-deep rounded-xl border border-cream/10 p-4 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-sans text-sm py-2.5 px-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-cream bg-cream/10 font-semibold'
                      : 'text-cream/75 hover:text-cream hover:bg-cream/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  handleJoinCommunity()
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 font-body font-semibold text-xs uppercase tracking-wider px-4 py-3 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors"
              >
                <Users className="w-4 h-4" />
                Join Our Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

