import logo from './logo.svg';
import './App.css';
import Table from './functionalComponents/table';
import Image from './functionalComponents/image';
import ButtonComponent from './classComponents/button';
import CustomList  from './classComponents/list';

function App() {
  return (
    <div >
      <Table></Table>
      <ButtonComponent></ButtonComponent>
      <CustomList></CustomList>
      <Image></Image>
    </div>
  );
}

export default App;
