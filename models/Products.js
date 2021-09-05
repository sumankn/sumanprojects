
//*...........    Topic as  file:   server .js  //
// -----------   Authur: suman 
// ...........   Date:   26/04/2021        // 

const mongoose =require ('mongoose')

const ProductsSchema = new mongoose.Schema({

    name : { type : String, required : true },
    packageDimensions :{type : String, required : true},
    productSize:{  type : Number, required : true  },
    brandName:{ type : String, required:true  },
    packaging:{ type : String,  required:true },
    productWeight:{ type:Number, required:true },
    status:{  type:String, required:true },
    productImage:{  type:String,required:true },
    title:{  type:String, required:true },
    availability: { type:String, required:true },   
    offerDiscount: {  type:String,  required:true },
    productType: {   type:String, required:true },
    productColor: { type:String, required:true },
    availabilityDate:{  type:String, required:true },
    country: {  type:String,  required:true }, 
    maintenance:{  type:String,  required:true },
    warranty:{ type:String, required:true},
    channalType:{ type:String,  required:true },
    availabilityDate:{ type : Date,required: true,default:Date.now }
}, {
    timestamps:true,
    }); 


    module.exports = mongoose.model('Products',ProductsSchema)