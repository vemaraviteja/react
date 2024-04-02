import { TableRow } from "./TableRow"
import { arrayOfObjects } from "./data"


const TableComponent = ()=>{
    return(
<table style={{ width: "100%" }}>
  <tbody>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      {
        arrayOfObjects.map((val)=>{
            return(
                // <tr>
                //     <td>{val[0]}</td>
                //     <td>{val[1]}</td>
                //     <td>{val[2]}</td>
                // </tr>
                <TableRow data={val} extraProp={"hello"}></TableRow>
            )
        })
      }
    </tr>
    {/* <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr> */}
  </tbody>
</table>

    )
}

export default TableComponent