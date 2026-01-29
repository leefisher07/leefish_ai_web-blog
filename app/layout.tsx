import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '李渔AI - AI编程工具作品集',
  description: '多年B端产品经理，沉迷于AI编程。展示AI编程工具产品集。',
  keywords: ['AI编程', '产品经理', '开发工具', '李渔AI'],
  metadataBase: new URL('https://leefishai.top'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '李渔AI - AI编程工具作品集',
    description: '多年B端产品经理，沉迷于AI编程。展示AI编程工具产品集。',
    url: 'https://leefishai.top',
    siteName: '李渔AI',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '李渔AI - AI编程工具作品集',
    description: '多年B端产品经理，沉迷于AI编程。展示AI编程工具产品集。',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <footer className="bg-text text-white py-8">
          <div className="section-container text-center">
            <p className="text-sm">
              © 2024 李渔AI. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
