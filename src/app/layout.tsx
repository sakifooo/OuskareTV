
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '⚽ Ouskare TV - بث مباشر ونتائج حية',
  description: 'Ouskare TV live matchs بث مباشر مباريات اليوم اون لاين بدون تقطيع، نتائج المباريات، الدوري الإنجليزي، الدوري الإسباني، الدوري السعودي، دوري أبطال أوروبا.',
  keywords: 'Ouskare TV, ouskare, بث مباشر, مباريات اليوم, نتائج المباريات, الدوري الانجليزي, الدوري الاسباني, الدوري السعودي, دوري ابطال اوروبا, live stream football',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚽</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
