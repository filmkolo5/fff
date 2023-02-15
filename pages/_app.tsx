import type { AppProps } from 'next/app'
import Link from 'next/link';
import { FiUsers } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineDatabase} from "react-icons/hi";
import { IoIosSchool} from "react-icons/io";
import { CiLogin} from "react-icons/ci";
import { HiChevronDown} from "react-icons/hi";
import { HiDocumentPlus} from "react-icons/hi2";
import { TbListDetails} from "react-icons/tb";
import * as React from 'react';

/* IMPORT CSS FILE */
import "../styles/index.css";
import "../styles/data.css";
import '../styles/globals.css'
import "../styles/project_creation.css"
import "../styles/projects.css"
import "../styles/project2.css"
import "../styles/project3.css"
import "../styles/ICON-EDIT-DE.css"

// Avatar LOGIN 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
  export default function App({ Component, pageProps }: AppProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <div>
    <header>
      <div className='logo_ihub' >
        <div className='left-menu'>
          <div className='start-menu'>
            <img src="/img/logo1.png" alt='' height={70} />
            <a className='logo-header'>PEA  IHub </a>
          </div>
          <div className='menu'>
          <Link href='/data'>
          <FiUsers/> ข้อมูลบุคลากร 
            </Link>
          <Link href=''>
           <HiOutlineDocumentText/> หลักสูตร
            </Link>
          <Link href=''>
           <HiOutlineDatabase/> งบประมาณ
            </Link>
        <div className="dropdown-link">
        <Link href='/projects'>
      <IoIosSchool/> โครงการ<HiChevronDown/>
      </Link>
      < div className="dropdown">
      <Link href='/project_creation'>
         <HiDocumentPlus/>การสร้างโครงการ </Link>
      <Link href='/project3'>
        <TbListDetails/>รายละเอียดโครงการ</Link>
          </div>
</div>
          </div>
        </div>
        <div className='login-ihub'>
        <Link href='/login'>
          {/* <CiLogin/>  Login */}
          <Stack direction="row" spacing={2}>
      <Avatar sx={{ backgroundColor:'#9898CA',width: 25 ,height: 25 ,fontSize:14}}>PH</Avatar>
    </Stack>
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