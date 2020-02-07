import React from "react";
import "./../../styles/Product.css";
import axios from "axios";
import {Link} from 'react-router-dom';

class Product extends React.Component {
    constructor(){
        super();
        this.state={
            // editStatus:true
        }
    }
  handleDelete = () => {
    axios.delete(`/api/products/${this.props.id}`).then(response => {
      console.log(response);
      this.props.getProducts();
    });
  };
  render() {
    return (
      <div className="product_container">
        <img src={this.props.img} id="product_image" alt="product" />
        <div className="product_info">
          <h3>{this.props.name}</h3>
          <h3>${this.props.price}</h3>

          <div>
            <button onClick={this.handleDelete} id="product_delete">Delete</button>
            <Link to={{pathname:`/edit/${this.props.id}`, state:{editStatus:true}}}><button className="product_edit">Edit</button> </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
