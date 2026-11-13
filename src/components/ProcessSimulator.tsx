import React, { useEffect, useState } from 'react';
import { Play, Pause, SkipForward, RotateCcw, ArrowRight, Keyboard, Cpu, Monitor } from 'lucide-react';
import { SIMULATION_SCENARIOS } from '../data/curriculumData';

export function ProcessSimulator() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(0); // 0 = idle, 1 = input, 2 = process, 3 = output
  const [isPlaying, setIsPlaying] = useState(false);
  const [studentText, setStudentText] = useState('Aku suka belajar Informatika!');

  const scenario = SIMULATION_SCENARIOS[scenarioIndex];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 3) {
          setIsPlaying(false);
          return 3;
        }
        return prev + 1;
      });
    }, 1400);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const handleSelectScenario = (idx: number) => {
    setScenarioIndex(idx);
    setActiveStep(1);
    setIsPlaying(false);
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    if (activeStep >= 3 || activeStep === 0) {
      setActiveStep(1);
    }
    setIsPlaying(true);
  };

  const handleNextStep = () => {
    setIsPlaying(false);
    setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStep(0);
  };

  return (
    <section id="simulasi" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <p className="text-xs font-medium text-sky-700 mb-1.5">
              Tahap 02 · Simulasi Alur Kerja
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
              Bagaimana Hardware dan Software Bekerja Bersama?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Pilih kegiatan di bawah ini, lalu tekan tombol Putar untuk melihat perjalanan perintah
              dari Input menuju Proses hingga Output.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {SIMULATION_SCENARIOS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectScenario(idx)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  idx === scenarioIndex
                    ? 'bg-sky-600 text-white border-sky-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Stage: Interactive 3-Node Flow Canvas */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">{scenario.title}</h3>
                <p className="text-sm text-slate-600">{scenario.summary}</p>
              </div>
              <span className="font-mono text-xs font-medium text-slate-600 tabular-nums shrink-0">
                Tahap {activeStep} / 3
              </span>
            </div>

            {scenario.id === 'mengetik' && (
              <div className="mt-5">
                <label
                  htmlFor="student-sim-input"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  Coba ketik pesan singkatmu di sini (simulasi Keyboard Input):
                </label>
                <input
                  id="student-sim-input"
                  type="text"
                  maxLength={48}
                  value={studentText}
                  onChange={(e) => {
                    setStudentText(e.target.value);
                    if (activeStep === 0) setActiveStep(1);
                  }}
                  placeholder="Ketik namamu..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white transition-colors"
                />
              </div>
            )}

            {/* 3-Step Visual Pipeline */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-11 gap-4 items-stretch">
              {/* Node 1: INPUT */}
              <div
                className={`md:col-span-3 rounded-xl border p-4 transition-colors flex flex-col justify-between ${
                  activeStep === 1
                    ? 'bg-sky-50 border-sky-600'
                    : activeStep > 1
                      ? 'bg-slate-50 border-slate-300'
                      : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-sky-700">1. INPUT</span>
                    <Keyboard className="w-4 h-4 text-sky-600" aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-base text-slate-900">
                    {scenario.inputDevice}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {scenario.inputAction}
                  </p>
                </div>
                <p className="mt-4 pt-2 border-t border-slate-200 text-xs font-medium text-slate-700">
                  {activeStep === 1
                    ? 'Status: Mengirim sinyal masukan'
                    : activeStep > 1
                      ? 'Status: Sinyal terkirim'
                      : 'Status: Siap menerima perintah'}
                </p>
              </div>

              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${
                    activeStep >= 2 ? 'text-sky-600 translate-x-0.5' : 'text-slate-300'
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Node 2: PROSES */}
              <div
                className={`md:col-span-3 rounded-xl border p-4 transition-colors flex flex-col justify-between ${
                  activeStep === 2
                    ? 'bg-amber-50 border-amber-600'
                    : activeStep > 2
                      ? 'bg-slate-50 border-slate-300'
                      : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-amber-700">2. PROSES</span>
                    <Cpu className="w-4 h-4 text-amber-600" aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-base text-slate-900">
                    {scenario.processUnit}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {scenario.processDetail}
                  </p>
                </div>
                <p className="mt-4 pt-2 border-t border-slate-200 text-xs font-medium text-slate-700">
                  {activeStep === 2
                    ? 'Status: Mengolah data perintah'
                    : activeStep > 2
                      ? 'Status: Selesai diolah'
                      : 'Status: Menunggu data'}
                </p>
              </div>

              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${
                    activeStep >= 3 ? 'text-emerald-600 translate-x-0.5' : 'text-slate-300'
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Node 3: OUTPUT */}
              <div
                className={`md:col-span-3 rounded-xl border p-4 transition-colors flex flex-col justify-between ${
                  activeStep === 3 ? 'bg-emerald-50 border-emerald-600' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-emerald-700">3. OUTPUT</span>
                    <Monitor className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-base text-slate-900">
                    {scenario.outputDevice}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {scenario.outputResult}
                  </p>
                </div>
                <p className="mt-4 pt-2 border-t border-slate-200 text-xs font-medium text-slate-700">
                  {activeStep === 3 ? 'Status: Hasil ditampilkan' : 'Status: Menunggu hasil'}
                </p>
              </div>
            </div>

            {/* Live Screen Output Preview */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-900 text-slate-100 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span>Pratinjau Layar Monitor Siswa</span>
                <span className="font-mono tabular-nums">
                  {activeStep === 3 ? 'HASIL TAMPIL' : activeStep === 0 ? 'SIAP' : 'MEMPROSES'}
                </span>
              </div>
              <div className="py-4 min-h-[56px] flex items-center">
                {activeStep === 0 && (
                  <p className="text-sm text-slate-400">
                    Tekan tombol Putar atau Langkah Berikutnya untuk menjalankan simulasi.
                  </p>
                )}
                {activeStep === 1 && (
                  <p className="text-sm text-sky-300">
                    Sinyal masuk dari {scenario.inputDevice}...
                  </p>
                )}
                {activeStep === 2 && (
                  <p className="text-sm text-amber-300">
                    {scenario.processUnit} sedang menerjemahkan perintah...
                  </p>
                )}
                {activeStep === 3 && (
                  <p className="text-base font-semibold text-emerald-300">
                    {scenario.id === 'mengetik'
                      ? studentText.trim() || 'Halo, aku siswa kelas 4 SD!'
                      : scenario.outputResult}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Deck: Playback Controls & Step Explanations */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 space-y-5">
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Kendali Simulasi
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Jalankan otomatis atau amati satu langkah demi satu langkah bersama siswa.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handlePlayToggle}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" aria-hidden="true" />
                    <span>Jeda</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" aria-hidden="true" />
                    <span>Putar</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <SkipForward className="w-4 h-4" aria-hidden="true" />
                <span>Langkah</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>Ulang</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs font-semibold text-slate-500">Penjelasan Tiap Tahap</p>
              {scenario.steps.map((stepText, idx) => {
                const stepNum = idx + 1;
                const isCurrent = activeStep === stepNum;
                return (
                  <div
                    key={stepNum}
                    className={`p-3 rounded-lg border text-xs leading-relaxed transition-colors ${
                      isCurrent
                        ? 'bg-sky-50 border-sky-300 text-slate-900 font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    {stepText}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
