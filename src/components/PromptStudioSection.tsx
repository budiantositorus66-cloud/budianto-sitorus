import React, { useMemo, useState } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';
import { buildTeacherPrompt, PromptConfig } from '../data/curriculumData';

const DEFAULT_CONFIG: PromptConfig = {
  fokusMateri: 'lengkap',
  modelMedia: 'eksplorasi',
  gayaBahasa: 'ramah_anak',
  sertakanAnalogi: true,
  sertakanKuis: true,
  sertakanPanduanGuru: true,
};

export function PromptStudioSection() {
  const [config, setConfig] = useState<PromptConfig>(DEFAULT_CONFIG);
  const [copied, setCopied] = useState(false);

  const generatedPrompt = useMemo(() => buildTeacherPrompt(config), [config]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = generatedPrompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="prompt-guru" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="pb-8 border-b border-slate-200">
          <p className="text-xs font-medium text-sky-700 mb-1.5">
            Tahap 04 · Studio Prompt Guru Informatika
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
            Susun &amp; Salin Prompt untuk Google AI Studio
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Atur kebutuhan kelasmu di sebelah kiri. Prompt instruksi Guru Informatika akan
            tersusun otomatis di sebelah kanan dan siap ditempel ke Google AI Studio.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Teacher Customization Controls */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 space-y-6">
            <div>
              <label
                htmlFor="fokus-materi"
                className="block text-xs font-semibold text-slate-700 mb-2"
              >
                1. Fokus Materi Kelas 4 SD
              </label>
              <select
                id="fokus-materi"
                value={config.fokusMateri}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    fokusMateri: e.target.value as PromptConfig['fokusMateri'],
                  }))
                }
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900"
              >
                <option value="lengkap">Lengkap: Hardware &amp; Software Dasar</option>
                <option value="hardware">Khusus Perangkat Keras (Input-Proses-Output)</option>
                <option value="software">Khusus Perangkat Lunak (OS &amp; Aplikasi)</option>
                <option value="ipo">Fokus Alur Kerja Input → Proses → Output</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="model-media"
                className="block text-xs font-semibold text-slate-700 mb-2"
              >
                2. Bentuk Media Pembelajaran
              </label>
              <select
                id="model-media"
                value={config.modelMedia}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    modelMedia: e.target.value as PromptConfig['modelMedia'],
                  }))
                }
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900"
              >
                <option value="eksplorasi">Eksplorasi Interaktif + Simulasi + Kuis</option>
                <option value="kuis_gamifikasi">Permainan Misi Pilah Hardware &amp; Software</option>
                <option value="rakit_virtual">Simulasi Meja Komputer Interaktif</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="gaya-bahasa"
                className="block text-xs font-semibold text-slate-700 mb-2"
              >
                3. Gaya Bahasa Penyajian
              </label>
              <select
                id="gaya-bahasa"
                value={config.gayaBahasa}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    gayaBahasa: e.target.value as PromptConfig['gayaBahasa'],
                  }))
                }
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900"
              >
                <option value="ramah_anak">Ramah Anak SD (Kalimat Pendek &amp; Hangat)</option>
                <option value="saintifik_sederhana">
                  Runtut Kurikulum Merdeka (Definisi &amp; Fungsi)
                </option>
                <option value="berbasis_cerita">Berbasis Cerita Lab Komputer Sekolah</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs font-semibold text-slate-700">4. Komponen Tambahan</p>

              <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.sertakanAnalogi}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, sertakanAnalogi: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600"
                />
                <span>Sertakan analogi kehidupan sehari-hari siswa</span>
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.sertakanKuis}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, sertakanKuis: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600"
                />
                <span>Tambahkan kuis latihan interaktif + pembahasan</span>
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.sertakanPanduanGuru}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, sertakanPanduanGuru: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600"
                />
                <span>Tambahkan panduan ringkas Guru (TP Fase B &amp; alokasi JP)</span>
              </label>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setConfig(DEFAULT_CONFIG)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Kembalikan ke Setelan Awal</span>
              </button>
            </div>
          </div>

          {/* Right Panel: Live Copy-Ready Prompt Output */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50">
              <div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  Prompt Siap Pakai (Google AI Studio)
                </h3>
                <p className="text-xs text-slate-500">
                  Salin seluruh teks ini ke kolom prompt Google AI Studio Build
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" aria-hidden="true" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Salin Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-6">
              <pre className="whitespace-pre-wrap font-mono text-xs sm:text-[13px] leading-relaxed text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-5 overflow-x-auto">
                {generatedPrompt}
              </pre>

              <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Langkah 1 · Buka Studio</p>
                  <p className="leading-relaxed">
                    Masuk ke Google AI Studio dan pilih menu Build untuk membuat aplikasi web
                    pembelajaran.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Langkah 2 · Tempel Prompt</p>
                  <p className="leading-relaxed">
                    Klik tombol Salin Prompt di atas, tempel ke kotak pesan, lalu jalankan.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Langkah 3 · Uji &amp; Bagikan</p>
                  <p className="leading-relaxed">
                    Uji tombol interaktif dan kuisnya, lalu bagikan tautan ke perangkat siswa di
                    kelas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
