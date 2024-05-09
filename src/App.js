import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Kids from './Commponents/Kids';
import Men from './Commponents/Men';
import Navbarr from './Commponents/Navbarr';
import Women from './Commponents/Women';
import Trendy from "./Commponents/Trendy";
import Tshirt from "./Commponents/Tshirt";
import Hood from "./Commponents/Hood";
import Shirt from "./Commponents/Shirt";
import Formal from "./Commponents/Formal";
import Shorts from "./Commponents/Shorts";
import Jeans from "./Commponents/Jeans";
import Wtshirt from "./Commponents/Wtshirt";
import Wshirt from "./Commponents/Wshirt";
import Jeanshirt from "./Commponents/Jeanshirt";
import Wkurtha from "./Commponents/Wkurtha";
import Wtop from "./Commponents/Wtop";
import Wplaz from "./Commponents/Wplaz";
import Kparty from "./Commponents/Kparty";
import Ktshirt from "./Commponents/Ktshirt";
import Kdress from "./Commponents/Kdress";
import Kshirt from "./Commponents/Kshirt";
import Kpant from "./Commponents/Kpant";
import Kgdress from "./Commponents/Kgdress";
import Cartbag from "./Commponents/Cartbag";
import { CartProvider } from "./Commponents/CartContext";


function App() {
  return (
    <>
   <CartProvider>
  <BrowserRouter>
  <Navbarr/>
  <Routes>
    <Route path='/' element = {<Trendy/>}></Route>
    <Route path='/Men' element = {<Men/>}></Route>
    <Route path='/Women' element = {<Women/>}></Route>
    <Route path='/Kids' element = {<Kids/>}></Route>
    <Route path='/Tshirt' element = {<Tshirt/>}></Route>
    <Route path='/Hood' element = {<Hood/>}></Route>
    <Route path='/Shirt' element = {<Shirt/>}></Route>
    <Route path='/Formal' element = {<Formal/>}></Route>
    <Route path='/Shorts' element = {<Shorts/>}></Route>
    <Route path='/Jeans' element = {<Jeans/>}></Route>
    <Route path='/Wtshirt' element = {<Wtshirt/>}></Route>
    <Route path='/Wshirt' element = {<Wshirt/>}></Route>
    <Route path='/Jeanshirt' element = {<Jeanshirt/>}></Route>
    <Route path='/Wkurtha' element = {<Wkurtha/>}></Route>
    <Route path='/Wtop' element = {<Wtop/>}></Route>
    <Route path='/Wplaz' element = {<Wplaz/>}></Route>
    <Route path='/Kparty' element = {<Kparty/>}></Route>
    <Route path='/Ktshirt' element = {<Ktshirt/>}></Route>
    <Route path='/Kdress' element = {<Kdress/>}></Route>
    <Route path='/Kshirt' element = {<Kshirt/>}></Route>
    <Route path='/Kpant' element = {<Kpant/>}></Route>
    <Route path='/Kgdress' element = {<Kgdress/>}></Route>
    <Route path='/Cartbag' element = {<Cartbag/>}></Route>
    
  </Routes>
</BrowserRouter>
</CartProvider> 
    </>
  );
}

export default App;
