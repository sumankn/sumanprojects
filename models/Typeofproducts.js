

//    Topic as  file:   typeofproducts .js  //
//    Authur: suman 
//    Date:   30/04/2021        // 



const mongoose =require ('mongoose')
const TypeofproductsSchema = new mongoose.Schema({

           
        producttype :{  type : String, required : true },
        salesforce:{  type : String, required: true  },
        title:{ type : String, required: true },
        salesPriceEffectiveDate:{ type:Date,required: true,default:Date.now},
        ProductCategory:{ type: String,required: true },
        gtin:{ type : String, required: true },
        itemGroupId:{ type:Number, required: true },
        material:{type: String, required: true },
        mpn:{type: String, required: true },
        pattern:{ type:Number, required: true },
        price:{ type : Number, required:true },

},  {
    timestamps:true,

    }); 
    
    module.exports = mongoose.model('Typeofproduct',TypeofproductsSchema)