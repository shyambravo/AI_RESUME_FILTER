import { Inter } from 'next/font/google'
import MainContainer from './container'
import './common.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI resume filter',
  description: 'Filter resumes based on job description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <MainContainer children={children} />
      </body>
    </html>
  )
}
