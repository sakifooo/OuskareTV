import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '⚽ Ouskare TV - بث مباشر ونتائج حية',

  description:
    'Ouskare TV يقدم بث مباشر لمباريات كرة القدم اليوم بجودة عالية وبدون تقطيع، مع نتائج لحظية، جداول المباريات، وأهم أخبار الدوريات العالمية والعربية.',

   keywords: [
    'Ouskare TV',
    'ouskare',
    'بث مباشر',
    'مباريات اليوم',
    'نتائج المباريات',
    'الدوري الانجليزي',
    'الدوري الاسباني',
    'الدوري السعودي',
    'دوري ابطال اوروبا',
    'live stream football',
  ],

  metadataBase: new URL('https://ouskaretv.vercel.app'),

  verification: {
    google: 'Tbt6YmqemCF6U9b8Z5LujzdQpq6a0B6wvuxkUbcqPnw',
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
    images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Koora Live',
    },
  ],
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
      
<meta name="google-site-verification" content="Tbt6YmqemCF6U9b8Z5LujzdQpq6a0B6wvuxkUbcqPnw" />
      
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
