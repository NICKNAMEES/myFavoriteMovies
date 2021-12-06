
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
  function handleLike(){
if

  }
  return (
    <div className="App">
    
      <header className="App-header">
       
      
        <h3> Favorite Movies</h3>
        <input type="text" onChange={getData} /> <button onClick={()=>setPrint(true)}> Update</button>
    <p></p>
  
    
    <aside > 
 
    <li id="T" >Titanic<button onClick={handleLike}>👍</button></li>  
    <li id="Ty">Toy Story<button onClick={handleLike}>👍</button></li>
    <li id="TF" >The Founder<button onClick={handleLike}>👍</button></li>  
    <li id="HG">Hunger Games<button onClick={handleLike}>👍</button></li>  
    <li id="CG" >Curious George<button onClick={handleLike}>👍</button></li>  
    
   
   
    </aside>
   
    {
        print?
      <aside> {data}</aside>
      :null
      }
         
        
      </header>
      <section>
        
  Your Liked Movies: 
      </section>
    </div>
  );
}

<section href="orderList.js"></section>
export default App;
