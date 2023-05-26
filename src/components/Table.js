import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Table() {
  const [userData, setUserData] = useState({});

  const [email, setEmail] = useState("");
  useEffect(() => {
    const apiUrl = 'http://65.0.93.119:4000/fetchusers';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setUserData(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  const handleDelete = () => {
    const deleteUrl = `http://65.0.93.119:4000/remove`;
    fetch(deleteUrl, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),}
      )
      .then(response => {
        if (response.ok) {
          alert("User deleted successfully");
          window.location.reload();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (

    <div className='row'>
      <div className='col-md-12'>
        <div className="input_container">
          <p>Enter Email to delete user</p>
          <input
            required
            type="email"
            className="input"
            placeholder="Enter email"
            id="email"
            value={email}
            onChange={
              (e) => { setEmail(e.target.value) }
            }
          />
          <button onClick={handleDelete}>Delete User</button>

        </div>
        <div className='mb-2 mt-2'>
          <Link to="/adduser">
            <button className='btn btn-primary'>Create New Data</button>
          </Link>
        </div>
        <div className='mb-2 mt-2'>
          <Link to="/update">
            <button className='btn btn-primary'>Update User</button>
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
