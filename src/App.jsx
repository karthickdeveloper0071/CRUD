import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
      <div className='container'>
        <h3>Crud application with React</h3>
        <div className='input-Search'>
          <input type="search" />
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
            <tr>
              <td>1</td>
              <td>Karthick</td>
              <td>25</td>
              <td>Salem</td>
              <td><button className='btn green'>Edit</button></td>
               <td><button className='btn red'>Delete</button></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Karthick</td>
              <td>25</td>
              <td>Salem</td>
              <td><button className='btn green'>Edit</button></td>
               <td><button className='btn red'>Delete</button></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Karthick</td>
              <td>25</td>
              <td>Salem</td>
              <td><button className='btn green'>Edit</button></td>
               <td><button className='btn red'>Delete</button></td>
            </tr>
          </tbody>
          </table>
        </div>
     
    
    </>
  )
}

export default App
