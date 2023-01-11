import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/index.css";
import "../styles/data.css";
export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <header>
      <div className='logo_ihub' >
        <div className='left-menu'>
          <div className='start-menu'>
            <img src="/img/1.png" alt='' height={50} />
            <a className='logo-header'>PEA  IHub </a>
          </div>
          <div className='menu'>
            <li><a href='#'> ข้อมูลบุคลากร</a></li>
            <li><a href='#'> หลักสูตร </a></li>
            <li><a href='#'> งบประมาณ</a></li>
          </div>
        </div>

        <div className='login-ihub'>
          <li><a href='#'> Login</a></li>
        </div>
      </div>
    </header>
    <div className='layout'>
    <Component {...pageProps} />
    </div>
    
  </div>

  // router.pathname == "/login"

}
