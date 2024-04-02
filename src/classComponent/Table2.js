export default function Table2(props){
    console.log(props,"props")

    // const {value} = props
    
    return(        
        <tr>
            <td>{props.value.id}</td>
            <td>{props.value.name}</td>
            
           
        </tr>
    
    );
}