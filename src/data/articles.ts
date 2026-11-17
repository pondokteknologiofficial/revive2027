export type ArticleCategory =
  | 'REVIVE Updates'
  | 'Business Insights'
  | 'Islamic Business'
  | 'Speakers & Sessions'
  | 'Event Information'

export interface Article {
  id: number
  slug: string
  title: string
  category: ArticleCategory
  date: string
  readTime: string
  excerpt: string
  posterTag: string
  posterTheme: 'emerald' | 'cream' | 'courtyard' | 'botanical'
  image: string
  supportingImage?: string
  paragraphs: string[]
  highlights?: {
    title: string
    items: string[]
  }
}

export const ARTICLE_CATEGORIES: ('All Posts' | ArticleCategory)[] = [
  'All Posts',
  'REVIVE Updates',
  'Business Insights',
  'Islamic Business',
  'Speakers & Sessions',
  'Event Information',
]

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'introducing-revive-3-scale-with-soul',
    title: 'Introducing REVIVE #3 – Scale with Soul',
    category: 'REVIVE Updates',
    date: '15 November 2026',
    readTime: '4 menit baca',
    excerpt:
      'REVIVE hadir sebagai ruang pembelajaran bagi pengusaha Muslim dan Muslimah untuk mengevaluasi kondisi usaha, memahami prinsip muamalah, dan menyusun rencana tindakan nyata.',
    posterTag: 'OFFICIAL LAUNCH',
    posterTheme: 'emerald',
    image: '/images/hero-bg.jpg',
    supportingImage: '/images/editorial-courtyard.jpg',
    paragraphs: [
      'Bertahan, Berbenah, Bertumbuh. Setiap pengusaha pasti menghadapi tantangan dalam perjalanan membangun bisnis. Perubahan pasar, penurunan penjualan, meningkatnya biaya operasional, hingga persoalan arus kas dapat menjadi ujian bagi keberlangsungan usaha.',
      'Dalam kondisi tersebut, pengusaha sering kali dihadapkan pada pertanyaan: Apa yang harus dilakukan agar usaha tetap berjalan dan dapat berkembang?',
      'Jawabannya tidak selalu dengan meningkatkan penjualan atau menambah modal. Terkadang, yang paling dibutuhkan adalah berhenti sejenak untuk membaca kondisi usaha, menemukan akar masalah, dan menentukan prioritas pembenahan.',
      'REVIVE hadir sebagai ruang pembelajaran bagi pengusaha Muslim dan Muslimah untuk mengevaluasi kondisi usaha, memahami prinsip muamalah, mengenali pilihan keuangan syariah, dan menyusun rencana tindakan yang dapat diterapkan.',
      'Melalui tema Scale with Soul, REVIVE mengajak pengusaha untuk tidak hanya mengejar pertumbuhan bisnis, tetapi juga menjaga nilai dan prinsip dalam setiap prosesnya.',
      'SAVE THE DATE: 30 Januari 2027 di Royal Ambarrukmo Hotel, Yogyakarta. Diselenggarakan oleh Shafiyah Preneur, by Shafiyah Shalehah — Presented with Rumaysho.com & Bank Syariah Indonesia.',
    ],
    highlights: {
      title: 'Tiga Pilar Utama REVIVE',
      items: [
        'Bertahan (Survive): memahami kondisi dan menentukan prioritas.',
        'Berbenah (Rectify): memperbaiki pengelolaan dan aktivitas usaha.',
        'Bertumbuh (Thrive): mengembangkan usaha dengan keputusan yang lebih matang dan sesuai prinsip muamalah.',
      ],
    },
  },
  {
    id: 2,
    slug: 'ketika-bisnis-menghadapi-tekanan',
    title: 'Ketika Bisnis Menghadapi Tekanan, Apa yang Harus Dilakukan?',
    category: 'Business Insights',
    date: '18 November 2026',
    readTime: '4 menit baca',
    excerpt:
      'Ketika penjualan menurun dan arus kas mengetat, menaikkan omzet saja belum tentu menjadi jawaban. Pengusaha perlu membaca kondisi usaha secara objektif.',
    posterTag: 'BUSINESS STRATEGY',
    posterTheme: 'cream',
    image: '/images/editorial-business.jpg',
    paragraphs: [
      'Dinamika dunia usaha terus berubah. Persaingan pasar, perubahan pola konsumsi, kenaikan biaya, hingga tantangan pengelolaan arus kas dapat membuat usaha mengalami stagnasi bahkan penurunan kinerja.',
      'Penjualan menurun, stok menumpuk, piutang sulit tertagih, dan pengusaha sering kali dihadapkan pada keputusan yang tidak mudah.',
      'Dalam kondisi seperti ini, meningkatkan penjualan saja belum tentu menjadi solusi. Jika struktur biaya bocor atau perputaran stok bermasalah, penambahan omzet justru dapat memperbesar beban operasional.',
      'Pengusaha perlu memahami kondisi bisnisnya secara objektif, membedakan gejala dari akar persoalan, dan menentukan langkah pembenahan yang paling mendesak.',
      'Bagi seorang pengusaha Muslim, pembenahan usaha juga harus memperhatikan prinsip muamalah. Pertumbuhan bukan hanya tentang omzet dan keuntungan, tetapi juga tentang bagaimana keuntungan diperoleh dan bagaimana transaksi dijalankan.',
    ],
  },
  {
    id: 3,
    slug: 'bertahan-berbenah-bertumbuh-tiga-pilar-revive',
    title: 'Bertahan, Berbenah, Bertumbuh: Tiga Pilar REVIVE',
    category: 'REVIVE Updates',
    date: '22 November 2026',
    readTime: '3 menit baca',
    excerpt:
      'Mengenal kerangka kerja Survive, Rectify, dan Thrive yang menjadi fondasi seluruh materi pembelajaran di REVIVE #3.',
    posterTag: 'OUR PHILOSOPHY',
    posterTheme: 'courtyard',
    image: '/images/editorial-courtyard.jpg',
    paragraphs: [
      'Pertumbuhan bisnis yang sehat selalu melewati tahapan yang berurutan. Melompat langsung ke ekspansi tanpa fondasi yang beres ibarat membangun gedung bertingkat di atas tanah yang rapuh.',
      'Oleh karena itu, REVIVE #3 merumuskan kerangka perjalanan pengusaha dalam tiga pilar utama: Survive (Bertahan), Rectify (Berbenah), dan Thrive (Bertumbuh).',
      'Tahap pertama, Survive, mengajak pengusaha berani membaca kondisi usaha secara jujur, mengenali masalah paling mendesak, dan menstabilkan fondasi bisnis.',
      'Tahap kedua, Rectify, berfokus pada pembenahan terukur atas penjualan, biaya, stok, piutang, arus kas, dan tata kelola agar aktivitas bisnis berjalan selaras dengan prinsip muamalah.',
      'Tahap ketiga, Thrive, membantu pengusaha mengambil keputusan pertumbuhan yang lebih matang—termasuk memilih permodalan dan layanan keuangan syariah—sehingga skala usaha meningkat tanpa mengorbankan nilai dan keberkahan.',
    ],
  },
  {
    id: 4,
    slug: 'mengapa-pengusaha-perlu-melakukan-diagnosis-usaha',
    title: 'Mengapa Pengusaha Perlu Melakukan Diagnosis Usaha?',
    category: 'Business Insights',
    date: '26 November 2026',
    readTime: '4 menit baca',
    excerpt:
      'Diagnosis usaha membantu pemilik bisnis membedakan antara gejala di permukaan dan akar masalah yang sesungguhnya terjadi di operasional.',
    posterTag: 'S1 — SURVIVE',
    posterTheme: 'cream',
    image: '/images/editorial-business.jpg',
    paragraphs: [
      'Banyak pelaku usaha merasa sibuk setiap hari namun tidak melihat kemajuan berarti pada kesehatan finansial bisnisnya. Salah satu penyebab paling umum adalah mengobati gejala, bukan akar persoalan.',
      'Misalnya, ketika kas menipis, reaksi spontan sering kali berupa diskon besar-besaran atau mencari pinjaman cepat. Padahal, bisa jadi masalah utamanya terletak pada piutang macet, stok lambat berputar, atau margin produk yang keliru dihitung.',
      'Melalui diagnosis usaha, pengusaha belajar membaca tujuh indikator vital: penjualan, pelanggan, biaya, stok, piutang, arus kas, dan operasional.',
      'Dalam Sesi 1 REVIVE #3, peserta akan dipandu menggunakan diagnostic worksheet untuk memetakan kondisi nyata usahanya dan memilih satu prioritas utama yang harus dibereskan terlebih dahulu.',
    ],
  },
  {
    id: 5,
    slug: 'kesalahan-pengusaha-dalam-mengambil-keputusan-bisnis',
    title: 'Kesalahan Pengusaha dalam Mengambil Keputusan Bisnis',
    category: 'Business Insights',
    date: '30 November 2026',
    readTime: '4 menit baca',
    excerpt:
      'Mengambil keputusan ekspansi atau pembiayaan berdasarkan asumsi tanpa data dan tanpa kesiapan tata kelola dapat memperberat tekanan bisnis.',
    posterTag: 'BUSINESS INSIGHT',
    posterTheme: 'botanical',
    image: '/images/landscape-strip.jpg',
    paragraphs: [
      'Di tengah tekanan bisnis atau godaan tren pasar, pengusaha kerap mengambil keputusan strategis secara tergesa-gesa—mulai dari menambah cabang, menimbun stok berlebihan, hingga mengambil pembiayaan tanpa menghitung kapasitas pengembalian.',
      'Kesalahan lainnya adalah mencampurkan keuangan pribadi dengan keuangan usaha, sehingga pemilik bisnis tidak pernah benar-benar tahu apakah usahanya sedang untung atau sekadar ramai transaksi.',
      'Keputusan bisnis yang matang membutuhkan dua pegangan: data kondisi usaha yang objektif dan kompas nilai yang jelas.',
      'Dengan memadukan evaluasi angka operasional dan prinsip amanah serta kehati-hatian syariah, pengusaha dapat menghindari langkah reaktif dan mulai mengeksekusi prioritas yang berdampak nyata.',
    ],
  },
  {
    id: 6,
    slug: 'mengapa-pengusaha-muslim-perlu-memahami-muamalah',
    title: 'Mengapa Pengusaha Muslim Perlu Memahami Muamalah?',
    category: 'Islamic Business',
    date: '4 Desember 2026',
    readTime: '4 menit baca',
    excerpt:
      'Bisnis bukan sekadar mencari laba, melainkan bagian dari ibadah dan amanah yang menuntut kejelasan akad, keadilan, dan transparansi.',
    posterTag: 'ISLAMIC BUSINESS',
    posterTheme: 'emerald',
    image: '/images/hero-bg.jpg',
    paragraphs: [
      'Bagi seorang Muslim, aktivitas jual beli dan pengelolaan usaha tidak terpisah dari nilai-nilai syariat. Cara memperoleh harta sama pentingnya dengan tujuan penggunaan harta tersebut.',
      'Pemahaman fiqih muamalah membantu pengusaha mengenali batas antara transaksi yang sah dan berkah dengan praktik yang berisiko mengandung unsur riba, gharar (ketidakjelasan), atau kezaliman antar pihak.',
      'Kejujuran dalam menyampaikan kondisi produk, amanah terhadap hak karyawan dan mitra, serta kejelasan akad kerja sama adalah fondasi kepercayaan jangka panjang.',
      'Di REVIVE #3, prinsip muamalah tidak dibahas sebatas teori, melainkan dihubungkan langsung dengan praktik keseharian pelaku usaha dan UMKM.',
    ],
  },
  {
    id: 7,
    slug: 'modal-dan-profit-dalam-perspektif-muamalah',
    title: 'Modal dan Profit dalam Perspektif Muamalah',
    category: 'Islamic Business',
    date: '8 Desember 2026',
    readTime: '5 menit baca',
    excerpt:
      'Memahami batasan syariat dalam pengelolaan modal, utang, kemitraan, dan perhitungan keuntungan usaha yang adil dan transparan.',
    posterTag: 'S2 — RECTIFY',
    posterTheme: 'courtyard',
    image: '/images/editorial-courtyard.jpg',
    paragraphs: [
      'Ketika usaha membutuhkan tambahan modal, banyak pengusaha hanya melihat kecepatan pencairan dana tanpa mencermati bentuk akad dan konsekuensi syariat maupun finansialnya.',
      'Dalam perspektif muamalah, kerja sama permodalan memiliki aturan main yang jelas—seperti kejelasan pembagian nisbah keuntungan dan tanggung jawab risiko dalam skema syirkah atau mudharabah.',
      'Begitu pula dalam pengelolaan utang usaha: komitmen pelunasan, pencatatan yang rapi, serta transparansi kepada pihak terkait merupakan bagian dari sifat amanah yang dijaga oleh pengusaha Muslim.',
      'Sesi kedua REVIVE #3 bersama Ustadz Oni akan membedah kaidah muamalah dalam modal, transaksi, dan keuntungan secara terstruktur dan aplikatif.',
    ],
  },
  {
    id: 8,
    slug: 'memahami-layanan-keuangan-syariah-untuk-usaha',
    title: 'Memahami Layanan Keuangan Syariah untuk Usaha',
    category: 'Islamic Business',
    date: '12 Desember 2026',
    readTime: '4 menit baca',
    excerpt:
      'Mengenal ragam layanan, akad pembiayaan, struktur biaya, hak dan kewajiban nasabah, serta pertimbangan sebelum mengambil pembiayaan syariah.',
    posterTag: 'S3 — THRIVE',
    posterTheme: 'cream',
    image: '/images/editorial-business.jpg',
    paragraphs: [
      'Memilih layanan keuangan untuk mendukung pertumbuhan usaha memerlukan literasi yang memadai. Pengusaha tidak cukup hanya mendengar label syariah, tetapi juga perlu memahami mekanisme akad di baliknya.',
      'Setiap jenis pembiayaan dan layanan perbankan syariah memiliki karakteristik risiko, struktur biaya, persyaratan umum, serta kewajiban nasabah yang berbeda-beda sesuai kebutuhan usaha.',
      'Pertimbangan terpenting sebelum mengambil pembiayaan adalah memastikan usaha sudah memiliki arus kas yang terbaca dan rencana penggunaan dana yang produktif.',
      'Bersama Bank Syariah Indonesia dalam Sesi 3 REVIVE #3, peserta akan membedah pilihan layanan keuangan syariah secara jernih agar dapat mengambil keputusan permodalan dengan tenang dan terukur.',
    ],
  },
  {
    id: 9,
    slug: 'mengenal-empat-sesi-pembelajaran-revive',
    title: 'Mengenal Empat Sesi Pembelajaran REVIVE',
    category: 'REVIVE Updates',
    date: '16 Desember 2026',
    readTime: '4 menit baca',
    excerpt:
      'Dari Diagnosis Usaha, Prinsip Muamalah, Bedah Layanan Keuangan Syariah, hingga penyusunan 30-Day Action Plan di Action Class.',
    posterTag: 'CURRICULUM',
    posterTheme: 'emerald',
    image: '/images/hero-bg.jpg',
    paragraphs: [
      'Rangkaian materi REVIVE #3 disusun sebagai satu alur utuh selama satu hari penuh agar peserta tidak pulang dengan catatan yang tercecer, melainkan peta langkah yang tersambung.',
      'Sesi 1 (SURVIVE — Diagnosis Usaha): Membaca kondisi usaha dari tujuh indikator inti dan menemukan satu masalah paling mendesak.',
      'Sesi 2 (RECTIFY — Prinsip Muamalah, Modal & Profit): Membenahi fondasi syariah dalam modal, transaksi, dan profitabilitas.',
      'Sesi 3 (THRIVE — Bedah Layanan Keuangan Syariah): Mengenali pilihan layanan keuangan, akad, kewajiban, dan manajemen risiko pembiayaan.',
      'Sesi 4 (ACTION CLASS): Mengintegrasikan seluruh pembelajaran ke dalam Peta Usaha dan 30-Day Action Plan yang realistis sesuai kapasitas bisnis masing-masing.',
    ],
  },
  {
    id: 10,
    slug: 'kenali-para-narasumber-revive-3',
    title: 'Kenali Para Narasumber REVIVE #3',
    category: 'Speakers & Sessions',
    date: '20 Desember 2026',
    readTime: '3 menit baca',
    excerpt:
      'Kolaborasi praktisi strategi bisnis, asatidz ahli muamalah, dan praktisi keuangan syariah untuk mendampingi pembenahan usaha Anda.',
    posterTag: 'SPEAKERS & PARTNERS',
    posterTheme: 'courtyard',
    image: '/images/editorial-courtyard.jpg',
    paragraphs: [
      'REVIVE #3 menghadirkan sinergi antara praktisi bisnis, pembimbing syar’i, dan mitra keuangan syariah agar pembahasan tidak berat sebelah—tetap tajam secara manajerial dan kokoh secara prinsip agama.',
      'S1 — SURVIVE: Praktisi strategi bisnis dan diagnosis usaha yang akan memandu pembedahan indikator bisnis.',
      'S2 — RECTIFY: Ustadz Oni, membahas prinsip muamalah dalam pengelolaan modal, transaksi, dan keuntungan usaha.',
      'S3 — THRIVE: Bank Syariah Indonesia, memaparkan bedah layanan keuangan syariah untuk pelaku usaha.',
      'S4 — ACTION CLASS: Ustadz Muhammad Abduh Tuasikal, menguatkan muamalah aplikatif sekaligus mendampingi penyusunan rencana aksi 30 hari.',
    ],
  },
  {
    id: 11,
    slug: 'apa-yang-akan-anda-bawa-pulang-dari-revive',
    title: 'Apa yang Akan Anda Bawa Pulang dari REVIVE?',
    category: 'REVIVE Updates',
    date: '24 Desember 2026',
    readTime: '3 menit baca',
    excerpt:
      'Lima luaran konkret yang dibawa pulang peserta: Diagnosis Kondisi Usaha, Prioritas Masalah, Pemahaman Muamalah, Literasi Keuangan Syariah, dan 30-Day Action Plan.',
    posterTag: 'TAKE HOME OUTPUT',
    posterTheme: 'cream',
    image: '/images/editorial-business.jpg',
    paragraphs: [
      'Sering kali peserta seminar bisnis merasa bersemangat saat acara berlangsung, tetapi bingung harus memulai dari mana keesokan harinya.',
      'REVIVE #3 dirancang sebagai workshop aplikatif agar setiap peserta pulang membawa dokumen kerja yang siap dipakai langsung pada Senin pagi.',
      'Lima hasil utama yang dibawa pulang: (1) Diagnosis Kondisi Usaha, (2) Penetapan Prioritas Masalah paling mendesak, (3) Pemahaman Prinsip Muamalah dalam modal dan profit, (4) Literasi Layanan Keuangan Syariah, serta (5) Peta Usaha dan 30-Day Action Plan yang konkret.',
    ],
  },
  {
    id: 12,
    slug: 'save-the-date-30-januari-2027',
    title: 'Save the Date: 30 Januari 2027',
    category: 'Event Information',
    date: '28 Desember 2026',
    readTime: '2 menit baca',
    excerpt:
      'Catat tanggalnya: Sabtu, 30 Januari 2027 pukul 07.00–17.00 WIB di Royal Ambarrukmo Hotel, Yogyakarta. Target 300 pengusaha Muslim & Muslimah.',
    posterTag: 'EVENT INFORMATION',
    posterTheme: 'botanical',
    image: '/images/landscape-strip.jpg',
    paragraphs: [
      'Catat agenda awal tahun Anda bersama komunitas pengusaha Muslim dan Muslimah di Yogyakarta.',
      'Workshop REVIVE #3 — Scale with Soul akan dilaksanakan pada hari Sabtu, 30 Januari 2027, pukul 07.00–17.00 WIB bertempat di Royal Ambarrukmo Hotel, Yogyakarta dengan kapasitas target 300 peserta.',
      'Saat ini website berada pada tahap Pre-Launch (Community Building). Pendaftaran resmi belum dibuka melalui website; silakan bergabung ke WhatsApp Community resmi REVIVE untuk menjadi yang pertama mendapatkan pengumuman saat pendaftaran dibuka.',
    ],
  },
]

export function getArticleBySlug(slug: string | undefined): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}

export function getRelatedArticles(currentArticle: Article, limit = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== currentArticle.slug && a.category === currentArticle.category,
  )
  const others = ARTICLES.filter(
    (a) => a.slug !== currentArticle.slug && a.category !== currentArticle.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}

