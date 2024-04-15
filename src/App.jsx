import axios from "axios";
import { useState,useEffect} from "react";
import './App.css'

function App() {
  const[users,setUsers]=useState([])
  const [filteredUser,setFilterusers]=useState([])
  const getAllUser=async()=> {
  await axios.get("http://localhost:8000/users").then((res)=>{
    console.log(res.data); 
    setUsers(res.data);
    setFilterusers(res.data)
  });
  };
  useEffect(()=>{
    getAllUser()
  },[]
  )

  //Search Function
  const handleSearchChange=(e)=>{
    const searchText =e.target.value.toLowerCase();
    const filteredUsers =users.filter((users)=>{users.name.toLowerCase().includes(searchText)||users.city.toLowerCase().includes(searchText)})
    setFilterusers(filteredUsers)
  
  }
  return (
    <>
      <div className='container'>
        <h3>Crud Application with React</h3>
        <div className='input-Search'>
          <input type="search" placeholder="Search Text Here" onChange={ handleSearchChange}/>
          <button className='btn green'>Add Record</button>
        </div>
        
          <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser && filteredUser.map(
            (user,index)=>{
              return (
              <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td><button className='btn green'>Edit</button></td>
               <td><button className='btn red'>Delete</button></td>
            </tr>
            )
            }
            )}
          </tbody>
          </table>
        </div>
     
    
    </>
  )
}

export default App
