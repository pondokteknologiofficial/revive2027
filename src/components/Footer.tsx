import { Calendar, Mail, MapPin, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../data/siteConfig'
import { ReviveLogo, ShafiyahPreneurLogo } from './BrandMarks'
import { useCommunityAction } from './CommunityModal'
import { OrnamentalDivider } from './OrnamentalDivider'

export function Footer() {
  const { handleJoinCommunity } = useCommunityAction()

  return (
    <>
      <OrnamentalDivider className="py-10 bg-cream" variant="center-ring" />
      <footer>
        {/* Upper Partner & Organizer Strip (matches Shafiyah Journey bg-cream upper footer) */}
        <div className="bg-cream text-emerald-deep pb-16 pt-4">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-emerald-deep/50 mb-6">
                Organized By
              </p>
              <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                <ShafiyahPreneurLogo />
                <img
                  src="/images/logo-shafiyah-shalehah.png"
                  alt="Shafiyah Shalehah"
                  className="h-10 md:h-11 object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-emerald-deep/50 mb-6">
                Presented With
              </p>
              <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
                <img
                  src="/images/logo-rumaysho.png"
                  alt="Rumaysho.com"
                  className="h-7 md:h-8 object-contain"
                />
                <img
                  src="/images/logo-bsi.png"
                  alt="Bank Syariah Indonesia"
                  className="h-10 md:h-12 object-contain -mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lower Deep Emerald Footer */}
        <div className="bg-emerald-deep text-cream py-14">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Column 1: Event Identity */}
              <div>
                <div className="mb-4">
                  <ReviveLogo variant="light" />
                </div>
                <p className="font-body text-sm font-semibold text-gold tracking-wide mb-2">
                  {SITE_CONFIG.pillarsLine}.
                </p>
                <p className="font-sans text-cream/70 text-sm mb-4">
                  {SITE_CONFIG.subtitle}.
                </p>
                <div className="space-y-1.5 font-sans text-cream/65 text-sm">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                    <span>{SITE_CONFIG.dateDisplay}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span>{SITE_CONFIG.fullVenue}</span>
                  </p>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <p className="font-sans text-sm font-semibold text-cream mb-4 uppercase tracking-wider">
                  Quick Links
                </p>
                <div className="font-sans text-cream/70 text-sm space-y-2.5">
                  <Link to="/" className="block hover:text-cream transition-colors">
                    Beranda
                  </Link>
                  <Link to="/informasi" className="block hover:text-cream transition-colors">
                    Informasi
                  </Link>
                  <Link to="/cara-bergabung" className="block hover:text-cream transition-colors">
                    Cara Bergabung
                  </Link>
                  <Link to="/syarat-ketentuan" className="block hover:text-cream transition-colors">
                    Syarat &amp; Ketentuan
                  </Link>
                </div>

                <div className="mt-6 pt-5 border-t border-cream/10">
                  <p className="font-sans text-xs text-cream/50 leading-relaxed">
                    Organized by <strong className="text-cream/80">{SITE_CONFIG.organizer}</strong>
                    <br />
                    {SITE_CONFIG.partnersLine}
                  </p>
                </div>
              </div>

              {/* Column 3: Join Our Community & Contact */}
              <div className="md:text-right">
                <p className="font-sans text-sm font-semibold text-cream mb-3 uppercase tracking-wider">
                  Join Our Community
                </p>
                <p className="font-sans text-cream/70 text-sm leading-relaxed mb-5 md:ml-auto max-w-xs">
                  Terhubung dan dapatkan informasi terbaru mengenai REVIVE #3.
                </p>
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={handleJoinCommunity}
                    className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors cursor-pointer"
                  >
                    <Users className="w-4 h-4" />
                    Join Our Community
                  </button>
                </div>

                <div className="font-sans text-cream/60 text-xs space-y-2">
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="flex items-center gap-2 md:justify-end hover:text-cream transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span>{SITE_CONFIG.contactEmail}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:justify-end hover:text-cream transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 shrink-0"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>{SITE_CONFIG.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="font-sans text-[11px] text-cream/35 text-center mt-12">
              © 2027 REVIVE #3. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
