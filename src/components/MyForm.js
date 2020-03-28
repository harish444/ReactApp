import React, { Component } from "react";

class MyForm extends Component {

  state = {
    customer :{name:'',mobile:'',email:''},
    btnName:'save',
    btnClass:'btn btn-primary'
  }
  isEmpty(obj){
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }
  componentDidUpdate(prevProps) {
     if(prevProps!==this.props && !this.isEmpty(this.props.customer)){
       this.setState({
        customer:this.props.customer,
         btnName:'Update',
         btnClass:'btn btn-warning'
       })
     }
  }
  handleChange = event => {
      const {name,value}=event.target;
      let customer = this.state.customer;
      customer[name]= value;
      this.setState({customer})
    }
    
    formValidation(){
      if(document.getElementsByName('name')[0].value===''){
        alert('Enter Full Name');
        return false;
      }
      if(document.getElementsByName('mobile')[0].value===''){
        alert('Enter mobile');
        return false;
      }
      if(document.getElementsByName('email')[0].value===''){
        alert('Enter email');
        return false;
      }
      return true;
    }
    onFormSubmit = event =>{
      event.preventDefault();
      if(this.formValidation())
      {
        //send form data to App.js
        this.props.onFormSubmit(this.state.customer);
      }
      this.clearFormField();
    }
    clearFormField=()=>{
      this.setState({
        customer :{name:'',mobile:'',email:''},
        btnName:'save',
        btnClass:'btn btn-primary'
      });
      document.querySelector('form').reset();
    }
  

  render() {
    const {name,mobile,email}= this.state.customer
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit} className="mb-3">
          <div className="row justify-content-center">
            <div className="col-sm-3 p-2">
                <input type="text" value={name} className="form-control" name="name" placeholder="name" onChange={this.handleChange}/>
            </div>
            <div className="col-sm-3 p-2">
                <input type="number" value={mobile}  className="form-control" name="mobile" placeholder="mobile" onChange={this.handleChange}/>
            </div>
            <div className="col-sm-3 p-2">
                <input type="email" value={email}  className="form-control" name="email" placeholder="email" onChange={this.handleChange}/>
            </div>
            <div className="col-sm-3 p-2 text-right text-sm-left">
    <button type="submit" className={this.state.btnClass}> {this.state.btnName}</button>
            </div>
            </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
