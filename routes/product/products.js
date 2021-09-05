
//    Topic as  file:    app .js  //
//    Authur: suman 
//    Date:  10/04/2021        // 

const express  = require('express');
const router = express.Router()
const Products  = require('../../models/Products')
router.use(express.json())
const multer = require('multer');


///    uploading image ........................
const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb (null,'uploads');
  },
  limits:{
      files: 1,
      fileSize: 1024 * 1024
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  },
  onFileUploadStart: function(file) {
      console.log("Inside uploads");
      if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype === 'image/gif'|| file.mimetype == 'image/png') {
          return true;
      }
      else
      {
          return false;      
      }
  }
});

const upload = multer({storage : storage})

// Get all the product
router.get('/api/product/view', (req,res) => {
    Products.find()
    .then(prod1 => { 
        res.send(prod1);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    });
});

// Get one product 
router.get('/api/product/viewproduct/:id', (req,res) => {
  const id = req.params.id;
  Products.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found product  with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving  product  with id=" + id });
    });
});

//create a product 
router.post('/api/product/add',upload.single('productImage'),async (req,res)=>  {
  
  // Validate request
 if (!req.body.channalType) {
   res.status(400).send({ message: "Content can not be empty!" });
  return;
 }
    const prod1 = new Products ({
    name:req.body.name,
    packageDimensions:req.body.packageDimensions,
    productSize:req.body.productSize,
    brandName:req.body.brandName,
    packaging:req.body.packaging,
    productWeight:req.body.productWeight,
    status:req.body.status,
    productImage:req.file.path,
    title:req.body.title,
    availability:req.body.availability,
    offerDiscount:req.body.offerDiscount,
    productType:req.body.productType,
    productColor:req.body.productColor,
    country:req.body.country,
    maintenance:req.body.maintenance,
    warranty:req.body.warranty,
    channalType:req.body.channalType
   });

   // Save products in the database
prod1.save()
   .then(data => {
       res.send(data);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Note."
       });
   });
});

   //update the products

router.put('/api/product/update/:id', (req, res) => {

        if (!req.body) {
          return res.status(400).send({
            message: "Data to update can not be empty!"});
            return;
        }
        const id = req.params.id;
      
        Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update product  with id=${id}. product was not found!`
              });
            } else res.send({ message: "products  was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating product  with id=" + id
            });
          });
        });
  
        
       // Delete the one product in the database

      router.delete('/api/product/:id',(req,res) =>  {
           const id = req.params.id;
      Products.findByIdAndRemove(id)
              .then(data => {
                  if(!data) {
                     res.status(404).send({
                        message: `Cannot delete Product  with id=${id}. Maybe product was not found!`
                     });

                     }else {
                        res.send({
                            message: "Product  was deleted successfully!"

                     });

                    }    

              })

              .catch(err => {
                res.status(500).send({
                 message: "Could not delete products  with id=" + id
              
               
            });
        });
    });

 // Delete all Products  from the database.
 router.delete('/api/product/deleteall/:id',(req,res) =>  {
    Products.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Product were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Products."
      });
    });  
});
              

 module.exports = router;
        