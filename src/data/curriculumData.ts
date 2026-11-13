export type ComponentKind = 'hardware' | 'software';
export type SubRole = 'Input' | 'Proses' | 'Output' | 'Penyimpanan' | 'Sistem Operasi' | 'Aplikasi';

export interface ComputerPart {
  id: string;
  name: string;
  kind: ComponentKind;
  role: SubRole;
  shortDesc: string;
  explanation: string;
  analogy: string;
  schoolExample: string;
  canTouch: boolean;
}

export interface SimulationScenario {
  id: string;
  title: string;
  summary: string;
  inputDevice: string;
  inputAction: string;
  processUnit: string;
  processDetail: string;
  outputDevice: string;
  outputResult: string;
  steps: [string, string, string];
}

export interface QuizQuestion {
  id: number;
  prompt: string;
  itemLabel: string;
  correctAnswer: ComponentKind;
  roleHint: SubRole;
  explanation: string;
}

export interface PromptConfig {
  fokusMateri: 'lengkap' | 'hardware' | 'software' | 'ipo';
  modelMedia: 'eksplorasi' | 'kuis_gamifikasi' | 'rakit_virtual';
  gayaBahasa: 'ramah_anak' | 'saintifik_sederhana' | 'berbasis_cerita';
  sertakanAnalogi: boolean;
  sertakanKuis: boolean;
  sertakanPanduanGuru: boolean;
}

export const COMPUTER_PARTS: ComputerPart[] = [
  {
    id: 'monitor',
    name: 'Monitor',
    kind: 'hardware',
    role: 'Output',
    shortDesc: 'Menampilkan tulisan, gambar, dan video dari komputer.',
    explanation:
      'Monitor adalah layar komputer yang dapat dilihat dan disentuh bingkainya. Tanpa monitor, kita tidak dapat melihat hasil pekerjaan kita di komputer.',
    analogy: 'Seperti papan tulis atau layar televisi di ruang kelas.',
    schoolExample: 'Melihat gambar rumah yang dibuat saat pelajaran menggambar.',
    canTouch: true,
  },
  {
    id: 'keyboard',
    name: 'Keyboard (Papan Ketik)',
    kind: 'hardware',
    role: 'Input',
    shortDesc: 'Memasukkan huruf, angka, spasi, dan tanda baca.',
    explanation:
      'Keyboard memiliki tombol-tombol huruf A sampai Z, angka 0 sampai 9, serta tombol perintah seperti Enter dan Spasi untuk memberi masukan ke komputer.',
    analogy: 'Seperti pensil dan penghapus yang dipakai untuk menulis di buku.',
    schoolExample: 'Mengetik nama lengkap dan cerita liburan di aplikasi pengolah kata.',
    canTouch: true,
  },
  {
    id: 'mouse',
    name: 'Mouse (Tetikus)',
    kind: 'hardware',
    role: 'Input',
    shortDesc: 'Menggerakkan panah penunjuk (kursor) dan memilih menu.',
    explanation:
      'Mouse digerakkan di atas meja untuk mengarahkan kursor di layar. Tombol kiri dipakai untuk memilih atau membuka, sedangkan roda tengah untuk menggulir layar.',
    analogy: 'Seperti jari telunjuk kita saat menunjuk gambar di buku.',
    schoolExample: 'Memilih warna kuas biru saat mewarnai gambar pemandangan.',
    canTouch: true,
  },
  {
    id: 'cpu',
    name: 'CPU (Unit Pemroses)',
    kind: 'hardware',
    role: 'Proses',
    shortDesc: 'Otak komputer yang menghitung dan mengolah semua perintah.',
    explanation:
      'Di dalam kotak casing komputer terdapat prosesor (CPU) yang membaca perintah dari keyboard atau mouse, lalu menghitung dan mengirim hasilnya ke monitor.',
    analogy: 'Seperti otak manusia yang berpikir sebelum tangan menulis.',
    schoolExample: 'Menghitung hasil penjumlahan di aplikasi kalkulator dengan cepat.',
    canTouch: true,
  },
  {
    id: 'printer',
    name: 'Printer (Pencetak)',
    kind: 'hardware',
    role: 'Output',
    shortDesc: 'Mencetak tulisan atau gambar digital ke atas kertas.',
    explanation:
      'Printer mengubah tugas yang ada di layar komputer menjadi lembaran kertas nyata menggunakan tinta.',
    analogy: 'Seperti stempel atau mesin cetak buku pelajaran.',
    schoolExample: 'Mencetak tugas poster menjaga kebersihan kelas untuk ditempel di mading.',
    canTouch: true,
  },
  {
    id: 'speaker',
    name: 'Speaker (Pelantang Suara)',
    kind: 'hardware',
    role: 'Output',
    shortDesc: 'Mengeluarkan suara, musik, dan bunyi efek dari komputer.',
    explanation:
      'Speaker mengubah sinyal digital dari komputer menjadi gelombang suara agar terdengar oleh telinga kita.',
    analogy: 'Seperti mulut atau pengeras suara saat upacara bendera.',
    schoolExample: 'Mendengarkan pelafalan bahasa Inggris atau lagu daerah.',
    canTouch: true,
  },
  {
    id: 'flashdisk',
    name: 'Flashdisk',
    kind: 'hardware',
    role: 'Penyimpanan',
    shortDesc: 'Menyimpan file dokumen dan gambar agar mudah dibawa.',
    explanation:
      'Flashdisk adalah alat penyimpan data berukuran kecil yang dicolokkan ke lubang USB komputer.',
    analogy: 'Seperti tas sekolah kecil untuk membawa buku tugas dari rumah ke sekolah.',
    schoolExample: 'Membawa file presentasi tugas kelompok ke komputer guru.',
    canTouch: true,
  },
  {
    id: 'os',
    name: 'Sistem Operasi',
    kind: 'software',
    role: 'Sistem Operasi',
    shortDesc: 'Program utama yang mengatur agar seluruh komputer siap dipakai.',
    explanation:
      'Contohnya Windows, macOS, atau ChromeOS. Sistem operasi adalah perangkat lunak yang tidak bisa disentuh fisiknya, tetapi bertugas menyalakan layar awal dan mengatur aplikasi.',
    analogy: 'Seperti kepala sekolah yang mengatur jadwal dan kerja sama semua guru.',
    schoolExample: 'Tampilan layar desktop pertama kali muncul saat komputer dinyalakan.',
    canTouch: false,
  },
  {
    id: 'paint',
    name: 'Aplikasi Menggambar (Paint)',
    kind: 'software',
    role: 'Aplikasi',
    shortDesc: 'Program untuk menggambar bentuk, garis, dan mewarnai.',
    explanation:
      'Perangkat lunak gambar menyediakan kuas, pensil digital, dan palet warna di layar. Kita memakainya menggunakan mouse.',
    analogy: 'Seperti buku gambar dan kotak krayon di dalam layar.',
    schoolExample: 'Menggambar denah sekolah atau poster hemat energi.',
    canTouch: false,
  },
  {
    id: 'word',
    name: 'Aplikasi Pengolah Kata',
    kind: 'software',
    role: 'Aplikasi',
    shortDesc: 'Program untuk menulis karangan, surat, dan laporan.',
    explanation:
      'Contohnya Microsoft Word atau Google Docs. Perangkat lunak ini membantu mengatur ukuran huruf, warna teks, dan merapikan paragraf.',
    analogy: 'Seperti buku tulis bergaris yang pintar merapikan tulisan.',
    schoolExample: 'Mengetik ringkasan cerita rakyat dari perpustakaan sekolah.',
    canTouch: false,
  },
  {
    id: 'browser',
    name: 'Peramban Web (Browser)',
    kind: 'software',
    role: 'Aplikasi',
    shortDesc: 'Program untuk membuka situs belajar dan informasi di internet.',
    explanation:
      'Contohnya Google Chrome atau Microsoft Edge. Peramban membantu siswa mencari materi pelajaran dengan pendampingan guru atau orang tua.',
    analogy: 'Seperti jendela perpustakaan untuk mencari buku ensiklopedia.',
    schoolExample: 'Membuka portal belajar rumah pendidikan atau kuis kelas.',
    canTouch: false,
  },
  {
    id: 'mediaplayer',
    name: 'Pemutar Audio & Video',
    kind: 'software',
    role: 'Aplikasi',
    shortDesc: 'Program untuk memutar rekaman suara, lagu, dan video edukasi.',
    explanation:
      'Perangkat lunak ini membaca file video atau lagu lalu mengirim gambar ke monitor dan suara ke speaker secara bersamaan.',
    analogy: 'Seperti pemutar kaset atau DVD yang ada di dalam komputer.',
    schoolExample: 'Menonton video simulasi tata surya bersama teman sekelas.',
    canTouch: false,
  },
];

export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'mengetik',
    title: 'Mengetik Nama di Pengolah Kata',
    summary: 'Mengamati bagaimana tombol keyboard yang ditekan muncul sebagai huruf di layar.',
    inputDevice: 'Keyboard',
    inputAction: 'Siswa menekan huruf di keyboard',
    processUnit: 'CPU + Aplikasi Pengolah Kata',
    processDetail: 'CPU menerjemahkan sinyal tombol dan aplikasi menyusunnya menjadi huruf rapi',
    outputDevice: 'Monitor',
    outputResult: 'Huruf dan kata tampil terang di layar monitor',
    steps: [
      'Langkah 1 (Input): Jari menekan tombol pada keyboard sehingga sinyal masuk ke komputer.',
      'Langkah 2 (Proses): CPU bersama aplikasi pengolah kata membaca kode tombol dan membentuk huruf.',
      'Langkah 3 (Output): Monitor menampilkan tulisan sesuai huruf yang kamu ketik.',
    ],
  },
  {
    id: 'menggambar',
    title: 'Menggambar & Mencetak Poster',
    summary: 'Melihat kerja sama mouse, aplikasi gambar, monitor, dan printer.',
    inputDevice: 'Mouse',
    inputAction: 'Siswa menggeser mouse dan mengklik tombol cetak',
    processUnit: 'CPU + Aplikasi Menggambar',
    processDetail: 'CPU mengolah gerak kursor dan menyiapkan halaman gambar untuk dicetak',
    outputDevice: 'Monitor & Printer',
    outputResult: 'Gambar terlihat di layar lalu tercetak di atas kertas',
    steps: [
      'Langkah 1 (Input): Mouse digerakkan untuk menggambar bentuk dan menekan ikon Cetak.',
      'Langkah 2 (Proses): CPU dan perangkat lunak gambar mengubah gambar menjadi data siap cetak.',
      'Langkah 3 (Output): Monitor menampilkan pratinjau dan printer mencetak hasilnya ke kertas.',
    ],
  },
  {
    id: 'musik',
    title: 'Memutar Lagu Pelajaran',
    summary: 'Memahami alur dari klik perintah sampai suara terdengar lewat speaker.',
    inputDevice: 'Mouse',
    inputAction: 'Siswa menekan tombol Putar (Play)',
    processUnit: 'CPU + Pemutar Media',
    processDetail: 'CPU membaca berkas lagu melalui perangkat lunak pemutar media',
    outputDevice: 'Speaker',
    outputResult: 'Gelombang suara lagu terdengar jelas di ruang kelas',
    steps: [
      'Langkah 1 (Input): Klik kiri mouse memilih lagu dan menekan tombol Putar.',
      'Langkah 2 (Proses): CPU bersama software pemutar media mengolah data audio.',
      'Langkah 3 (Output): Speaker mengeluarkan suara lagu agar dapat didengar bersama.',
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Alat yang dipakai untuk mengetik huruf dan angka serta dapat disentuh langsung oleh tangan.',
    itemLabel: 'Keyboard (Papan Ketik)',
    correctAnswer: 'hardware',
    roleHint: 'Input',
    explanation: 'Keyboard memiliki wujud fisik yang dapat dilihat dan disentuh, sehingga termasuk Perangkat Keras (Hardware) jenis Input.',
  },
  {
    id: 2,
    prompt: 'Program di dalam komputer yang dipakai siswa untuk menggambar dan mewarnai rumah.',
    itemLabel: 'Aplikasi Paint',
    correctAnswer: 'software',
    roleHint: 'Aplikasi',
    explanation: 'Paint adalah program digital di layar yang tidak bisa dipegang bentuk fisiknya, sehingga termasuk Perangkat Lunak (Software).',
  },
  {
    id: 3,
    prompt: 'Layar komputer yang menampilkan gambar, video, dan hasil ketikan kita.',
    itemLabel: 'Monitor',
    correctAnswer: 'hardware',
    roleHint: 'Output',
    explanation: 'Monitor adalah benda fisik yang bisa dilihat dan disentuh. Fungsinya sebagai perangkat keluaran (Output).',
  },
  {
    id: 4,
    prompt: 'Pengatur utama di dalam komputer seperti Windows atau ChromeOS agar semua aplikasi dapat berjalan.',
    itemLabel: 'Sistem Operasi',
    correctAnswer: 'software',
    roleHint: 'Sistem Operasi',
    explanation: 'Sistem Operasi adalah kumpulan instruksi program yang mengatur kerja komputer, termasuk Perangkat Lunak (Software).',
  },
  {
    id: 5,
    prompt: 'Alat kecil yang digerakkan di meja untuk mengarahkan panah penunjuk di layar.',
    itemLabel: 'Mouse (Tetikus)',
    correctAnswer: 'hardware',
    roleHint: 'Input',
    explanation: 'Mouse adalah perangkat fisik yang digenggam tangan untuk memberi perintah ke komputer, sehingga termasuk Hardware.',
  },
  {
    id: 6,
    prompt: 'Program yang digunakan untuk menulis karangan cerita atau tugas sekolah secara rapi.',
    itemLabel: 'Microsoft Word / Google Docs',
    correctAnswer: 'software',
    roleHint: 'Aplikasi',
    explanation: 'Pengolah kata adalah aplikasi komputer tanpa wujud fisik benda, maka disebut Perangkat Lunak (Software).',
  },
  {
    id: 7,
    prompt: 'Alat pencetak yang mengeluarkan tulisan atau gambar dari komputer ke lembaran kertas.',
    itemLabel: 'Printer',
    correctAnswer: 'hardware',
    roleHint: 'Output',
    explanation: 'Printer berwujud mesin nyata yang memakai kertas dan tinta, sehingga termasuk Perangkat Keras (Hardware).',
  },
  {
    id: 8,
    prompt: 'Program seperti Google Chrome yang digunakan untuk membuka situs web belajar.',
    itemLabel: 'Peramban Web (Browser)',
    correctAnswer: 'software',
    roleHint: 'Aplikasi',
    explanation: 'Browser adalah perangkat lunak aplikasi untuk menjelajahi halaman web di internet.',
  },
];

export function buildTeacherPrompt(config: PromptConfig): string {
  const fokusMap: Record<PromptConfig['fokusMateri'], string> = {
    lengkap:
      'Pengenalan Perangkat Keras (Hardware: Input, Proses, Output, Penyimpanan) dan Perangkat Lunak (Software: Sistem Operasi dan Aplikasi dasar) beserta cara keduanya bekerja sama.',
    hardware:
      'Pengenalan Perangkat Keras (Hardware) komputer secara mendasar: Monitor, Keyboard, Mouse, CPU, Printer, Speaker, dan Flashdisk lengkap dengan pengelompokan Input, Proses, Output.',
    software:
      'Pengenalan Perangkat Lunak (Software) secara mendasar untuk anak SD: perbedaan Sistem Operasi dan Aplikasi (pengolah kata, aplikasi menggambar, peramban web, pemutar media).',
    ipo:
      'Alur kerja dasar komputer yaitu Input (masukan), Proses (pengolahan oleh CPU & Software), dan Output (keluaran) menggunakan contoh aktivitas sehari-hari siswa SD.',
  };

  const modelMap: Record<PromptConfig['modelMedia'], string> = {
    eksplorasi:
      'Media eksplorasi interaktif berisi kartu perangkat yang dapat diklik, diagram meja komputer interaktif, simulasi alur Input-Proses-Output, dan kuis evaluasi singkat.',
    kuis_gamifikasi:
      'Media belajar interaktif bergaya misi kelas dengan tantangan memilah Hardware vs Software, tebak fungsi perangkat dari petunjuk cerita, serta papan skor kemajuan siswa.',
    rakit_virtual:
      'Simulasi meja komputer interaktif tempat siswa mengklik dan memasangkan komponen Hardware (Monitor, Keyboard, Mouse, CPU, Printer) lalu menjalankan Software di layar.',
  };

  const gayaMap: Record<PromptConfig['gayaBahasa'], string> = {
    ramah_anak:
      'Gunakan bahasa Indonesia yang ramah anak usia 9-10 tahun (kelas 4 SD), kalimat pendek, jelas, hangat, dan tidak memakai istilah teknis rumit tanpa penjelasan.',
    saintifik_sederhana:
      'Gunakan bahasa Indonesia edukatif yang runtut dan terstruktur sesuai buku teks Kurikulum Merdeka SD, jelas membedakan definisi, ciri fisik, dan fungsi.',
    berbasis_cerita:
      'Gunakan pendekatan cerita singkat aktivitas di lab komputer sekolah agar siswa mudah membayangkan fungsi setiap komponen dalam kehidupan nyata.',
  };

  const tambahan: string[] = [];
  if (config.sertakanAnalogi) {
    tambahan.push(
      '- Wajib sertakan analogi sederhana kehidupan sehari-hari untuk setiap komponen (misalnya: CPU seperti otak manusia, Monitor seperti papan tulis, Software seperti buku cerita/aturan main).'
    );
  }
  if (config.sertakanKuis) {
    tambahan.push(
      '- Sertakan 6 sampai 8 soal latihan interaktif "Pilah Hardware atau Software" dengan umpan balik langsung yang menjelaskan alasan jawaban benar atau salah.'
    );
  }
  if (config.sertakanPanduanGuru) {
    tambahan.push(
      '- Sertakan tab atau ringkasan singkat Panduan Guru (Tujuan Pembelajaran Fase B, alokasi waktu 2 JP / 70 menit, dan pertanyaan pemantik diskusi kelas).'
    );
  }

  return `Bertindaklah sebagai Guru Informatika Sekolah Dasar yang berpengalaman dan desainer media pembelajaran interaktif.

Buatkan aplikasi web media pembelajaran interaktif menggunakan Google AI Studio untuk siswa Kelas 4 SD (Kurikulum Merdeka Fase B) dengan rincian berikut:

1. TOPIK & FOKUS MATERI:
${fokusMap[config.fokusMateri]}

2. BENTUK MEDIA PEMBELAJARAN:
${modelMap[config.modelMedia]}

3. TUJUAN PEMBELAJARAN SISWA:
- Siswa mampu membedakan perangkat keras (benda fisik yang dapat dilihat dan disentuh) dengan perangkat lunak (program digital yang menjalankan perintah).
- Siswa mampu menyebutkan fungsi dasar minimal 5 perangkat keras dan 3 perangkat lunak yang sering digunakan di sekolah.
- Siswa mampu menjelaskan secara sederhana bagaimana perangkat keras dan perangkat lunak saling bekerja sama.

4. ATURAN BAHASA & PENYAJIAN:
- ${gayaMap[config.gayaBahasa]}
- Hindari paragraf panjang yang membosankan; pecah materi menjadi poin singkat dan interaktif.
${tambahan.join('\n')}

5. KEBUTUHAN DESAIN & ANTARMUKA (UI/UX):
- Desain cerah, bersih, rapi, dan ramah mata anak SD dengan ukuran tombol besar yang mudah diklik di laptop maupun tablet kelas.
- Sediakan navigasi sederhana di bagian atas: Ringkasan Materi, Eksplorasi Perangkat, Simulasi Kerja Komputer, dan Kuis Latihan.
- Pastikan seluruh teks, tombol, dan umpan balik menggunakan bahasa Indonesia yang baik dan benar.`;
}
