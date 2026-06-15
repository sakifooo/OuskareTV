import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '⚽ Ouskare TV - بث مباشر ونتائج حية',

  description:
    'Ouskare TV يقدم بث مباشر لمباريات كرة القدم اليوم بجودة عالية وبدون تقطيع، مع نتائج لحظية، جداول المباريات، وأهم أخبار الدوريات العالمية والعربية.',

  keywords:
    'Ouskare TV, بث مباشر كرة القدم, مباريات اليوم, نتائج المباريات, الدوري الإنجليزي, الدوري الإسباني, الدوري السعودي, دوري أبطال أوروبا, live football stream',

  metadataBase: new URL('https://ouskaretv.vercel.app'),

  verification: {
    google: 'VzK0Ce6V01Jr_8MvkE_i_rwtYftEtrnNdtl5KY1cIdQ',
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Ouskare TV - بث مباشر مباريات اليوم',
    description:
      'تابع مباريات كرة القدم اليوم بث مباشر بدون تقطيع مع نتائج فورية وأهم الدوريات العالمية والعربية.',
    url: 'https://ouskaretv.vercel.app/',
    siteName: 'Ouskare TV',
    locale: 'ar_MA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ouskare TV - بث مباشر',
    description:
      'شاهد مباريات اليوم بث مباشر ونتائج لحظية بدون تقطيع عبر Ouskare TV.',
  },

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
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
