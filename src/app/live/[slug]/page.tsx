'use client';

import { use } from 'react';

/**
 * صفحة البث المباشر - تم تبسيطها للإبقاء على المشغل فقط.
 * تمت إزاحة المشغل للأسفل قليلاً بناءً على طلب المستخدم وتحديث الروابط.
 */
export default function LiveMatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // الحفاظ على كائن الروابط الجديد وتحديثه
  const iframeMapping: Record<string, string> = {
   "canada-vs-southafrica": "https://p6.panda-hd.online/albaplayer/extra-1/",
   "croitia-vs-ghana": "https://p6.panda-hd.online/albaplayer/extra-2/",
   "portugal-vs-colombia": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-3/?serv=0",
   "congo-vs-ozbakistan": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-4/?serv=0",
   "alger-vs-austria": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-2/?serv=0",
   "argentin-vs-jordon": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-1/?serv=0",
    
  };

  const iframeSrc = iframeMapping[slug] || "https://example.com/placeholder-player";

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex flex-col pt-12">
      {/* تم إضافة pt-12 لإزاحة المشغل للأسفل قليلاً */}
      <iframe 
        allowFullScreen={true} 
        frameBorder="0" 
        height="100%" 
        scrolling="1" 
        src={iframeSrc} 
        width="100%"
        title="Ouskare TV Player"
        className="w-full flex-1 border-none shadow-none outline-none"
      ></iframe>
    </div>
  );
}
