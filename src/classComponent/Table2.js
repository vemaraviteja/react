export default function Table2({value}){
    return(
          
        <tr>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.branch}</td>
        </tr>
       

    );
}