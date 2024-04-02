

// export default function ConditionalRendering(){
//     const isLoggedin = true
//     if(isLoggedin){
//         return (
//             <h1>Welcome User</h1>
//         )
//     }
//     else{
//         return(
//             <h1>Please Login</h1>
//         )
//     }
// }

export default function ConditionalRendering(){
    const isLoggedin = false
    return(
        // <h2>{isLoggedin ? "welcome Use" : "Please Login"}</h2>
        <>
            {
                // isLoggedin ? <Text msg="Login True"></Text> : <Text msg="Login False"></Text>
                isLoggedin && <Text msg="login True"></Text>
            }

        </>
    )
}

const Text = ({msg})=>{
    return(
        <h4>{msg}</h4>
    )
}

// condtional rending are 2 types 
// 1) using Ternery operator
// 2) Logical and Operator (short circuit operator)-- hre else part will written as null(nothing will return)