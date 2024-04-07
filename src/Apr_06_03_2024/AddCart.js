import { Component } from "react";
import axios from "axios";
import  "./styling.css"

class AddCart extends  Component{
    state={
        // count:0,
        arr:[],
        totalCost:0
    }


    componentDidMount(){
        this.FetchData();
    }
    FetchData = async()=>{
        const result = await axios.get("https://dummyjson.com/products")
        const newResult=result.data.products.map(ele=>{
            return {...ele,count:1,totalPrice:ele.price}
        })
        console.log(result.data.products);
        this.setState({arr:newResult})
    }
  
    Increment = (id)=>{
        console.log(id);
        
        this.setState({
            arr: this.state.arr.map((val)=>{
                if(val.id === id){
                    val.count+=1;
                    val.totalPrice=val.price*val.count
                    return val;
                }
                else{
                    return val;
                }
            }),
        })
    }

    Decrement = (id)=>{
        console.log(id);
        
        this.setState({
            arr: this.state.arr.map((val)=>{
                if(val.id === id){
                    if(val.count>1){
                        val.count-=1;
                    val.totalPrice=val.price*val.count
                    
                    }
                    return val;
                    // val.count-=1;
                    // val.totalPrice=val.price*val.count
                    // return val;
                }
                else{
                    return val;
                }
            }),
        })
    }


    // AllCount = () => {
    //     let totalCost = 0;
    //     this.state.arr.forEach(val => {
    //         totalCost += val.totalPrice; 
    //     });
    //     this.setState({ totalCost: totalCost }); 
    // };



    FilterLow=(arr)=>{
       const filteredArr= arr.filter((val)=>{
            if(val.price<=500){
                return val;
            }
        })
        this.setState({arr:filteredArr});
    }

    Filterhigh=(arr)=>{
        const filteredHigh= arr.filter((val)=>{
             if(val.price>500){
                 return val;
             }
         })
         console.log(filteredHigh);
         this.setState({arr:filteredHigh});
    }

    sortArray = (arr)=>{
        const SortArray = arr.sort((a,b)=>{return a.price - b.price})
        this.setState({arr:SortArray})
    }


    sortArrayy = (arr)=>{
        const SortArrayy = arr.sort((a,b)=>{return b.price - a.price})
        this.setState({arr: SortArrayy})
    }


    


    render(){
        
        return(     
            <div className="main">
            <div className="nav">
                {/* <h1>Total products Cost{this.AllCount()}</h1> */}
                
                <button onClick={()=>this.sortArray(this.state.arr)}>Sort Low to High</button>
                <button onClick={()=>this.sortArrayy(this.state.arr)}>Sort High to Low</button>
                <button onClick={()=>this.FilterLow(this.state.arr)} style={{height:40,width:100}}>Below 500</button>
                <button onClick={()=>this.Filterhigh(this.state.arr)} style={{height:40,width:100}}>Above 500</button>
            </div>
                {    
                
                    this.state.arr.map((val)=>{
                        // console.log(val);
                        return(
                            <div key={val.id} className="child">
                                <h1>{val.id}</h1>
                                <img src={val.images[0]}  width={150}></img>
                                <h1>{val.brand}</h1>
                                {/* <h1>{val.description}</h1> */}
                                <h1>{val.price}</h1>
                                <h1>Total Price{val.totalPrice}</h1>
                                <h1>Add to cart{val.count}</h1>
                                <button onClick={()=>this.Increment(val.id)}>+</button>
                                <button onClick={()=>this.Decrement(val.id)}>-</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default AddCart




// import { Component } from "react";
// import axios from "axios";
// import "./styling.css";

// class AddCart extends Component {
//     state = {
//         arr: [],
//         originalArr: [], // Store the original array data
//         totalCost: 0
//     }

//     componentDidMount() {
//         this.FetchData();
//     }

//     FetchData = async () => {
//         const result = await axios.get("https://dummyjson.com/products");
//         const newResult = result.data.products.map(ele => {
//             return { ...ele, count: 1, totalPrice: ele.price };
//         });
//         this.setState({ arr: newResult, originalArr: newResult }); // Set both arr and originalArr
//     }

//     Increment = (id) => {
//         this.setState(prevState => ({
//             arr: prevState.arr.map(val => {
//                 if (val.id === id) {
//                     val.count += 1;
//                     val.totalPrice = val.price * val.count;
//                 }
//                 return val;
//             })
//         }));
//     }

//     Decrement = (id) => {
//         this.setState(prevState => ({
//             arr: prevState.arr.map(val => {
//                 if (val.id === id && val.count > 1) {
//                     val.count -= 1;
//                     val.totalPrice = val.price * val.count;
//                 }
//                 return val;
//             })
//         }));
//     }

//     FilterLow = () => {
//         const filteredArr = this.state.originalArr.filter(val => val.price <= 500);
//         this.setState({ arr: filteredArr });
//     }

//     Filterhigh = () => {
//         const filteredArr = this.state.originalArr.filter(val => val.price > 500);
//         this.setState({ arr: filteredArr });
//     }

//     render() {
//         return (
//             <div className="main">
//                 <div className="nav">
//                     {/* <h1>Total products Cost{this.AllCount()}</h1> */}
//                     <button onClick={this.FilterLow} style={{ height: 40, width: 100 }}>Below 500</button>
//                     <button onClick={this.Filterhigh} style={{ height: 40, width: 100 }}>Above 500</button>
//                 </div>
//                 {
//                     this.state.arr.map(val => (
//                         <div key={val.id} className="child">
//                             <h1>{val.id}</h1>
//                             <img src={val.images[0]} width={150} alt="product"></img>
//                             <h1>{val.brand}</h1>
//                             <h1>{val.price}</h1>
//                             <h1>Total Price: {val.totalPrice}</h1>
//                             <h1>Add to cart: {val.count}</h1>
//                             <button onClick={() => this.Increment(val.id)}>+</button>
//                             <button onClick={() => this.Decrement(val.id)}>-</button>
//                         </div>
//                     ))
//                 }
//             </div>
//         );
//     }
// }

// export default AddCart;
