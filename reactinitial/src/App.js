import React, { useEffect, useState } from "react"
import LoadingMask from "./LoadingMask"
import Character from "./Character"
import Subscription from "./Subscription"


function App (){

  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([])

  const [subscription, setSubscription] = useState(false)

  async function fetchData(){

    const response = await fetch("https://demoapi.com/api/series/howimetyourmother")

    const responseJSON = await response.json()

    console.log(responseJSON)

    setData(responseJSON)
    setLoading(false)
  }

  useEffect(()=>{
    setLoading(true)
    fetchData()
  }, [])

  setTimeout(() => {
    setSubscription(true)
  }, 10000);

  return (
    <div className="App">
      <h1>Series Api</h1>
      {loading ? <LoadingMask/> : 
          <>
            {data.map(({name, details}) => <Character key={name} name={name} details={details}/>)}
            {subscription ? <Subscription/> : ""}
          </>
      }
    </div>
  );
}

export default App
