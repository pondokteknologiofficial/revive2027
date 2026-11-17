export interface TermSection {
  number: number
  title: string
  items: string[]
  accent?: boolean
  iconKey: 'file' | 'users' | 'megaphone' | 'lock' | 'shield'
}

export const TERMS_SECTIONS: TermSection[] = [
  {
    number: 1,
    title: '1. Ketentuan Umum',
    iconKey: 'file',
    items: [
      'Website ini merupakan pusat informasi resmi REVIVE #3 – Scale with Soul.',
      'Informasi yang disajikan mencakup pengenalan acara, materi, narasumber, publikasi, dan pengumuman kegiatan.',
      'Penyelenggara adalah Shafiyah Preneur, by Shafiyah Shalehah.',
      'Informasi yang tercantum dapat diperbarui sesuai perkembangan persiapan acara.',
    ],
  },
  {
    number: 2,
    title: '2. Ketentuan Bergabung dengan Komunitas',
    iconKey: 'users',
    accent: true,
    items: [
      'Pengguna yang bergabung diharapkan memberikan informasi yang diperlukan secara benar.',
      'Setiap anggota wajib menjaga adab dan etika komunikasi.',
      'Anggota dilarang menyebarkan konten yang mengandung unsur penghinaan, penipuan, spam, atau hal lain yang mengganggu kenyamanan komunitas.',
      'Anggota diharapkan menghormati anggota lainnya.',
    ],
  },
  {
    number: 3,
    title: '3. Informasi dan Publikasi',
    iconKey: 'megaphone',
    items: [
      'Informasi resmi mengenai REVIVE disampaikan melalui kanal komunikasi yang ditetapkan penyelenggara.',
      'Pengguna diharapkan merujuk pada kanal resmi untuk mendapatkan informasi yang benar.',
      'Penyelenggara berhak memperbarui informasi kegiatan apabila diperlukan.',
    ],
  },
  {
    number: 4,
    title: '4. Privasi dan Data Pengguna',
    iconKey: 'lock',
    items: [
      'Informasi yang diberikan pengguna digunakan sesuai kebutuhan pengelolaan komunitas dan komunikasi kegiatan.',
      'Pengguna diharapkan tidak membagikan data pribadi anggota lain tanpa izin.',
      'Penyelenggara perlu menjaga informasi anggota sesuai kebijakan privasi yang berlaku.',
    ],
  },
  {
    number: 5,
    title: '5. Hak Penyelenggara',
    iconKey: 'shield',
    items: [
      'Penyelenggara berhak mengelola komunitas demi menjaga ketertiban.',
      'Penyelenggara dapat mengambil tindakan terhadap anggota yang melanggar ketentuan komunitas.',
      'Penyelenggara berhak memperbarui syarat dan ketentuan sesuai kebutuhan.',
    ],
  },
]

