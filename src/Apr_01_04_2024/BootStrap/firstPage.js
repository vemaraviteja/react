import Customcard from "../ReactBootstrap/Card";



const FirstPage = ()=>{
    return(

        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <Customcard visible={true} name={"Teja"} designation={"FullStack Devloper"}  Image={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}></Customcard>
      </div>
      <div className="col-sm-4">
      <Customcard visible={false} name={"Prashanth"} designation={"React Devloper"} Image={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}></Customcard>
      </div>
      <div className="col-sm-4">
      <Customcard visible={true} name={"Roshan"} designation={"Sql Architect"} Image={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}></Customcard>
      </div>
    </div>
  </div>
</>

    )
}
export default FirstPage;
