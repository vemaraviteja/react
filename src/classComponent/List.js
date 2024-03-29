
import List2 from "../List2"

export default function List(){
    var  arr=["banana","watermelon","Apple"]
    return(
        <ol>
        {
            // arr.map((val)=>{
            //     return(
                    
            //         <li>{val}</li>
                    
            //     )
            // })


            arr.map((val)=>{
                return(
                    
                    <List2 items={val}></List2>
                    
                )
            })
        }
        </ol>
    )
}