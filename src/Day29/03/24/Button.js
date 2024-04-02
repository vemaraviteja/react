// export default function  ButtonComponent(props){
//     const {text} =props
//     return(
//         <>
//             <button>{text}</button><br></br>
//         </>
//     )
// }


// export default function  ButtonComponent(props){
//     console.log(props)
//     const {children} =props
//     return(
//         <>
//             {/* <button>{children}</button><br></br> */}
//             {children}

//         </>
//     )
// }


// destruncturing directly
export default function  ButtonComponent({children}){
    return(
        <>
            {/* <button>{children}</button><br></br> */}
            {children}

        </>
    )
}