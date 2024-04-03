import { Component } from "react";


class Fruits extends Component{
    state={
        arr:["mango","apple","jackFruit"],
        empty:[]
    }

    addFruit=()=>{
        // this.setState({arr:this.arr.push(this.state.add)})
        const newArr = [...this.state.arr,"waterMelon"];
        this.setState({arr: newArr})
    }

    deleteFruit=()=>{
        const newArr = [...this.state.arr];
        newArr.pop(this.state.arr);
        this.setState({arr: newArr})
    }

    Reset=()=>{
        this.setState({arr:this.state.empty})
    }
  
    render(){
        // const arr=["mango","apple","jackFruit"];
        return(
            <>
            
                {
                    this.state.arr.map((val,ind)=>{
                        return(
                            <>
                                <h1 key={ind}> {val}</h1>
                            </>
                        )
                    })
                }
                {/* <h1>{this.state.add}</h1> */}
                <button onClick={this.addFruit}  >Add Fruits</button>
                <button onClick={this.deleteFruit}>Delete Fruit</button>
                <button onClick={this.Reset}>Reset</button>
            </>
        )
    }
}

export default Fruits