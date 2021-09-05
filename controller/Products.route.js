
//    Topic as  file:   controller.productsroutes.js  //
//    Authur: suman 
//    Date:   28/04/2021  // 

    module.exports = app => {
    const Products = require("../models/Products");
    var router = require("express").Router();
  
    // Retrieve all Products
    router.get("/api/product/view", Products.findAll);
    
    // Retrieve a single Product with id
    router.get("/api/product/viewproduct/:id", Products.findOne);
    // Create a new Products
    router.post("/api/product/add", Products.create);
    
    // Update a products with id
    router.put("/api/product/update/:id", Products.update);  
  
    // Delete a product  with id
    router.delete("/api/product/:id", Products.delete);

    // Delete all products in the database
    router.delete("/api/product/deleteall/:id", Products.deleteAll);

    app.use('/api/product', router);

};