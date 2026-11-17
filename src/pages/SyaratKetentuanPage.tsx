import { motion } from 'framer-motion'
import { FileText, HeartHandshake, Lock, Megaphone, Shield, Users } from 'lucide-react'
import { OrnamentalDivider } from '../components/OrnamentalDivider'
import { SITE_CONFIG } from '../data/siteConfig'
import { TERMS_SECTIONS, type TermSection } from '../data/termsData'

const ICON_MAP: Record<TermSection['iconKey'], typeof FileText> = {
  file: FileText,
  users: Users,
  megaphone: Megaphone,
  lock: Lock,
  shield: Shield,
}

export function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header (mirrors Syarat & Ketentuan screenshot) */}
      <div className="pt-28 pb-8 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-deep/10 text-emerald-deep px-4 py-2 rounded-full mb-5">
              <FileText className="w-4 h-4" />
              <span className="font-sans text-sm font-semibold">Regulasi</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="font-sans text-lg text-gold font-semibold mb-3">
              Syarat &amp; Ketentuan REVIVE Community
            </p>
            <p className="font-sans text-emerald-deep/65 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Selamat datang di website resmi REVIVE #3 – Scale with Soul. Dengan mengakses website
              dan bergabung ke komunitas REVIVE, pengguna diharapkan memahami dan mengikuti
              ketentuan berikut.
            </p>
          </motion.div>
        </div>
      </div>

      <OrnamentalDivider className="py-4" />

      {/* 5 Terms Cards */}
      <div className="px-6 pb-10">
        <div className="container mx-auto max-w-3xl space-y-5">
          {TERMS_SECTIONS.map((section, idx) => {
            const Icon = ICON_MAP[section.iconKey]
            const isAccent = Boolean(section.accent)
            return (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border p-5 md:p-6 transition-all duration-300 ${
                  isAccent
                    ? 'bg-emerald-deep text-cream border-emerald-deep hover:shadow-lg'
                    : 'bg-emerald-deep/[0.03] border-emerald-deep/10 hover:border-emerald-deep/25 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                  <div className="flex items-center gap-3 md:block">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isAccent ? 'bg-cream/15' : 'bg-emerald-deep/10'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isAccent ? 'text-cream' : 'text-emerald-deep'}`}
                      />
                    </div>
                    <h2
                      className={`md:hidden font-sans font-semibold text-lg ${
                        isAccent ? 'text-cream' : 'text-emerald-deep'
                      }`}
                    >
                      {section.title}
                    </h2>
                  </div>

                  <div className="flex-1">
                    <h2
                      className={`hidden md:block font-sans font-semibold text-lg mb-3 ${
                        isAccent ? 'text-cream' : 'text-emerald-deep'
                      }`}
                    >
                      {section.title}
                    </h2>
                    <ul className="space-y-2.5">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-2.5">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span
                            className={`font-sans text-sm md:text-base leading-relaxed ${
                              isAccent ? 'text-cream/85' : 'text-emerald-deep/80'
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Section 6: Penutup (exact match to Shafiyah Journey Penutup card) */}
      <div className="px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-emerald-deep/[0.06] border border-emerald-deep/10 rounded-2xl p-8 text-center"
          >
            <HeartHandshake className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-sans font-semibold text-emerald-deep text-lg mb-3">
              6. Penutup
            </h2>
            <p className="font-sans text-sm md:text-base text-emerald-deep/80 leading-relaxed max-w-lg mx-auto mb-4">
              Dengan bergabung ke komunitas REVIVE, pengguna dianggap telah membaca dan memahami
              ketentuan yang berlaku. Untuk pertanyaan lebih lanjut, silakan menghubungi kontak
              resmi penyelenggara.
            </p>
            <p className="font-display font-bold text-emerald-deep text-base">
              REVIVE #3 – SCALE WITH SOUL
            </p>
            <p className="font-sans text-xs text-emerald-deep/65 mt-1">
              {SITE_CONFIG.pillarsLine}. · {SITE_CONFIG.organizer}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

