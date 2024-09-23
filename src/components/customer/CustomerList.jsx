import React from "react";
import axios from "axios";  // Import axios for API calls
import CustomerDetails from "./CustomerDetails";
import CustomerForm from "./CustomerForm";

export default class CustomerList extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      selectedCustomer: null,
    };
    this.onCustomerSelect = this.onCustomerSelect.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }

  // Fetch customers from the Spring Boot backend when the component mounts
  componentDidMount() {
    axios
      .get("http://localhost:8080/customermanagementsystem/api/v1/customer/getallcustomers")  // API endpoint for getting all customers
      .then((response) => {
        this.setState({ customers: response.data });  // Update state with fetched data
      })
      .catch((error) => {
        console.error("There was an error fetching the customers!", error);
      });
  }

  onCustomerSelect(e, customer) {
    this.setState({
      selectedCustomer: customer,
    });
  }

  addCustomer(newCustomer) {
    axios
      .post("http://localhost:8080/customermanagementsystem/api/v1/customer/insertcustomer", newCustomer)  // API endpoint for inserting a customer
      .then((response) => {
        const addedCustomer = response.data;
        this.setState({
          customers: [...this.state.customers, addedCustomer],  // Add the new customer to the existing list
        });
      })
      .catch((error) => {
        console.error("There was an error adding the customer!", error);
      });
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
              <div className="col-md-6">
                <CustomerForm addCustomer={this.addCustomer} />
              </div>
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
