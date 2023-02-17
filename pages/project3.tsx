import React, { useEffect,useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
/* Components */
import { template2 } from '../components/template2';
import axios from 'axios';
import { Button } from 'primereact/button';
import EditIcon from '@mui/icons-material/Edit';

export default function () {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ดึงค่าเริ่มต้นของ Projects มาแสดงในตาราง
    fetchProjects();
  }, []);

  /*---------------- Fetch ข้อมูล project จาก database------------------*/
  const fetchProjects = async () => {
    const config = {
      method: 'GET',
      url: 'http://localhost:8080/project/all',
    };
    axios(config)
    .then((response:any)=>{
      console.log('fetch success : ',response.data);

      const newProjects = response.data.map(( project:any , index:any ) => {
        return ({
          ...project,
          'number':index+1,
        })
      })
      setProjects(newProjects);
    })
    .catch((error:any)=>{
      console.log('fetch error : ',error);
    })
  }



  const action1 = (rowData:any) => {
    return (
      <EditIcon  sx={{ color: '#4C3364'}}   />
     
    );
  }




  return (
    <div>
      <div className='HEAD-PROJECT3'>
        <h3>โครงการ</h3>
        </div>
        <div className='BG-PROJECT3'>
          <h3>รายชื่อโครงการ</h3>
        <div className='PROJECT3' >
        </div>
        </div>
        <div className='grid'>
        <div className='col'>

            <DataTable value={[...projects]}  paginator paginatorTemplate={template2}  first={0} rows={10}  paginatorClassName="justify-content-end" responsiveLayout="scroll" className='shadow'>
            <Column  header='ลำดับ' field='number' className='ui-column-data' />
            <Column  header='โครงการ' field='mainProject' className='ui-column-data' />
            <Column  header='GEN/BATCH' field='genBatch' className='ui-column-data' />
            <Column  header='วันเริ่มต้น' field='startProjectAt' className='ui-column-data' />
            <Column  header='วันสิ้นสุด' field='endProjectAt' className='ui-column-data' />
            <Column  header='จำนวนผู้เข้าร่วมทั้งหมด (คน)' field='totalEmployee' className='ui-column-data' />
            <Column  header='จำนวนผู้เข้าร่วมปัจจุบัน (คน)' field='nowEmployee' className='ui-column-data' />
            <Column  header='Ation' body={action1}   className='ui-column-data' />
          </DataTable>
        </div>
      </div>
        </div>
  )
}
