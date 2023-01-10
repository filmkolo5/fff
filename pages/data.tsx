import React from 'react'
import { FiUsers } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { TbDatabase } from "react-icons/Tb";
import { BsSearch} from "react-icons/Bs";

export default function 
() {
  return (
    <div>
      <header>
        <div className='logo_ihub' >
          <img src="/img/1.png" alt='' height={50}/>
          <a>PEA  IHub </a>
          <div className='menu'>
          <li><a href='#'><FiUsers /> ข้อมูลบุคลากร</a></li>
          <li><a href='#'><CgFileDocument/> หลักสูตร </a></li>
          <li><a href='#'><TbDatabase/> งบประมาณ</a></li>
          <div className='login-ihub'>
          <li><a href='#'> Login</a></li>
          </div>
        </div>
        </div>
      </header>


        <div className='data'>
          <h3>ข้อมูลบุคลากร</h3>
          <div className='dataTable'>
            <h6>ตารางข้อมูลพนักงาน</h6>
          <div className='bginputsearch'>
          <input type=" ssearch"name=" ssearch"placeholder="Search " />
          <div className='searchIcon'><BsSearch/>
          <button className='add_data'> + ข้อมูลพนักงาน </button>
          </div>
          </div>
          </div> 
          </div> 
    </div>
  )
}
