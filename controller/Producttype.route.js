//    Topic as  file:   controller.productsroutes.js  //
//    Authur: suman 
//    Date:   28/04/2021  // 

module.exports = app => {
    const Typeofproducts = require("../models/Typeofproducts");
    var router = require("express").Router();

    // Retrieve all Products
    router.get("/api/producttype/view",Typeofproducts.findAll);
  
  
    // Retrieve a single Product with id
    
    router.get("/api/producttype/viewproducttype/:id", Typeofproducts.findOne);

    // Create a new Products

    router.post("/api/producttype/add", Typeofproducts.create);
  
    // Update a products with id
    router.put("/api/productype/update/:id",Typeofproducts.update);
  
    // Delete a product  with id

    router.delete("/api/producttype/:id", Typeofproducts.delete);
  
    // Delete all products in the database
    
    router.delete("/api/product/deleteall/:id", Typeofproducts.deleteAll);
  
    app.use('/api/product', router);

};