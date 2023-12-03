import './globals.css'
import { Poppins } from 'next/font/google';
import NavBar from './shared-components/NavBar/NavBar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Shag n Wag Grooming',
  description: 'Created by austinbarne.dev',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main className='mx-52'>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
