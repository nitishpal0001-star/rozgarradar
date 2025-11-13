import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RozgarRadar',
  description: 'RozgarRadar — Sarkari & Private Jobs near you',
}

export default function RootLayout({ children }){
  return (
    <html lang="hi">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
