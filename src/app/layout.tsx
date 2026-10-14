import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Background from '@/components/Background'
import CliTerminal from '@/components/CliTerminal'
import Cursor from '@/components/Cursor'
import { asset } from '@/lib/asset'

export const metadata = {
  title: 'Vishnu.dev | Full Stack Developer & AI Enthusiast',
  description:
    'Portfolio of Chinnapareddy Vishnu Vardhan Reddy: Full Stack and AI engineer.',
  icons: {
    icon: asset('/profile.jpeg'),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Background />
        <SmoothScroll>{children}</SmoothScroll>
        <CliTerminal />
        <Cursor />
      </body>
    </html>
  )
}
