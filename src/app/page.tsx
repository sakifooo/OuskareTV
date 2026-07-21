"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const oldLogo = PlaceHolderImages.find(
    (img) => img.id === "ouskare-logo"
  );

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          {oldLogo && (
            <div className="mb-4">
              <Image
                src={oldLogo.imageUrl}
                alt="Tinghir TV"
                width={150}
                height={150}
                className="mx-auto drop-shadow-md"
                priority
              />
            </div>
          )}

          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl md:text-4xl">📺</span>

            <h1 className="text-3xl md:text-5xl font-black font-headline text-[#a11d1d] tracking-tighter uppercase italic">
              Tinghir TV
            </h1>

            <span className="text-2xl md:text-4xl">📺</span>
          </div>

          <p className="mt-2 text-gray-500 font-bold text-sm md:text-base">
            بث مباشر للقنوات المغربية والعربية والعالمية
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="flex justify-center mb-8">
            <Image
              src="/tinghir-tv-logo.png"
              alt="Tinghir TV Logo"
              width={280}
              height={140}
              className="drop-shadow-xl object-contain"
              priority
            />
          </div>

          <div className="bg-gradient-to-r from-red-700 to-red-900 text-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🎉 Tinghir TV
            </h2>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              قريباً سيتم إطلاق نسخة جديدة من <strong>Tinghir TV</strong>
              تحتوي على القنوات المغربية، العربية، الإخبارية، الرياضية،
              والترفيهية بجودة عالية وسرعة ممتازة.
            </p>

            <p className="mt-6 text-yellow-300 font-bold text-lg">
              بث مباشر • جودة عالية • مجاني 100%
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Tinghir TV. All rights reserved.
      </footer>
    </div>
  );
}
