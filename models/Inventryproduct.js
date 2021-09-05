
//    Authur: suman 
//    Date:   11/05/2021        // 

const mongoose =require ('mongoose')
const InventryproductsSchema = new mongoose.Schema({

            barcode :{type :Number, required : true},                      
            price:{type :Number, required : true},
            countrycodeoforigin:{type :Number, required : true},
            harmonizedsystemcode:{type :Number, required : true},
            tracked:{type :Number, required : true},
            locationid:{type :Number, required : true},
            countryharmonizedsystemcodes:{type :Number, required : true},
            compareatprice:{type :Number, required : true},
            fulfillmentservice:{type :String, required : true},
            grams:{type :Number, required : true},
            id:{type :Number, required : true},
            imageid:{type :Number, required : true},
            productid:{type :Number, required : true},
            requiresshipping:{type :String, required : true},
            sku:{type :Number, required : true},
            taxable:{type :Number, required : true},
            taxcode:{type :Number, required : true},
            title:{type : String, required : true},
            inventoryitemid:{type :Number, required : true},
            availability:{type :Number, required : true},
            salePrice:{type :Number, required : true},
            salePriceEffectiveDate:{type : Date,required: true,default:Date.now },
            quantity:{type :Number, required : true},
            sellOnGoogleQuantity:{type :Number, required : true},
            installment:{type :String, required : true},
            loyaltyPoints:{type :Number, required : true},
            pickup:{type :String, required : true},
            instoreProductLocation:{type :String, required : true},
            customLabel0:{type :String, required : true},
            customLabel1:{type :String, required : true},
            customLabel2:{type :String, required : true},
            customLabel3:{type :String, required : true},
            customLabel4:{type :String, required : true}
         
}, {
    timestamps:true,
    }); 

    module.exports = mongoose.model('InventryproductsSchema',InventryproductsSchema)