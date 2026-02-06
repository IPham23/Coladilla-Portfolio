import {Outlet} from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import 'tailwindcss'
import { ThemeProvider } from "./scripts/ThemeContext"

export default function App(){
  return(
    <>
      <ThemeProvider>
        <div className='flex flex-col'>
          <div className='p-5 xl:px-10 fixed w-full top-0 z-100 bg-(--accent) max-lg:h-20 lg:h-24 flex flex-col justify-center'>
            <Navbar />
          </div>
          <main className=' bg-[---bg] text-(--text) flex-1'>
            <Outlet />    
          </main>

          <div className='p-5 sticky top-0 z-100 bg-(--accent) flex flex-col items-center'>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}