import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = {
  title: 'Michael Pons | Product Design for Early-Stage SaaS Startups',
  description:
    'Product design leadership for early-stage SaaS teams. Explore selected work, experience highlights, and ways to collaborate with Michael Pons.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
