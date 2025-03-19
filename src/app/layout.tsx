import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '../components/ThemeProvider';
import ScrollToTop from '../components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Suyash Mukherjee - Portfolio',
  description: 'Data Science and Analytics Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
} 