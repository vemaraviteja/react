import { Component } from "react"

class Counter extends Component{
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
    render(){
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

export default Counter