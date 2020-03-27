import React, { Component } from "react";

class Customer extends Component {
  onHandleDelete = id => {
    this.props.onHandleDelete(this.props.customer.id)
  };
  onHandleUpdate = obj => {
    this.props.onHandleUpdate(this.props.customer)
  };
  
  render() {
    const { id, name, mobile, email } = this.props.customer;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{mobile}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-sm btn-warning mr-2" onClick={this.onHandleUpdate}>Edit</button>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.onHandleDelete}
          >
            Del
          </button>
        </td>
      </tr>
    );
  }
}

export default Customer;
