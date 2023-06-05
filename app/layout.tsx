import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProviders'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'Stream Music Now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
       <SupabaseProvider>
        <Sidebar>
            {children}
          </Sidebar>
       </SupabaseProvider>
      </body>
    </html>
  )
}
