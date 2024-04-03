import { Component } from "react";

class Fruits2 extends Component {
  state = {
    arr: ["mango", "apple", "watermelon", "custard apple"],
    arr1: [],
  };

  // addFruit=()=>{
  //     const newArr = [...this.state.arr, (Math.random(this.state.arr))];
  //     this.setState({arr:newArr});

  // }
  addFruit = () => {
    const randomIndex = Math.floor(Math.random() * this.state.arr.length);
    const randomFruit = this.state.arr[randomIndex];
    this.setState({ arr: [...this.state.arr, randomFruit] });
  };

  render() {
    return (
      <>
        <button onClick={this.addFruit}>Click to add fruits</button>
        {this.state.arr.map((val, ind) => {
          return <h1 key={ind}>{val}</h1>;
        })}
      </>
    );
  }
}

export default Fruits2;
