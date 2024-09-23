import React from "react";
import customers from "./customers.json";
import CustomerDetails from "./CustomerDetails";
import CustomerForm from "./CustomerForm";

export default class CustomerList extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: customers,
      //state
      selectedCustomer: null,
    };
    this.onCustomerSelect = this.onCustomerSelect.bind(this);
    this.addCustomer = this.addCustomer.bind(this); // Bind addCustomer method
  }

  onCustomerSelect(e, customer) {
    console.log(customer);
    //updating the state
    this.setState({
      selectedCustomer: customer,
    });
  }

  addCustomer(newCustomer){
    const totalCustomers = this.state.customers.length;
    newCustomer.id = totalCustomers+1;
    let newList = [...this.state.customers];
    newList.push(newCustomer);
    this.setState({customers : newList});
    
  }

  render() {
    return (
      <>
        <div className="container">
          <h3>Customer List</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover table-borderless table-primary">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {this.state.customers.map((customer) => (
                  <tr
                    className="table-primary"
                    key={customer.id}
                    onClick={(e) => this.onCustomerSelect(e, customer)}
                  >
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
            <br />
            <br />
            <div className="row">
            <div className="col-md-6"><CustomerForm addCustomer={this.addCustomer}/></div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              {this.state.selectedCustomer ? (
                <CustomerDetails customer={this.state.selectedCustomer} />
              ) : null}
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
