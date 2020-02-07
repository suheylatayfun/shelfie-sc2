import React from 'react';
import "./../../styles/Form.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Form extends React.Component{
    constructor(){
        super();
        this.state={
            img:'',
            name:'',
            price:0,
            redirect:false,
        }
        this.handleInputChange= this.handleInputChange.bind(this);
        this.handleReset= this.handleReset.bind(this);
    }
    handleInputChange(e){
        this.setState({[e.target.name]:e.target.value})
           
    }
    handleReset(){
        this.setState({
            img:'',
            name:'',
            price:0
        })
    }
    handleAdd=(e)=>{
        e.preventDefault();
        const {img,name,price}= this.state;
        let newProduct ={img,name,price}        
        axios.post('/api/product',newProduct)
        .then(response=>{
            this.setState({redirect:true})
        })
        .catch()
    

    }
    
    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }

        return(
            <form className="form-container">
                <img alt="product_image" src={this.state.img} className="form-image"/>
                <h4>Image url:</h4>
                <input name="img" value={this.state.img} onChange={this.handleInputChange}/>
                <h4>Product Name:</h4>
                <input name="name" value={this.state.name} onChange={this.handleInputChange}/>
                <h4>Price:</h4>
                <input name="price" value={this.state.price} onChange={this.handleInputChange}/>
                <div className="button-container">
                <button onClick={this.handleReset}>Cancel</button>
                 <button onClick={this.handleAdd}>Add to Inventory</button>
                </div>

            </form>
        )
    }
}
export default Form;