
import './App.css';
import React,{useState} from 'react'
function App() {
  const [data,setData] = useState(false);
  const[print,setPrint]=useState(true);
  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
    
  }
  return (
    <div className="App">
      {
        print?
      <h1>{data}</h1>
      :null
      }
      <header className="App-header">
       
      
        <h3> Favorite Movies</h3>
        <input type="text" onChange={getData} /> <button onClick={()=>setPrint(true)}> Update</button>
    <p></p>
  
    
    <aside > 
 
    <li >Titanic<button onClick={()=>{}}>👍</button></li>  
    <li>Toy Story 3</li> 
    <li>The Founder</li> 
    <li>Hunger Games</li> 
    <li>Curious George</li> 
    </aside>
   
         
         
        
      </header>
      <section>
        
  Your Liked Movies: 
      </section>
    </div>
  );
}

<section href="orderList.js"></section>
export default App;
