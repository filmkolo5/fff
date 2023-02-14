import React, { useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
/* Components */
import { template2 } from '../components/template2';
export default function () {
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

            <DataTable   paginator paginatorTemplate={template2}  first={0} rows={10}  paginatorClassName="justify-content-end" responsiveLayout="scroll" className='shadow'>
            <Column  header='ลำดับ' field='number' className='ui-column-data' />
            <Column  header='โครงการ' field='userName' className='ui-column-data' />
            <Column  header='GEN/BATCH' field='fname_lname' className='ui-column-data' />
            <Column  header='วันเริ่มต้น' field='position' className='ui-column-data' />
            <Column  header='วันสิ้นสุด' field='affiliation' className='ui-column-data' />
            <Column  header='จำนวนผู้เข้าร่วมทั้งหมด (คน)' field='positionIhub' className='ui-column-data' />
            <Column  header='จำนวนผู้เข้าร่วมปัจจุบัน (คน)' field='positionIhub' className='ui-column-data' />
            <Column header='Action' field='positionIhub' className='ui-column-data' />
          </DataTable>
        </div>
      </div>
        </div>
  )
}