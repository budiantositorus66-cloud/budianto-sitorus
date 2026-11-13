import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { ComponentKind, QUIZ_QUESTIONS } from '../data/curriculumData';

export function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<ComponentKind | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswer = (choice: ComponentKind) => {
    if (hasAnswered) return;
    setSelectedAnswer(choice);
    if (choice === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= QUIZ_QUESTIONS.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section id="kuis" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <p className="text-xs font-medium text-sky-700 mb-1.5">
              Tahap 03 · Latihan Interaktif Siswa
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
              Tantangan Pilah Hardware atau Software
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Uji pemahamanmu! Tentukan apakah benda atau program berikut termasuk Perangkat Keras
              (Hardware) atau Perangkat Lunak (Software).
            </p>
          </div>

          <div className="text-sm font-medium text-slate-700 font-mono tabular-nums shrink-0">
            Skor: {score} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          {!isFinished ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 text-xs font-medium text-slate-500 pb-4 border-b border-slate-200">
                <span className="font-mono tabular-nums">
                  Soal {currentIndex + 1} dari {QUIZ_QUESTIONS.length}
                </span>
                <span>Kategori Peran: {currentQuestion.roleHint}</span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {currentQuestion.itemLabel}
                </h3>
                <p className="mt-2 text-base text-slate-700 leading-relaxed">
                  {currentQuestion.prompt}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleAnswer('hardware')}
                  className={`p-4 text-left rounded-xl border transition-colors cursor-pointer disabled:cursor-default ${
                    !hasAnswered
                      ? 'bg-white border-slate-300 hover:border-sky-600 hover:bg-sky-50/60'
                      : currentQuestion.correctAnswer === 'hardware'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                        : selectedAnswer === 'hardware'
                          ? 'bg-rose-50 border-rose-600 text-rose-950'
                          : 'bg-white border-slate-200 text-slate-400'
                  }`}
                >
                  <p className="font-display font-bold text-base">Perangkat Keras (Hardware)</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Benda fisik yang dapat dilihat dan disentuh
                  </p>
                </button>

                <button
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleAnswer('software')}
                  className={`p-4 text-left rounded-xl border transition-colors cursor-pointer disabled:cursor-default ${
                    !hasAnswered
                      ? 'bg-white border-slate-300 hover:border-sky-600 hover:bg-sky-50/60'
                      : currentQuestion.correctAnswer === 'software'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                        : selectedAnswer === 'software'
                          ? 'bg-rose-50 border-rose-600 text-rose-950'
                          : 'bg-white border-slate-200 text-slate-400'
                  }`}
                >
                  <p className="font-display font-bold text-base">Perangkat Lunak (Software)</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Program digital yang berjalan di dalam layar
                  </p>
                </button>
              </div>

              {hasAnswered && (
                <div
                  className={`mt-6 p-4 rounded-xl border ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-amber-50 border-amber-300 text-amber-950'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
                        <span>BENAR — Jawabanmu tepat!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
                        <span>
                          KURANG TEPAT — Ini termasuk{' '}
                          {currentQuestion.correctAnswer === 'hardware'
                            ? 'Perangkat Keras (Hardware)'
                            : 'Perangkat Lunak (Software)'}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">{currentQuestion.explanation}</p>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>
                        {currentIndex + 1 >= QUIZ_QUESTIONS.length
                          ? 'Lihat Hasil Akhir'
                          : 'Soal Berikutnya'}
                      </span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
              <p className="text-xs font-semibold text-sky-700">Latihan Selesai</p>
              <h3 className="font-display text-3xl font-bold text-slate-900 mt-2 font-mono tabular-nums">
                Skor Akhir: {score} / {QUIZ_QUESTIONS.length}
              </h3>
              <p className="mt-3 text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                {score >= 7
                  ? 'Hebat! Kamu sudah sangat paham membedakan perangkat keras yang dapat disentuh dengan perangkat lunak di dalam komputer.'
                  : 'Bagus! Kamu sudah mencoba. Yuk ulangi latihan atau lihat kembali bagian Eksplorasi agar makin mahir.'}
              </p>

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Ulangi Tantangan</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
