import React from 'react';
import {useState} from 'react';
import './signin.css';


export default function Sign_In() {

  const initialState={
    name: '',
    age:'',
    gender:'',
    address:''
  }
  const[data,setData]=useState(initialState);

  const  handleChange=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value
    })
    // console.log(data);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
     const response=await fetch('http://127.0.0.1:8080/demo',{
      method: 'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
     })
     const dta = await response.json();
      console.log(dta);

      setData(
        initialState
      )

  }
 
  
  return (
    <div className="signin">
      <div className="container2">
  <h2 id="heading">Enter your details</h2>
  <form onSubmit={handleSubmit}>
    <input type="text" name="name" onChange={handleChange} value={data.name} id="name" placeholder="Enter your name" />
    <input type="text" name="age" onChange={handleChange} value={data.age} id="age" placeholder="Enter your department" />
    <input
      type="text"
      name="gender"
      onChange={handleChange} value={data.gender}
      id="gender"
      placeholder="Enter your mobile number"
    />
    <textarea
      name="address"
      id="address"
      onChange={handleChange} value={data.address}
      cols={30}
      rows={5}
      placeholder="Enter your email address"
    />
    <button className="btn3">Submit</button>
  </form>
</div>
    </div>
  )
}
