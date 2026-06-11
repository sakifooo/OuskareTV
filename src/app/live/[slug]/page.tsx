'use client';

import { use } from 'react';

/**
 * صفحة البث المباشر - تم تبسيطها للإبقاء على المشغل فقط بناءً على طلب المستخدم.
 * يتم الاحتفاظ بمنطق الـ iframeMapping كما هو لضمان عمل الروابط.
 */
export default function LiveMatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // الحفاظ على كائن الروابط كما هو دون تغيير
  const iframeMapping: Record<string, string> = {
    "dejla-vs-zid": "https://spoort.yala--shoot.online/albaplayer/on-time1/?serv=5",
    "berkane-vs-tanger": "https://example.com/player/berkane-vs-tanger",
    "netherlands-vs-uzbekistan": "https://example.com/player/netherlands-vs-uzbekistan",
    "france-vs-ireland": "https://example.com/player/france-vs-ireland",
    "colombia-vs-jordan": "https://example.com/player/colombia-vs-jordan",
  };

  const iframeSrc = iframeMapping[slug] || "https://example.com/placeholder-player";

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <iframe 
        allowFullScreen={true} 
        frameBorder="0" 
        height="100%" 
        scrolling="1" 
        src={iframeSrc} 
        width="100%"
        title="Ouskare TV Player"
        className="w-full h-full border-none shadow-none outline-none"
      ></iframe>
    </div>
  );
}
