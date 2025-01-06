import logo from './assets/loicw.jpg'
import Image from 'next/image';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});

export default function Home() {
  return (
    <div className={ptSans.className}>
      <nav className='w-full px-6 py-3 flex flex-row items-center'>
        <Image src={logo} alt = "Loic Writes" className='w-16 h-16 rounded-full'/>
        <div className='flex flex-row space-x-12 font-light text-lg'>
          <p>All Blogs</p>
          <p>About</p>
          <p>Categories</p>
        </div>
        <div>
          
        </div>
      </nav>
    </div>
  );
}
