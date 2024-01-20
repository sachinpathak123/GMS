import './globals.css'
import Division from './pages/Navbar/Division'
import Navbar from './pages/Navbar/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Navbar />
      <Division />
      {children}</body>
    </html>
  )
}
