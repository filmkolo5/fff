import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function projects() {
  return (
    <div>
      <h3 className='head-projects'>โครงการ</h3>
      <br/>
      <div className='bg-projects'>
        <h6>รายชื่อโครงการ</h6>
      </div>
      <div className='grid'>
        <div>
          <DataTable className='shadow'>
            <Column header='ลำดับ' className='ui-column-data' />
            <Column header='โครงการหลัก' className='ui-column-data' />
            <Column header='GEN/BATCH' className='ui-column-data' />
            <Column header='วันเริ่ม' className='ui-column-data' />
            <Column header='วันสิ้น' className='ui-column-data' />
            <Column header='จำนวนผู้เข้าร่วมทั้งหมด (คน)' className='ui-column-data' />
            <Column header='จำนวนผู้เข้าร่วมปัจจุบัน (คน)' className='ui-column-data' />
            <Column header= 'ICON DELETE/EDIT' className='ui-column-data' />
          </DataTable>
        </div>
      </div>
    </div>
  )
}

export default projects