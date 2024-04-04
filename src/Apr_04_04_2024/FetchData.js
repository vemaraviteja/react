import { Component } from "react";
import axios from "axios";
import Loaders from "./loaders";

import "./styleSheet.css"


class FtechData extends Component{
    state ={
        products:[],
    }

    componentDidMount(){
        // these are auto invoke methods 
        this.fetchData();

    }

    // fetchData= ()=>{
    //     fetch("https://dummyjson.com/products").then((val)=>{return val.json()}).then((val)=>{console.log(val);})
    // }


    // fetchData = async ()=>{
    //     var result = await fetch("https://dummyjson.com/products");
    //     var result2 = await result.json();
    //     console.log(result2);
    // }
    
    // Axios

    
    fetchData = async ()=>{
       let result = await axios.get("https://dummyjson.com/products");
       console.log(result);

       this.setState({products:result.data.products})

    }



    render(){
        console.log(this.state.products,"log from render");
        return(
            <>
                <h4>product Listing</h4>
                {
                    this.state.products.length>0 
                    ?
                    <div  className="main" >
                        {
                            this.state.products.map(val=>{
                                return(
                                    <div className="productList">
                                       <img src={val.thumbnail} width={300} height={200}></img>
                                       <h2>{val.title}</h2> 
                                       <h2>{val.brand}</h2>
                                       <h2>₹{val.price}</h2>

                                       

                                    </div>
                                )
                            })
                        }
                    
                    </div>
                    :
                    <Loaders></Loaders>
                }

            </>
        )
    }
}


export default FtechData;