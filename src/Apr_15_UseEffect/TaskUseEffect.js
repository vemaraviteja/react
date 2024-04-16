import axios from "axios";
import { useEffect, useState } from "react";

const TaskUseEffect = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [products, setproducts] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    const result = res.data.products;
    setData(result);
    // console.log(result);
  };

  const Increment = (i) => {
    setCount(i);
    console.log(i);
  };

  const IndividualData = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${count}`);
    console.log(res);
    console.log(res);
    setproducts(res.data) 
  };

  useEffect(() => {
    IndividualData();
  }, [count]);

  return (
    <>
      {data.map((val, ind) => {
        return (
          <button onClick={() => Increment(ind + 1)} key={ind}>
            {ind + 1}
          </button>
        );
      })}

      {
        <div style={{ }}>
            <h1>Brand:{products.brand}</h1>
            <img src={products.thumbnail}></img>
            <h1>{products.category}</h1>
        </div>
      }
    </>
  );
};
export default TaskUseEffect;
