
import './App.css';
import React,{useState} from 'react'
import orderList from './orderList'
function App() {
  const [data,setData] = useState(false);
  const[print,setPrint]=useState(true);
  function getData(val)
  
  {
    setData(val.target.value) //get value of the setData (.value)
    setPrint(false)
    
  }
 
  function likedTitanic(){
   
    alert("You liked"+arr[0])
  }
  
  //loop through likes then alert user
  function handleLike(){
    alert("You liked"+arr[1])
  //getElementById cam get id//

  }

  return (
    <div className="App">
    
      <header className="App-header">
       
      
        <h3> Favorite Movies</h3>
        <input type="text" onChange={getData} /> <button id="bb" onClick={()=>setPrint(true)}> Update</button>
    <p></p>
  
    
    <aside > 
 
    <li id="T" >Titanic<button onClick={handleLike} >👍</button></li>  
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
      
       <section id="add">
        
    Your Liked Movies: <li>{arr[4]}</li>
      </section>  
     
     
    </div>
  );
    }
if(){

}

let arr = ['Titanic','Toy Story','The Founder','Hunger Games','Curious George']; 

for(let i =0; i<arr.length; i++) {
  
  console.log(arr[i]);
}


<section href="orderList.js"></section>
export default App;
