import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const UserList = () => {
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get("https://jsonplaceholder.typicode.com/users")
           
            .then(res=>{
                setListUsers(res.data)
            })
        } 
    fetchData()
   
    }, [])



    return (
        <div className="App">
{
        listUsers.map(us => {
          return (
            <li key ={us.id}>{us.name}
            </li>

          )
        })
      }
        </div>
    );
}
