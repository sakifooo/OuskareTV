"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

import { MatchCard } from "@/components/match-card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const logo = PlaceHolderImages.find(img => img.id === "ouskare-logo");

  const matches = [
    
    { teamA: "إسبانيا ", teamB: "الرأس الأخضر ", scoreA: 0, scoreB: 0, time: "17:00 ", status: "finished", channel: "beIN SPORTS MAX 1", commentator: "غير معروف", league: "كأس العالم", href: "/live/spain-vs-capvert" },
    { teamA: "بلجيكا", teamB: "مصر", scoreA: 0, scoreB: 1, time: "20:00", status: "live", channel: "beIN SPORTS MAX 2", commentator: "غير معروف", league: "كأس العالم", href: "/live/belgic-vs-egypt" },
    { teamA: "أوروجواي", teamB: "السعودية", scoreA: 0, scoreB: 0, time: "23:00", status: "upcoming", channel: "beIN SPORTS MAX 1", commentator: "غير معروف", league: "كأس العالم", href: "/live/saudi-vs-uruguay" },
  ];
  
  const seoKeywords = [
    "Ouskare TV", "ouskare live", "مباريات اليوم بث مباشر", "بث مباشر كرة قدم",
    "يلا شوت", "yalla shoot", "كورة اون لاين", "نتائج المباريات", 
    "الدوري الانجليزي", "الدوري الاسباني", "الدوري السعودي", "دوري ابطال اوروبا", 
    "live stream football", "بث مباشر بدون تقطيع", "أهم مباريات اليوم",
    "مشاهدة الدوري المصري", "بث مباشر ليفربول", "بث مباشر ريال مدريد", "بث مباشر برشلونة",
    "اهداف المباريات", "ملخصات الدوري", "بث مباشر الاسطورة", "Ouskare TV live",
    "ouskare matches", "بث مباشر النصر", "بث مباشر الهلال", "دوري روشن",
    "بث مباشر مباريات اليوم جوال", "كورة لايف", "كورة ستار", "بي ان سبورت بث مباشر",
    "مشاهدة مباريات اليوم", "بث مباشر مانشستر سيتي", "بث مباشر ارسنال", "بث مباشر تشيلسي",
    "بث مباشر بايرن ميونخ", "بث مباشر باريس سان جيرمان", "بث مباشر يوفنتوس", "بث مباشر انتر ميلان",
    "بث مباشر الدوري الايطالي", "بث مباشر الدوري الالماني", "بث مباشر الدوري الفرنسي",
    "بث مباشر دوري ابطال افريقيا", "بث مباشر كنفدرالية افريقيا", "بث مباشر البطولة المغربية",
    "بث مباشر الدوري الجزائري", "بث مباشر الدوري التونسي", "بث مباشر الدوري الكويتي",
    "بث مباشر الدوري القطري", "بث مباشر دوري نجوم قطر", "بث مباشر ابطال اسيا"
  ];

  const [showBanner, setShowBanner] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowBanner(false);
  }, 7000);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">

      {showBanner && (
  <div className="fixed bottom-4 left-4 z-[9999]">
    <button
      onClick={() => setShowBanner(false)}
      className="absolute -top-2 -right-2 z-[10000] w-6 h-6 rounded-full bg-black text-white text-xs"
    >
      ✕
    </button>

    <iframe
      src="//cdn.bannersnack.com/banners/btu5bfqqm/embed/index.html?userId=3124438&t=1781439640"
      width="250"
      height="250"
      scrolling="no"
      frameBorder="0"
      allowTransparency={true}
      allow="autoplay"
      allowFullScreen
      className="w-[250px] h-[250px] md:w-[250px] md:h-[250px]"
    />
  </div>
)}
      {/* Centered Brand Header with Logo */}
      <header className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          {logo && (
            <div className="mb-4">
              <Image 
                src={logo.imageUrl} 
                alt="Ouskare TV Logo" 
                width={150} 
                height={150} 
                className="mx-auto drop-shadow-md"
                data-ai-hint={logo.imageHint}
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

      <main className="container mx-auto px-2 md:px-4 py-10 md:py-16 max-w-5xl">
        {/* GMT Time Badge */}
        <div className="mb-4">
          <span className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-t-lg text-[11px] font-bold border border-b-0 border-gray-300">
            بتوقيت غرينتش +1
          </span>
        </div>

        {/* Matches Container with Dark Red Border and Filled Background */}
        <div className="bg-[#a11d1d]/5 rounded-xl p-2 md:p-6 border-4 border-[#a11d1d] shadow-2xl">
          {/* Matches List */}
          <div className="space-y-4">
            {matches.map((match, idx) => (
              <MatchCard key={idx} {...(match as any)} />
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-6 bg-[#2c3e50] text-white p-4 rounded-xl text-center font-black text-sm md:text-lg border-b-4 border-gray-500 shadow-md">
            Ouskare TV live matchs بث مباشر
          </div>
        </div>

        {/* Strong Hidden SEO Section */}
        <div className="sr-only" aria-hidden="true">
          <h2>Ouskare TV بث مباشر مباريات اليوم</h2>
          <p>
            تابع أهم مباريات اليوم عبر Ouskare TV، الموقع الأقوى لمتابعة البث المباشر للمباريات العالمية والمحلية بدون تقطيع وبجودات متعددة.
          </p>
          <div className="flex flex-wrap">
            {seoKeywords.map((word, i) => (
              <span key={i}>{word}, </span>
            ))}
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
