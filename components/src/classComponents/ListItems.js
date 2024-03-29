import ListItems from "./Lists"

 const ListComponent = ()=>{

    return(
        <div>
            <ol>
                {/* <ListItems ></ListItems> */}
            </ol>
        </div>
    )
}

// export default ListComponent;


export  const NewList = ()=>{

    let arr =[{name:"apple",type:"fruit",id:1,isfruit:true},
            {name:"mango",type:"fruit",id:2,isfruit:true},
            {name:"potato",type:"vegetable",id:3,isfruit:false}];
    return(
        <div>
            <ol>
                {
                    arr.map((val)=>{
                        return(
                            <li>{val.name}</li>
                          
                        )
                    })
                }
            </ol>
        </div>
    )
}


export const  SecondList = ()=>{
    let arr =[{name:"apple",type:"fruit",id:1,isfruit:true},
            {name:"mango",type:"fruit",id:2,isfruit:true},
            {name:"potato",type:"vegetable",id:3,isfruit:false}];
    return(
        <div>
            <ol>
            {
                arr.map((val)=>{
                    return(
                        <ListItems  item={val.name}></ListItems> // props passing 
                    )
                })
            }
            </ol>

        </div>
    )
}


