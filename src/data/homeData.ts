export interface PhilosophyPillar {
  number: string
  english: string
  indonesian: string
  description: string
  featured?: boolean
}

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    number: '01',
    english: 'SURVIVE',
    indonesian: 'BERTAHAN',
    description:
      'Membaca kondisi usaha dengan jujur, mengenali masalah yang paling mendesak, dan menentukan prioritas agar usaha tetap memiliki fondasi yang sehat.',
  },
  {
    number: '02',
    english: 'RECTIFY',
    indonesian: 'BERBENAH',
    description:
      'Memperbaiki penjualan, biaya, stok, piutang, arus kas, dan tata kelola usaha secara terukur serta memastikan aktivitas bisnis berjalan sesuai prinsip muamalah.',
    featured: true,
  },
  {
    number: '03',
    english: 'THRIVE',
    indonesian: 'BERTUMBUH',
    description:
      'Mengembangkan usaha melalui keputusan yang lebih matang, termasuk dalam memilih sumber permodalan dan layanan keuangan syariah, sehingga pertumbuhan tidak hanya mengejar skala, tetapi juga menjaga nilai dan keberkahan usaha.',
  },
]

export interface LearningSession {
  code: string
  pillar: string
  title: string
  subtitle: string
  paragraphs: string[]
}

export const LEARNING_SESSIONS: LearningSession[] = [
  {
    code: 'S1',
    pillar: 'SURVIVE',
    title: 'Diagnosis Usaha',
    subtitle: 'Membaca kondisi usaha dan menemukan masalah utama.',
    paragraphs: [
      'Peserta akan belajar membaca kondisi bisnis berdasarkan penjualan, pelanggan, biaya, stok, piutang, arus kas, dan operasional.',
      'Melalui diagnostic worksheet, peserta diarahkan untuk membedakan gejala dan akar masalah, kemudian menentukan satu masalah paling mendesak yang perlu menjadi prioritas.',
    ],
  },
  {
    code: 'S2',
    pillar: 'RECTIFY',
    title: 'Prinsip Muamalah, Modal & Profit',
    subtitle: 'Membenahi usaha dengan prinsip muamalah.',
    paragraphs: [
      'Memahami fondasi syariah dalam aktivitas bisnis, khususnya kaidah muamalah dalam modal, transaksi, dan keuntungan.',
      'Pembahasan mencakup kejujuran, amanah, keadilan, transparansi, serta batasan syariat yang perlu diperhatikan dalam pengelolaan modal dan utang.',
    ],
  },
  {
    code: 'S3',
    pillar: 'THRIVE',
    title: 'Bedah Layanan Keuangan Syariah',
    subtitle: 'Memahami pilihan layanan keuangan syariah untuk usaha.',
    paragraphs: [
      'Mengenal pilihan layanan dan pembiayaan, akad, struktur biaya, kewajiban nasabah, karakteristik risiko, persyaratan umum, serta pertimbangan sebelum mengambil pembiayaan.',
    ],
  },
  {
    code: 'S4',
    pillar: 'ACTION CLASS',
    title: 'Peta Usaha & 30-Day Action Plan',
    subtitle: 'Menerjemahkan pembelajaran menjadi tindakan nyata.',
    paragraphs: [
      'Peserta mengintegrasikan hasil diagnosis, prinsip muamalah, dan pertimbangan bisnis ke dalam Peta Usaha dan 30-Day Action Plan.',
      'Rencana aksi disusun secara konkret, realistis, dan sesuai kapasitas usaha masing-masing.',
    ],
  },
]

export interface SpeakerCard {
  sessionCode: string
  pillar: string
  name: string
  role: string
  statusNote?: string
  logoSrc?: string
}

export const SPEAKERS: SpeakerCard[] = [
  {
    sessionCode: 'S1',
    pillar: 'SURVIVE',
    name: 'Speakers 1',
    role: 'Praktisi strategi bisnis dan diagnosis usaha.',
    statusNote: 'Profil & nama lengkap segera diumumkan',
  },
  {
    sessionCode: 'S2',
    pillar: 'RECTIFY',
    name: 'Ustadz Oni',
    role: 'Prinsip muamalah, modal, dan profit.',
  },
  {
    sessionCode: 'S3',
    pillar: 'THRIVE',
    name: 'Bank Syariah Indonesia',
    role: 'Bedah layanan keuangan syariah untuk pelaku usaha.',
    logoSrc: '/images/logo-bsi.png',
  },
  {
    sessionCode: 'S4',
    pillar: 'ACTION CLASS',
    name: 'Ustadz Muhammad Abduh Tuasikal',
    role: 'Muamalah dan penyusunan rencana aksi 30 hari.',
  },
]

export const WHO_SHOULD_JOIN: string[] = [
  'Pemilik UMKM yang ingin mengembangkan usahanya.',
  'Pedagang dan pelaku usaha yang menghadapi tantangan penjualan.',
  'Penyedia jasa yang ingin memperbaiki pengelolaan bisnis.',
  'Pengusaha yang mengalami persoalan arus kas, stok, dan piutang.',
  'Pemilik usaha yang ingin memperbaiki tata kelola bisnis.',
  'Pengusaha yang ingin memahami prinsip muamalah dan layanan keuangan syariah.',
]

export interface TakeHomeItem {
  number: string
  title: string
  description: string
}

export const TAKE_HOME_ITEMS: TakeHomeItem[] = [
  {
    number: '1',
    title: 'Diagnosis Kondisi Usaha',
    description:
      'Gambaran kondisi bisnis berdasarkan penjualan, biaya, stok, piutang, dan arus kas.',
  },
  {
    number: '2',
    title: 'Prioritas Masalah',
    description: 'Satu masalah paling mendesak yang harus menjadi fokus pembenahan.',
  },
  {
    number: '3',
    title: 'Pemahaman Muamalah',
    description: 'Perspektif syariah dalam pengelolaan modal, transaksi, dan keuntungan.',
  },
  {
    number: '4',
    title: 'Literasi Keuangan Syariah',
    description:
      'Pemahaman mengenai pilihan layanan, akad, biaya, kewajiban, dan risiko.',
  },
  {
    number: '5',
    title: '30-Day Action Plan',
    description:
      'Rencana aksi 30 hari yang konkret dan realistis untuk diterapkan dalam usaha.',
  },
]

