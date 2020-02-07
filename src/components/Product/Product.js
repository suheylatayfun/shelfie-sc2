import React from 'react';
import './../../styles/Product.css'
import axios from 'axios';

class Product extends React.Component{
    handleDelete=()=>{
        axios.delete(`/api/product/${this.props.id}`)
        .then(response=>{
            console.log(response);
            this.props.getProducts()
        })
    
    }
    render(){
        return(
            <div className="product_container">
                <img src={this.props.img} id="product_image" alt="product"/>
                <div className="product_info">
                <h3>{this.props.name}</h3>
                <h3>${this.props.price}</h3>    
                </div>  
                <div>
                <button onClick={this.handleDelete}>Delete</button>
                <button>Edit</button>
                </div>        
            </div>
        )
    }
}
export default Product;