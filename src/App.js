import logo from './logo.svg';
import './App.css';
import Profile from './classComponent/one';
import Table from './classComponent/Table';

import List from './classComponent/List';
import TableComponent from './Day29/03/24/Table';
import ButtonComponent from './Day29/03/24/Button';
import { Grettings } from './Day29/03/24/Greeting';
import ConditionalRendering from './Day29/03/24/ConditionalRendering';
import { Developers } from './Day29/03/24/Developers';

import Child from './Day29/03/24/ChildProp';
import CustomText from './Apr_01_04_2024/Inline';
import FirstPage from './Apr_01_04_2024/BootStrap/firstPage';
import ButtonComponents from './Apr_02_04_2024/button';
import Fruits from './Apr_02_04_2024/Fruits';
import Fruits2 from './Apr_02_04_2024/Fruits2';
import { Button } from 'bootstrap';
import Curd from './Apr_03_04_2024/Curd';
import Repeat from './Repeat/repeat';
import FtechData from './Apr_04_04_2024/FetchData';


function App() {
  return (
    <div >
       <h1>Fetching data</h1>
      <FtechData></FtechData>




      <FirstPage></FirstPage>

    
      
     {/* <Profile></Profile> */}

      <Table></Table>
      {/* <List></List> */}

      {/* <ButtonComponent  text={"Login"}></ButtonComponent>
      <ButtonComponent text={"Sign-up"}></ButtonComponent> */}
      {/* <ButtonComponent >
          Login
        Login     here this login is children to the ButtonComponent and bydefault here it consoder as children and it like object {children:"Login"}
      </ButtonComponent> */}
      

      <ButtonComponent>
        {/* now here we are writing in jsx */}
        <button>Login</button>

      </ButtonComponent>


      <TableComponent></TableComponent>

      <Grettings>
        <h1>Good morining</h1>
      </Grettings>
      <Grettings>
        <h1>Good AfterNoon</h1>
      </Grettings>
      <Grettings>
        <h1>Good Night</h1>
      </Grettings>
      
      <ConditionalRendering></ConditionalRendering>

      <Developers></Developers>

      <Child></Child>

      <CustomText></CustomText>

      <ButtonComponents></ButtonComponents>

      <Fruits></Fruits>

      <Fruits2></Fruits2><br></br><br></br>
      <h1>03-04-2024</h1>
      {/* <Curd></Curd> */}
      <h1>REPEAT THE CRUD TASK</h1>
      <Repeat></Repeat>
     
    </div>
  );
}

export default App;
