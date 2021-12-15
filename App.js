import './App.css';
import 'index.html';
import React,{useState} from 'react'
import orderList from './orderList'
function App() {
  const [data,setData] = useState(false);
  const[print,setPrint]=useState(true);
  function getData(val)
  document.body.innerHTML = '<h1></h1>';
  {
    setData(val.target.value) //get value of the setData (.value)
    setPrint(false)
    
  }
 
  function handleLikeTy(){
   
    alert("You liked",arr[1])
  }
  function handleLikeTF(){
    alert("You liked",arr[2])
  //loop through likes then alert user
  function handleLikeT(){
    alert("You liked",arr[0])}
    function handleLikeHG(){
      alert("You liked",arr[3])}
      function handleLikeCG(){
        alert("You liked",arr[4])}
  //getElementById cam get id//
let $likeTitanic = document.getElementById("T")
let $likeCuriousGeorge = document.getElementById("CG")
let $likeTheFounder = document.getElementById("TF")
let $likeToyStory = document.getElementById("Ty")
let $likeHungerGames = document.getElementById("HG") // to get each movie by their id as indicated
  }

  return (
    <div className="App">
    
      <header className="App-header">
       
      
        <h3> Favorite Movies</h3>
        <input type="text" onChange={getData} /> <button id="bb" onClick={()=>setPrint(true)}> Update</button>
    <p></p>
  
    
    <aside > 
 
    <li id="T" >Titanic<button onClick={handleLikeT} >👍</button></li>  
    <li id="Ty">Toy Story<button onClick={handleLikeTy}>👍</button></li>
    <li id="TF" >The Founder<button onClick={handleLikeTF}>👍</button></li>  
    <li id="HG">Hunger Games<button onClick={handleLikeHG}>👍</button></li>  
    <li id="CG" >Curious George<button onClick={handleLikeCG}>👍</button></li>  
    
   
   
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


let arr = ['Titanic','Toy Story','The Founder','Hunger Games','Curious George']; //array listing the movies

for(let i =0; i<arr.length; i++) {
  
  console.log(arr[i]);
}


<section href="orderList.js"></section>
export default App;