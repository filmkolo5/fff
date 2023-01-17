import React, { useEffect } from 'react'
import { useState } from 'react';
import usersJson from "../json/data.json";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Dialog  from './Dialog';

/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import { Dropdown } from 'primereact/dropdown';
import { Paginator } from 'primereact/paginator';

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
  useEffect(() => {


    setUsers([...usersJson.data.users]);

  }, [])
  const [value4, setValue4] = useState('');

  const template2 = {
    layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
    'RowsPerPageDropdown': (options : any) => {
      const dropdownOptions = [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
        { label: 6, value: 6 },
        { label: 7, value: 7 },
        { label: 8, value: 8 },
        { label: 9, value: 9 },
        { label: 10, value: 10 }
      ];

      return (
        <React.Fragment>
          <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
          <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
        </React.Fragment>
      );
    },

    'CurrentPageReport': (options : any) => {

      return (
        <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      )
    }
  };


    const [customFirst2, setCustomFirst2] = useState(0);
    const [customRows2, setCustomRows2] = useState(10);

    const onCustomPageChange2 = (event : any) => {
      setCustomFirst2(event.first);
      setCustomRows2(event.rows);

      
    }
  

  return (
    <div>
      <div className='DATA_TEXT'>
        <h3>ข้อมูลบุคลากร</h3>
      </div>
      <div className='DATA_SEARCH'>
        <h6>ตารางข้อมูลพนักงาน</h6>
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText value={value4} onChange={(e) => setValue4(e.target.value)} placeholder="Search" />
        </span>
        <div className='Dialog'><Dialog /></div>

      </div>
      <div className='grid'>
        <div className='col'>

          <DataTable value={[...users]} paginator paginatorTemplate={template2}  first={0} rows={3}  paginatorClassName="justify-content-end" responsiveLayout="scroll">
            <Column sortable header='ลำดับ' field='number' className='ui-column-data' />
            <Column sortable header='รหัสพนักงาน' field='employee_id' className='ui-column-data' />
            <Column sortable header='ชื่อ - นามสกุล' field='fname_lname' className='ui-column-data' />
            <Column sortable header='ตำแหน่งย่อ' field='position' className='ui-column-data' />
            <Column sortable header='สังกัด' field='affiliation' className='ui-column-data' />
            <Column sortable header='ต่ำแหน่ง IHub' field='ihub_position' className='ui-column-data' />
            <Column header='การปฏิบัติงาน' field='' className='ui-column-data' />
            <Column header='ICON DELETE/EDIT' className='ui-column-data' />
          </DataTable>

        </div>
      </div>
    </div>

  )
}


