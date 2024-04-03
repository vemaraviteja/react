import { Component } from "react";
import Counter from "./Counter";


class ButtonComponents extends Component{

    state={
        isSubscribe :false,
        text1: "Subscribe",
        text2:"Subscribed"
    }

    changeSubscribe=()=>{
        console.log("clicked");
        this.setState({isSubscribe: !this.state.isSubscribe,})
    }
    render(){
        return(
            <div>
                <button style={{color: this.state.isSubscribe? "red":"green"}} onClick={this.changeSubscribe}> {this.state.isSubscribe ?  this.state.text2 : this.state.text1}</button>
                {
                    this.state.isSubscribe 
                    ?
                    <>
                    <h3>Welcome User</h3>
                    <Counter></Counter>
                    </>
                    :
                    <h3>Please Subscribe to see the content</h3>
                }
            </div>
        )
    }
}

export default ButtonComponents;