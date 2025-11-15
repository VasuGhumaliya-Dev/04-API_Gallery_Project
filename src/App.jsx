import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import Card from './assets/components/Card'

function App() {
  const [userData, setUserData] = useState([])
  const [index,setIndex] = useState(1)

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='loading'>Loading...</h3>

  if(userData.length>0){

    printUserData = userData.map(function(elem,idx){
      return(
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      )
    })
  }

   return (
    <div className='main'>
      <div className="img_contener">
        {printUserData}
      </div>
      <div className="buttons">
        <button className={(index===1?"button1":'')} onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>previous</button>
        <h3>Page {index}</h3>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
