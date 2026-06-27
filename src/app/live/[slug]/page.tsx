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
   "panama-vs-england": "https://kora.depoooo.com/albaplayer/bein-1/?serv=1",
   "croitia-vs-ghana": "https://kora.depoooo.com/albaplayer/bein-2/?serv=1",
   "portugal-vs-colombia": "https://kora.depoooo.com/albaplayer/bein-1/?serv=1",
   "congo-vs-ozbakistan": "https://kora.depoooo.com/albaplayer/bein-2/?serv=1",
   "alger-vs-austria": "https://kora.depoooo.com/albaplayer/bein-2/?serv=1",
   "argentin-vs-jordon": "https://kora.depoooo.com/albaplayer/bein-1/?serv=1",
    
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
