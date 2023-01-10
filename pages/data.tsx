import React from 'react'
import { FiUsers } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { TbDatabase } from "react-icons/Tb";

export default function 
() {
  return (
    <div>
      <header>
        <div className='logo_ihub' >
          <img src="/img/1.png" alt='' height={48}/>
          <a>PEA  IHub </a>
          <div className='menu'>
          <li><a href='#'><FiUsers /> ข้อมูลบุคลากร</a></li>
          <li><a href='#'><CgFileDocument/> หลักสูตร </a></li>
          <li><a href='#'><TbDatabase/> งบประมาณ</a></li>
          <div className='login_1'>
          <a href='#'> Login</a>
          </div>
          </div>
        </div>
      </header>
        <div className='data'>
          <h3>ข้อมูลบุคลากร</h3>
          </div>
          <div className='dataTable'>
            <h6>ตารางข้อมูลพนักงาน</h6>
          <div className='search'></div>
          <div className='searchInput'></div>
          <div className='searchIcon'></div>

          </div>
    </div>
  )
}
