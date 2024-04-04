import { Component } from "react";


class Curd extends Component{

    state={
        arr:["apple","orange"],
    }


    addFruit=()=>{
        const  newFruits = [...this.state.arr,"new Fruit"];
    //    console.log(newFruits);
      this.setState({
        arr:newFruits,
      })
      
    //   ,()=>{
    //     console.log(this.state.arr,"inside setState");
    //   }
    //   Async testing
    console.log(this.state.arr,"outside set State");
    }




    deleteFruit=(index)=>{
        // console.log(index);
        const newFruits = this.state.arr.filter((val,i)=> i !== index);
        // console.log(newFruits);
        this.setState({
            arr:newFruits
        })
    }


    updateFruit=(index)=>{
       const updateFruits =  this.state.arr.map((val,ind)=>{
            if(ind === index){
                return "pineApple";
            }
            else{
                return val;
            }
        })
        // console.log(updateFruits);
        this.setState({
            arr:updateFruits
        })
    }



    render(){
        return(
            <>
            <button onClick={this.addFruit}>Add Fruit</button>
            <ol>
                {
                    this.state.arr.map((val,index)=>{
                        return(
                            <>
                            <li>{val}</li>
                            <button onClick={()=>this.deleteFruit(index)}>Delete Fruit</button>
                            <button onClick={()=>this.updateFruit(index)}>Update Fruit</button>
                            </>
                        )
                    })
                }
            </ol>
            </>
        )
    }
}

export  default Curd; 