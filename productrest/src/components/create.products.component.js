import React, { Component } from 'react';
export default class createproducts extends Component {
 
    constructor(props) {
                super(props);
                this.onChangename  = this.onChangename.bind(this); 
                this.onChangepackageDimensions  = this.onChangepackageDimensions.bind(this); 
                this.onChangeproductSize = this.onChangeproductSize.bind(this); 
                this.onChangebrandName = this.onChangebrandName.bind(this); 
                this.onChangepackaging = this.onChangepackaging.bind(this); 
                this.onChangeproductWeight = this.onChangeproductWeight.bind(this); 
                this.onChangestatus = this.onChangestatus.bind(this); 
                this.onChangeproductImage = this.onChangeproductImage.bind(this); 
                this.onChangetitle = this.onChangetitle.bind(this); 
                this.onChangeavailability  = this.onChangeavailability.bind(this); 
                this.onChangeofferDiscount = this.onChangeofferDiscount.bind(this); 
                this.onChangeproductType = this.onChangeproductType.bind(this); 
                this.onChangeproductColor= this.onChangeproductColor.bind(this); 
                this.onChangeavailabilityDate = this.onChangeavailabilityDate.bind(this); 
                this.onChangecountry = this.onChangecountry.bind(this); 
                this.onChangemaintenance = this.onChangemaintenance.bind(this); 
                this.onChangewarranty = this.onChangewarranty.bind(this); 
                this.onChangechannalType = this.onChangechannalType.bind(this); 
                        
        this.State ={
            name : '',
            packageDimensions :'',
            productSize:'',
            brandName:'',
            packaging:'',
            productWeight:'',
            status:'',
            productImage:'', 
            title:'',
            availability:'',   
            offerDiscount: '',
            productType: '',
            productColor: '',
            availabilityDate: new Date(),
            country: '',
            maintenance:'',
            warranty:'',
            channalType:'',
            products:[]
        }
    }
        componentDidMount(){
            this.setState({  products:['test products'], name:'test products'
            })
        }

    onChangename(e) {
        this.setState({
            name:e.target.value
        });
    }

    onChangepackageDimensions(e) {
        this.setState({
            packageDimensions:e.target.value
        });
    }

    onChangeproductSize(e) {
        this.setState({
            productSize:e.target.value
        });
    }

    onChangebrandName(e) {
        this.setState({
            nambrandNamee:e.target.value
        });
    }

    onChangepackaging(e) {
        this.setState({
            packaging:e.target.value
        });
    }

    onChangeproductWeight(e) {
        this.setState({
            productWeightname:e.target.value
        });
    }
    onChangestatus(e) {
        this.setState({
            status:e.target.value
        });
    }
    onChangeproductImage(e) {
        this.setState({
            productImage:e.target.value
        });
    }

    onChangetitle(e) {
        this.setState({
            title:e.target.value
        });
    }

    onChangeavailability(e) {
        this.setState({
        availability:e.target.value
        });
    }

    onChangeofferDiscount(e) {
        this.setState({
            offerDiscount:e.target.value
        });
    }

    onChangeproductType(e) {
        this.setState({
            productType:e.target.value
        });
    }

    onChangeproductColor(e) {
        this.setState({
            productColor:e.target.value
        });
    }

    onChangeavailabilityDate(e) {
        this.setState({
            availabilityDate:e.target.value
        });
    }

    onChangecountry(e) {
        this.setState({
            country:e.target.value
        });
    }

    onChangemaintenance(e) {
        this.setState({
            maintenance:e.target.value
        });
    }

    onChangewarranty(e) {
        this.setState({
            warranty:e.target.value
        });
    }

    onChangechannalType(e) {
        this.setState({
            channalType:e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

    const Products = {

        name : this.State.name,
        packageDimensions :this.state.packageDimensions,
        productSize:this.state.productSize,
        brandName:this.state.brandName,
        packaging:this.state.packaging,
        productWeight:this.state.productWeight,
        status:this.state.status,
        productImage:this.state.productImage, 
        title:this.state.title,
        availability: this.state.availability, 
        offerDiscount: this.state.offerDiscount,
        productType:this.state.productType,
        productColor: this.state.productColor,
        availabilityDate: this.state.availabilityDate,
        country: this.state.country,
        maintenance:this.state.maintenance,
        warranty:this.state.warranty,
        channalType:this.state.channalType
    }
        console.log(Products);
        window.location('/')
    }
          render() {
               return (
                   <div>
                       <h3>create new products</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label> name </label>
                                <select ref="nameInput"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangename}>
                                   {
                                       this.State.Products.map(function(Products) {
                                           return <option
                                             key  =  {Products}
                                             value = {Products}>{Products}
                                            </option>;
                                       })
                                    }
                             </select>

                            </div>

                            <div className="form-group">
                                <label>name</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.name}
                                  onChange={this.onChangepackagename}
                              />
                              </div>

                            <div className="form-group">
                                <label>packageDimensions</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.packageDimensions}
                                  onChange={this.onChangepackageDimensions}
                                  />
                            </div>
                            <div className="form-group">
                                <label>productSize</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.packageproductSize}
                                  onChange={this.onChangeproductSize}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>brandName</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.brandName}
                                  onChange={this.onChangebrandName}
                                  />
                                  </div>
                                  <div className="form-group">
                                <label>packaging</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.packaging}
                                  onChange={this.onChangepackaging}
                                  />
                                  </div>
                                  <div className="form-group">
                                <label>productWeight</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.productWeight}
                                  onChange={this.onChangeproductWeight}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>status</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.status}
                                  onChange={this.onChangestatus}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>productImage s</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.productImage }
                                  onChange={this.onChangeproductImage}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>title</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.title}
                                  onChange={this.onChangetitle}
                                  />

                                  </div>

                                  <div className="form-group">
                                <label>availability   </label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.availability}
                                  onChange={this.onChangeavailability}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>offerDiscount</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.offerDiscount}
                                  onChange={this.onChangeofferDiscount}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>productType</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.productType}
                                  onChange={this.onChangepackageDimensions}
                                  />
                                  </div>


                                  <div className="form-group">
                                <label>productColor</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.productColor}
                                  onChange={this.onChangeproductColor}
                                  />

                                  </div>

                                 <div className="form-group">
                                <label>availabilityDate</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.availabilityDate}
                                  onChange={this.onChangeavailabilityDate}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>country</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.country}
                                  onChange={this.onChangecountry}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>maintenance</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.maintenance}
                                  onChange={this.onChangemaintenance}
                                  />
                                  </div>

                                  <div className="form-group">
                                <label>warranty</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.warranty}
                                  onChange={this.onChangewarranty}
                                  />
                                  </div>

                                  
                                  <div className="form-group">
                                <label>channalType</label>
                                <input type = "text"
                                required
                                  className="form-control"
                                  value={this.state.channalType}
                                  onChange={this.onChangechannalType}
                                  />
                                  </div>
                                  <div className="form-group">
                                      <input type ="submit" value = "create products" className="btn btn-primary"></input>
                                  </div>
                             </form>
                      </div>
               )
       }
            
}