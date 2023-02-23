import Sidebar from './component/sidebar'
import './global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body className='flex flex-col md:flex-row max-w-screen-xl mx-auto'>
        <Sidebar />
        <main className='grow-full md:basis-2/3 p-16 ml-auto bg-white'>
          {' '}
          {children}
        </main>
      </body>
    </html>
  )
}
