import React from'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" 


import Navbar from"./components/Navbar.component";
import ProductList from"./components/productslist.component";
import Editproducts from"./components/edit-products.components";
import Createproducts from"./components/create.products.component";
import Login from './components/login';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component= {ProductList} />
      <Route path="/edit/:id" component= {Editproducts} />
      <Route path="/create" component= {Createproducts} />
      <Route path="/login" component ={Login}/>
   </Router>

  ); 
}  


export default App;
 
