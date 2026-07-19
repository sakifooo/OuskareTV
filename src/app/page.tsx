"use client"
import Image from "next/image";
import { MatchCard } from "@/components/match-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const oldLogo = PlaceHolderImages.find(img => img.id === "ouskare-logo");

  const matches = [
    { 
      teamA: "انجلترا", 
      teamB: "فرنسا ", 
      scoreA: 0, 
      scoreB: 0, 
      time: "20:00", 
      status: "live", 
      channel: "beIN SPORTS MAX 1", 
      commentator: "غير معروف", 
      league: " الترتيب ", 
      href: "https://example.com/" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">
    
      {/* Header with Old Logo */}
      <header className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          {oldLogo && (
            <div className="mb-4">
              <Image
                src={oldLogo.imageUrl}
                alt="Ouskare TV Logo"
                width={150}
                height={150}
                className="mx-auto drop-shadow-md"
              />
            </div>
          )}
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl md:text-4xl">⚽</span>
            <h1 className="text-3xl md:text-5xl font-black font-headline text-[#a11d1d] tracking-tighter uppercase italic">
              Ouskare TV
            </h1>
            <span className="text-2xl md:text-4xl">⚽</span>
          </div>
          <p className="mt-2 text-gray-400 font-bold text-sm md:text-base">بث مباشر ونتائج حية</p>
        </div>
      </header>

      {/* New Tinghir TV Logo + Announcement */}
      <div className="mx-4 mt-6 max-w-5xl md:mx-auto">
        <div className="flex justify-center mb-4">
          <Image
            src="https://drive.usercontent.google.com/download?id=1gl-Tudf_DuJCEmLnmi8A32m3pICSwMaq&export=view&authuser=0"
            alt="Tinghir TV Logo"
            width={220}
            height={120}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* البانر اللي كتبناه */}
        <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-6 px-4 text-center rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">🎉 تحديث جديد كبير !</h2>
          <p className="text-xl md:text-2xl font-semibold mb-3">
            Tinghir TV يعود أقوى من أي وقت مضى
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            قريباً جداً: <span className="font-bold text-yellow-300">Tinghir TV</span> سيحتوي على 
            <span className="underline">كل القنوات المغربية</span> + 
            <span className="underline">قنوات الأخبار</span> مثل الجزيرة والعربية وميدي 1 + 
            <span className="underline">قنوات الرياضة</span> مثل beIN Sports + 
            جميع القنوات العربية والعالمية والمزيد...
          </p>
          <p className="mt-4 text-yellow-300 font-bold text-lg">
            بث مباشر بدون تقطيع • جودة عالية • مجاني
          </p>
        </div>
      </div>

      <main className="container mx-auto px-2 md:px-4 py-10 md:py-16 max-w-5xl">
        {/* GMT Time Badge */}
        <div className="mb-4">
          <span className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-t-lg text-[11px] font-bold border border-b-0 border-gray-300">
            بتوقيت غرينتش +1
          </span>
        </div>

        {/* Matches Container */}
        <div className="bg-[#a11d1d]/5 rounded-xl p-2 md:p-6 border-4 border-[#a11d1d] shadow-2xl">
          <div className="space-y-4">
            {matches.map((match, idx) => (
              <MatchCard key={idx} {...(match as any)} />
            ))}
          </div>

          <div className="mt-6 bg-[#2c3e50] text-white p-4 rounded-xl text-center font-black text-sm md:text-lg border-b-4 border-gray-500 shadow-md">
            Ouskare TV live matchs بث مباشر
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-gray-400 text-[12px] font-bold">
          <span>جميع الحقوق محفوظة © Ouskare TV</span>
        </div>
      </footer>
    </div>
  );
}
