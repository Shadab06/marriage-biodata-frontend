import React from 'react'

import "./styles.css"

const section4 = ({ user }) => {
  return (
    <div className="section-4-container">
        <h1>Location Details</h1>
        <div className="section-4-detils">
            <p>Address</p> <p>Kolkata</p>
            <p>District</p> <p>South</p>
            <p>Pincode</p> <p>700039</p>
            <p>State</p> <p>WB</p>
        </div>
    </div>
  )
}

export default section4