import { useState } from 'react';
import './App.css';
import ChildrenProps from './components/ChildrenProps';
import ClassComp from './components/ClassComp';
import ClassEventDemo from './components/ClassEventDemo';
import ClassPropDemo from './components/ClassPropDemo';
import ClassStateDemo from './components/ClassStateDemo';
import Conditionalrendering from './components/Conditionalrendering';
import FunComp from './components/FunComp';
import FunEventDemo from './components/FunEventDemo';
import FunPropDEmo from './components/FunPropDEmo';
import FunStateDemo from './components/FunStateDemo';
import ListRendering from './components/ListRendering';
import Products from './components/product/Products';
import CSSinReact from './components/CSSinReact';
import styles from './app.module.css'
import AddUser from './components/AddUser';
import FormusingFormik from './components/FormusingFormik';
import EmployeeClass from './components/EmployeeClass';
import PureCompDemo from './components/PureCompDemo';
import Refinclass from './components/RefinClass';
import RefinFun from './components/RefinFun';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/Cart';

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
//     <div className='container'>
//       <h1 className="text-danger"> Hello React </h1>
//         <h2 className={`success ${styles.error}`}>Welcome to Project</h2>
//         {/* <FunComp/>
//         <ClassComp/> */}
//         {/* <ClassPropDemo username="happy singh" address="Punjab"/>
//         <FunPropDEmo username="sad singh" address="Pakistan"/> */}

//       {/* <ClassEventDemo></ClassEventDemo>
//       <hr/>
//       <FunEventDemo></FunEventDemo> */}

//       {/* <ClassStateDemo/>
//       <hr/>
//       <FunStateDemo/> */}

//       {/* <ChildrenProps uname="abc" address="xyz">
//         <h3>Children prop</h3>
//         <h4>helllooooooooooo</h4>
//       </ChildrenProps> */}
      
//       {/* <button type="button" class="btn btn-primary" 
//         onClick={()=>setIsLoggedIn(!isLoggedIn)}>
//           {isLoggedIn==false ? "Login" :"Logout"}
//       </button>
//       <Conditionalrendering logging={isLoggedIn}/> */}

//       {/* <ListRendering/> */}

//       {/* <Products/> */}

//       {/* <CSSinReact/> */}

//       {/* <AddUser/> */}

//       {/* <FormusingFormik/> */}

//       {/* <EmployeeClass empid="1001" ename="Smit" doj="2022-09-10" basic="20000" hra='3000' da='2000'/> */}

//       {/* <PureCompDemo/> */}

//       {/* <Refinclass/> */}

//       {/* <EmployeeClass empid="1001" ename="Smit" doj="2022-09-10" basic="20000" hra='3000' da='2000'/> */}

//       {/* <RefinFun/> */}

//       {/* <button type="button" class="btn btn-primary" 
//       onClick={()=>setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn==false ? "Login" :"Logout"}
//       </button>
//       {
//         isLoggedIn ? <ComponentLifeCycle/> :null 
//       } */}

//     {/* </div> */}

    <>
      <Navbar/>
      <Container>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/products' element={<ProductDetails/>}></Route>
        <Route path='/add' element={<AddUser/>}></Route>
        <Route path='/form/formik' element={<FormusingFormik/>}/>
        <Route path='/products/details/:product' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Container>
    </>

  );
}

export default App;
