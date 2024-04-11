import { useState } from "react"

const UncontrolForm2 = ()=>{

    const fruitRef = useState("");
    const [fruitArr,setfruitArr] = useState(["apple","Mango"]);
    const[Error,setError] = useState(false);

    const FruitsSubmit = (event)=>{
        event.preventDefault();
        console.log(fruitRef.current.value);


        if(fruitRef.current.value.length < 5){
            setError(true)
        }
        else{
            setfruitArr([...fruitArr,fruitRef.current.value]);
        }
        

        fruitRef.current.value= "";
    }
    console.log(fruitArr);

    return(
        <div>
            <form onSubmit={FruitsSubmit}>
                <input type="text" placeholder="Enter fruit Name" ref={fruitRef}></input>
                <input type="submit"></input>
            </form><br></br>
            {Error && <span>please enter above 5 characters</span>}
            {
                fruitArr.map((val)=>(
                    <h1>{val}</h1>
                ))
            }
        </div>
    )
}


export default UncontrolForm2