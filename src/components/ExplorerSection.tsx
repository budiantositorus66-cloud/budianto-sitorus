import React, { useState } from 'react';
import {
  Monitor,
  Keyboard,
  Mouse,
  Cpu,
  Printer,
  Volume2,
  HardDrive,
  AppWindow,
  Hand,
  Code2,
} from 'lucide-react';
import { COMPUTER_PARTS, ComponentKind, ComputerPart } from '../data/curriculumData';

type FilterKind = 'semua' | ComponentKind;

const PART_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  monitor: Monitor,
  keyboard: Keyboard,
  mouse: Mouse,
  cpu: Cpu,
  printer: Printer,
  speaker: Volume2,
  flashdisk: HardDrive,
  os: AppWindow,
  paint: AppWindow,
  word: AppWindow,
  browser: AppWindow,
  mediaplayer: AppWindow,
};

export function ExplorerSection() {
  const [filter, setFilter] = useState<FilterKind>('semua');
  const [selectedId, setSelectedId] = useState<string>('monitor');
  const [hwImgError, setHwImgError] = useState(false);
  const [swImgError, setSwImgError] = useState(false);

  const visibleParts = COMPUTER_PARTS.filter((part) =>
    filter === 'semua' ? true : part.kind === filter
  );

  const selectedPart: ComputerPart =
    visibleParts.find((p) => p.id === selectedId) ?? visibleParts[0] ?? COMPUTER_PARTS[0];

  const handleFilterChange = (nextFilter: FilterKind) => {
    setFilter(nextFilter);
    const firstMatch = COMPUTER_PARTS.find((p) =>
      nextFilter === 'semua' ? true : p.kind === nextFilter
    );
    if (firstMatch) {
      setSelectedId(firstMatch.id);
    }
  };

  const SelectedIcon = PART_ICONS[selectedPart.id] ?? Monitor;
  const isHardware = selectedPart.kind === 'hardware';

  return (
    <section id="eksplorasi" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <p className="text-xs font-medium text-sky-700 mb-1.5">
              Tahap 01 · Eksplorasi Komponen
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
              Kenali Perangkat Keras dan Perangkat Lunak
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Klik salah satu komponen di sebelah kiri atau pilih langsung pada peta meja komputer
              untuk melihat ciri, fungsi, dan contohnya di sekolah.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter jenis komponen"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'semua'}
              onClick={() => handleFilterChange('semua')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'semua'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua ({COMPUTER_PARTS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'hardware'}
              onClick={() => handleFilterChange('hardware')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'hardware'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hardware ({COMPUTER_PARTS.filter((p) => p.kind === 'hardware').length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'software'}
              onClick={() => handleFilterChange('software')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'software'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Software ({COMPUTER_PARTS.filter((p) => p.kind === 'software').length})
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Zone: Interactive Component Selector & Desk Hotspot Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {visibleParts.map((part) => {
                const Icon = PART_ICONS[part.id] ?? Monitor;
                const active = part.id === selectedPart.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setSelectedId(part.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                      active
                        ? 'bg-sky-50/70 border-sky-600 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon
                        className={`w-5 h-5 shrink-0 ${
                          active ? 'text-sky-600' : 'text-slate-500'
                        }`}
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-slate-900 truncate">{part.name}</p>
                        <p className="text-xs text-slate-500 truncate">
                          {part.kind === 'hardware' ? 'Perangkat Keras' : 'Perangkat Lunak'} ·{' '}
                          {part.role}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Zone: Interactive Visual Stage & Concept Deck */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-white">
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-100">
                {isHardware ? (
                  !hwImgError ? (
                    <img
                      src="/src/assets/images/card_hardware_explorer_1794551916821.jpg"
                      alt="Ilustrasi berbagai perangkat keras komputer seperti monitor, CPU, keyboard, mouse, dan speaker"
                      referrerPolicy="no-referrer"
                      onError={() => setHwImgError(true)}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 md:h-full flex flex-col items-center justify-center p-6 text-center bg-sky-50">
                      <Cpu className="w-10 h-10 text-sky-600 mb-2" aria-hidden="true" />
                      <p className="text-xs font-semibold text-slate-700">Perangkat Keras</p>
                    </div>
                  )
                ) : !swImgError ? (
                  <img
                    src="/src/assets/images/card_software_apps_1794551916990.jpg"
                    alt="Ilustrasi jendela aplikasi perangkat lunak seperti aplikasi gambar, pengolah kata, dan peramban web"
                    referrerPolicy="no-referrer"
                    onError={() => setSwImgError(true)}
                    className="w-full h-48 md:h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-48 md:h-full flex flex-col items-center justify-center p-6 text-center bg-emerald-50">
                    <AppWindow className="w-10 h-10 text-emerald-600 mb-2" aria-hidden="true" />
                    <p className="text-xs font-semibold text-slate-700">Perangkat Lunak</p>
                  </div>
                )}
              </div>

              <div className="md:col-span-7 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
                    <span>
                      {isHardware ? 'Perangkat Keras (Hardware)' : 'Perangkat Lunak (Software)'} ·{' '}
                      {selectedPart.role}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2.5">
                    <SelectedIcon
                      className={`w-6 h-6 shrink-0 ${
                        isHardware ? 'text-sky-600' : 'text-emerald-600'
                      }`}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {selectedPart.name}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {selectedPart.explanation}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold">
                  {selectedPart.canTouch ? (
                    <span className="inline-flex items-center gap-1.5 text-sky-700">
                      <Hand className="w-4 h-4" aria-hidden="true" />
                      CIRI FISIK: Dapat dilihat dan disentuh langsung oleh tangan
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-emerald-700">
                      <Code2 className="w-4 h-4" aria-hidden="true" />
                      CIRI PROGRAM: Berjalan di dalam layar, tidak dapat dipegang
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Analogi Sehari-hari</p>
                <p className="text-sm text-slate-800 leading-relaxed">{selectedPart.analogy}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Contoh Pemakaian di Sekolah</p>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {selectedPart.schoolExample}
                </p>
              </div>
            </div>

            {/* Interactive Desk Quick-Check Map */}
            <div className="px-6 pb-6 pt-4 border-t border-slate-200 bg-white">
              <p className="text-xs font-semibold text-slate-700 mb-3">
                Peta Sentuh Cepat Meja Komputer (Klik bagian yang ingin dicek):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'monitor', label: 'Layar Monitor' },
                  { id: 'cpu', label: 'Kotak CPU' },
                  { id: 'keyboard', label: 'Keyboard' },
                  { id: 'mouse', label: 'Mouse' },
                  { id: 'printer', label: 'Printer' },
                  { id: 'speaker', label: 'Speaker' },
                  { id: 'os', label: 'Sistem Operasi' },
                  { id: 'paint', label: 'Aplikasi Gambar' },
                ].map((hotspot) => {
                  const isCurrent = selectedPart.id === hotspot.id;
                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => {
                        setFilter('semua');
                        setSelectedId(hotspot.id);
                      }}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors text-center whitespace-nowrap truncate cursor-pointer ${
                        isCurrent
                          ? 'bg-sky-600 text-white border-sky-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {hotspot.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
