import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState()


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
  }

  const handleChange=(e)=>{
    console.log(e.target.type)
    console.log(e.target.name=e.target.type==='checkbox'
      ?e.target.checked
      :e.target.value)
    
      setData({...data,[e.target.name]:e.target.type==='checkbox'
        ?e.target.checked
        :e.target.value})
  }
  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' name='firstName' onChange={handleChange}/>
          </div>

          <div>
          <input type='text' name='lasstName'onChange={handleChange}/>
          </div>
          <div>
          <input type='checkbox' name='isOk' onChange={handleChange}/>
          </div>
          <button type='submit'>Submit</button>
        
      </form>
    </div>
  );
}

export default App;
