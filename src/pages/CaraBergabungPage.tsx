import { motion } from 'framer-motion'
import {
  Bell,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Compass,
  Lightbulb,
  MessageCircle,
  MousePointerClick,
  Newspaper,
  Users,
} from 'lucide-react'
import { useCommunityAction } from '../components/CommunityModal'
import { OrnamentalDivider } from '../components/OrnamentalDivider'
import { COMMUNITY_BENEFITS, JOIN_STEPS } from '../data/joinData'

const BENEFIT_ICONS = [Newspaper, Lightbulb, CalendarCheck, Bell, Users]
const STEP_ICONS = [MousePointerClick, MessageCircle, CheckCircle2, BookOpen]

export function CaraBergabungPage() {
  const { handleJoinCommunity } = useCommunityAction()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay },
  })

  return (
    <div className="min-h-screen bg-cream">
      {/* Header (mirrors Cara Pesan screenshot) */}
      <div className="pt-28 pb-8 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp(0)} className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-deep/10 text-emerald-deep px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="font-sans text-sm font-semibold">Panduan Komunitas</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-emerald-deep mb-4">
              Join the REVIVE Community
            </h1>
            <p className="font-sans text-lg text-gold font-semibold mb-3">
              Bertumbuh Bersama, Tidak Sendirian.
            </p>
            <div className="space-y-3 font-sans text-sm md:text-base text-emerald-deep/65 max-w-xl mx-auto leading-relaxed">
              <p>
                Membangun usaha memiliki tantangan tersendiri. Ada proses belajar, mengambil
                keputusan, menghadapi masalah, dan terus melakukan perbaikan.
              </p>
              <p>
                Karena itu, penting bagi pengusaha untuk memiliki ruang untuk saling terhubung,
                berbagi wawasan, dan mendapatkan informasi yang bermanfaat. Melalui komunitas REVIVE,
                kami mengajak para pengusaha Muslim dan Muslimah untuk menjadi bagian dari ekosistem
                pembelajaran dan kolaborasi menuju REVIVE #3 – Scale with Soul.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top Dark Emerald CTA Box (mirrors "Siap Membeli Tiket?") */}
      <div className="px-6 pb-6 pt-2">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            {...fadeUp(0.1)}
            className="bg-emerald-deep text-cream rounded-2xl p-6 md:p-8 text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Siap Bergabung dengan Komunitas?
            </h2>
            <p className="font-sans text-cream/80 mb-6 max-w-md mx-auto text-sm md:text-base">
              Klik tombol di bawah ini untuk langsung terhubung ke WhatsApp Community resmi REVIVE,
              atau pelajari manfaat dan langkah bergabung di bawah.
            </p>
            <button
              type="button"
              onClick={handleJoinCommunity}
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors cursor-pointer"
            >
              <Users className="w-5 h-5" />
              Join Our Community Now
            </button>
          </motion.div>
        </div>
      </div>

      <OrnamentalDivider className="py-6" />

      {/* Benefits of Joining */}
      <div className="px-6 pb-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp(0.15)}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep mb-6 text-center">
              Apa yang Akan Anda Dapatkan?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {COMMUNITY_BENEFITS.map((benefit, idx) => {
                const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length]
                return (
                  <div
                    key={benefit.number}
                    className={`bg-white/60 border border-emerald-deep/10 rounded-2xl p-5 shadow-sm ${
                      idx === COMMUNITY_BENEFITS.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-[11px] uppercase tracking-[0.18em] text-gold font-semibold mb-1">
                          {benefit.number}
                        </p>
                        <h3 className="font-sans font-semibold text-emerald-deep text-base mb-1.5">
                          {benefit.title}
                        </h3>
                        <p className="font-sans text-sm text-emerald-deep/75 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* How to Join Steps (exact match to Langkah-Langkah Pembelian Tiket card) */}
      <div className="px-6 pb-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            {...fadeUp(0.2)}
            className="bg-emerald-deep/[0.03] border border-emerald-deep/10 rounded-2xl p-6 md:p-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep mb-8 text-center">
              Bagaimana Cara Bergabung?
            </h2>

            <ol className="space-y-6">
              {JOIN_STEPS.map((step, idx) => {
                const StepIcon = STEP_ICONS[idx % STEP_ICONS.length]
                return (
                  <li key={step.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-deep rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-sans text-sm font-bold text-cream">{step.num}</span>
                    </div>
                    <div className="flex items-start gap-3 flex-1 pt-0.5">
                      <StepIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans font-semibold text-sm md:text-base text-emerald-deep">
                          Step {step.num} — {step.title}
                        </p>
                        <p className="font-sans text-sm text-emerald-deep/75 leading-relaxed mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>

            <div className="mt-8 pt-6 border-t border-emerald-deep/10 text-center">
              <button
                type="button"
                onClick={handleJoinCommunity}
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-lg bg-emerald-deep text-cream hover:bg-emerald-dark transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                Join Our Community Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Closing Card (mirrors Catatan Penting / Penutup card) */}
      <div className="px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            {...fadeUp(0.25)}
            className="bg-emerald-deep/[0.06] border border-emerald-deep/10 rounded-2xl p-8 text-center"
          >
            <Compass className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-emerald-deep mb-3">
              Your Business Journey Starts Here
            </h2>
            <p className="font-sans text-sm md:text-base text-emerald-deep/80 leading-relaxed max-w-lg mx-auto mb-5">
              Tidak harus menunggu bisnis menjadi besar untuk mulai melakukan perbaikan. Setiap
              usaha memiliki perjalanan dan tantangannya masing-masing. Mari saling terhubung,
              belajar, dan bertumbuh bersama.
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-5">
              REVIVE #3 — SCALE WITH SOUL · Bertahan • Berbenah • Bertumbuh
            </p>
            <button
              type="button"
              onClick={handleJoinCommunity}
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors cursor-pointer"
            >
              <Users className="w-4 h-4" />
              Join Our Community
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

