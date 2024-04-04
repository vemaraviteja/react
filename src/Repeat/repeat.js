import { Component } from "react";


class Repeat extends Component{
    state={
        arr:["ibm","tcs","kia"]
    }

    UpdateArr = (index)=>{
        console.log(index);

        var newArr = [...this.state.arr];
        console.log(newArr);
        const newArr2= newArr.map((val,ind)=>{
            if(index === ind){
                return "Neku endhuku ra !!!"
            }
            else{
                return val
            }
        })

        console.log(newArr2);
        this.setState({arr:newArr2})
    }
    render(){
        return(
            <ol>
                {
                    this.state.arr.map((val,ind)=>{
                        return(
                            <>
                            <li>{val}</li>
                            <button onClick={()=>this.UpdateArr(ind)}>Update The element</button>
                            </>
                        )
                    })
                }
            </ol>
        )
    }
}


export default Repeat