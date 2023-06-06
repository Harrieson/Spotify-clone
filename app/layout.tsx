import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProviders'
import UserProvider from '@/providers/UserProvider'
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
        <UserProvider>
          <Sidebar>
              {children}
            </Sidebar>
        </UserProvider>
       </SupabaseProvider>
      </body>
    </html>
  )
}
