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
    "spain-vs-capvert": "https://1.kooralive360.com/albaplayer/bein-sports-hd-1/?serv=0",
    "belgic-vs-egypt": "https://8.kooralive360.com/albaplayer/bein-sports-hd-2/?serv=1",
    "saudi-vs-uruguay": "https://1.kooralive360.com/albaplayer/bein-sports-hd-1/?serv=0",

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
