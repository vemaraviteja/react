import Image from "./Images"
import Table1 from "./Table";

export const CustomImage = ()=>{

    return(
        <>
            <Image></Image>
        </>
    )
}

// export default CustomImage;


 export const Table=()=>{
    const arr= [{id:1,name:"teja",position:"ReactDev"},{id:2,name:"prashanth",position:"Aws Architect"}];
    return(
        <>
            <table border="1">
                {
                    arr.map((val)=>{
                        return(
                            // <tr>
                            //     <td>{val.id}</td>
                            //     <td>{val.name}</td>
                            //     <td>{val.position}</td>
                            // </tr>
                            <Table1 item={val}></Table1>
                        )
                    })
                }
            </table>
        </>
    )
}