//    Topic as  file:   controller.productsroutes.js  //
//    Authur: suman 
//    Date:   28/04/2021  // 

module.exports = app => {
    const productSqlRouter = require('../routes/product/productSql');
    var router = require("express").Router();

     // Retrieve all Products
     router.get("/api/product1/view",product1.findAll);
  
    // Create a new Products
     router.post("/api/product1/add",product1.create);
  
    // Update a products with id
     router.put("/api/product1/edit/:id",product1.update);
  
    // Delete a product  with id

    router.delete("/api/product1/:id",product1.delete);
  
     app.use('/api/product1', router);

};