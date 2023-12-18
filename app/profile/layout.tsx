
import { Inter } from 'next/font/google'
import './globals.css'
import Hero from '../../components/profilepage/Hero'
import Hero1 from '../../components/profilepage/Hero1'
import Detail from '../../components/profilepage/Detail'
import Navigation from '../../components/profilepage/Navigation'
import CandidateRecommended from '@/components/profilepage/CandidateRecommended'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
        {/* <Hero/> */}
        <Hero1/>
        <div className='mx-5'>
        <Detail/>
        <Navigation/>
        {children}
        <CandidateRecommended/>
        </div>
    </>


        

  )
}
