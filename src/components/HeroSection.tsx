import React, { useState } from 'react';
import { ArrowRight, Cpu, Monitor, Layers, Copy } from 'lucide-react';

interface HeroSectionProps {
  onStartExplore: () => void;
  onJumpToPrompt: () => void;
}

const PILLARS = [
  {
    index: '01',
    title: 'Perangkat Masukan (Input)',
    desc: 'Alat untuk memberi perintah ke komputer seperti keyboard dan mouse.',
    icon: Layers,
  },
  {
    index: '02',
    title: 'Unit Pemroses (CPU)',
    desc: 'Otak komputer yang mengolah semua data dan perhitungan dengan cepat.',
    icon: Cpu,
  },
  {
    index: '03',
    title: 'Perangkat Keluaran (Output)',
    desc: 'Alat yang menampilkan hasil kerja seperti monitor, printer, dan speaker.',
    icon: Monitor,
  },
  {
    index: '04',
    title: 'Perangkat Lunak (Software)',
    desc: 'Program digital yang memberi aturan dan tugas agar komputer bermanfaat.',
    icon: Copy,
  },
];

export function HeroSection({ onStartExplore, onJumpToPrompt }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="ringkasan" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-slate-500 mb-3">
              Kurikulum Merdeka Fase B
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              Kelas 4 SD
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              Hardware &amp; Software
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.15] [text-wrap:balance]">
              Mengenal Perangkat Keras dan Perangkat Lunak Komputer
            </h1>

            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
              Media pembelajaran interaktif untuk siswa kelas 4 SD agar mudah membedakan benda fisik
              komputer yang dapat disentuh dengan program digital di dalamnya, dilengkapi generator
              prompt siap pakai untuk guru di Google AI Studio.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onStartExplore}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Mulai Eksplorasi Materi</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onJumpToPrompt}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Buka Prompt Guru Google AI Studio</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col">
              {!imgFailed ? (
                <img
                  src="/src/assets/images/hero_classroom_computer_1794551915603.jpg"
                  alt="Ilustrasi meja komputer sekolah berisi monitor, keyboard, mouse, CPU, speaker, dan printer"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover"
                />
              ) : (
                <div className="w-full h-64 sm:h-80 lg:h-full min-h-[260px] bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 flex flex-col items-center justify-center p-6 text-center">
                  <Monitor className="w-12 h-12 text-sky-600 mb-3" aria-hidden="true" />
                  <p className="font-display font-semibold text-slate-800">
                    Meja Kerja Komputer Kelas 4 SD
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Monitor · Keyboard · Mouse · CPU · Printer · Speaker
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.index} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-medium text-slate-500 tabular-nums">
                    {pillar.index}
                  </span>
                  <Icon className="w-4 h-4 text-sky-600" aria-hidden="true" />
                </div>
                <h2 className="font-display text-base font-semibold text-slate-900">
                  {pillar.title}
                </h2>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
