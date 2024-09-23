import React from "react";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

//   handleSubmit(event){
    
//   }

  render() {
    return (
      <>
        <h1>Add Customer</h1>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            const newCustomer = this.state;  // Create a new customer object from the form data
            this.props.addCustomer(newCustomer);  // Call the addCustomer function passed as prop
            this.setState({  // Reset form fields after submission
              firstName: "",
              lastName: "",
              email: "",
            });
          }}
        >
          <div className="form-group form-floating mb-2">
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
            <label htmlFor="" className="form-label">
              First name
            </label>
          </div>

          <div className="form-group form-floating mb-2">
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
            <label htmlFor="" className="form-label">
              Last name
            </label>
          </div>

          <div className="form-group form-floating mb-2">
            <input
              type="email"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <label htmlFor="" className="form-label">
              Email
            </label>
          </div>

          <button>Submit</button>
        </form>
      </>
    );
  }
}
export default CustomerForm;
