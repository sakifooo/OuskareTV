'use client';

import { use, useState } from 'react';

export default function LiveMatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const iframeMapping: Record<string, string[]> = {
    "brazil-vs-norvege": [
      "https://max.mpnh.online/albaplayer/max1/?serv=1", // Server 1
      "https://912acsss8af382.shootny.com/playerv5.php?match=4750009&key=9f39972b67d6ce22189507d008acwc26", // Server 2
    ],

    "paragway-vs-france": [
    "https://max.mpnh.online/albaplayer/max1/?serv=1", // Server 1
      "https://912acsss8af382.shootny.com/playerv5.php?match=4750009&key=9f39972b67d6ce22189507d008acwc26", // Server 2

    ],

    "gana-vs-colombia": [
      "https://max.mpnh.online/albaplayer/max1/?serv=1",
    ],
  };

  const [server, setServer] = useState(0);

  const servers = iframeMapping[slug] || [
    "https://example.com/placeholder-player",
  ];

  const iframeSrc = servers[server] || servers[0];

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex flex-col pt-12">

      {/* Buttons dyal servers */}
      {servers.length > 1 && (
        <div className="flex gap-2 p-2 bg-black justify-center">
          {servers.map((_, index) => (
            <button
              key={index}
              onClick={() => setServer(index)}
              className={`px-4 py-2 rounded text-white ${
                server === index ? "bg-red-600" : "bg-gray-700"
              }`}
            >
              Server {index + 1}
            </button>
          ))}
        </div>
      )}

      <iframe
        src={iframeSrc}
        title="Ouskare TV Player"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
        scrolling="1"
        className="w-full flex-1 border-none shadow-none outline-none"
      />
    </div>
  );
}
