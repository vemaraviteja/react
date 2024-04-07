import { isVisible } from "@testing-library/user-event/dist/utils";
import { Component } from "react";


class Unmount extends Component{
    state={
        isVisible :true,
    }
    Change = ()=>{
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render(){
        return(
            <>
            <h1>unmount Example </h1>
            <button onClick={this.Change}>Click to remove </button>
            {
                this.state.isVisible? <Child></Child> : <h1>no child found</h1>
            }
            </>
        )
    }
}

export default Unmount;


class Child extends Component{
    componentWillUnmount(){
        alert("componentWillUnmount")
    }
    render(){
        return(
            <>
                <h3>Child Visible</h3>
            </>
        )
    }
}