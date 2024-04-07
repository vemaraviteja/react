import { Component } from "react"
import axios from "axios";


class UpdatingCounter extends Component{
    state={
        count:0
    }

    increatementCount=(event)=>{
        this.setState({count:this.state.count+event})
    }


    decrementCount=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1});
        }
        // this.setState({count:this.state.count-1})
    }


    resetCount=()=>{
        this.setState({count:this.state.count =0})
    }

   static  getDerivedStateFromProps(props,state){
        console.log("Updating-- getDerivedStateFromProps");
        return null
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    componentDidMount(){
        document.title=`React ${this.state.count}`
    }

    componentDidUpdate(){
        document.title=`React ${this.state.count}`
        this.fetchData();
    }
    

    fetchData = async ()=>{
        const result = await axios.get("https://dummyjson.com/products");
        // console.log(result);
        // this.setState({products:result.data.products})
    }


    getSnapshotBeforeUpdate(props,state){
        console.log(state);
        return null
    }

    render(){
        console.log("render");
        return(
            <>
               <h3>Counter example</h3> 
               <h3>Count {this.state.count}</h3>
               <button onClick={()=>this.increatementCount(1)}>Increment Count</button>
               <button onClick={()=>this.increatementCount(10)}>Increment Count 10</button>
               <button onClick={this.decrementCount}>Decrement count</button>
               <button onClick={this.resetCount}>Reset</button>

            </>
        )
    }
}

export default UpdatingCounter