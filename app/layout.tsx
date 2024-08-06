import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cidreria Big Apple',
  description: 'One and the only New York Cidreria',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body>{children}</body>
    </html>
  );
}
