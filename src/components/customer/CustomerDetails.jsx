import React from 'react'

function CustomerDetails({customer}) {
  return (
    <div className="container bg-light rounded p-3">
        <h1>Customer Details</h1>
        <p>ID : {customer.id} </p>
        <p>First Name : {customer.firstName} </p>
        <p>Last Name: {customer.lastName} </p>
        <p>Email: {customer.email} </p>
    </div>
  )
}

export default CustomerDetails