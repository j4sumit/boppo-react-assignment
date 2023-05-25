import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Table() {

    const [userData, setUserData] =useState({});
    
useEffect(()=>{
    const apiUrl = 'http://65.0.93.119:4000/fetchusers';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setUserData(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

},[])    

    const handleDelete = (email) => {
        const deleteUrl = `http://65.0.93.119:4000/remove/${email}`;
        fetch(deleteUrl, { method: 'POST' })
          .then(response => {
            if (response.ok) {
              const updatedData = userData.data.filter(item => item.email !== email);
              setUserData({ ...userData, data: updatedData });
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };

    return (

        <div className='row'>
            <div className='col-md-12'>
                <div className='mb-2 mt-2'>
                    <Link to="/adduser">
                    <button className='btn btn-primary'>Create New Data</button>
                    </Link>
                </div>
                <table className='table table-bordered table-striped table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.data?.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item?.firstname || ""}</td>
                                        <td>{item?.lastname || ""}</td>
                                        <td>{item?.age || ""}</td>
                                        <td>{item?.email || ""}</td>
                                        <td>{item?.phoneNumber || ""}</td>

                                        <td> <Link to="/updateUser/:id"> <button >Edit</button></Link></td>
                                        <td> <button onClick={() => handleDelete(item.email)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
