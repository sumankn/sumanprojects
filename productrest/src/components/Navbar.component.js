import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Products</Link>
           <div className ="collpase navbar-collapse">
            <ul  className ="navbar-nav mr-auto">
             <li className="navbar-navbar-item">
                <Link to ="/create" className="nav-link">createProducts</Link>
             </li>
             <li className="navbar-navbar-item">
                 <Link to ="/productlist" className="nav-link">productlist</Link>
             </li>

             <li className ="navbar-navbar-item">
                <Link to ="/users" className ="nav-link"> Users </Link>
             </li>
              </ul>
           </div>
        </nav>
       );
}
}