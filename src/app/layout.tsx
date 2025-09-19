import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { ChatWidget } from '@/components/chatbot/chat-widget';

export const metadata: Metadata = {
  title: {
    template: '%s | AEROCALL',
    default: 'AEROCALL | The Future of Business Communication',
  },
  description: 'AEROCALL offers modern cloud calling for ambitious teams. Simple setup, powerful features, and unparalleled reliability. Serving USA & Canada with seamless connections.',
  keywords: ['business phone system', 'cloud calling', 'VoIP', 'team communication', 'small business phone'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
        <ChatWidget />
        <Toaster />
      </body>
    </html>
  );
}
