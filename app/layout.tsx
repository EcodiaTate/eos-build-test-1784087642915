import Script from 'next/script';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'EOS Build Test 1784087642915',
  description: 'Built with Ecodia Studio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://ecosphere.ecodia.au/preview-editor.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
