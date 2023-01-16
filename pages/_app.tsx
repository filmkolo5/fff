import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/index.css";
import "../styles/data.css";
import Link from 'next/link';
import { FiUsers } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineDatabase} from "react-icons/hi";
import { CiLogin} from "react-icons/ci";

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <header>
      <div className='logo_ihub' >
        <div className='left-menu'>
          <div className='start-menu'>
            <img src="/img/1.png" alt='' height={60} />
            <a className='logo-header'>PEA  IHub </a>
          </div>
          <div className='menu'>
          <Link href='/data'>
          <FiUsers/> ข้อมูลบุคลากร 
            </Link>
          <Link href='/'>
           <HiOutlineDocumentText/> หลักสูตร
            </Link>
          <Link href='/'>
           <HiOutlineDatabase/> งบประมาณ
            </Link>
          </div>
        </div>
        <div className='login-ihub'>
        <Link href='/login'>
          <CiLogin/>  Login
          </Link>
        </div>
      </div>
    </header>
    <div className='layout'>
    <Component {...pageProps} />
    </div>
  </div>

  // router.pathname == "/login"

}
