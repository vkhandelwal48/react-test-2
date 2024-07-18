import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  // let login=false;
  // const [data,setData]=useState(false);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setData(true);
  //   },3000);
  // },[])

  //const [data,setData]=useState("");
  const [name,setName]=useState("");
  return (
    <div className="App">
      {/*
      Case1
      <h1>Assertion Methods</h1>
      <input 
      type='text' 
      defaultValue={"Vidit"} 
      name="username" 
      className='test-style'
      id="user-name"
      />

      Case 2 
      <button className='btn' id="btn-id">Click Me</button>

      Case 3
      <h1>TextMatch with String and Regex</h1>
      <div>Hello World</div>

      Case 4
      <h1>queryBy and queryAllBy</h1>
      {login?<button>Logout</button>:<button>Login</button>}

      Case 5
      <h1>findBy and findAllBy</h1>
      {data ? <h1>data found</h1>:<h1> No data found</h1>}

      Case 6
      <h1 id='testId'>Hello World</h1>
      <div>
        Hello World
        <p>Hi</p>
        <p>Hello</p>
        <p>Hey</p>
      </div>

      Case 7
      <h1>{data}</h1>
      <button onClick={()=>setData("hello")}>Click Me</button>

      Case 8 and 9
      <h1>onChange Event Testing</h1>
      <h1>{name}</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter name' />*/}

      <h1>Props Testing</h1>
      <User name="Vidit"/>
    </div>
  );
}

export default App;