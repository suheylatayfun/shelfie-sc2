getProducts=(req,res)=>{
    const db = req.app.get('db');
    db.getProducts()
    .then(products=>{
        res.status(200).json(products)
    })
    .catch(()=>{
        res.status(500).json('Error in getting products')
    })
}
addProduct=(req,res)=>{
    const db = req.app.get('db');
    // const {id}= +req.params;
    const {img,name,price}= req.body;
    db.addProduct(name,price,img)
    .then(product=>{
        res.status(200).json(product);
    })
}
deleteProduct=(req,res)=>{
    const db = req.app.get("db");
    const id = +req.params.id;
   db.deleteProduct(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json("Something happened."));
}


module.exports={
    getProducts,
    addProduct,
    deleteProduct
}