

//    Topic as  file:   producttypes.js  //
//    Authur: suman 
//    Date:   30/04/2021        // 


const express  = require('express');
const router = express.Router()
const Typeofproducts = require('../../models/Typeofproducts')
router.use(express.json())


//Get all the producttypes
router.get('/api/producttype/view', (req,res) => {
    Typeofproducts.find()
    .then(prod => {
        res.send(prod);  
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Productstype."
        });
    });
});

// Get one product 
router.get('/api/producttype/view/:id', (req,res) => {
    const id = req.params.id;
  
    Typeofproducts.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found producttype with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving  producttype  with id=" + id });
      });
  });


// Add all the producttypes
router.post('/api/producttype/add', (req, res)  => {
     // Validate request
  if (!req.body.price) {
    res.status(400).send({ message: "Content can not be empty!" });
   return;
  }
    const prod = new Typeofproducts ({
        producttype:req.body.producttype,
        salesforce:req.body.salesforce,
        title:req.body.title,
        salesPriceEffectiveDate:req.body.salesPriceEffectiveDate,
        ProductCategory:req.body.ProductCategory,
        gtin:req.body.gtin,
        itemGroupId:req.body.itemGroupId,
        material:req.body.material,
        mpn:req.body.mpn,
        pattern:req.body.pattern,
        price:req.body.price
    });

    // Save products in the database
prod.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ."
        });
    });
});


  //update the producttype

router.put('/api/producttype/update/:id', (req, res) => {

    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"});
        return;
    }
    const id = req.params.id;
  
    Typeofproducts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update producttype  with id=${id}. product was not found!`
          });
        } else res.send({ message: "product type  was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating producttype  with id=" + id
        });
      });
    });

    //Delete the one productypes  in the database
    router.delete('/api/producttype/:id',(req,res) =>  {
        const id = req.params.id;
    Typeofproducts.findByIdAndRemove(id)
           .then(data => {
               if(!data) {
                  res.status(404).send({
                     message: `Cannot delete Producttype   with id=${id}. Maybe producttype was not found!`
                  });

                  }else {
                     res.send({
                         message: "Producttype  was deleted successfully!"

                  });
     
                 }    
           })

           .catch(err => {
             res.status(500).send({
              message: "Could not delete producttype  with id=" + id
            
         });
     });
 });

// Delete all Products  from the database.
router.delete('/api/producttype/deleteall/:id',(req,res) =>  {
 Typeofproducts.deleteMany({})
 .then(data => {
   res.send({
     message: `${data.deletedCount} Producttype  were deleted successfully!`
   });
 })
 .catch(err => {
   res.status(500).send({
     message:
       err.message || "Some error occurred while removing all Productttypes."
   });
 });  
});
           

module.exports = router;