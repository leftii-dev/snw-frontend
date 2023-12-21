import './globals.css'
import { Poppins, Playfair_Display } from 'next/font/google';
import Footer from './(shared-components)/Footer/Footer';
import NavBar from './(shared-components)/NavBar/NavBar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Shag n Wag Grooming',
  description: 'Created by austinbarnes.dev',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={`w-full ${poppins.variable} ${playfair_display.variable}`}>
      <body className='flex flex-col'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
