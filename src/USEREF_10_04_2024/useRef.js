import { useRef, useState } from "react";

const UncontrolForm = () => {
    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const [errorVisible,seterrorVisible] = useState(false);
    const[arr,setarr] = useState([]);
    

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("vachindhi andi vayyari");

       const  userName = userNameRef.current.value;
        const password =  passwordRef.current.value;

        if(userName.length < 5 && password.length<5){
            // alert("enter above 5 characters to submit the form");
            seterrorVisible(true)
        }
        else{

            const details = {
                user: userName,
                pass: password
            }

            setarr([...arr,details])
            console.log(details);
            console.log("submit the form");
        }
      
        userNameRef.current.value= "";
        passwordRef.current.value= "";
    }
    console.log(arr);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            ref={userNameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            ref={passwordRef}
          />
        </div>
        {errorVisible &&  <span style={{color:"red"}}>username and password must be greater than 5 characters</span>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form><br></br>

      <table border={1}> 
        <tr>
            <th style={{width:200}}>S.no</th>
            <th style={{width:300}}>user</th>
            <th>password</th>
        </tr>
            {
                arr.map((val,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{val.user}</td>
                        <td>{val.pass}</td>
                    </tr>
                ))
            }
      </table>
    </div>
  );
};


export default UncontrolForm;
