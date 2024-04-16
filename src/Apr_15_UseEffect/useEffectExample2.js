import axios from "axios";
import { useEffect, useState } from "react"


const UseEffectExample2 = ()=>{
    const [count,setCount] = useState(0);
  

    useEffect( ()=>{
        document.title = `count ${count}`
    },[count])


    

    const IncrementHandler = ()=>{
        setCount(count+1);
    }

    return(
        <>
            <h1>USE EFFECT EXAMPLE 2</h1>
            <h1>Current Count {count}</h1>
            <button onClick={IncrementHandler}>click to change the count</button>
        </>
    )
}

export default UseEffectExample2