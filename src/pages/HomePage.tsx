import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Landmark,
  MapPin,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArticlePosterCard } from '../components/ArticlePosterCard'
import { useCommunityAction } from '../components/CommunityModal'
import { CountdownCard } from '../components/CountdownCard'
import { OrnamentalDivider } from '../components/OrnamentalDivider'
import { ARTICLES } from '../data/articles'
import {
  LEARNING_SESSIONS,
  PHILOSOPHY_PILLARS,
  SPEAKERS,
  TAKE_HOME_ITEMS,
  WHO_SHOULD_JOIN,
} from '../data/homeData'
import { SITE_CONFIG } from '../data/siteConfig'

const MARQUEE_SEGMENT =
  "BERTAHAN, BERBENAH, BERTUMBUH — REVIVE #3: SCALE WITH SOUL ✦ 30 JANUARI 2027 · ROYAL AMBARRUKMO HOTEL YOGYAKARTA ✦ "

export function HomePage() {
  const { handleJoinCommunity } = useCommunityAction()
  const marqueeText = Array(8).fill(MARQUEE_SEGMENT).join('')
  const featuredArticles = ARTICLES.slice(0, 3)

  return (
    <div className="min-h-screen bg-cream">
      {/* SECTION 1 — HERO / MAIN INTRODUCTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="REVIVE #3 — Scale with Soul"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#122618]/65 via-[#183521]/55 to-[#122618]/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-gold/40 text-cream px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold">
                {SITE_CONFIG.subtitle}
              </span>
            </div>

            <p className="font-body text-sm md:text-base tracking-[0.35em] uppercase text-gold font-semibold mb-2">
              {SITE_CONFIG.eventName}
            </p>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-cream tracking-tight drop-shadow-2xl mb-4">
              {SITE_CONFIG.tagline}
            </h1>

            <p className="font-display italic text-xl sm:text-2xl md:text-3xl text-gold/95 mb-6">
              {SITE_CONFIG.pillarsLine}
            </p>

            <p className="font-body text-sm sm:text-base md:text-lg font-semibold text-cream/95 max-w-2xl mx-auto mb-3">
              Strategi Pengusaha Muslim Menghadapi Tekanan Ekonomi dan Menguatkan Usaha.
            </p>

            <p className="font-body text-xs sm:text-sm md:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Sebuah ruang pembelajaran bagi pengusaha Muslim dan Muslimah untuk mengevaluasi
              kondisi usaha, membenahi persoalan bisnis, memahami prinsip muamalah, dan menyusun
              langkah nyata untuk pertumbuhan usaha.
            </p>

            {/* Date & Venue Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl bg-emerald-deep/75 backdrop-blur-md border border-cream/15 px-5 py-3 text-cream text-xs sm:text-sm font-body mb-8">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Calendar className="w-4 h-4 text-gold" />
                {SITE_CONFIG.dateDisplay}
              </span>
              <span className="hidden sm:inline text-gold/60">•</span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                {SITE_CONFIG.fullVenue}
              </span>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <button
                type="button"
                onClick={handleJoinCommunity}
                className="inline-flex items-center gap-2.5 font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors shadow-xl cursor-pointer"
              >
                <Users className="w-4 h-4" />
                Join Our Community
              </button>
              <a
                href="#tentang"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-lg border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
              >
                Pelajari Konsep
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="text-cream/75 font-body text-xs space-y-1">
              <p className="font-semibold text-cream/90">{SITE_CONFIG.organizer}</p>
              <p>{SITE_CONFIG.partnersLine}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="py-4 bg-[#ded7ba] overflow-hidden whitespace-nowrap border-y border-emerald-deep/10">
        <div className="inline-flex animate-marquee">
          <span className="font-display text-base md:text-xl text-foreground tracking-wide uppercase">
            {marqueeText}
          </span>
          <span className="font-display text-base md:text-xl text-foreground tracking-wide uppercase">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* COUNTDOWN CARD */}
      <CountdownCard />

      {/* SECTION 2 (ABOUT REVIVE) & SECTION 8 (EVENT INFORMATION / SAVE THE DATE) */}
      <section id="tentang" className="py-20 bg-[#ebe7e0]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Left: About Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
                Tentang REVIVE #3
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mb-6 leading-tight">
                Ketika Bisnis Menghadapi Tekanan, Apa yang Harus Dilakukan?
              </h2>

              <div className="space-y-4 font-body text-foreground/90 leading-relaxed text-sm md:text-base mb-8">
                <p>
                  Dinamika dunia usaha terus berubah. Persaingan pasar, perubahan pola konsumsi,
                  kenaikan biaya, hingga tantangan pengelolaan arus kas dapat membuat usaha
                  mengalami stagnasi bahkan penurunan kinerja.
                </p>
                <p>
                  Penjualan menurun, stok menumpuk, piutang sulit tertagih, dan pengusaha sering
                  kali dihadapkan pada keputusan yang tidak mudah.
                </p>
                <p>
                  Dalam kondisi seperti ini, meningkatkan penjualan saja belum tentu menjadi
                  solusi. Pengusaha perlu memahami kondisi bisnisnya secara objektif, menemukan
                  akar persoalan, dan menentukan langkah yang paling tepat.
                </p>
                <p>
                  Bagi seorang pengusaha Muslim, pembenahan usaha juga harus memperhatikan prinsip
                  muamalah. Pertumbuhan bukan hanya tentang omzet dan keuntungan, tetapi juga
                  tentang bagaimana keuntungan diperoleh dan bagaimana transaksi dijalankan.
                </p>
                <p className="font-semibold text-emerald-deep">
                  REVIVE #3 hadir untuk membantu pengusaha melihat kembali kondisi usahanya,
                  membenahi persoalan yang ada, dan menentukan arah pertumbuhan dengan tetap
                  menjaga nilai dalam berbisnis.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleJoinCommunity}
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg text-primary-foreground transition-colors bg-[#599254] hover:bg-[#4a7d46] animate-wiggle cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  Join Our Community
                </button>
                <Link
                  to="/cara-bergabung"
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg border border-emerald-deep/20 text-emerald-deep hover:bg-emerald-deep/5 transition-colors"
                >
                  Cara Bergabung
                </Link>
              </div>
            </motion.div>

            {/* Right: Section 8 — Save the Date Event Card */}
            <motion.div
              id="lokasi"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm"
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-1">
                Event Information
              </p>
              <h3 className="font-display text-2xl font-bold text-emerald-deep mb-1">
                Save the Date
              </h3>
              <p className="font-body text-sm text-emerald-deep/70 mb-6">
                REVIVE #3 — Scale with Soul · Bertahan, Berbenah, Bertumbuh
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-semibold">
                      {SITE_CONFIG.dayDisplay}, {SITE_CONFIG.dateDisplay}
                    </p>
                    <p className="font-body text-muted-foreground text-sm inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {SITE_CONFIG.timeDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-semibold">{SITE_CONFIG.venue}</p>
                    <p className="font-body text-muted-foreground text-sm">
                      Jl. Laksda Adisucipto No.81, Caturtunggal, Depok, Sleman, DI{' '}
                      {SITE_CONFIG.city}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-semibold">
                      Target Peserta: {SITE_CONFIG.targetParticipants}
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      Diselenggarakan oleh {SITE_CONFIG.organizer}
                    </p>
                    <p className="font-body text-muted-foreground text-xs mt-0.5">
                      {SITE_CONFIG.partnersLine}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden border border-border">
                <iframe
                  src={SITE_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Ambarrukmo Hotel Yogyakarta"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR PHILOSOPHY */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              Our Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-emerald-deep">
              BERTAHAN. BERBENAH. BERTUMBUH.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl p-7 md:p-8 border transition-all duration-300 ${
                  pillar.featured
                    ? 'bg-emerald-deep text-cream border-emerald-deep shadow-lg'
                    : 'bg-emerald-deep/[0.03] text-emerald-deep border-emerald-deep/10 hover:border-emerald-deep/25 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-display text-3xl font-bold ${
                      pillar.featured ? 'text-gold' : 'text-gold'
                    }`}
                  >
                    {pillar.number}
                  </span>
                  <span
                    className={`text-[11px] font-body font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full ${
                      pillar.featured
                        ? 'bg-cream/15 text-cream'
                        : 'bg-emerald-deep/10 text-emerald-deep'
                    }`}
                  >
                    {pillar.english}
                  </span>
                </div>

                <h3
                  className={`font-display text-2xl font-bold mb-3 ${
                    pillar.featured ? 'text-cream' : 'text-emerald-deep'
                  }`}
                >
                  {pillar.english} — {pillar.indonesian}
                </h3>
                <p
                  className={`font-body text-sm md:text-base leading-relaxed ${
                    pillar.featured ? 'text-cream/85' : 'text-emerald-deep/75'
                  }`}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OrnamentalDivider className="py-6 bg-cream" />

      {/* SECTION 4 — WHAT YOU'LL LEARN */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              What You&apos;ll Learn
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-emerald-deep">
              Empat Tahap Pembelajaran REVIVE
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {LEARNING_SESSIONS.map((session, idx) => (
              <motion.div
                key={session.code}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white/60 backdrop-blur-sm border border-emerald-deep/10 rounded-2xl p-6 md:p-8 shadow-sm hover:border-emerald-deep/25 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-deep text-cream flex items-center justify-center font-display font-bold text-base shrink-0">
                    {session.code}
                  </div>
                  <div>
                    <p className="font-body text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                      {session.code} — {session.pillar}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-emerald-deep leading-snug">
                      {session.title}
                    </h3>
                  </div>
                </div>

                <p className="font-body text-sm md:text-base font-semibold text-emerald-deep mb-3">
                  {session.subtitle}
                </p>

                <div className="space-y-2.5">
                  {session.paragraphs.map((text, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-body text-sm text-emerald-deep/75 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — SPEAKERS & PARTNERS */}
      <section id="pemateri" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              Speakers &amp; Partners
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-emerald-deep">
              Learn from Practitioners &amp; Experts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {SPEAKERS.map((speaker, idx) => (
              <motion.div
                key={speaker.sessionCode}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#ded7ba] bg-emerald-gradient text-cream flex flex-col justify-between p-5 shadow-sm"
              >
                {/* Top session badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-cream/15 border border-gold/40 text-gold font-body text-[10px] font-semibold uppercase tracking-[0.16em]">
                    {speaker.sessionCode} — {speaker.pillar}
                  </span>
                </div>

                {/* Center Emblem / Logo Slot (Ready for official speaker photo) */}
                <div className="my-auto flex flex-col items-center justify-center py-4">
                  {speaker.logoSrc ? (
                    <div className="bg-cream rounded-xl px-4 py-3 shadow-md">
                      <img
                        src={speaker.logoSrc}
                        alt={speaker.name}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-cream/10 border border-gold/35 flex items-center justify-center text-gold">
                      <UserCheck className="w-9 h-9" />
                    </div>
                  )}
                  {speaker.statusNote && (
                    <span className="mt-3 text-[10px] font-body uppercase tracking-wider text-cream/65 bg-cream/10 px-2.5 py-1 rounded-full text-center">
                      {speaker.statusNote}
                    </span>
                  )}
                </div>

                {/* Bottom Name & Role */}
                <div className="pt-3 border-t border-cream/15">
                  <p className="font-display text-lg font-bold text-cream leading-tight mb-1.5">
                    {speaker.name}
                  </p>
                  <p className="font-body text-xs text-cream/80 leading-relaxed">
                    {speaker.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-8 font-body text-xs md:text-sm text-foreground/60 italic">
            Profil lengkap dan foto resmi narasumber akan diperbarui menjelang pembukaan pendaftaran.
          </p>
        </div>
      </section>

      {/* SECTION 6 — WHO SHOULD JOIN? */}
      <section className="py-20 bg-[#ebe7e0]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5"
            >
              <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
                Who Should Join?
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep mb-4 leading-tight">
                Untuk Siapa REVIVE Dihadirkan?
              </h2>
              <p className="font-body text-sm md:text-base text-emerald-deep/80 leading-relaxed mb-4">
                REVIVE #3 ditujukan bagi pengusaha Muslim dan Muslimah yang telah memiliki usaha
                berjalan dan memiliki keinginan untuk mengembangkan skalanya.
              </p>
              <p className="font-body text-sm text-emerald-deep/75 leading-relaxed">
                Baik usaha yang sedang berkembang maupun yang sedang menghadapi tekanan, setiap
                pengusaha membutuhkan kemampuan untuk membaca kondisi dan menentukan langkah yang
                tepat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-7 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm"
            >
              <p className="font-body text-xs uppercase tracking-[0.18em] font-semibold text-emerald-deep/60 mb-5">
                Acara ini relevan bagi:
              </p>
              <ul className="space-y-4">
                {WHO_SHOULD_JOIN.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gold/25 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-deep" />
                    </div>
                    <span className="font-body text-sm md:text-base text-emerald-deep/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT YOU'LL TAKE HOME (Dark Emerald Showcase matching Shafiyah Expo section) */}
      <section className="py-20 md:py-24 bg-emerald-deep text-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold mb-3 font-semibold">
              What You&apos;ll Take Home
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-cream mb-4 leading-tight">
              Bukan Sekadar Ilmu, Ada Hasil yang Dibawa Pulang
            </h2>
            <p className="font-body text-lg text-gold font-semibold mb-2">
              Pulang dengan Arah yang Lebih Jelas
            </p>
            <p className="font-body text-cream/80 text-sm md:text-base leading-relaxed">
              REVIVE #3 dirancang agar peserta tidak hanya mendapatkan wawasan, tetapi juga
              menghasilkan dokumen kerja yang dapat diterapkan dalam bisnisnya.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {TAKE_HOME_ITEMS.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="rounded-2xl bg-cream/10 border border-cream/15 p-5 md:p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-gold text-emerald-deep font-display font-bold text-lg flex items-center justify-center mb-4">
                  {item.number}
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-cream/75 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS & UPDATES PREVIEW (Matching "Lihat Detail Lainnya" section) */}
      <section id="informasi" className="py-20 md:py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              REVIVE Insights &amp; Updates
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-emerald-deep font-bold">
              Edukasi &amp; Publikasi Resmi
            </h2>
            <p className="font-body text-emerald-deep/65 max-w-xl mx-auto mt-3 text-sm md:text-base">
              Artikel bisnis, prinsip muamalah, dan pengumuman resmi menjelang REVIVE #3.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredArticles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-deep/10 shadow-sm flex flex-col"
              >
                <Link to={`/informasi/${article.slug}`} className="block">
                  <ArticlePosterCard article={article} />
                </Link>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <p className="font-body text-xs text-emerald-deep/55 mb-2">{article.date}</p>
                  <h3 className="font-display text-xl text-emerald-deep font-bold mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-emerald-deep/70 leading-relaxed mb-5 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/informasi/${article.slug}`}
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-emerald-deep hover:text-gold transition-colors self-start"
                  >
                    Lihat Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link
              to="/informasi"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg bg-emerald-deep text-cream hover:bg-emerald-deep/90 transition-colors"
            >
              Lihat Halaman Informasi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LANDSCAPE BOTANICAL STRIP */}
      <div className="w-full h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="/images/landscape-strip.jpg"
          alt="REVIVE #3 Botanical Landscape"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* SECTION 9 — ABOUT THE ORGANIZER & PARTNERS */}
      <section className="py-20 bg-[#ebe7e0]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              Organized by Shafiyah Preneur
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-deep">
              Penyelenggara &amp; Mitra Resmi
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Organizer */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-deep/10 text-emerald-deep flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-gold font-semibold mb-1">
                Organized By
              </p>
              <h3 className="font-display text-2xl font-bold text-emerald-deep mb-3">
                Shafiyah Preneur
              </h3>
              <div className="space-y-3 font-body text-sm text-emerald-deep/75 leading-relaxed">
                <p>
                  Shafiyah Preneur merupakan wadah dan ruang kolaborasi yang hadir untuk
                  mengakomodasi para pebisnis, pelaku usaha, dan UMKM.
                </p>
                <p>
                  Melalui workshop, mentoring, pengembangan ekonomi syariah, serta program
                  pendampingan usaha yang aplikatif, Shafiyah Preneur menghubungkan para pengusaha
                  dalam sebuah ekosistem bisnis Muslim dan Muslimah.
                </p>
                <p>
                  Shafiyah Preneur merupakan bagian dari Majelis Ta&apos;lim Shafiyah Shalehah yang
                  telah bergerak dalam bidang syiar dakwah selama delapan tahun.
                </p>
              </div>
            </div>

            {/* Partner 1: Rumaysho.com */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gold/25 text-emerald-deep flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-gold font-semibold mb-1">
                Our Partner
              </p>
              <h3 className="font-display text-2xl font-bold text-emerald-deep mb-3">
                Rumaysho.com
              </h3>
              <p className="font-body text-sm text-emerald-deep/75 leading-relaxed mb-6">
                Rujukan ilmu syar&apos;i yang mendukung kualitas dan kurasi materi keislaman,
                khususnya aspek muamalah.
              </p>
              <div className="pt-4 border-t border-border">
                <img
                  src="/images/logo-rumaysho.png"
                  alt="Rumaysho.com"
                  className="h-7 object-contain"
                />
              </div>
            </div>

            {/* Partner 2: Bank Syariah Indonesia */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gold/25 text-emerald-deep flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-gold font-semibold mb-1">
                Our Partner
              </p>
              <h3 className="font-display text-2xl font-bold text-emerald-deep mb-3">
                Bank Syariah Indonesia
              </h3>
              <p className="font-body text-sm text-emerald-deep/75 leading-relaxed mb-6">
                Mendukung literasi keuangan usaha syariah melalui pemahaman layanan, akad, biaya,
                risiko, dan kewajiban nasabah.
              </p>
              <div className="pt-4 border-t border-border">
                <img
                  src="/images/logo-bsi.png"
                  alt="Bank Syariah Indonesia"
                  className="h-9 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="px-6 py-16 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-deep text-cream rounded-2xl p-8 md:p-12 text-center shadow-lg"
          >
            <div className="inline-flex items-center gap-2 text-gold font-body text-xs uppercase tracking-[0.22em] font-semibold mb-3">
              <Compass className="w-4 h-4" />
              <span>Be Part of REVIVE</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
              Be Part of REVIVE
            </h2>

            <p className="font-body text-cream/85 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-3">
              Perjalanan membangun usaha tidak harus dijalani sendirian.
            </p>
            <p className="font-body text-cream/75 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-6">
              Terhubunglah dengan sesama pengusaha Muslim dan Muslimah, dapatkan informasi terbaru,
              dan jadilah bagian dari perjalanan REVIVE #3.
            </p>

            <p className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold font-semibold mb-7">
              BERTAHAN • BERBENAH • BERTUMBUH
            </p>

            <button
              type="button"
              onClick={handleJoinCommunity}
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg bg-gold text-emerald-deep hover:bg-gold/90 transition-colors cursor-pointer"
            >
              <Users className="w-5 h-5" />
              Join Our Community
            </button>

            <p className="font-body text-xs text-cream/55 mt-5">
              REVIVE #3 — Scale with Soul
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
