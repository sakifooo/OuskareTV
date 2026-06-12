
import { MatchCard } from "@/components/match-card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const logo = PlaceHolderImages.find(img => img.id === "ouskare-logo");

  const matches = [
    { teamA: "كندا", teamB: "البوسنة", scoreA: 0, scoreB: 4, time: "20:00", status: "upcoming", channel: "beIN SPORTS MAX 1", commentator: "غير معروف", league: "كأس العالم", href: "/live/canada-vs-bosnia" },
    { teamA: "كوريا الجنوبية", teamB: "تشيكيا ", scoreA: 2, jscoreB: 1, time: "20:00 ", status: "finished", channel: "beIN SPORTS MAX 1", commentator: "غير معروف", league: "كأس العالم", href: "/live/korea-vs-chek" },

  ];
  const seoKeywords = [
   "kora","koora","kooora", "kora live", "yalla live", "مباريات اليوم بث مباشر", "بث مباشر كرة قدم",
    "يلا شوت", "yalla shoot", "كورة اون لاين", "نتائج المباريات", 
    "الدوري الانجليزي", "الدوري الاسباني", "الدوري السعودي", "دوري ابطال اوروبا", 
    "live stream football", "بث مباشر بدون تقطيع", "أهم مباريات اليوم",
    "مشاهدة الدوري المصري", "بث مباشر ليفربول", "بث مباشر ريال مدريد", "بث مباشر برشلونة",
    "اهداف المباريات", "ملخصات الدوري", "بث مباشر الاسطورة", "yalla shot",
    "koora live", "بث مباشر النصر", "بث مباشر الهلال", "دوري روشن",
    "بث مباشر مباريات اليوم جوال", "كورة لايف", "كورة ستار", "بي ان سبورت بث مباشر",
    "مشاهدة مباريات اليوم", "بث مباشر مانشستر سيتي", "بث مباشر ارسنال", "بث مباشر تشيلسي",
    "بث مباشر بايرن ميونخ", "بث مباشر باريس سان جيرمان", "بث مباشر يوفنتوس", "بث مباشر انتر ميلان",
    "بث مباشر الدوري الايطالي", "بث مباشر الدوري الالماني", "بث مباشر الدوري الفرنسي",
    "بث مباشر دوري ابطال افريقيا", "بث مباشر كنفدرالية افريقيا", "بث مباشر البطولة المغربية",
    "بث مباشر الدوري الجزائري", "بث مباشر الدوري التونسي", "بث مباشر الدوري الكويتي",
    "بث مباشر الدوري القطري", "بث مباشر دوري نجوم قطر", "بث مباشر ابطال اسيا"
    "كورة لايف", "koora live", "مباريات اليوم بث مباشر", "يلا شوت", "yalla shoot", 
    "كورة اون لاين", "koora online", "كورة ستار", "koora star", "يلا كورة", 
    "yalla kora", "بين سبورت مباشر", "beIN Sports live", "نتائج المباريات", 
    "الدوري الانجليزي", "الدوري الاسباني", "الدوري السعودي", "دوري ابطال اوروبا", 
    "الاسطورة لبث المباريات", "live stream football", "كورة 4 لايف", "koora4live", 
    "يلا شوت حصري", "تابع لايف", "tab3 live", "كورة جول", "koora goal", 
    "ماي كورة", "my kora", "يلا شوت الجديد", "yalla shoot new", "كورة لايف مباشر", 
    "koora live tv", "kora live streaming", "يلا لايف", "yalla live", 
    "كورة لايف اون لاين", "كورة فور ايفر", "كورة لايف بلس", "كورة لايف الجديد", 
    "مباريات اليوم مباشر", "جدول مباريات اليوم", "كورة لايف كورة", "koora live scores", 
    "football live updates", "مشاهدة مباريات اليوم", "كورة لايف تي في", "koora live 24", 
    "الاسطورة لايف", "يلا شوت توداي", "yalla shoot today", "كورة اونلاين تيفي",
    "مشاهدة الدوري المصري", "بث مباشر ليفربول", "بث مباشر ريال مدريد", "بث مباشر برشلونة",
    "اهداف المباريات", "ملخصات الدوري", "كورة اتش دي", "koora hd", "بث مباشر الاسطورة",
    "يلا شوت جوال", "yalla shoot mobile", "مشاهدة بين سبورت", "كورة لايف تويتر",
    "أهم مباريات اليوم", "بث مباشر بدون تقطيع", "كورة لايف الرسمي", "موقع كورة لايف",
    "مشاهدة مباراة الاهلي اليوم", "مشاهدة مباراة الزمالك اليوم", "بث مباشر النصر",
    "بث مباشر الهلال", "الدوري الإيطالي مباشر", "الدوري الفرنسي مباشر", "دوري روشن",
    "كأس الملك مباشر", "نهائي دوري الابطال", "يلا شوت ستورز", "yalla shoot stars",
    "koora live streaming free", "كورة لايف مباريات اليوم مباشر", "يلا شوت بث مباشر",
    "yalla shoot live", "كورة لايف اون لاين", "بث مباشر للمباريات المشفرة", "كورة 365",
    "koora 365", "الاسطورة لايف مباريات اليوم", "كورة جول بث مباشر"
  ];

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">
      {/* Centered Brand Header with Logo */}
      <header className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          {logo && (
            <div className="mb-4">
              <Image 
                src={logo.imageUrl} 
                alt="Tinghir TV Logo" 
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
              Tinghir TV
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
            Tinghir TV live matchs بث مباشر
          </div>
        </div>

        {/* Strong Hidden SEO Section */}
        <div className="sr-only" aria-hidden="true">
          <h2>Tinghir TV بث مباشر مباريات اليوم</h2>
          <p>
            تابع أهم مباريات اليوم عبر Tinghir TV، الموقع الأقوى لمتابعة البث المباشر للمباريات العالمية والمحلية بدون تقطيع وبجودات متعددة.
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
          <span>جميع الحقوق محفوظة © Tinghir TV</span>
        </div>
      </footer>
    </div>
  );
}
