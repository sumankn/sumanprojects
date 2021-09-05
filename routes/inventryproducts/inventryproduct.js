 // Topic as  file:    inventryproducts.js //
//    Authur: suman 
//    Date:  12/05/2021        // 

const express  = require('express');
const router = express.Router() 
const Inventryproduct = require('../../models/Inventryproduct')
router.use(express.json())

         
// Get all the inventryproducts
router.get('/api/inventryproducts/view', (req,res) => {
    Inventryproduct.find()
    .then(order => { 
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving inventryproducts."
        });
    });
});


// Get one  inventryproducts
router.get('/api/inventryproducts/view/:id', (req,res) => {
  const id = req.params.id;
  Inventryproduct.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found inventryproducts  with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving  inventryproducts with id=" + id });
    });
});


//create a inventryproducts
router.post('/api/inventryproducts/add', (req,res)=>  {
  // Validate request
 if (!req.body.customLabel4) {
   res.status(400).send({ message: "Content can not be empty!" });
  return;
 }
    const invent = new Inventryproduct({
            barcode :req.body.barcode,                    
            price:req.body.price,
            countrycodeoforigin:req.body.countrycodeoforigin,
            harmonizedsystemcode:req.body.harmonizedsystemcode,
            tracked:req.body.tracked,
            locationid:req.body.locationid,
            countryharmonizedsystemcodes:req.body.countryharmonizedsystemcodes,
            compareatprice:req.body.compareatprice,
            fulfillmentservice:req.body.fulfillmentservice,
            grams:req.body.grams,
            id:req.body.id,
            imageid:req.body.imageid,
            productid:req.body.productid,
            requiresshipping:req.body.requiresshipping,
            sku:req.body.sku,
            taxable:req.body.taxable,
            taxcode:req.body.taxcode,
            title:req.body.title,
            inventoryitemid:req.body.inventoryitemid,
            availability:req.body.availability,
            salePrice:req.body.salePrice,
            quantity:req.body.quantity,
            sellOnGoogleQuantity:req.body.sellOnGoogleQuantity,
            installment:req.body.installment,
            loyaltyPoints:req.body.loyaltyPoints,
            pickup:req.body.pickup,
            instoreProductLocation:req.body.instoreProductLocation,
            customLabel0:req.body.customLabel0,
            customLabel1:req.body.customLabel1,
            customLabel2:req.body.customLabel2,
            customLabel3:req.body.customLabel3,
            customLabel4:req.body.customLabel4

   });

   // Save inventryproducts in the database
invent.save()
   .then(data => {
       res.send(data);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the inventryproducts."
       });
   });
});

   //update the inventryproducts

router.put('/api/inventryproducts/update/:id', (req, res) => {

        if (!req.body) {
          return res.status(400).send({
            message: "Data to update can not be empty!"});
            return;
        }
        const id = req.params.id;
      
        Inventryproduct.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update inventryproducts  with id=${id}. orders was not found!`
              });
            } else res.send({ message: " inventryproducts was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating inventryproducts   with id=" + id
            });
          });
        });
  
        
       // Delete the one inventryproducts in the database

      router.delete('/api/inventryproducts/:id',(req,res) =>  {
           const id = req.params.id;
           Inventryproduct.findByIdAndRemove(id)
              .then(data => {
                  if(!data) {
                     res.status(404).send({
                        message: `Cannot delete inventryproducts with id=${id}. Maybe product was not found!`
                     });

                     }else {
                        res.send({
                            message: "inventryproducts  was deleted successfully!"

                     });

                    }    
              })

              .catch(err => {
                res.status(500).send({
                 message: "Could not delete inventryproducts with id=" + id
              
               
            });
        });
    });

 // Delete all inventryproducts from the database.
 router.delete('/api/inventryproducts/deleteall/:id',(req,res) =>  {
    Inventryproduct.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} inventryproducts were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all inventryproducts."
      });
    });  
});


              
 module.exports = router;
        