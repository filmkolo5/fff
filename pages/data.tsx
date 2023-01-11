import React, { useEffect } from 'react'
import { FiUsers } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { TbDatabase } from "react-icons/Tb";
import { BsSearch} from "react-icons/Bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from 'react';
import usersJson from "../json/data.json";

interface IUsers {
  "number": number;
  "employee_id": number;
  "fname_lname": string;
  "position": string;
  "affiliation": string;
  "ihub_position": string;
  "performance": string;
}

export default function () {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(()=>{
    setUsers([...usersJson.users]);
  }, [])

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


        <div>
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
<table className='MAT_TABLE'>
<tbody>
  <tr>
    <th className='HEAD_BOX_NUMBER'>ลำดับ</th>
    <th className='HEAD_BOX_EMPLOYEE_ID'>รหัสพนักงาน</th>
    <th className='HEAD_BOX_FNAME_LNAME'>ชื่อ - นามสกุล</th>
    <th className='HEAD_BOX_POSITION'>ตำแหน่งย่อ</th>  
    <th className='HEAD_BOX_AFFILIATION'>สังกัด</th>  
    <th className='HEAD_BOX_IHUB_POSITION'>ต่ำแหน่ง IHub</th>  
    <th className='HEAD_BOX_PERFORMANCE'>การปฏิบัติงาน</th>
    <td className='HEAD_BOX_DELETE_EDIT'></td>
  </tr>
  {users.map((user) => {
    return (<tr key={user.employee_id}>
      <td className='BOX_NUMBER'>{user.number}</td>
      <td className='BOX_EMPLOYEE_ID'>{user.employee_id}</td>
      <td className='BOX_FNAME_LNAME'>{user.fname_lname}</td>
      <td className='BOX_POSITION'>{user.position}</td>
      <td className='BOX_AFFILIATION'>{user.affiliation}</td>
      <td className='BOX_IHUB_POSITION'>{user.ihub_position}</td>
      <td className='BOX_PERFORMANCE'>None</td>
      <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
    </tr>);
  })}
  {/* <tr>
    <td className='BOX_NUMBER'>1.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>2.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>3.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
   <td className='BOX_NUMBER'>4.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>5.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
   <td className='BOX_NUMBER'>6.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>7.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>8.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>9.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr>
  <tr>
    <td className='BOX_NUMBER'>10.</td>
    <td className='BOX_EMPLOYEE_ID'>409490</td>
    <td className='BOX_FNAME_LNAME'>นายจักรพันธ์ อร่ามดิลกรัตน์</td>
    <td className='BOX_POSITION'>วศก.4</td>
    <td className='BOX_AFFILIATION'>ผอฟ.1 กอฟ. ฝสฟ. รผก.(วศ)</td>
    <td className='BOX_IHUB_POSITION'>บุคลากรที่เกี่ยวเนื่องกับโครงการฯ</td>
    <td className='BOX_PERFORMANCE'>None</td>
    <td className='BOX_DELETE_EDIT'><FiEdit size="1rem"/>   <RiDeleteBin6Line size="1rem"/></td>
  </tr> */}
  </tbody>
</table>
</div>
  )
}
