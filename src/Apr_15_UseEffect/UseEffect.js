import axios, { Axios } from "axios"
import { useEffect, useState } from "react"



const UseEffectExample1 = ()=>{
    const [productListing,setProductListing] = useState([]);
    const [eachProduct,setEachProduct] = useState({});
    const [count,setCount] = useState(1);
    const [age,setAge] = useState(0);


    useEffect( ()=>{
        console.log("useEffect triggered");
        // console.log(productListing);
        fetchProducts()
    },[count,age])

    useEffect( ()=>{
        eachProductFtech();
    },[count])

    const eachProductFtech = async ()=>{
        const response = await axios.get(`https://dummyjson.com/products/${count}`);
        console.log(response.data);
        setEachProduct(response.data)
    }

    const fetchProducts = async ()=>{
        const result = await axios.get("https://dummyjson.com/products");
        console.log(result);
        setProductListing(result.data.products)     
    }

    const incrementHandler = ()=>{
        setCount(count+1)
    }

    const ageHandler = ()=>{
        setAge(age+5)
    }
    return(
        <>
            <h1>USE STATE EXAMPLE</h1>
            <h5>curret count: {count}</h5>
            <button onClick={incrementHandler}>click to change the button</button>

            <h1>current Age:{age}</h1>
            <button onClick={ageHandler}>Increment Age</button>

            {
                <h3>{eachProduct?.title }</h3>
            }
        </>
    )
} 

export default UseEffectExample1