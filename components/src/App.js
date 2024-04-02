import logo from './logo.svg';
import './App.css';
// import Table from './functionalComponents/table';
// import Image from './functionalComponents/image';
// import ButtonComponent from './classComponents/button';
// import CustomList  from './classComponents/list';
// import ListItems from './classComponents/ListItems';
// import ListComponent from './classComponents/ListItems';
// import NewList from './classComponents/ListItems';

// import CustomImage from './classComponents/CustomImage';
import { CustomImage,Table } from './classComponents/CustomImage';
import ListComponent from './classComponents/one';

function App() {
  return (
    <div >
      {/* <Table></Table>
      <ButtonComponent></ButtonComponent>
      <CustomList></CustomList>
      <Image></Image>
      <h1>HELLO TODAY I HAVE LEARNT ABOUT GIT PR AND CREATING BRANCHES FROM LOCAL</h1>
      <h1>28-03-24</h1>
      <ListItems></ListItems>
      <ListComponent></ListComponent>
      <NewList></NewList>
      <ListItems></ListItems> */}
      <CustomImage></CustomImage>
      <Table></Table>

      <ListComponent></ListComponent>

      


    </div>
  );
}

export default App;
