import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '../data/siteConfig'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function getTimeRemaining(targetISO: string): TimeRemaining {
  const target = new Date(targetISO).getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, done: false }
}

const pad2 = (n: number) => String(n).padStart(2, '0')

export function CountdownCard() {
  const [time, setTime] = useState<TimeRemaining>(() =>
    getTimeRemaining(SITE_CONFIG.eventDateISO),
  )

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(getTimeRemaining(SITE_CONFIG.eventDateISO))
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  const blocks = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ]

  return (
    <section className="pt-16 pb-4 bg-[#ebe7e0]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-2xl px-4 py-7 sm:px-6 sm:py-8 md:px-10 md:py-10 bg-background border-2 border-primary/20"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
            <span className="text-primary/50 text-xs">◆</span>
            <p className="font-display text-base sm:text-lg md:text-2xl font-bold text-primary text-center">
              REVIVE #3 — Scale with Soul
            </p>
            <span className="text-primary/50 text-xs">◆</span>
          </div>

          <p className="text-center font-body text-xs sm:text-sm md:text-base text-foreground/70 mb-6">
            30 Januari 2027 · insyaAllah dimulai dalam
          </p>

          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-4">
            {blocks.map((item, idx) => (
              <div key={item.label} className="flex items-start">
                <div className="text-center w-[58px] sm:w-[68px] md:w-[96px]">
                  <div className="rounded-xl bg-primary/10 border border-primary/15 px-1 py-2 sm:px-2 sm:py-3 md:px-4 md:py-4">
                    <div className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary leading-none tabular-nums">
                      {pad2(item.value)}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-3 font-body text-[10px] sm:text-xs md:text-sm font-semibold text-foreground/70 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
                {idx < blocks.length - 1 && (
                  <div className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary/40 leading-none px-0.5 sm:px-1 md:px-2 pt-2 sm:pt-3 md:pt-4">
                    :
                  </div>
                )}
              </div>
            ))}
          </div>

          {time.done && (
            <p className="text-center mt-6 font-body text-sm md:text-base text-primary font-semibold">
              Alhamdulillah Acara Telah Dimulai
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

