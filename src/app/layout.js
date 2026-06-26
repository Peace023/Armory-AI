import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata = {
  title: 'Armory AI — Power your future with AI',
  description: 'Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Armory today.',
  openGraph: {
    title: 'Armory AI — Power your future with AI',
    description: 'Deploy custom enterprise agents and automate complex workflows.',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  )
}