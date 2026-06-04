import './globals.css'

export const metadata = {
  title: 'Hot Take Slot Machine',
  description: 'A writing pedagogy tool — see the same argument made eleven different ways.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
