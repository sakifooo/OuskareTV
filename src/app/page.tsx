"use client"
import Image from "next/image";
import { MatchCard } from "@/components/match-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const oldLogo = PlaceHolderImages.find(img => img.id === "ouskare-logo");

  const matches = [
    { 
      teamA: "اسبانيا", 
      teamB: "الارجنتين ", 
      scoreA: 0, 
      scoreB: 0, 
      time: "20:00", 
      status: "live", 
      channel: "beIN SPORTS MAX 1", 
      commentator: "غير معروف", 
      league: " النهائي ", 
      href: "https://912acsss8af382.fabortvcdn.com/playerv5.php?match=4773219&key=9f39972b67d6ce22189507d008acwc26"   // غير بالرابط الحقيقي
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">
    
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          {oldLogo && (
            <div className="mb-4">
              <Image src={oldLogo.imageUrl} alt="Ouskare TV" width={150} height={150} className="mx-auto drop-shadow-md" />
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

      {/* ==================== MATCH LIVE SECTION (FO9) ==================== */}
      <main className="container mx-auto px-2 md:px-4 pt-6 pb-8 max-w-5xl">
        <div className="mb-6 text-center">
          <span className="bg-red-600 text-white px-6 py-2.5 rounded-full text-lg font-bold inline-flex items-center gap-2 shadow-md">
            ⚽ مباريات مباشرة الآن
          </span>
        </div>

        <div className="bg-[#a11d1d]/5 rounded-2xl p-3 md:p-6 border-4 border-[#a11d1d] shadow-2xl">
          <div className="space-y-4">
            {matches.map((match, idx) => (
              <MatchCard key={idx} {...(match as any)} />
            ))}
          </div>
        </div>
      </main>

      {/* ==================== TINGHIR TV UPDATE MESSAGE (TA7T) ==================== */}
      <div className="mx-4 mb-10 max-w-5xl md:mx-auto">
        <div className="flex justify-center mb-5">
          <Image
            src="/tinghir-tv-logo.png"
            alt="Tinghir TV Logo"
            width={280}
            height={140}
            className="drop-shadow-xl object-contain"
            priority
          />
        </div>

        <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-7 px-5 text-center rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">🎉 تحديث جديد كبير !</h2>
          <p className="text-xl md:text-2xl font-semibold mb-4">
            Tinghir TV يعود أقوى من أي وقت مضى
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            قريباً جداً: <span className="font-bold text-yellow-300">Tinghir TV</span> سيحتوي على 
            كل القنوات المغربية + قنوات الأخبار (الجزيرة، العربية، ميدي 1) + 
            قنوات الرياضة (beIN Sports) + جميع القنوات العربية والعالمية والمزيد...
          </p>
          <p className="mt-5 text-yellow-300 font-bold text-lg">
            بث مباشر بدون تقطيع • جودة عالية • مجاني
          </p>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-6 mt-auto text-center text-gray-400 text-sm">
        جميع الحقوق محفوظة © Ouskare TV
      </footer>
    </div>
  );
}
