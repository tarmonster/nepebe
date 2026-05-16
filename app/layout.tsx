import './globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant'
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost'
})

export const metadata = {
  title: 'NEPEBE | Európai Elektromágneses Kutatási Intézet',
  description: 'Az elektromágneses tudomány jövője épül.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`${jost.className} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}