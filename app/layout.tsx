import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import Headings from '@/components/Headings';
import Footer from '@/components/Footer';
import { Toaster } from "react-hot-toast";

import { Metadata } from 'next';


export const metadata:Metadata = {
  title: {
    default:  'Travel Journal App',
    template: "%s | Travel Journal App"
  },
  description: 'Keep a journal from all your travels',
}


export const dynamic = "force-dynamic";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="min-h-screen bg-background flex flex-col items-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <nav className="w-full flex justify-center  bg-transparent mb-4 z-10  h-16">
              <div className="w-full max-w-7xl md:max-w-6xl flex  justify-between items-center p-3 text-sm text-foreground absolute mx-auto inset-x-0 top-0 z-50">
                <Headings />
              </div>
            </nav>
            {children}
            <Footer />
          </ThemeProvider>
        </main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
