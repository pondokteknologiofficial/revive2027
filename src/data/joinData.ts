export interface CommunityBenefit {
  number: string
  title: string
  description: string
}

export const COMMUNITY_BENEFITS: CommunityBenefit[] = [
  {
    number: '01',
    title: 'Informasi Resmi REVIVE',
    description: 'Dapatkan informasi dan pengumuman terbaru mengenai REVIVE #3.',
  },
  {
    number: '02',
    title: 'Business Insights',
    description:
      'Dapatkan wawasan dan edukasi seputar pengelolaan, pembenahan, dan pengembangan usaha.',
  },
  {
    number: '03',
    title: 'Event Updates',
    description:
      'Ikuti perkembangan agenda, informasi pemateri, dan persiapan kegiatan REVIVE.',
  },
  {
    number: '04',
    title: 'Registration Updates',
    description:
      'Jadilah salah satu yang mendapatkan informasi ketika pendaftaran REVIVE #3 resmi dibuka.',
  },
  {
    number: '05',
    title: 'Community Connection',
    description:
      'Terhubung dengan sesama pengusaha Muslim dan Muslimah dalam ruang komunitas REVIVE.',
  },
]

export interface JoinStep {
  num: number
  title: string
  description: string
}

export const JOIN_STEPS: JoinStep[] = [
  {
    num: 1,
    title: 'Klik Join Our Community',
    description: 'Tekan tombol bergabung yang tersedia pada halaman ini.',
  },
  {
    num: 2,
    title: 'Masuk ke WhatsApp Community',
    description: 'Anda akan diarahkan menuju kanal komunitas resmi REVIVE.',
  },
  {
    num: 3,
    title: 'Bergabung dengan Komunitas',
    description: 'Ikuti instruksi yang tersedia untuk menjadi bagian dari komunitas.',
  },
  {
    num: 4,
    title: 'Dapatkan Informasi Terbaru',
    description: 'Pantau informasi, edukasi, dan pengumuman resmi dari tim REVIVE.',
  },
]

