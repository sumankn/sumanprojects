//   Topic as  file:    order.js //
//    Authur: suman 
//    Date:  11/05/2021        // 


const express  = require('express');
const router = express.Router() 
const Orders = require('../../models/Orders')
router.use(express.json())

         
// Get all the orders
router.get('/api/order/view', (req,res) => {
    Orders.find()
    .then(order => { 
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    });
});


// Get one  order
router.get('/api/order/vieworder/:id', (req,res) => {
  const id = req.params.id;
  Orders.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found orders  with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving  orders with id=" + id });
    });
});

//create a order
router.post('/api/order/add', (req,res)=>  {
  // Validate request
 if (!req.body.orderStatusId) {
   res.status(400).send({ message: "Content can not be empty!" });
  return;
 }
    const order = new Orders ({
        number : req.body.number,
        customerId: req.body.customerId,
        paymentId: req.body.paymentId,
        dispatchId:req.body.dispatchId,
        partnerId: req.body.partnerId,
        shopId: req.body.shopId,
        invoiceAmount:req.body.invoiceAmount,
        invoiceAmountNet: req.body.invoiceAmountNet,
        invoiceShipping: req.body.invoiceShipping,
        invoiceShippingNet:req.body.invoiceShippingNet,
        transactionId: req.body.transactionId,
        comment: req.body.comment,
        customerComment: req.body.customerComment,
        internalComment: req.body.internalComment,
        net: req.body.net,
        taxFree: req.body.taxFree,
        temporaryId: req.body.temporaryId,
        referer: req.body.referer,
        trackingCode: req.body.trackingCode,
        languageIso: req.body.languageIso,
        currency: req.body.currency,
        currencyFactor: req.body.currencyFactor,
        remoteAddress: req.body.remoteAddress,
        paymentStatusId:req.body.paymentStatusId,
        orderStatusId: req.body.orderStatusId

   });

   // Save order in the database
order.save()
   .then(data => {
       res.send(data);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Note."
       });
   });
});

   //update the order

router.put('/api/order/update/:id', (req, res) => {

        if (!req.body) {
          return res.status(400).send({
            message: "Data to update can not be empty!"});
            return;
        }
        const id = req.params.id;
      
        Orders.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update order  with id=${id}. orders was not found!`
              });
            } else res.send({ message: " orders was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating order   with id=" + id
            });
          });
        });
  
        
       // Delete the one order in the database

      router.delete('/api/order/:id',(req,res) =>  {
           const id = req.params.id;
      Orders.findByIdAndRemove(id)
              .then(data => {
                  if(!data) {
                     res.status(404).send({
                        message: `Cannot delete orders with id=${id}. Maybe order was not found!`
                     });

                     }else {
                        res.send({
                            message: "Orders  was deleted successfully!"

                     });

                    }    

              })

              .catch(err => {
                res.status(500).send({
                 message: "Could not delete orders with id=" + id
              
               
            });
        });
    });

 // Delete all order  from the database.
 router.delete('/api/order/deleteall/:id',(req,res) =>  {
    Orders.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} orders were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders."
      });
    });  
});
              

 module.exports = router;
        