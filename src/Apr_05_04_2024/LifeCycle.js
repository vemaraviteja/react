import { Component } from "react";
import axios from "axios";
import Loaders from "../Apr_04_04_2024/loaders";

import "../Apr_04_04_2024/styleSheet.css"


class LifeCycle extends Component{
    // state ={
    //     products:[],
    // }

    constructor(){
        console.log("constructor");
        super()
        this.state={
            products:[],
            favoriteColor:"green",
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { favoriteColor: props.favcol };
    }

    componentDidMount(){
        // these are auto invoke methods 
        // execute only once in a cycle -- componentDidMount
        document.title="Teja"
        console.log("component Didmount")
        this.fetchData();

    }

   

    

    
    fetchData = async ()=>{
       let result = await axios.get("https://dummyjson.com/products");
       console.log(result);

       this.setState({products:result.data.products})

    }



    render(){
        console.log("render");
        // console.log(this.state.products,"log from render");
        return(
            <>
                <h4 style={{color:this.state.favoriteColor}}>product Listing</h4>
                {
                    this.state.products.length>0 
                    ?
                    <div  className="main" >
                        {
                            this.state.products.map(val=>{
                                // const {thumbnail,title,brand,price} = val;
                                return(
                                    <div className="productList" key={val.id}>
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


export default LifeCycle;