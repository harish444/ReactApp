import React from "react";
import Loader from './components/Loader';
import List_Customer from "./components/List_Customer";
import axios from "axios";
import MyForm from "./components/MyForm";
class App extends React.Component {
  state = {
    customers: [],
    customer: {},
    url: "http://localhost/api/customers"
  };
  showMessage=(massage)=>{
    document.getElementById("dialogoverlay").style.opacity = 1;
    document.getElementById("dialogoverlay").style.transform = 'scale(1)';
  }
   startLoading=()=>{
    document.getElementById("waiting").style.opacity = 1;
    document.getElementById("waiting").style.transform = 'scale(1)';
  }
  endLoading=()=>{
    document.getElementById("waiting").style.opacity = 0;
    document.getElementById("waiting").style.transform = 'scale(0)';
  }
  getAllCustomer = () => {
    axios
      .get("http://localhost/api/customers")
      .then(response => {
        this.setState({ customers: response.data });
        this.endLoading();
      })
      .catch(error => {
        alert(error);
      });
  };

  onHandleDelete = id => {
    this.startLoading();
    axios
      .delete(`${this.state.url}/${id}`)
      .then(response => {
        this.getAllCustomer();
        this.endLoading();
      })
      .catch(error => {
        console.log('delete error',error);
      });
  };
  onHandleUpdate = obj => {
    this.setState({ customer: obj });
  };
  onFormSubmit = async data => {
    this.startLoading();
     
    if (data.id > 0) {
      this.setState({customer:{}})
      await axios.put(`${this.state.url}/${data.id}`, data).then(response => {
        this.getAllCustomer();
      }).catch(error => {
        console.log("update error", error);
      });
    } else {
      await axios.post(this.state.url, data).then(response => {
        this.getAllCustomer();
      }).catch(error => {
        console.log("create error", error);
      });
    }
    this.endLoading();
  };

  componentDidMount() {
    this.getAllCustomer();
  }

  render() {
    return (
      <div>
      <Loader/>
      <div className="card ">
        <div className="card-header shadow bg-primary text-white text-center mb-2 font-weight-bold">
          My First React App
        </div>
        <div className="card-body">
          <MyForm
            customer={this.state.customer}
            onFormSubmit={this.onFormSubmit}
          />
          <List_Customer
            customers={this.state.customers}
            onHandleDelete={this.onHandleDelete}
            onHandleUpdate={this.onHandleUpdate}
          />
        </div>
      </div>
      </div>
    );
  }
}
export default App;
