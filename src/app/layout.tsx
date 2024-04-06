import { NavBar } from '@/components/layout/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
