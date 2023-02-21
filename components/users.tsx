import { useEffect } from 'react'
import { useState } from 'react';
import usersJson from "../json/data.json";

export const [users, setUsers] = useState<IUsers[]>([]);
useEffect(() => {
  setUsers([...usersJson.data.users]);
}, [])
 interface IUsers {
    "number": number;
    "employee_id": number;
    "fname_lname": string;
    "position": string;
    "affiliation": string;
    "ihub_position": string;
    "performance": string;
  }