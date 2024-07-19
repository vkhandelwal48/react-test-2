import { useEffect, useState } from 'react';
import './App.css';
// import User from './User';

function App({testfunction}) {
  // let login=false;
  // const [data,setData]=useState(false);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setData(true);
  //   },3000);
  // },[])

  // const [data,setData]=useState("");
  // const [name,setName]=useState("");
  // const [count,setCounter]=useState(0);
  const [data,setData]=useState([]);

  useEffect(()=>{
    getData();
  },[])
  const getData=async()=>{
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result);
  }

  console.log(data);
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
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter name' />

      Case 10
      <h1>Props Testing</h1>
      <User name="Vidit"/>

      Case 11
      <h1>Functional Props Testing and Mocking</h1>
      <button onClick={testfunction}>Click</button>

      Case 12
      <button onClick={()=>setCounter(count=>count+1)}>Click to increase : {count}</button>
      <h2>Heading 2</h2>
      <h5>Heading 5</h5>
      <input />*/}

      <h1>API Call</h1>
      {
        data.map((item)=><li key={item.id}>{item.name}</li>)
      }
    </div>
  );
}

export default App;