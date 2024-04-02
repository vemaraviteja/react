import Table2 from "./Table2"

 export default function Table(){
    const arr=[{id:1,name:"ravi",branch:"mechanical"},{id:2,name:"prashanth",branch:"CSE"}]
    return(
        <table>
            {
                // arr.map((val)=>{
                //     return(
                //         <tr>
                //             <td>{val.id}</td><td>{val.name}</td><td>{val.branch}</td>
                //         </tr>
                //     )
                // }) 
                arr.map((val)=>     <Table2 value={val}></Table2>
                )
            }
        </table>


    )
}