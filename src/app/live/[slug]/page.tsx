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
   "senigal-vs-iraq": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-4/?serv=0",
   "norway-vs-france": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-4/?serv=0",
   "orogway-vs-spain": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-4/?serv=0",
   "capverde-vs-saudi": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-3/?serv=0",
   "egeypt-vs-iran": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-3/?serv=0",
   "newzland-vs-belgique": "https://1.yalla3arab.com/albaplayer/bein-sports-hd-4/?serv=0",

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
