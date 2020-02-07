import React from 'react';
import Product from '../Product/Product';
import axios from 'axios';


class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            products :[]
        }
    }
    componentDidMount(){
        this.getProducts();
    }
    getProducts=()=>{
        axios.get("/api/products")
        .then(response=>{
            // console.log(response.data)
            this.setState({products: response.data})
        })
        .catch(()=>console.log('Error in sending the response.'))
    }
    render(){
        const {products}= this.state;
        console.log(products)
        let mappedProduct = products.map(el=>{
            return(
                <Product
                key={el.id}
                name={el.name}
                img={el.img}
                price={el.price}
                id={el.id}   
                getProducts={this.getProducts}         
                />
            )
        })
        return(
            <div>
            {mappedProduct}
            </div>
        )
    }
}
export default Dashboard;