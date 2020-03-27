import React, { Component } from "react";
import Customer from './Customer'

class ListCustomer extends Component {
  onHandleDelete = id =>{
    this.props.onHandleDelete(id)
  }
  onHandleUpdate= obj =>{
    this.props.onHandleUpdate(obj)
  }

  
  render() {
    const customers= this.props.customers
    return (
      <div className="container">
        <table className="table table-borderd table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map(objcustomer => {
                return <Customer customer={objcustomer} key={objcustomer.id} onHandleDelete={this.onHandleDelete} onHandleUpdate={this.onHandleUpdate}/>
              }
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListCustomer;
